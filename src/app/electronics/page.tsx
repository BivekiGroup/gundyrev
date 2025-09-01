import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Электроника — Поставки B2B/B2G | ГУНДЫРЕВ",
  description:
    "Поставки оборудования для бизнеса и госзаказчиков: компьютеры, серверы, сети, системы безопасности, периферия и спецэлектроника. Опыт госконтрактов, сервис и сопровождение.",
};

import ElectronicsPriceForm from "@/components/forms/pages/ElectronicsPriceForm";

export default function ElectronicsPage() {
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
            <span className="text-slate-300">Электроника</span>
          </div>
          <h1 className="text-3xl sm:text-5xl/tight font-semibold tracking-[-0.02em] text-white">
            Поставки оборудования для бизнеса и госзаказчиков
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-base sm:text-lg">
            Компьютеры, серверы, сетевое и периферийное оборудование, системы безопасности и
            специализированная электроника. Работаем в рамках 44‑ФЗ/223‑ФЗ и корпоративных закупок.
            Обеспечиваем сервисное сопровождение и гарантийную поддержку.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#price-form"
              className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-3 transition-colors"
            >
              Запросить прайс
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

      {/* CATALOG */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Ассортимент</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Компьютеры и серверы", desc: "Рабочие станции, ноутбуки, серверы, СХД." },
              { title: "Сети", desc: "Коммутаторы, маршрутизаторы, Wi‑Fi, кабельная инфраструктура." },
              { title: "Системы безопасности", desc: "Видеонаблюдение, СКУД, охранные комплексы." },
              { title: "Периферия и комплектующие", desc: "Мониторы, принтеры, СБИС, расходные материалы." },
              { title: "Спецэлектроника", desc: "Промышленное и защищённое оборудование." },
              { title: "ПО и лицензии", desc: "ОС, офисные пакеты, антивирусы, CAD/CAM." },
              { title: "Готовые решения", desc: "Кабинеты, переговорные, серверные под ключ." },
              { title: "Сервис", desc: "Монтаж, пусконаладка, обслуживание и SLA." },
            ].map((s) => (
              <div key={s.title} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <h3 className="text-lg font-medium text-slate-100">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Условия работы</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                k: "B2G",
                title: "Тендеры и госзакупки",
                desc: "Работа по 44‑ФЗ/223‑ФЗ, полный комплект документов.",
              },
              {
                k: "B2B",
                title: "Корпоративные поставки",
                desc: "Гибкие условия, отсрочка, сертификация и гарантия.",
              },
              {
                k: "SLA",
                title: "Сервис и сопровождение",
                desc: "Монтаж, пусконаладка, гарантийный и постгарантийный сервис.",
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

      {/* ADVANTAGES */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Преимущества</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { k: "Поставщики", title: "Надёжные поставщики", desc: "Прямые каналы и авторизации." },
              { k: "Опыт", title: "Опыт госконтрактов", desc: "Сроки, отчётность и контроль качества." },
              { k: "Сервис", title: "Сервисное сопровождение", desc: "SLA, замена, склад запчастей." },
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

      {/* PRICE REQUEST FORM */}
      <section id="price-form" className="mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Запросить прайс</h2>
              <p className="mt-3 text-slate-400 max-w-prose">
                Укажите категории и объёмы — подготовим коммерческое предложение с вариантами
                поставки и сроками. Возможна поставка под ключ с монтажом и сервисом.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <li className="rounded-lg ring-1 ring-white/10 p-3">44‑ФЗ/223‑ФЗ</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">Отсрочка платежа</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">Монтаж и пусконаладка</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">Гарантия и SLA</li>
              </ul>
            </div>

            <ElectronicsPriceForm />
          </div>
        </div>
      </section>
    </>
  );
}
