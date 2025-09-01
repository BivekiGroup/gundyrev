"use client";

import ValidatedForm from "@/components/forms/ValidatedForm";
import TextInput from "@/components/forms/fields/TextInput";
import Select from "@/components/forms/fields/Select";
import Textarea from "@/components/forms/fields/Textarea";
import PhoneInput from "@/components/forms/fields/PhoneInput";
import { z } from "zod";

const phone = z
  .string()
  .optional()
  .transform((v) => (v ? v : ""))
  .refine((v) => v === "" || v.replace(/\D/g, "").length >= 11, { message: "Введите корректный телефон" });

const schema = z.object({
  org: z.string().min(2, "Укажите организацию"),
  name: z.string().min(2, "Укажите контактное лицо"),
  email: z.string().email("Некорректный e‑mail"),
  phone,
  sector: z.string(),
  scenarios: z.string(),
  message: z.string().optional(),
});

export default function SoloveyDemoForm() {
  return (
    <ValidatedForm schema={schema} formTitle="Запрос демо (Соловей)">
      {(f) => (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <TextInput label="Организация" placeholder="Наименование" registration={f.register("org")} error={f.formState.errors.org?.message as string} />
            <TextInput label="Контактное лицо" placeholder="ФИО" registration={f.register("name")} error={f.formState.errors.name?.message as string} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <TextInput label="E‑mail" placeholder="name@company.ru" type="email" registration={f.register("email")} error={f.formState.errors.email?.message as string} />
            <PhoneInput label="Телефон" name="phone" error={f.formState.errors.phone?.message as string} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Select
              label="Сектор"
              registration={f.register("sector")}
              error={f.formState.errors.sector?.message as string}
              options={[{ label: "B2G (госструктуры)", value: "B2G" }, { label: "B2B (бизнес)", value: "B2B" }, { label: "Образование", value: "edu" }]}
            />
            <Select
              label="Сценарии"
              registration={f.register("scenarios")}
              error={f.formState.errors.scenarios?.message as string}
              options={[
                { label: "Совещания", value: "meetings" },
                { label: "Обучение/вебинары", value: "edu" },
                { label: "Поддержка/контакт‑центр", value: "support" },
                { label: "Другое", value: "other" },
              ]}
            />
          </div>
          <Textarea label="Комментарий" placeholder="Требования к безопасности, интеграции, сроки, число пользователей" registration={f.register("message")} error={f.formState.errors.message?.message as string} />
        </>
      )}
    </ValidatedForm>
  );
}
