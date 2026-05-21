import type { Metadata } from "next";
import { DesignPreview } from "@/sections/DesignPreview";

export const metadata: Metadata = {
  title: "Методология — варианты дизайна",
  description: "Визуальные варианты сайта Методология в нескольких палитрах.",
  alternates: {
    canonical: "/design",
  },
};

export default function DesignPage() {
  return <DesignPreview />;
}
