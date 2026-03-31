import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "О курсе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Вопросы", href: "#faq" },
  { label: "Контакты", href: "#contact" },
];

const legalLinks = [
  {
    label: "Договор-оферта",
    href: "https://agkedu.getcourse.ru/oferta_club",
  },
  {
    label: "Политика конфиденциальности",
    href: "https://agkedu.ru/personaldata",
  },
  {
    label: "Телеграм службы заботы",
    href: process.env.NEXT_PUBLIC_TG_SUPPORT_URL || "#",
  },
  {
    label: "Макс службы заботы",
    href: process.env.NEXT_PUBLIC_MAX_SUPPORT_URL || "#",
  },
  {
    label: "ВКонтакте службы заботы",
    href: process.env.NEXT_PUBLIC_VK_SUPPORT_URL || "#",
  },
];

export function Footer() {
  return (
    <footer className="bg-text-primary py-10 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr_1fr] gap-8 lg:gap-10">
          <div className="space-y-4 text-center lg:text-left">
            <a
              href="#"
              className="inline-block font-sans font-black text-2xl text-orange-1 uppercase tracking-tight"
            >
              МЕТОДОЛОГИЯ
            </a>
            <p className="text-white/70 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Академия Наставничества, Менторинга и Методологии. Обучение, поддержка
              и сопровождение экспертов и предпринимателей в сфере образовательных продуктов.
            </p>
            <div className="text-white/70 text-sm leading-relaxed space-y-1">
              <p>Индивидуальный предприниматель</p>
              <p>Горева-Куртышева Александра Александровна</p>
              <p>ИНН: 246212538610</p>
              <p>Эл. почта: info@agkedu.com</p>
            </div>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h3 className="font-heading font-bold text-2xl text-white uppercase">
              Навигация
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-orange-1 transition-colors text-sm font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h3 className="font-heading font-bold text-2xl text-white uppercase">
              Контакты
            </h3>
            <div className="text-white/70 text-sm leading-relaxed space-y-1">
              <p>Банк: ООО «Банк Точка»</p>
              <p>БИК: 044 525 104</p>
              <p>Р/с: 4080 2810 4065 0000 0883</p>
              <p>Корсчёт: 3010 1810 7453 7452 5104</p>
            </div>
            <div className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-white/70 hover:text-orange-1 transition-colors text-sm font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center lg:text-left">
            &copy; 2026 Академия Наставничества, Менторинга и Методологии. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-orange-1 transition-colors text-sm font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
