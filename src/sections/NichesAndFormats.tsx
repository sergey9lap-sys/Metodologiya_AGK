"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const niches = [
  { label: "мастермайнды", x: 210, y: 98, fromX: -130, fromY: -60, rotate: -9 },
  { label: "тренинги", x: 420, y: 70, fromX: -25, fromY: -130, rotate: 7 },
  { label: "стратегические сессии", x: 610, y: 96, fromX: 95, fromY: -95, rotate: -6 },
  { label: "мастер-группы", x: 790, y: 172, fromX: 150, fromY: -20, rotate: 8 },
  { label: "курсы", x: 790, y: 348, fromX: 140, fromY: 80, rotate: -7 },
  { label: "интенсивы", x: 610, y: 426, fromX: 60, fromY: 135, rotate: 9 },
  { label: "наставничество", x: 390, y: 438, fromX: -55, fromY: 140, rotate: -8 },
  { label: "вебинары", x: 205, y: 338, fromX: -150, fromY: 90, rotate: 6 },
];

const systems = [
  "эко-системы продуктов",
  "самостоятельный отдел продукта",
  "структура сопровождения учеников",
  "сильная продуктовая линейка",
  "понятный путь клиента",
  "рост качества без хаоса",
];

const systemConnectorTargets = [
  { x: 166, y: 190 },
  { x: 500, y: 190 },
  { x: 834, y: 190 },
  { x: 166, y: 282 },
  { x: 500, y: 282 },
  { x: 834, y: 282 },
];

