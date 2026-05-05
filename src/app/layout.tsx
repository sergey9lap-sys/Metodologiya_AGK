import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { GetCourseQualityBadge } from "@/components/GetCourseQualityBadge";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "МЕТОДОЛОГИЯ — Создай востребованный продукт и стань Учителем с большой буквы",
  description:
    "Курс по методологии от Александры Горевой-Куртышевой. Научитесь создавать сильные образовательные продукты, управлять процессом обучения и доводить до результата 98% учеников.",
  keywords:
    "методология, курс методология, методолог обучение, образовательный продукт, Александра Горева-Куртышева, наставничество",
  openGraph: {
    title: "МЕТОДОЛОГИЯ — курс от Александры Горевой-Куртышевой",
    description:
      "Создай востребованный продукт и стань Учителем с большой буквы. Старт 25 мая 2026.",
    type: "website",
    locale: "ru_RU",
    siteName: "МЕТОДОЛОГИЯ",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        {children}
        <GetCourseQualityBadge />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
