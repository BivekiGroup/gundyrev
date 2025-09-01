import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Secure‑T — Комплексная кибербезопасность | ГУНДЫРЕВ",
  description:
    "Аудит ИБ, разработка и внедрение комплексной защиты, ТЗИ (сертифицированные решения), обучение. Соответствие ФСТЭК/ФСБ и интеграция с существующими системами.",
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
            Комплексные решения по кибербезопасности для госструктур и бизнеса
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-base sm:text-lg">
            Проводим аудит ИБ и рисков, проектируем и внедряем комплексную защиту, используем
            сертифицированные средства ТЗИ. Обучаем персонал и сопровождаем на всех этапах, соблюдая
            требования регуляторов.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#audit-form"
              className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-3 transition-colors"
            >
              Запросить аудит
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

      {/* SERVICES */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Основные услуги</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Аудит ИБ и рисков",
                desc: "Инвентаризация активов, угроз и уязвимостей. Приоритеты и план работ.",
              },
              {
                title: "Комплексная защита",
                desc: "Проектирование, внедрение, регламенты, обучение. End‑to‑end подход.",
              },
              {
                title: "Техническая защита информации",
                desc: "Сертифицированные решения ФСТЭК/ФСБ для закрытых контуров.",
              },
              {
                title: "Обучение персонала",
                desc: "Тренинги и курсы по безопасности для ИТ и сотрудников.",
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

      {/* WHY US */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Почему Secure‑T от ГУНДЫРЕВ</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                k: "ФСТЭК/ФСБ",
                title: "Соответствие требованиям",
                desc: "Проекты и документация в соответствии с регуляторикой.",
              },
              {
                k: "Опыт",
                title: "Проекты в госсекторе",
                desc: "Понимание закупочных процедур и специфики инфраструктуры.",
              },
              {
                k: "Интеграция",
                title: "С существующими системами",
                desc: "Аккуратное внедрение, минимизация простоя и рисков.",
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

      {/* CASE */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:p-8">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Кейс: внедрение защиты в ведомстве</h2>
              <a href="#audit-form" className="text-cyan-400 hover:text-cyan-300 text-sm">Запросить аудит</a>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl ring-1 ring-white/10 p-5 bg-white/[0.02]">
                <div className="text-slate-400 text-sm">Сроки</div>
                <div className="text-2xl font-semibold text-white mt-1">6 недель</div>
                <div className="text-slate-400 text-sm mt-2">Аудит, проектирование, внедрение</div>
              </div>
              <div className="rounded-xl ring-1 ring-white/10 p-5 bg-white/[0.02]">
                <div className="text-slate-400 text-sm">Результат</div>
                <div className="text-2xl font-semibold text-white mt-1">−70%</div>
                <div className="text-slate-400 text-sm mt-2">Снижение критичных рисков</div>
              </div>
              <div className="rounded-xl ring-1 ring-white/10 p-5 bg-white/[0.02]">
                <div className="text-slate-400 text-sm">Контур</div>
                <div className="text-2xl font-semibold text-white mt-1">GIS + ISPDн</div>
                <div className="text-slate-400 text-sm mt-2">Сертифицированные средства защиты</div>
              </div>
            </div>
            <p className="mt-6 text-slate-300 max-w-3xl">
              Проведён аудит, составлена модель угроз, внедрены средства защиты уровня
              сети и рабочих станций, настроено логирование и мониторинг. Подготовлен пакет
              документов для регуляторов.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIT FORM */}
      <section id="audit-form" className="mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Запросить аудит</h2>
              <p className="mt-3 text-slate-400 max-w-prose">
                Заполните форму — оценим текущий уровень защищённости, подготовим план
                мер и ориентировочные сроки/бюджет.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <li className="rounded-lg ring-1 ring-white/10 p-3">Он‑сайт/удалённо</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">От 10 рабочих дней</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">ФСТЭК/ФСБ</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">Конфиденциальность</li>
              </ul>
            </div>

            <SecureTAuditForm />
          </div>
        </div>
      </section>
    </>
  );
}
