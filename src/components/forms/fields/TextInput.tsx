"use client";

import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: string;
  type?: string;
};

export default function TextInput({ label, placeholder, registration, error, type = "text" }: Props) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm text-slate-300">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`h-11 rounded-md bg-slate-900/60 ring-1 px-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-cyan-400/40 ${error ? "ring-rose-500/50" : "ring-white/10"}`}
        {...registration}
      />
      {error && <span className="text-xs text-rose-400">{error}</span>}
    </div>
  );
}
