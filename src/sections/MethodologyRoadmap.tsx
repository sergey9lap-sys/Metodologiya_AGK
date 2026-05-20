"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const roadmap = [
  {
    period: "Сейчас",
    title: "Опыт и кейсы",
    text: "Есть практический капитал, но он пока не оформлен в продукт и публичную позицию.",
  },
  {
    period: "3 недели",
    title: "Архитектура продукта",
    text: "Собран маршрут: тема, аудитория, формат, первый модуль и точка входа.",
  },
  {
    period: "5 недель",
    title: "Первый продукт",
    text: "Готов формат, который можно показывать рынку, партнерам и закрытым сообществам.",
  },
  {
    period: "3 месяца",
    title: "Линейка",
    text: "Появляется набор форматов: выступление, программа, менторство, advisory.",
  },
  {
    period: "1 год",
    title: "Влияние",
    text: "Статус эксперта или визионера, который формирует повестку в своей нише.",
  },
];

export function MethodologyRoadmap() {
  return (
    <section className="relative overflow-hidden bg-[#120B08] py-12 text-white lg:py-16">
      <div className="absolute inset-0">
        <Image
          src="/images/methodology-roadmap-stairs.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-62"
          priority={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,11,8,0.96)_0%,rgba(18,11,8,0.84)_34%,rgba(18,11,8,0.42)_72%,rgba(18,11,8,0.24)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,11,8,0.88)_0%,rgba(18,11,8,0.18)_48%,rgba(18,11,8,0.70)_100%)]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-orange-1">
            Дорожная карта эксперта
          </p>
        </motion.div>

        <div className="relative mt-10 lg:mt-24 lg:min-h-[500px]">
          <div className="absolute left-[8%] right-[8%] top-[48%] hidden h-px rotate-[-8deg] bg-[linear-gradient(90deg,rgba(255,167,0,0),rgba(255,167,0,0.86),rgba(255,167,0,0))] lg:block" />

          <div className="grid gap-4 lg:grid-cols-5 lg:items-start">
            {roadmap.map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="lg:translate-y-[var(--roadmap-offset)]"
                style={
                  {
                    "--roadmap-offset": `${128 - index * 32}px`,
                  } as CSSProperties
                }
              >
                <div className="relative h-full rounded-2xl border border-white/22 bg-white/12 p-4 shadow-[0_18px_44px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-1/70 lg:min-h-[270px]">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-1/55 bg-[#120B08] text-orange-1 shadow-[0_0_24px_rgba(255,167,0,0.18)]">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-orange-1" />
                  </div>
                  <p className="mb-2 text-xs font-black uppercase tracking-wide text-orange-1">
                    {step.period}
                  </p>
                  <h3 className="font-heading text-xl font-black leading-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-white/76">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
