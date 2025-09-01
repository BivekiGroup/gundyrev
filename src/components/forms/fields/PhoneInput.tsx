"use client";

import { IMaskInput } from "react-imask";
import { Controller, useFormContext } from "react-hook-form";

type Props = { label: string; name: string; error?: string };

export default function PhoneInput({ label, name, error }: Props) {
  const { control } = useFormContext();
  return (
    <div className="grid gap-1.5">
      <label className="text-sm text-slate-300">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <IMaskInput
            mask="+{7} (000) 000-00-00"
            value={field.value || ""}
            onAccept={(val: string) => field.onChange(val)}
            className={`h-11 rounded-md bg-slate-900/60 ring-1 px-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-cyan-400/40 ${error ? "ring-rose-500/50" : "ring-white/10"}`}
            placeholder="+7 (___) ___-__-__"
          />
        )}
      />
      {error && <span className="text-xs text-rose-400">{error}</span>}
    </div>
  );
}
