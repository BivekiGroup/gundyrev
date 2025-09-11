import HomeLeadForm from "@/components/forms/pages/HomeLeadForm";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/15 px-3 py-1 text-xs text-slate-300 mb-5">
                B2B/B2G • кибербезопасность • поставки • разработка
              </div>
              <h1 className="text-3xl sm:text-5xl/tight font-semibold text-white tracking-[-0.02em]">
                Комплексные ИТ‑решения и поставки для госсектора и бизнеса
              </h1>
              <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-2xl">
                Надежная кибербезопасность, лицензии Dr.Web, веб‑разработка и поставки
                сертифицированной электроники. Интегрируем с существующей инфраструктурой.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#solutions"
                  className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-3 transition-colors"
                >
                  Подробнее о решениях
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center rounded-md ring-1 ring-white/20 hover:bg-white/5 text-white px-5 py-3 transition-colors"
                >
                  Оставить заявку
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-400">
                <div className="rounded-lg ring-1 ring-white/10 p-3">
                  Экспертиза
                  <div className="text-slate-200 font-medium">Проектные соответствия</div>
                </div>
                <div className="rounded-lg ring-1 ring-white/10 p-3">
                  5+ лет
                  <div className="text-slate-200 font-medium">Опыт в госсекторе</div>
                </div>
                <div className="rounded-lg ring-1 ring-white/10 p-3">
                  24×7
                  <div className="text-slate-200 font-medium">Поддержка</div>
                </div>
                <div className="rounded-lg ring-1 ring-white/10 p-3">
                  B2B/B2G
                  <div className="text-slate-200 font-medium">Гибкие условия</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur p-6">
                <h3 className="text-sm font-semibold text-slate-200">Ключевые направления</h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    { title: "Secure‑T", desc: "Комплексная защита", href: "/secure-t" },
                    { title: "Dr.Web", desc: "Антивирусная защита", href: "/drweb" },
                    { title: "Веб‑разработка", desc: "Сайты, ЛК, интеграции", href: "/web" },
                    { title: "Соловей", desc: "Онлайн‑звонки", href: "/solovey" },
                    { title: "Электроника", desc: "Поставки B2B/B2G", href: "/electronics" },
                  ].map((i) => (
                    <li key={i.title}>
                      <a
                        href={i.href}
                        className="group block rounded-lg ring-1 ring-white/10 hover:ring-white/20 bg-white/0 hover:bg-white/[0.03] p-4 transition"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-slate-100 font-medium">{i.title}</div>
                            <div className="text-slate-400">{i.desc}</div>
                          </div>
                          <div className="h-8 w-8 rounded-md bg-cyan-400/20 ring-1 ring-cyan-300/30 grid place-items-center text-cyan-300">
                            →
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-xs text-slate-400">
                  Поставки по 44‑ФЗ/223‑ФЗ • Интеграция • Обучение
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Решения</h2>
            <a href="#contact-form" className="text-cyan-400 hover:text-cyan-300 text-sm">Запросить консультацию</a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Secure‑T",
                desc: "Аудит ИБ, внедрение и тех. защита.",
                href: "/secure-t",
              },
              {
                title: "Dr.Web",
                desc: "Лицензии, централизованное администрирование и поддержка.",
                href: "/drweb",
              },
              {
                title: "Веб‑разработка",
                desc: "Корпоративные сайты, порталы, ЛК и интеграции.",
                href: "/web",
              },
              {
                title: "Соловей",
                desc: "Видеозвонки, запись, интеграции для организаций.",
                href: "/solovey",
              },
              {
                title: "Электроника",
                desc: "Компьютеры, серверы, сети, периферия и спец. решения.",
                href: "/electronics",
              },
              
            ].map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-xl ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:ring-white/20 p-6 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-100">{card.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{card.desc}</p>
                  </div>
                  <span className="h-9 w-9 rounded-md bg-cyan-400/20 ring-1 ring-cyan-300/30 grid place-items-center text-cyan-300">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Для кого</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Госструктуры (B2G)",
                desc: "Поддержка закупок, соответствие регуляторам, закрытые контуры.",
              },
              {
                title: "Крупные компании",
                desc: "Сложные интеграции, многосайтовые внедрения, SLA.",
              },
              {
                title: "Средний бизнес",
                desc: "Оптимальные решения под бюджет, быстрый старт.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-xl ring-1 ring-white/10 p-6 bg-gradient-to-b from-white/[0.03] to-transparent">
                <h3 className="text-lg font-medium text-slate-100">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Наши преимущества</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                k: "Опыт",
                title: "Опыт работы с госсектором",
                desc: "Понимаем процессы закупок и требования регуляторов.",
              },
              {
                k: "Комплекс",
                title: "Комплексный подход",
                desc: "От аудита до внедрения и сопровождения.",
              },
              {
                k: "Надёжно",
                title: "Надёжные партнёры",
                desc: "Сертифицированные решения и проверенные поставщики.",
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
      <section id="cases" className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Отзывы и кейсы</h2>
            <a href="#contact-form" className="text-cyan-400 hover:text-cyan-300 text-sm">Обсудить проект</a>
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/[0.02]">
                <p className="text-slate-200 text-base">
                  “В рамках проекта были проведены аудит ИБ и внедрены
                  сертифицированные средства защиты. Сроки соблюдены, риски снижены.”
                </p>
                <div className="mt-4 text-sm text-slate-400">ГК «Пример», ИТ‑директор</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Оставить заявку</h2>
              <p className="mt-3 text-slate-400 max-w-prose">
                Запросите аудит, прайс или консультацию. Укажете задачи — мы предложим оптимальный
                вариант с учётом требований и сроков.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <li className="rounded-lg ring-1 ring-white/10 p-3">44‑ФЗ/223‑ФЗ</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">SLA 24×7</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">Импортозамещение</li>
                <li className="rounded-lg ring-1 ring-white/10 p-3">B2B/B2G</li>
              </ul>
            </div>

            <HomeLeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
