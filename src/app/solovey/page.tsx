import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Соловей — Онлайн‑звонки для организаций | ГУНДЫРЕВ",
  description:
    "Безопасная и надёжная система онлайн‑звонков для организаций: видеоконференции, запись и архивирование, интеграции с внутренними системами. Сейчас в активной разработке.",
};

import SoloveyDemoForm from "@/components/forms/pages/SoloveyDemoForm";

export default function SoloveyPage() {
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
            <span className="text-slate-300">Соловей</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full ring-1 ring-amber-300/30 bg-amber-400/10 text-amber-300 px-3 py-1 text-xs mb-4">
            Сервис в разработке • Early access
          </div>
          <h1 className="text-3xl sm:text-5xl/tight font-semibold tracking-[-0.02em] text-white">
            Соловей — безопасная и надёжная система онлайн‑звонков для организаций
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-base sm:text-lg">
            Видеозвонки и конференции, запись и архивирование разговоров, интеграции с
            внутренними системами. Проект ориентирован на B2G/B2B‑сценарии и работу в
            защищённых контурах. Сейчас продукт проходит активную разработку и пилоты.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#demo-form"
              className="inline-flex items-center rounded-md bg-cyan-500/70 hover:bg-cyan-500 text-slate-950 font-medium px-5 py-3 transition-colors"
            >
              Попробовать демо
            </a>
            <span className="text-xs text-slate-400 self-center">Доступ к демо по заявке (ограниченно)</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Функции</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Видеозвонки и конференции", desc: "Групповые созвоны, демонстрация экрана, чат, роли участников." },
              { title: "Запись и архивирование", desc: "Запись встреч, хранение в защищённом архиве, экспорт и поиск." },
              { title: "Интеграции", desc: "Внутренние системы: SSO/LDAP/AD, календарь, CRM/СЭД, API." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <h3 className="text-lg font-medium text-slate-100">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Для кого</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Госструктуры", desc: "Процессы в рамках регуляторики, изолированные контуры." },
              { title: "Учебные заведения", desc: "Занятия и вебинары, расписания, доступ по ролям." },
              { title: "Бизнес", desc: "Совещания и поддержка клиентов, аудио/видео‑архив." },
            ].map((a) => (
              <div key={a.title} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <h3 className="text-lg font-medium text-slate-100">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Преимущества</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { k: "Сделано в РФ", title: "Российский продукт", desc: "Локальная поддержка и развитие." },
              { k: "Безопасность", title: "Защита передачи данных", desc: "Шифрование, роли, журналы и контроль доступа." },
            ].map((p) => (
              <div key={p.title} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <div className="text-xs uppercase tracking-wider text-cyan-300">{p.k}</div>
                <h3 className="mt-2 text-lg font-medium text-slate-100">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO FORM (EARLY ACCESS) */}
      <section id="demo-form" className="mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl ring-1 ring-amber-300/20 bg-amber-400/5 p-6 md:p-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-400/15 ring-1 ring-amber-300/30 px-2 py-0.5 text-[11px] text-amber-300">
                Beta
              </span>
              <div className="text-sm text-amber-200/80">Ранний доступ по заявке</div>
            </div>

            <div className="mt-4 grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">Попробовать демо</h2>
                <p className="mt-3 text-slate-300 max-w-prose">
                  Оставьте заявку — предоставим доступ к демо‑стенду и договоримся о пилоте.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                  <li className="rounded-lg ring-1 ring-white/10 p-3">Видеозвонки/конференции</li>
                  <li className="rounded-lg ring-1 ring-white/10 p-3">Запись и архив</li>
                  <li className="rounded-lg ring-1 ring-white/10 p-3">SSO/LDAP/AD</li>
                  <li className="rounded-lg ring-1 ring-white/10 p-3">API интеграции</li>
                </ul>
              </div>

              <SoloveyDemoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
