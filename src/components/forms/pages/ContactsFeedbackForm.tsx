"use client";

import ValidatedForm from "@/components/forms/ValidatedForm";
import TextInput from "@/components/forms/fields/TextInput";
import Textarea from "@/components/forms/fields/Textarea";
import PhoneInput from "@/components/forms/fields/PhoneInput";
import { z } from "zod";

const phone = z
  .string()
  .optional()
  .transform((v) => (v ? v : ""))
  .refine((v) => v === "" || v.replace(/\D/g, "").length >= 11, { message: "Введите корректный телефон" });

const schema = z.object({
  name: z.string().min(2, "Укажите имя"),
  org: z.string().optional(),
  email: z.string().email("Некорректный e‑mail"),
  phone,
  message: z.string().min(5, "Введите сообщение"),
});

export default function ContactsFeedbackForm() {
  return (
    <ValidatedForm schema={schema} formTitle="Форма обратной связи (Контакты)">
      {(f) => (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <TextInput label="Имя" placeholder="Иван" registration={f.register("name")} error={f.formState.errors.name?.message as string} />
            <TextInput label="Компания" placeholder="ООО «Пример»" registration={f.register("org")} error={f.formState.errors.org?.message as string} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <TextInput label="E‑mail" placeholder="name@company.ru" type="email" registration={f.register("email")} error={f.formState.errors.email?.message as string} />
            <PhoneInput label="Телефон" name="phone" error={f.formState.errors.phone?.message as string} />
          </div>
          <Textarea label="Сообщение" placeholder="Кратко опишите вопрос или задачу" registration={f.register("message")} error={f.formState.errors.message?.message as string} />
        </>
      )}
    </ValidatedForm>
  );
}
