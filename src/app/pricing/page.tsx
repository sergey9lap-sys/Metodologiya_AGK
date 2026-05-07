import type { Metadata } from "next";
import { Pricing } from "@/sections/Pricing";

export const metadata: Metadata = {
  title: "Методология 16.0 — тарифы",
  description: "Тарифы курса Методология 16.0, продуктовая стратегия и связь с менеджером.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FFA700]">
      <Pricing title="Методология 16.0" showStartDate={false} />
    </main>
  );
}
