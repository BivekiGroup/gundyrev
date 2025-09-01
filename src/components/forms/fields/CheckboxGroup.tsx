"use client";

import { Controller, useFormContext } from "react-hook-form";

type Props = { label: string; name: string; options: string[] };

export default function CheckboxGroup({ label, name, options }: Props) {
  const { control } = useFormContext();
  return (
    <div className="grid gap-1.5">
      <label className="text-sm text-slate-300">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-slate-300">
            {options.map((opt) => {
              const current: string[] = Array.isArray(field.value) ? (field.value as string[]) : [];
              const checked = current.includes(opt);
              return (
                <label key={opt} className="inline-flex items-center gap-2 rounded-md bg-slate-900/60 ring-1 ring-white/10 px-3 py-2">
                  <input
                    type="checkbox"
                    className="accent-cyan-500"
                    checked={checked}
                    onChange={(e) => {
                      if (e.target.checked) field.onChange([...(current || []), opt]);
                      else field.onChange((current || []).filter((v) => v !== opt));
                    }}
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>
        )}
      />
    </div>
  );
}
