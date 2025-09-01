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
  sector: z.string(),
  procurement: z.string(),
  categories: z.array(z.string()).optional(),
  region: z.string().optional(),
  timeline: z.string(),
  message: z.string().optional(),
});

export default function ElectronicsPriceForm() {
  return (
    <ValidatedForm schema={schema} formTitle="Запрос прайса (Электроника)">
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
              options={[{ label: "B2G (госструктуры)", value: "B2G" }, { label: "B2B (бизнес)", value: "B2B" }]}
            />
            <Select
              label="Метод закупки"
              registration={f.register("procurement")}
              error={f.formState.errors.procurement?.message as string}
              options={[{ label: "44‑ФЗ", value: "44" }, { label: "223‑ФЗ", value: "223" }, { label: "Коммерческая", value: "b2b" }]}
            />
          </div>
          <CheckboxGroup
            label="Категории"
            name="categories"
            options={["ПК/ноутбуки", "Серверы/СХД", "Сетевое", "Видеонаблюдение", "СКУД", "Периферия", "ПО/лицензии", "Спецэлектроника"]}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <TextInput label="Регион поставки" placeholder="Город/регион" registration={f.register("region")} error={f.formState.errors.region?.message as string}
            />
            <Select
              label="Срок поставки"
              registration={f.register("timeline")}
              error={f.formState.errors.timeline?.message as string}
              options={[
                { label: "До 2 недель", value: "<2w" },
                { label: "2–4 недели", value: "2-4w" },
                { label: "1–2 месяца", value: "1-2m" },
                { label: "2+ месяца", value: ">2m" },
              ]}
            />
          </div>
          <Textarea label="Комментарий" placeholder="Модели/требования, объёмы, сроки, специфика (монтаж/сервис/NDA)" registration={f.register("message")} error={f.formState.errors.message?.message as string} />
        </>
      )}
    </ValidatedForm>
  );
}
