"use client";

import ValidatedForm from "@/components/forms/ValidatedForm";
import TextInput from "@/components/forms/fields/TextInput";
import Select from "@/components/forms/fields/Select";
import Textarea from "@/components/forms/fields/Textarea";
import PhoneInput from "@/components/forms/fields/PhoneInput";
import CheckboxGroup from "@/components/forms/fields/CheckboxGroup";
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
  project_type: z.string(),
  timeline: z.string(),
  integrations: z.array(z.string()).optional(),
  message: z.string().optional(),
});

export default function WebRequestForm() {
  return (
    <ValidatedForm schema={schema} formTitle="Заявка на веб‑разработку">
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
              label="Тип проекта"
              registration={f.register("project_type")}
              error={f.formState.errors.project_type?.message as string}
              options={[
                { label: "Корпоративный сайт", value: "site" },
                { label: "Портал", value: "portal" },
                { label: "Личный кабинет", value: "lk" },
                { label: "CRM/внутренний сервис", value: "crm" },
              ]}
            />
            <Select
              label="Сроки"
              registration={f.register("timeline")}
              error={f.formState.errors.timeline?.message as string}
              options={[
                { label: "До 1 месяца", value: "<1" },
                { label: "1–3 месяца", value: "1-3" },
                { label: "3–6 месяцев", value: "3-6" },
                { label: "6+ месяцев", value: ">6" },
              ]}
            />
          </div>
          <CheckboxGroup
            label="Интеграции"
            name="integrations"
            options={["Госуслуги/ЕСИА", "СМЭВ", "1С", "СЭД/ECM", "SSO/LDAP/AD", "Платёжные системы"]}
          />
          <Textarea label="Краткое описание" placeholder="Опишите цели, аудиторию, разделы, требования к безопасности и отчётности" registration={f.register("message")} error={f.formState.errors.message?.message as string} />
        </>
      )}
    </ValidatedForm>
  );
}
