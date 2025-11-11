import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WebRequestForm from "@/components/forms/pages/WebRequestForm";

export const metadata: Metadata = {
  title: "Веб‑разработка — Цифровые решения | ГУНДЫРЕВ",
  description:
    "Корпоративные сайты и порталы, интеграции с госуслугами и внутренними системами, ЛК и CRM, поддержка и сопровождение. Безопасность и соответствие законодательству.",
};

export default function WebDevPage() {
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
            <span className="text-slate-300">Веб‑разработка</span>
          </div>
          <h1 className="text-3xl sm:text-5xl/tight font-semibold tracking-[-0.02em] text-white">
            Создаём цифровые решения для государственных и корпоративных клиентов
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-base sm:text-lg">
            Проектируем и разрабатываем корпоративные сайты, порталы, личные кабинеты и CRM.
            Интегрируем с госуслугами и внутренними системами, обеспечиваем безопасность и
            соответствие требованиям законодательства.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#web-form"
              className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-3 transition-colors"
            >
              Оставить заявку
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

      {/* SERVICES */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Услуги</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Корпоративные сайты и порталы", desc: "Витрины, каталоги, контент‑системы, сложные роли и разделы." },
              { title: "Интеграции", desc: "Госуслуги/ЕСИА, 1С, СЭД/ECM, шины данных и API." },
              { title: "ЛК и CRM", desc: "Личные кабинеты, CRM‑системы, внутренние сервисы и отчётность." },
              { title: "Поддержка и сопровождение", desc: "SLA, мониторинг, резервирование, обновления и безопасность." },
            ].map((s) => (
              <div key={s.title} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <h3 className="text-lg font-medium text-slate-100">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOV FEATURES */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Особенности работы с госзаказчиками</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                k: "Безопасность",
                title: "Безопасность по умолчанию",
                desc: "Моделирование угроз, контроль доступа, безопасная разработка и тестирование.",
              },
              {
                k: "Закон",
                title: "Соответствие требованиям",
                desc: "Учитываем нормы 152‑ФЗ, 149‑ФЗ, ГОСТ/СОУТ, отраслевые стандарты.",
              },
              {
                k: "Интеграция",
                title: "Работа в контурах",
                desc: "Интеграции с ЕСИА/СМЭВ/Госуслуги, шины данных, SSO, VPN.",
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

      {/* CASES */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Примеры проектов</h2>
            <a href="#web-form" className="text-cyan-400 hover:text-cyan-300 text-sm">Обсудить задачу</a>
          </div>

          {/* Note about portfolio */}
          <div className="mt-4 rounded-lg bg-cyan-500/5 ring-1 ring-cyan-500/20 px-4 py-3">
            <p className="text-sm text-cyan-200/80">
              Представлены лишь некоторые из реализованных проектов. Полное портфолио доступно по запросу.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ПротекАвто */}
            <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] overflow-hidden hover:ring-white/20 transition-all">
              <div className="aspect-video w-full relative overflow-hidden bg-slate-900">
                <Image
                  src="/protekavto-marketplace.jpg"
                  alt="ПротекАвто - маркетплейс автозапчастей"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">E-Commerce</div>
                <h3 className="text-slate-100 font-semibold text-lg">ПротекАвто</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Полнофункциональный маркетплейс автозапчастей с собственной CMS, системой продаж и аналитикой
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    Интеграция 1С
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    API сторонних продавцов
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    ИИ-поиск
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    Аналитика
                  </span>
                </div>
              </div>
            </div>

            {/* ГундыревCRM */}
            <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] overflow-hidden hover:ring-white/20 transition-all">
              <div className="aspect-video w-full relative overflow-hidden bg-slate-900">
                <Image
                  src="/gundyrev-crm-system.jpg"
                  alt="ГундыревCRM - система управления бизнесом"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">Enterprise</div>
                <h3 className="text-slate-100 font-semibold text-lg">ГундыревCRM</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  CRM-система с автоматизацией бизнес-процессов, шаблонами документов и планами развития в полноценную ERP
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    Автоматизация
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    Документооборот
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    Складской учёт
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    Магазины
                  </span>
                </div>
              </div>
            </div>

            {/* Вебфлоу */}
            <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] overflow-hidden hover:ring-white/20 transition-all">
              <div className="aspect-video w-full relative overflow-hidden bg-slate-900">
                <Image
                  src="/webflow-platform.jpg"
                  alt="Вебфлоу - платформа для создания веб-приложений"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">Platform</div>
                <h3 className="text-slate-100 font-semibold text-lg">Вебфлоу</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Low-code платформа для создания полнофункциональных веб-приложений с визуальным конструктором и API
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    Визуальный редактор
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    Backend генерация
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    REST API
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                    Хостинг
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST FORM */}
      <section id="web-form" className="mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Оставить заявку</h2>
              <p className="mt-3 text-slate-400 max-w-prose">
                Опишите проект и интеграции — подготовим план работ, сроки и смету.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <li className="rounded-lg ring-1 ring-white/10 p-3">Госуслуги/ЕСИА/СМЭВ</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">1С, СЭД/ECM, шины</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">SSO, LDAP/AD</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">SLA и поддержка</li>
              </ul>
            </div>

            <WebRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