const resultEntrance = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function NichesAndFormats() {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [activeResult, setActiveResult] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-12 lg:py-16">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:59.jpg"
        variant="light"
        position="object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent"
      />
      <Container className="relative z-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl font-black uppercase leading-tight text-text-primary lg:text-4xl"
          >
            Методология усиливает не один продукт, а всю систему
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl text-lg font-semibold text-text-secondary lg:text-xl"
          >
            Разрозненные форматы собираются в понятную продуктовую архитектуру
          </motion.p>
        </div>

        <div className="mt-9 lg:mt-12">
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-orange-1 px-4 text-center font-heading text-xl font-black leading-none text-white shadow-[0_0_52px_rgba(255,167,0,0.42)] min-[430px]:h-[150px] min-[430px]:w-[150px]"
            >
              Методология
            </motion.div>

            <div className="relative mx-auto mt-7 max-w-[430px] pb-1">
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.58, ease: "easeInOut", delay: 0.82 }}
                className="absolute left-1/2 top-[-28px] bottom-5 z-0 w-px origin-top -translate-x-1/2 bg-[rgba(191,129,35,0.32)]"
              />
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 1.08 }}
                className="absolute left-1/2 top-[-35px] z-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-orange-1 shadow-[0_0_18px_rgba(255,167,0,0.6)]"
              />

              <div className="relative z-10 space-y-3.5">
              {niches.map((item, index) => (
                <div
                  key={item.label}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start pr-8" : "justify-end pl-8"
                  }`}
                >
                  <motion.span
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0.45 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.28,
                      ease: "easeOut",
                      delay: 0.76 + index * 0.08,
                    }}
                    className={`absolute top-1/2 z-20 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-orange-1 shadow-[0_0_18px_rgba(255,167,0,0.55)] ${
                      index % 2 === 0 ? "right-2" : "left-2"
                    }`}
                  />
                  <motion.span
                    aria-hidden="true"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.32,
                      ease: "easeOut",
                      delay: 0.86 + index * 0.08,
                    }}
                    className={`absolute top-1/2 z-0 h-px origin-center bg-[rgba(191,129,35,0.32)] ${
                      index % 2 === 0
                        ? "left-1/2 right-3"
                        : "left-3 right-1/2"
                    }`}
                  />
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 24,
                      x: index % 2 === 0 ? -16 : 16,
                    }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.18 + index * 0.075,
                    }}
                    className="relative z-10 flex min-h-[58px] w-[78%] items-center justify-center rounded-[20px] border border-[rgba(191,129,35,0.18)] bg-[#FFF9EF] px-4 py-3 text-center text-sm font-semibold leading-snug text-text-primary shadow-[0_12px_30px_rgba(40,25,10,0.07)]"
                  >
                    {item.label}
                  </motion.div>
                </div>
              ))}
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative mx-auto hidden h-[520px] max-w-5xl lg:block"
          >
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,167,0,0.20),transparent_66%)]"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 520"
              className="absolute inset-0 h-full w-full"
            >
              {niches.map((item, index) => (
                <motion.line
                  key={item.label}
                  x1="500"
                  y1="260"
                  x2={item.x}
                  y2={item.y}
                  stroke={
                    activeModule === index
                      ? "rgba(255, 167, 0, 0.82)"
                      : "rgba(191, 129, 35, 0.35)"
                  }
                  strokeWidth={activeModule === index ? 2.2 : 1.2}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.62,
                    ease: "easeInOut",
                    delay: 0.62 + index * 0.04,
                  }}
                />
              ))}
            </svg>

            <motion.div
              initial={{ opacity: 0, scale: 0.76, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.62, ease: "easeOut", delay: 0.42 }}
              className="absolute left-1/2 top-1/2 z-20 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-[linear-gradient(135deg,#FFA700,#E58A00)] px-5 text-center font-heading text-2xl font-black leading-none text-white shadow-[0_0_70px_rgba(255,167,0,0.48)]"
            >
              Методология
            </motion.div>

            {niches.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  x: item.fromX,
                  y: item.fromY,
                  rotate: item.rotate,
                  scale: 0.92,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.72,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.075,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  transition: { type: "spring", stiffness: 260, damping: 18 },
                }}
                onMouseEnter={() => setActiveModule(index)}
                onMouseLeave={() => setActiveModule(null)}
                style={{
                  left: `${item.x / 10}%`,
                  top: `${item.y / 5.2}%`,
                }}
                className="group absolute z-10 flex min-h-[72px] w-[176px] -translate-x-1/2 -translate-y-1/2 cursor-default items-center justify-center rounded-[22px] border border-[rgba(191,129,35,0.18)] bg-[#FFF9EF] px-5 py-4 text-center text-sm font-semibold leading-snug text-text-primary shadow-[0_14px_40px_rgba(40,25,10,0.08)] transition-colors duration-300 hover:border-orange-1/60 hover:shadow-[0_18px_48px_rgba(255,167,0,0.22)]"
              >
                <span className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-orange-1/0 transition-colors duration-300 group-hover:bg-orange-1" />
                {item.label}
              </motion.div>
            ))}
          </motion.div>

          <div className="relative mt-9 lg:-mt-8">
            <div
              aria-hidden="true"
              className="pointer-events-none mx-auto hidden h-[146px] max-w-5xl lg:block"
            >
              <svg viewBox="0 0 1000 320" className="h-full w-full overflow-visible">
                <defs>
                  <filter id="flow-glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <motion.line
                  x1="500"
                  y1="0"
                  x2="500"
                  y2="112"
                  stroke="rgba(191, 129, 35, 0.38)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.72, ease: "easeInOut", delay: 1.0 }}
                />
                {[34, 72, 110].map((cy, index) => (
                  <motion.circle
                    key={cy}
                    cx="500"
                    cy={cy}
                    r={index === 2 ? 5 : 3.5}
                    fill={index === 2 ? "#FFA700" : "#FFF9EF"}
                    stroke="#FFA700"
                    strokeWidth="1.5"
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 1.18 + index * 0.12 }}
                  />
                ))}
                <motion.path
                  d="M 486 120 L 500 138 L 514 120"
                  fill="none"
                  stroke="#FFA700"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#flow-glow)"
                  initial={{ opacity: 0, y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 1.5 }}
                />
                {systemConnectorTargets.map((target, index) => (
                  <motion.path
                    key={`${target.x}-${target.y}`}
                    d={`M 500 112 C 500 150, ${target.x} 145, ${target.x} ${target.y}`}
                    fill="none"
                    stroke={
                      activeResult === index
                        ? "rgba(255, 167, 0, 0.88)"
                        : "rgba(191, 129, 35, 0.26)"
                    }
                    strokeWidth={activeResult === index ? 2.1 : 1.15}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.58,
                      ease: "easeInOut",
                      delay: 1.56 + index * 0.06,
                    }}
                  />
                ))}
              </svg>
            </div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 1.52 }}
              className="mb-5 text-center font-heading text-xl font-black text-text-primary lg:mb-7 lg:text-2xl"
            >
              И во что это вырастает
            </motion.p>

            <div className="relative z-10 mx-auto max-w-[430px] lg:max-w-5xl">
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.68, ease: "easeInOut", delay: 1.0 }}
                className="absolute left-1/2 top-[-18px] bottom-4 z-0 w-px origin-top -translate-x-1/2 bg-[rgba(191,129,35,0.32)] lg:hidden"
              />
              <div className="relative z-10 grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
                {systems.map((item, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div
                      key={item}
                      className={`relative flex lg:block ${
                        isLeft ? "justify-start pr-8" : "justify-end pl-8"
                      } lg:p-0`}
                    >
                      <motion.span
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.28,
                          ease: "easeOut",
                          delay: 1.2 + index * 0.08,
                        }}
                        className={`absolute top-1/2 z-20 h-3 w-3 -translate-y-1/2 rounded-full bg-orange-1 shadow-[0_0_20px_rgba(255,167,0,0.62)] lg:hidden ${
                          isLeft ? "right-2" : "left-2"
                        }`}
                      />
                      <motion.span
                        aria-hidden="true"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.34,
                          ease: "easeOut",
                          delay: 1.26 + index * 0.08,
                        }}
                        className={`absolute top-1/2 z-0 h-px bg-[rgba(191,129,35,0.32)] lg:hidden ${
                          isLeft ? "left-1/2 right-3" : "left-3 right-1/2"
                        }`}
                      />
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={resultEntrance}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 1.16 + index * 0.08,
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.03,
                          boxShadow: "0 18px 48px rgba(255, 167, 0, 0.20)",
                        }}
                        onMouseEnter={() => setActiveResult(index)}
                        onMouseLeave={() => setActiveResult(null)}
                        className="group relative flex min-h-[62px] w-[82%] cursor-default items-center justify-center overflow-hidden rounded-[22px] border border-[rgba(191,129,35,0.22)] bg-[#FFF9EF] px-4 py-3 text-center text-sm font-semibold leading-snug text-text-primary shadow-[0_12px_30px_rgba(40,25,10,0.07)] transition-colors duration-300 hover:border-orange-1/70 lg:min-h-[76px] lg:w-auto lg:px-6 lg:py-4 lg:text-base lg:shadow-[0_14px_40px_rgba(40,25,10,0.08)]"
                      >
                        <span className="absolute left-1/2 top-0 h-1.5 w-14 -translate-x-1/2 rounded-b-full bg-orange-1/70 transition-all duration-300 group-hover:w-24 lg:w-16 lg:group-hover:w-28" />
                        <span className="absolute left-1/2 top-3 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-orange-1 shadow-[0_0_18px_rgba(255,167,0,0.55)] lg:block" />
                        {item}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
