import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "АСМО — Автоматизированные системы управления | ГУНДЫРЕВ",
  description:
    "Инновационные цифровые решения АСМО: автоматизация производственных, диспетчерских, бухгалтерских и финансовых процессов. Российская разработка, интеграции и поддержка.",
};

export default function AsmoPage() {
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
            <span className="text-slate-300">АСМО</span>
          </div>
          <h1 className="text-3xl sm:text-5xl/tight font-semibold tracking-[-0.02em] text-white">
            Автоматизированные системы управления (АСМО)
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-base sm:text-lg">
            Мы предлагаем инновационные цифровые решения для вашего бизнеса. Решения АСМО
            предназначены для предприятий любого масштаба и автоматизируют ключевые процессы —
            от производственных и диспетчерских до бухгалтерских и финансовых, включая интеграции
            с отраслевыми и государственными ИС. Все решения — в Реестре российского ПО.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-300">
            <div className="rounded-xl ring-1 ring-white/10 p-4">8‑800‑55‑000‑37</div>
            <div className="rounded-xl ring-1 ring-white/10 p-4">asmo@inform.ivanovo.ru</div>
            <Link href="/#contact-form" className="rounded-xl ring-1 ring-white/10 p-4 hover:bg-white/5">Обратный звонок</Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Почему АСМО</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
              <h3 className="text-slate-100 font-medium">Это выгодно и удобно</h3>
              <ul className="mt-3 text-sm text-slate-300 space-y-2 list-disc pl-5">
                <li>Полностью российская разработка, реестр отечественного ПО</li>
                <li>Стоимость владения ниже зарубежных систем</li>
                <li>Масштабируемость, высокая производительность, модульность</li>
                <li>Непрерывное развитие и автоматизированная поддержка</li>
                <li>Поддержка Linux и PostgreSQL</li>
              </ul>
            </div>
            <div className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
              <h3 className="text-slate-100 font-medium">Это технологично и инновационно</h3>
              <ul className="mt-3 text-sm text-slate-300 space-y-2 list-disc pl-5">
                <li>Единое информационное пространство и открытая интеграция</li>
                <li>Инструменты для самостоятельной разработки форм и отчётов</li>
                <li>Открытость кода, руководства по администрированию</li>
                <li>Мощные средства конфигурирования, обновления без простоя</li>
                <li>Доступ с любых устройств, мобильные приложения</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS CARDS (subset) */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Решения АСМО</h2>
            <Link href="#asmo-materials" className="text-cyan-400 hover:text-cyan-300 text-sm">Материалы</Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "АСМОграф",
                desc:
                  "Кроссплатформенный векторный редактор для инженерной и деловой графики; импорт/экспорт Visio, AutoCAD и др.; совместное редактирование.",
              },
              {
                title: "АСМО‑ТОиР",
                desc:
                  "ТО и ремонты оборудования: планирование, учёт, документооборот, отчётность.",
              },
              {
                title: "АСМО‑диспетчер",
                desc:
                  "Поддержка диспетчерских служб: режимы работы систем, оценка ситуации, принятие решений.",
              },
              {
                title: "АСМО‑метрология",
                desc:
                  "Управление парком средств измерений: поверки, калибровки, учёт и интеграции.",
              },
              {
                title: "АСМО‑ВТиПО",
                desc:
                  "Учёт вычислительной техники и ПО, жизненный цикл устройств, событийная модель.",
              },
              {
                title: "АСМО‑документооборот",
                desc:
                  "ЭДО: карточки, маршруты согласования, ЭЦП, контроль исполнения.",
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

      {/* PLATFORM */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Платформа АСМО</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
              <h3 className="text-slate-100 font-medium">АСМО‑система (сервер приложений)</h3>
              <ul className="mt-3 text-sm text-slate-300 space-y-2 list-disc pl-5">
                <li>Подключение к БД: PostgreSQL, Oracle, MS SQL и др.</li>
                <li>Масштабируемость, аудит изменений, репликация</li>
                <li>Обмен данными между узлами распределённой БД</li>
              </ul>
            </div>
            <div className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
              <h3 className="text-slate-100 font-medium">АСМО‑конфигуратор (средства разработки)</h3>
              <ul className="mt-3 text-sm text-slate-300 space-y-2 list-disc pl-5">
                <li>Проектирование форм и отчётов, шаблоны печатных форм</li>
                <li>Встроенный язык JavaScript для логики и интеграций</li>
                <li>Администрирование пользователей и прав доступа</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="asmo-materials" className="mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Материалы и контакты</h2>
            <p className="mt-3 text-slate-300 max-w-3xl">
              По запросу предоставим брошюры, спецификации, руководства пользователя и инструкции по установке.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Общие материалы (PDF)", size: "примерно 3–5 МБ" },
                { title: "Функциональные характеристики", size: "по продуктам" },
                { title: "Руководства и инструкции", size: "по продуктам" },
              ].map((m) => (
                <div key={m.title} className="rounded-xl ring-1 ring-white/10 p-5 bg-white/[0.02]">
                  <div className="text-slate-200 font-medium">{m.title}</div>
                  <div className="text-slate-400 text-sm mt-1">{m.size}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#contact-form"
                className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-3 transition-colors"
              >
                Оставить заявку
              </Link>
              <a
                href="mailto:asmo@inform.ivanovo.ru"
                className="inline-flex items-center rounded-md ring-1 ring-white/20 hover:bg-white/5 text-white px-5 py-3 transition-colors"
              >
                Написать на asmo@inform.ivanovo.ru
              </a>
            </div>
            <div className="mt-4 text-xs text-slate-500">
              Информация предоставлена официальным поставщиком услуг.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
