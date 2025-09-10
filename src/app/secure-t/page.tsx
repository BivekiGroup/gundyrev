import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Secure‑T — Платформа обучения и защиты сотрудников | ГУНДЫРЕВ",
  description:
    "Secure‑T обучает сотрудников ИБ и проверяет знания через симуляции атак: фишинг, мошенничество, кража данных и подозрительные обращения. Демо на 2–3 недели.",
};

import SecureTAuditForm from "@/components/forms/pages/SecureTAuditForm";

export default function SecureTPage() {
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
            <span className="text-slate-300">Secure‑T</span>
          </div>
          <h1 className="text-3xl sm:text-5xl/tight font-semibold tracking-[-0.02em] text-white">
            Secure‑T — платформа для обучения и проверки знаний по ИБ
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-base sm:text-lg">
            Обучает сотрудников и проверяет готовность к социальным атакам с помощью симуляций:
            фишинг, мошенничество, кража персональных данных, подозрительные звонки и письма.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#audit-form"
              className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-3 transition-colors"
            >
              Запросить демо и презентацию
            </a>
            <Link
              href="/#contact-form"
              className="inline-flex items-center rounded-md ring-1 ring-white/20 hover:bg-white/5 text-white px-5 py-3 transition-colors"
            >
              Общая консультация
            </Link>
          </div>
        </div>
      </section>

      {/* PROTECTION SCOPE */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">От чего защищает</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Фишинг", "Мошенничество", "Кража персональных данных", "Подозрительные звонки и письма"].map((item) => (
              <div key={item} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <h3 className="text-lg font-medium text-slate-100">{item}</h3>
                <p className="mt-2 text-sm text-slate-400">Практические сценарии и тесты устойчивости.</p>
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
              { k: "110+ тем", title: "Широкая база обучения", desc: "Более 110 тем, включая 55 по безопасной разработке ПО." },
              { k: "80+ шаблонов", title: "Имитация фишинга", desc: "Готовые сценарии для регулярных кампаний и проверки." },
              { k: "Гибкость", title: "Адаптация под компанию", desc: "Материалы настраиваются под стиль и процессы организации." },
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

      {/* CAPABILITIES */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Возможности</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl ring-1 ring-white/10 p-5 bg-white/[0.02]">
              <h3 className="text-lg font-medium text-slate-100">Редактирование готовых материалов</h3>
              <p className="mt-2 text-sm text-slate-400">
                Настройка обучающих модулей под корпоративный стиль и процессы
                (формулировки, визуальный стиль, терминология, примеры из практики).
              </p>
            </div>
            <div className="rounded-xl ring-1 ring-white/10 p-5 bg-white/[0.02]">
              <h3 className="text-lg font-medium text-slate-100">Создание собственных материалов</h3>
              <p className="mt-2 text-sm text-slate-400">
                Полноценный редактор для добавления своих курсов и проверок,
                например по технике безопасности на производстве.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:p-8">
            <h3 className="text-lg font-medium text-slate-100">Защита за пределами офиса</h3>
            <p className="mt-2 text-slate-300 max-w-3xl">
              Secure‑T помогает снижать риски и вне корпоративного периметра: формирует
              устойчивые привычки безопасного поведения в реальной жизни.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Клиенты</h2>
          <p className="mt-3 text-slate-400 max-w-prose">
            Среди пользователей платформы: РЖД, Аэрофлот, СберЛигал, СберКорус, ООО СТК (дочерняя компания Сбера),
            Додо Пицца, ОТП Банк, Zenden, Эконика, НПО «Алмаз», а также госструктуры, НПФ и страховые компании.
          </p>
        </div>
      </section>

      {/* DEMO FORM */}
      <section id="audit-form" className="mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Попробуйте Secure‑T</h2>
              <p className="mt-3 text-slate-400 max-w-prose">
                Оставьте заявку — предоставим демо‑доступ и презентацию платформы.
                Демо на 2–3 недели для 5–15 пользователей (можем продлить при необходимости).
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <li className="rounded-lg ring-1 ring-white/10 p-3">Демо 2–3 недели</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">5–15 пользователей</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">Презентация и Q&A</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">Помощь с пилотом</li>
              </ul>
            </div>

            <SecureTAuditForm />
          </div>
        </div>
      </section>
    </>
  );
}
