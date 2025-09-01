"use client";

import ValidatedForm from "@/components/forms/ValidatedForm";
import TextInput from "@/components/forms/fields/TextInput";
import Textarea from "@/components/forms/fields/Textarea";
import PhoneInput from "@/components/forms/fields/PhoneInput";
import { z } from "zod";

const phoneSchema = z
  .string()
  .optional()
  .transform((v) => (v ? v : ""))
  .refine((v) => v === "" || v.replace(/\D/g, "").length >= 11, {
    message: "Введите корректный телефон",
  });

const schema = z.object({
  name: z.string().min(2, "Укажите имя и фамилию"),
  org: z.string().optional(),
  email: z.string().email("Некорректный e‑mail"),
  phone: phoneSchema,
  message: z.string().optional(),
});

export default function HomeLeadForm() {
  return (
    <ValidatedForm schema={schema} formTitle="Заявка с главной">
      {(f) => (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <TextInput
              label="Имя и фамилия"
              placeholder="Иван Иванов"
              registration={f.register("name")}
              error={f.formState.errors.name?.message as string}
            />
            <TextInput
              label="Компания/организация"
              placeholder="ООО «Пример»"
              registration={f.register("org")}
              error={f.formState.errors.org?.message as string}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <TextInput
              label="E‑mail"
              placeholder="name@company.ru"
              type="email"
              registration={f.register("email")}
              error={f.formState.errors.email?.message as string}
            />
            <PhoneInput label="Телефон" name="phone" error={f.formState.errors.phone?.message as string} />
          </div>

          <Textarea
            label="Задача/комментарий"
            placeholder="Коротко опишите задачу или интересующий продукт"
            registration={f.register("message")}
            error={f.formState.errors.message?.message as string}
          />
        </>
      )}
    </ValidatedForm>
  );
}
