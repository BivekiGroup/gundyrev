import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-3xl sm:text-4xl font-semibold text-white">Спасибо! Заявка отправлена</h1>
      <p className="mt-4 text-slate-300">
        Мы получили вашу заявку и скоро свяжемся. Если вопрос срочный, позвоните нам.
      </p>
      <div className="mt-6">
        <Link href="/" className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-3 transition-colors">
          На главную
        </Link>
      </div>
    </section>
  );
}
