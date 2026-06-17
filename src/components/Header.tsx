"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "О курсе", href: "#about" },
  { label: "Автор программы", href: "#author" },
  { label: "Для кого", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Вопросы", href: "#faq" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (pathname === "/challenge" || pathname === "/design") {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-orange-1/18 bg-[#F2E5C5]/92 shadow-[0_12px_34px_rgba(58,0,12,0.11)] backdrop-blur-xl"
          : "bg-[#F2E5C5]/82 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 font-sans text-[20px] font-extrabold uppercase tracking-tight text-orange-1 lg:text-[24px]"
        >
          <Image
            src="/images/bez-fona-2.png"
            alt=""
            aria-hidden="true"
            width={52}
            height={34}
            className="h-auto w-9 object-contain lg:w-11"
            priority
          />
          <span>МЕТОДОЛОГИЯ</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary transition-all hover:-translate-y-0.5 hover:text-orange-2 text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing">
            <Button variant="primary" size="sm">
              Записаться
            </Button>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden -mr-2 rounded-full p-2 text-text-primary transition-colors hover:bg-orange-1/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-orange-1/18 bg-[#F2E5C5]/96 backdrop-blur-xl"
          >
            <nav className="flex flex-col items-center gap-6 py-8 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary transition-all hover:scale-105 hover:text-orange-2 text-lg font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#pricing" onClick={() => setMobileOpen(false)}>
                <Button variant="primary" size="lg">
                  Иду на курс
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
