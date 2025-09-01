"use client";

import { UseFormRegisterReturn } from "react-hook-form";

type Option = { label: string; value: string };

type Props = {
  label: string;
  registration: UseFormRegisterReturn;
  error?: string;
  options: Option[];
};

export default function Select({ label, registration, error, options }: Props) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm text-slate-300">{label}</label>
      <select
        className={`h-11 rounded-md bg-slate-900/60 ring-1 px-3 text-slate-100 focus:outline-none focus:ring-cyan-400/40 ${error ? "ring-rose-500/50" : "ring-white/10"}`}
        {...registration}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-rose-400">{error}</span>}
    </div>
  );
}
