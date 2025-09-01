"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-xl bg-slate-900/90 backdrop-blur ring-1 ring-white/15 p-4 sm:p-5 text-sm text-slate-200">
          <p className="leading-relaxed">
            Этот сайт использует cookie‑файлы и другие технологии (сервис Яндекс.Метрика). Продолжая
            использовать сайт, Вы даёте согласие на сбор и обработку персональных данных, в соответствии с
            <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300"> Политикой конфиденциальности</Link>
            {" "}и
            <Link href="/terms" className="text-cyan-400 hover:text-cyan-300"> Пользовательским соглашением</Link>.
            Вы всегда можете отключить cookie‑файлы в настройках Вашего браузера.
          </p>
          <div className="mt-3 flex items-center justify-end gap-2">
            <button
              onClick={accept}
              className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-4 py-2 transition-colors"
            >
              Принять и закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

