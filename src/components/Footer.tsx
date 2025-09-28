import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contacts" className="mt-20 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="inline-flex items-center">
            <Image src="/logo.svg" alt="Логотип Гундырев" width={52} height={68} className="h-10 w-auto" />
          </div>
          <p className="text-sm text-slate-400 max-w-xs">
            B2B/B2G решения: кибербезопасность, лицензии, веб-разработка и поставки электроники.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-200 mb-3">Навигация</h4>
          <ul className="text-sm text-slate-400 space-y-2">
            <li><Link className="hover:text-white" href="/about">О компании</Link></li>
            <li><Link className="hover:text-white" href="/contacts">Контакты</Link></li>
            <li><Link className="hover:text-white" href="/privacy">Политика конфиденциальности</Link></li>
            <li><Link className="hover:text-white" href="/terms">Пользовательское соглашение</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-200 mb-3">Решения</h4>
          <ul className="text-sm text-slate-400 space-y-2">
            <li><Link className="hover:text-white" href="/secure-t">Secure‑T</Link></li>
            <li><Link className="hover:text-white" href="/drweb">Dr.Web</Link></li>
            <li><Link className="hover:text-white" href="/web">Веб‑разработка</Link></li>
            <li><Link className="hover:text-white" href="/solovey">Соловей</Link></li>
            <li><Link className="hover:text-white" href="/electronics">Электроника</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-200 mb-3">Контакты</h4>
          <ul className="text-sm text-slate-400 space-y-2">
            <li>Тел.: +79930770168</li>
            <li>E‑mail: info@gundyrev.ru</li>
            <li>График: Пн–Пт, 10:00–19:00 (Мск)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
          <span>© {new Date().getFullYear()} ГУНДЫРЕВ. Все права защищены.</span>
          <Link href="/#contact-form" className="text-cyan-400 hover:text-cyan-300">Запросить КП</Link>
          <a href="https://biveki.ru" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
            Создано в партнёрстве с Biveki
          </a>
        </div>
      </div>
    </footer>
  );
}
