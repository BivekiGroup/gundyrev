import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О компании | ГУНДЫРЕВ",
  description:
    "История компании ГУНДЫРЕВ, направления деятельности, партнёры и сертификаты, ценности и команда. Фото и видео о проектах и культуре.",
};

export default function AboutPage() {
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
            <span className="text-slate-300">О компании</span>
          </div>
          <h1 className="text-3xl sm:text-5xl/tight font-semibold tracking-[-0.02em] text-white">
            О компании ГУНДЫРЕВ
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-base sm:text-lg">
            Мы создаём и внедряем комплексные ИТ‑решения для госсектора и бизнеса: от кибербезопасности и лицензий до веб‑разработки и поставок техники. Наш приоритет — гарантировать защиту, стабильность и соблюдение всех требований заказчиков.
          </p>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">История</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
              <div className="text-xs text-slate-400">Август 2024 года</div>
              <h3 className="mt-1 text-slate-100 font-medium">Открытие компании</h3>
              <p className="mt-2 text-sm text-slate-400">Начало деятельности по госзаказу.</p>
            </div>
            <div className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
              <div className="text-xs text-slate-400">Март 2025 года</div>
              <h3 className="mt-1 text-slate-100 font-medium">Продажа партнёрского ПО</h3>
              <p className="mt-2 text-sm text-slate-400">Запуск направления по продаже партнёрского программного обеспечения.</p>
            </div>
            <div className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
              <div className="text-xs text-slate-400">Сентябрь 2025 года</div>
              <h3 className="mt-1 text-slate-100 font-medium">Разработка собственного ПО</h3>
              <p className="mt-2 text-sm text-slate-400">Открытие направления разработки собственного ПО и веб‑разработки под заказ.</p>
            </div>
          </div>
      </div>
    </section>

      {/* DIRECTIONS */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Основные направления</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Кибербезопасность", desc: "Аудит, внедрение, ТЗИ, обучение." },
              { title: "Антивирусная защита", desc: "Dr.Web — лицензии и поддержка." },
              { title: "Веб‑разработка", desc: "Сайты, порталы, ЛК, CRM." },
              { title: "Онлайн‑звонки", desc: "Сервис Соловей (в разработке)." },
              { title: "Поставки электроники", desc: "B2B/B2G, 44‑ФЗ/223‑ФЗ." },
              { title: "Интеграции", desc: "Госуслуги/ЕСИА, СМЭВ, 1С, СЭД." },
            ].map((s) => (
              <a key={s.title} href="#" className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02] hover:bg-white/[0.04] transition">
                <h3 className="text-lg font-medium text-slate-100">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS — удалено по требованию */}

      {/* VALUES */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Ценности</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { k: "Безопасность", d: "Защита данных и ИС — приоритет." },
              { k: "Надёжность", d: "Стабильность и предсказуемость исполнения." },
              { k: "Госпоставщик", d: "Понимание регуляторики и процессов." },
            ].map((v) => (
              <div key={v.k} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <div className="text-xs uppercase tracking-wider text-cyan-300">{v.k}</div>
                <p className="mt-2 text-sm text-slate-300">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM — удалено по требованию */}

      {/* MEDIA — удалено по требованию */}
    </>
  );
}
