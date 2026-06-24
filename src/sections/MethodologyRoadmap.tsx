"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const roadmap = [
  {
    period: "Сейчас",
    title: "Опыт и кейсы",
    text: "Есть практический капитал, но он пока не оформлен в продукт и публичную позицию.",
  },
  {
    period: "3 недели",
    title: "Архитектура",
    text: "Собран маршрут: тема, аудитория, формат, архитектура продукта.",
  },
  {
    period: "5 недель",
    title: "Первый продукт",
    text: "Готов формат, который можно показывать рынку, партнерам и закрытым сообществам.",
  },
  {
    period: "3 месяца",
    title: "Линейка",
    text: "Появляется набор форматов: выступление, программа, менторство, advisory.",
  },
  {
    period: "1 год",
    title: "Влияние",
    text: "Статус эксперта или визионера, который формирует повестку в своей нише.",
  },
];

const romanNumerals = ["I", "II", "III", "IV", "V"];

const desktopPositions = [
  { left: "0%", top: "60%" },
  { left: "20%", top: "49%" },
  { left: "40%", top: "38%" },
  { left: "60%", top: "27%" },
  { left: "80%", top: "16%" },
];

export function MethodologyRoadmap() {
  return (
    <section className="relative overflow-hidden bg-[#F2E5C5] py-12 text-[#3A000C] lg:py-16">
      <Image
        src="/images/methodology-roadmap-stairs-light.png"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-[0.92] saturate-[0.95] contrast-[1.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(242,229,197,0.62),rgba(242,229,197,0.34)_44%,rgba(247,235,207,0.70))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-45 [background-image:linear-gradient(rgba(85,11,24,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(85,11,24,0.06)_1px,transparent_1px)] [background-size:72px_72px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_16%_20%,rgba(217,106,50,0.12),transparent_24rem),radial-gradient(circle_at_86%_22%,rgba(85,11,24,0.08),transparent_22rem)]"
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="font-heading text-3xl font-black uppercase leading-tight text-[#550B18] lg:text-4xl">
            Дорожная карта эксперта
          </h2>
        </motion.div>

        <div className="relative mt-10 lg:min-h-[610px]">
          <div
            aria-hidden="true"
            className="absolute left-[7%] right-[10%] top-[62%] hidden h-[3px] origin-left -rotate-[14deg] rounded-full bg-[linear-gradient(90deg,rgba(217,106,50,0.26),rgba(85,11,24,0.46),rgba(217,106,50,0.28))] shadow-[0_0_18px_rgba(217,106,50,0.20)] lg:block"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:block">
            {roadmap.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                style={
                  {
                    "--roadmap-left": desktopPositions[index].left,
                    "--roadmap-top": desktopPositions[index].top,
                  } as CSSProperties
                }
                className="relative min-h-[250px] rounded-[20px] border border-[#F2E5C5]/18 bg-[#550B18] p-5 text-[#F7EBCF] shadow-[0_20px_48px_rgba(85,11,24,0.22),inset_0_1px_0_rgba(255,255,255,0.10)] lg:absolute lg:left-[var(--roadmap-left)] lg:top-[var(--roadmap-top)] lg:w-[200px] xl:w-[210px]"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#D96A32] font-heading text-2xl font-black text-white shadow-[0_10px_22px_rgba(217,106,50,0.22)]">
                    {romanNumerals[index]}
                  </span>
                  <span className="rounded-full border border-[#F2E5C5]/22 bg-[#F2E5C5]/12 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#F7EBCF]">
                    {step.period}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-black leading-tight text-[#F7EBCF]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-[#F7EBCF]/78">
                  {step.text}
                </p>
                {index < roadmap.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 top-[82px] hidden h-8 w-8 items-center justify-center rounded-full bg-[#D96A32] text-white shadow-[0_12px_24px_rgba(217,106,50,0.24)] lg:flex"
                  >
                    →
                  </span>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
