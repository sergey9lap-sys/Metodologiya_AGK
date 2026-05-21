import type { Metadata } from "next";
import { ChallengeLanding } from "@/sections/ChallengeLanding";

export const metadata: Metadata = {
  title: "Челлендж Методология — продуктовая линейка и распаковка экспертности",
  description:
    "Челлендж для экспертов и предпринимателей: библиотека материалов, задания в чате участников и комьюнити.",
  alternates: {
    canonical: "/challenge",
  },
  openGraph: {
    title: "Челлендж Методология",
    description:
      "Разработайте свою продуктовую линейку и распакуйте экспертность на челлендже.",
    url: "/challenge",
    type: "website",
    locale: "ru_RU",
    siteName: "МЕТОДОЛОГИЯ",
    images: [
      {
        url: "/images/blok-1.jpg",
        width: 1280,
        height: 1280,
        alt: "Челлендж Методология",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Челлендж Методология",
    description:
      "Разработайте свою продуктовую линейку и распакуйте экспертность на челлендже.",
    images: ["/images/blok-1.jpg"],
  },
};

export default function ChallengePage() {
  return <ChallengeLanding />;
}
