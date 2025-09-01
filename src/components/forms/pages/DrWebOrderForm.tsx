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
  term: z.string(),
  seats: z.preprocess((v) => Number(v), z.number().positive("Укажите количество устройств")),
  central_admin: z.string(),
  types: z.array(z.string()).optional(),
  platforms: z.array(z.string()).optional(),
  message: z.string().optional(),
});

export default function DrWebOrderForm() {
  return (
    <ValidatedForm schema={schema} formTitle="Заказать антивирус (Dr.Web)">
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
              options={[{ label: "B2B (бизнес)", value: "B2B" }, { label: "B2G (госструктуры)", value: "B2G" }]}
            />
            <Select
              label="Срок лицензии"
              registration={f.register("term")}
              error={f.formState.errors.term?.message as string}
              options={[{ label: "1 год", value: "1" }, { label: "2 года", value: "2" }, { label: "3 года", value: "3" }]}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <TextInput label="Количество устройств" placeholder="Например, 150" type="number" registration={f.register("seats") } error={f.formState.errors.seats?.message as string} />
            <Select
              label="Централизованное администрирование"
              registration={f.register("central_admin")}
              error={f.formState.errors.central_admin?.message as string}
              options={[{ label: "Требуется", value: "yes" }, { label: "Не требуется", value: "no" }]}
            />
          </div>
          <CheckboxGroup
            label="Типы защиты"
            name="types"
            options={["Рабочие станции", "Серверы", "Почтовые серверы", "Шлюзы", "Мобильные устройства", "Файловые серверы"]}
          />
          <CheckboxGroup
            label="Платформы"
            name="platforms"
            options={["Windows", "Linux", "macOS", "Android"]}
          />
          <Textarea label="Комментарий" placeholder="Дополнительные требования, интеграция, сроки и т.д." registration={f.register("message")} error={f.formState.errors.message?.message as string} />
        </>
      )}
    </ValidatedForm>
  );
}
