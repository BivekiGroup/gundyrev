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
            Мы создаём и внедряем комплексные ИТ‑решения для госсектора и бизнеса: кибербезопасность,
            лицензии, веб‑разработка и поставки электроники. Работаем с акцентом на безопасность,
            надёжность и требования госзаказчиков.
          </p>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">История</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Основание", "Рост и партнёрства", "Сегодня"].map((t, i) => (
              <div key={t} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <div className="text-xs text-slate-400">Этап {i + 1}</div>
                <h3 className="mt-1 text-slate-100 font-medium">{t}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Краткий обзор этапа развития компании и ключевых результатов.
                </p>
              </div>
            ))}
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

      {/* PARTNERS */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Партнёры и сертификаты</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Dr.Web", "ФСТЭК/ФСБ", "ОЕМ‑партнёры"].map((p) => (
              <div key={p} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <h3 className="text-slate-100 font-medium">{p}</h3>
                <p className="mt-2 text-sm text-slate-400">Сертификаты и статусы по запросу.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Ценности</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { k: "Безопасность", d: "Защита данных и ИС — приоритет." },
              { k: "Надёжность", d: "Стабильность и предсказуемость исполнения." },
              { k: "Госзаказчик", d: "Понимание регуляторики и процессов." },
            ].map((v) => (
              <div key={v.k} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <div className="text-xs uppercase tracking-wider text-cyan-300">{v.k}</div>
                <p className="mt-2 text-sm text-slate-300">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Команда</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl ring-1 ring-white/10 overflow-hidden">
                <div className="aspect-video bg-slate-800" />
                <div className="p-5">
                  <div className="text-slate-200 font-medium">Специалист {i}</div>
                  <div className="text-slate-400 text-sm">Экспертное направление</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Фото и видео</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl ring-1 ring-white/10 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center text-slate-500 text-sm">
                  Медиа {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
