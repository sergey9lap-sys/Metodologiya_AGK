import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "О курсе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-text-primary py-10 lg:py-14">
      <Container>
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a
            href="#"
            className="font-heading font-black text-2xl text-orange-1 uppercase tracking-tight"
          >
            МЕТОДОЛОГИЯ
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
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

          {/* Copyright */}
          <p className="text-white/50 text-sm text-center">
            &copy; 2026 Академия Наставничества, Менторинга и Методологии
          </p>
        </div>
      </Container>
    </footer>
  );
}
