"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useState } from "react";
import { FieldValues, FormProvider, Resolver, useForm } from "react-hook-form";
import { ZodType } from "zod";
import { toast } from "sonner";

type Props = {
  schema: ZodType<unknown>;
  defaultValues?: Record<string, unknown>;
  formTitle: string;
  children: (ctx: ReturnType<typeof useForm>) => ReactNode;
};

export default function ValidatedForm({ schema, defaultValues, formTitle, children }: Props) {
  // zodResolver typings are stricter than our generic form shapes; cast to unknown to satisfy TS
  const methods = useForm({
    resolver: zodResolver(schema as never) as unknown as Resolver<Record<string, unknown>>,
    defaultValues,
  });
  const { handleSubmit } = methods;
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (values: FieldValues) => {
    try {
      setSubmitting(true);
      setError(null);
      const formData = new FormData();
      formData.append("form", formTitle);
      Object.entries(values).forEach(([key, value]) => {
        if (value === undefined || value === null) return;
        if (Array.isArray(value)) {
          value.forEach((v) => formData.append(key, String(v)));
        } else {
          formData.append(key, String(value));
        }
      });

      const res = await fetch(`/api/submit`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Заявка отправлена", { description: "Мы свяжемся с вами в ближайшее время" });
        methods.reset();
      } else {
        const text = await res.text();
        throw new Error(text || "Не удалось отправить форму");
      }
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Не удалось отправить форму";
      setError(message);
      toast.error("Ошибка", { description: message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-6 grid gap-4">
      <FormProvider {...methods}>{children(methods)}</FormProvider>
      <div className="flex items-center justify-between gap-3 mt-1">
        {error ? <div className="text-xs text-rose-400">{error}</div> : (
          <div className="text-xs text-slate-500">Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.</div>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-medium px-5 py-2.5 transition-colors"
        >
          {submitting ? "Отправка…" : "Отправить"}
        </button>
      </div>
    </form>
  );
}
