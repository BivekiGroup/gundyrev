import type { Metadata } from "next";
import Link from "next/link";
import ContactsFeedbackForm from "@/components/forms/pages/ContactsFeedbackForm";
import ContactsRFQForm from "@/components/forms/pages/ContactsRFQForm";

export const metadata: Metadata = {
  title: "Контакты | ГУНДЫРЕВ",
  description:
    "Юридическая и фактическая информация, контакты и форма обратной связи. Отдельная форма для запроса коммерческого предложения.",
};

export default function ContactsPage() {
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
            <span className="text-slate-300">Контакты</span>
          </div>
          <h1 className="text-3xl sm:text-5xl/tight font-semibold tracking-[-0.02em] text-white">
            Контакты
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-base sm:text-lg">
            Свяжитесь с нами по вопросам решений, поставок и сопровождения — ответим оперативно и предметно.
          </p>
        </div>
      </section>

      {/* INFO + MAP */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.02] p-6">
              <h2 className="text-xl font-semibold text-white">Юридическая и фактическая информация</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="rounded-lg ring-1 ring-white/10 p-3">
                  <div className="text-slate-400">Юридический адрес</div>
                  <div>г. Москва, ул. Пример, 1</div>
                </div>
                <div className="rounded-lg ring-1 ring-white/10 p-3">
                  <div className="text-slate-400">Фактический адрес</div>
                  <div>г. Москва, ул. Пример, 1</div>
                </div>
                <div className="rounded-lg ring-1 ring-white/10 p-3">
                  <div className="text-slate-400">ИНН</div>
                  <div>0000000000</div>
                </div>
                <div className="rounded-lg ring-1 ring-white/10 p-3">
                  <div className="text-slate-400">ОГРН</div>
                  <div>0000000000000</div>
                </div>
                <div className="rounded-lg ring-1 ring-white/10 p-3">
                  <div className="text-slate-400">Телефон</div>
                  <div>+7 (000) 000-00-00</div>
                </div>
                <div className="rounded-lg ring-1 ring-white/10 p-3">
                  <div className="text-slate-400">E‑mail</div>
                  <div>info@gundyrev.ru</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl ring-1 ring-white/10 overflow-hidden">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center text-slate-500 text-sm">
                Карта офиса (плейсхолдер)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Форма обратной связи</h2>
              <p className="mt-3 text-slate-400 max-w-prose">
                Напишите нам — вернёмся с ответом и предложениями по вашему запросу.
              </p>
            </div>

            <ContactsFeedbackForm />
          </div>
        </div>
      </section>

      {/* RFQ FORM */}
      <section className="mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Запросить коммерческое предложение</h2>
              <p className="mt-3 text-slate-400 max-w-prose">Опишите потребности — подготовим КП и предложим оптимальные варианты.</p>
            </div>

            <ContactsRFQForm />
          </div>
        </div>
      </section>
    </>
  );
}
