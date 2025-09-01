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
  audit_type: z.string(),
  scope: z.string(),
  message: z.string().optional(),
});

export default function SecureTAuditForm() {
  return (
    <ValidatedForm schema={schema} formTitle="Запрос аудита (Secure‑T)">
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
              label="Тип аудита"
              registration={f.register("audit_type")}
              error={f.formState.errors.audit_type?.message as string}
              options={[
                { label: "Общий аудит ИБ", value: "Общий аудит ИБ" },
                { label: "Оценка соответствия (ФСТЭК/ФСБ)", value: "Оценка соответствия (ФСТЭК/ФСБ)" },
                { label: "Тестирование уязвимостей", value: "Тестирование уязвимостей" },
                { label: "Аудит процессов и регламентов", value: "Аудит процессов и регламентов" },
              ]}
            />
            <Select
              label="Масштаб"
              registration={f.register("scope")}
              error={f.formState.errors.scope?.message as string}
              options={[
                { label: "До 100 сотрудников", value: "До 100 сотрудников" },
                { label: "100–500 сотрудников", value: "100–500 сотрудников" },
                { label: "500+ сотрудников", value: "500+ сотрудников" },
              ]}
            />
          </div>
          <Textarea label="Комментарий / контур" placeholder="Кратко опишите контур (ИС, сети, ISPDн/GIS) и задачи" registration={f.register("message")} error={f.formState.errors.message?.message as string} />
        </>
      )}
    </ValidatedForm>
  );
}
