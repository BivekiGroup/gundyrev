import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dr.Web — Антивирусная защита | ГУНДЫРЕВ",
  description:
    "Лицензии Dr.Web для госсектора и бизнеса, централизованное администрирование, техническая поддержка и сопровождение. Соответствие госстандартам, гибкие условия закупки.",
};

import DrWebOrderForm from "@/components/forms/pages/DrWebOrderForm";

export default function DrWebPage() {
  return (
    <>
      {/* INTRO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-white">Главная</Link>
            <span className="opacity-50">/</span>
            <span className="text-slate-300">Dr.Web</span>
          </div>
          <h1 className="text-3xl sm:text-5xl/tight font-semibold tracking-[-0.02em] text-white">
            Dr.Web — антивирусная защита для организаций
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-base sm:text-lg">
            Партнёрская поставка и внедрение Dr.Web для госсектора и бизнеса. Обеспечиваем
            лицензирование, централизованное администрирование, обучение и поддержку в рамках SLA.
            Решения соответствуют требованиям российских стандартов и применяются в закрытых контурах.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#order-form"
              className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-3 transition-colors"
            >
              Заказать антивирус
            </a>
            <Link
              href="/#contact-form"
              className="inline-flex items-center rounded-md ring-1 ring-white/20 hover:bg-white/5 text-white px-5 py-3 transition-colors"
            >
              Консультация
            </Link>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Что предлагаем</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Лицензии",
                desc: "Для госсектора (B2G) и бизнеса (B2B). Помощь в подборе и закупке.",
              },
              {
                title: "Централизованное управление",
                desc: "Развёртывание и настройка Dr.Web Enterprise Security Suite.",
              },
              {
                title: "Поддержка и сопровождение",
                desc: "SLA, обновления, мониторинг инцидентов и отчётность.",
              },
              {
                title: "Обучение",
                desc: "Быстрый онбординг администраторов и пользователей.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <h3 className="text-lg font-medium text-slate-100">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Преимущества</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                k: "Соответствие",
                title: "Госстандарты",
                desc: "Применимость в информационных системах c требованиями регуляторов.",
              },
              {
                k: "Российский",
                title: "Проверенный продукт",
                desc: "Надёжность и актуальные базы для защиты инфраструктуры.",
              },
              {
                k: "Условия",
                title: "Гибкие закупки",
                desc: "B2B и B2G, в т.ч. в рамках 44‑ФЗ/223‑ФЗ.",
              },
            ].map((a) => (
              <div key={a.title} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <div className="text-xs uppercase tracking-wider text-cyan-300">{a.k}</div>
                <h3 className="mt-2 text-lg font-medium text-slate-100">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order-form" className="mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Заказать антивирус</h2>
              <p className="mt-3 text-slate-400 max-w-prose">
                Укажите требуемые модули и количество устройств — подготовим коммерческое
                предложение и план внедрения.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <li className="rounded-lg ring-1 ring-white/10 p-3">Enterprise Security Suite</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">Рабочие станции / Серверы</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">Почтовые/шлюзовые решения</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">SLA поддержка</li>
              </ul>
            </div>

            <DrWebOrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
