"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "agk-cookie-consent-accepted";
const POLICY_URL = "https://agkedu.ru/personaldata";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      setIsVisible(localStorage.getItem(STORAGE_KEY) !== "true");
    } catch {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } finally {
      setIsVisible(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[10000] px-4 pb-4 pt-6 sm:bottom-5 sm:left-5 sm:right-auto sm:p-0">
      <section
        aria-label="Уведомление об использовании cookies"
        className="relative w-full max-w-[420px] rounded-[22px] border border-[#550B18]/12 bg-[#F7EBCF] p-6 pr-12 text-[#3A000C] shadow-[0_24px_70px_rgba(58,0,12,0.22)] sm:p-7 sm:pr-12"
        role="dialog"
      >
        <button
          aria-label="Принять cookies и закрыть уведомление"
          className="absolute right-4 top-4 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#3A000C]/55 transition-colors duration-200 hover:bg-[#550B18]/8 hover:text-[#3A000C] focus-ring"
          onClick={acceptCookies}
          type="button"
        >
          <X aria-hidden="true" className="h-4 w-4" />
        </button>
        <p className="text-[14px] leading-[1.55] text-[#3A000C]/80">
          Продолжая использование сайта, я выражаю согласие на обработку моих
          персональных данных при помощи сервиса Яндекс.Метрика, подтверждаю,
          что ознакомлен с{" "}
          <a
            className="font-semibold text-[#550B18] underline decoration-[#550B18]/45 underline-offset-4 transition-colors duration-200 hover:text-[#75162E]"
            href={POLICY_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Политикой в отношении обработки персональных данных
          </a>{" "}
          и уведомлен об использовании файлов cookies.
        </p>
        <button
          className="mt-5 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full bg-[#6F6B4F] px-6 text-[14px] font-semibold text-white shadow-[0_12px_26px_rgba(111,107,79,0.24)] transition-colors duration-200 hover:bg-[#550B18] focus-ring"
          onClick={acceptCookies}
          type="button"
        >
          Соглашаюсь
        </button>
      </section>
    </div>
  );
}
