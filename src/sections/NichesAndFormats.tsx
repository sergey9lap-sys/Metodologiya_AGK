"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const niches = [
  "мастермайнды",
  "тренинги",
  "стратегические сессии",
  "мастер-группы",
  "курсы",
  "интенсивы",
  "наставничество",
  "вебинары",
];

const systems = [
  "эко-системы продуктов",
  "самостоятельный отдел продукта",
  "структура сопровождения учеников",
  "сильная продуктовая линейка",
  "понятный путь клиента",
  "рост качества без хаоса",
];

const nichePositions = [
  { rotate: "-1.8deg", mobileRotate: "-0.4deg", y: "0px" },
  { rotate: "1.2deg", mobileRotate: "0.3deg", y: "10px" },
  { rotate: "-0.8deg", mobileRotate: "-0.2deg", y: "-4px" },
  { rotate: "1.7deg", mobileRotate: "0.4deg", y: "6px" },
  { rotate: "-1.4deg", mobileRotate: "-0.3deg", y: "12px" },
  { rotate: "0.9deg", mobileRotate: "0.2deg", y: "-2px" },
  { rotate: "-1.1deg", mobileRotate: "-0.3deg", y: "7px" },
  { rotate: "1.5deg", mobileRotate: "0.4deg", y: "1px" },
];

const chipEntrance = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const resultEntrance = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function NichesAndFormats() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      <Image
        src="/background/11 блок.jpg"
        alt=""
        aria-hidden="true"
        width={920}
        height={1220}
        sizes="(min-width: 1024px) 38vw, 92vw"
        className="pointer-events-none absolute left-[-38%] top-[52%] z-0 w-[92%] max-w-[500px] -translate-y-1/2 select-none object-contain opacity-[0.26] contrast-[1.08] [mask-image:linear-gradient(to_right,black_80%,transparent_100%)] lg:left-[-2%] lg:top-1/2 lg:w-[38%] lg:opacity-[0.50] [-webkit-mask-image:linear-gradient(to_right,black_80%,transparent_100%)]"
      />
      <Container className="relative z-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center font-heading text-3xl font-black uppercase text-text-primary lg:mb-10 lg:text-4xl"
        >
          Методология усиливает не один продукт, а всю систему
        </motion.h2>

        <div className="space-y-8 lg:space-y-10">
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 text-center text-lg font-semibold text-text-primary lg:mb-7 lg:text-xl"
            >
              Что можно усиливать с её помощью
            </motion.p>

            <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-1 lg:gap-x-4 lg:gap-y-5">
              {niches.map((item, index) => {
                const position = nichePositions[index % nichePositions.length];

                return (
                  <motion.div
                    key={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={chipEntrance}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: index * 0.07,
                    }}
                  >
                    <div
                      style={
                        {
                          "--chip-rotate": position.rotate,
                          "--chip-rotate-mobile": position.mobileRotate,
                          "--chip-y": position.y,
                        } as CSSProperties
                      }
                      className="cursor-default rounded-full bg-[#D98A00] px-[22px] py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out translate-y-[var(--chip-y)] rotate-[var(--chip-rotate-mobile)] hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_16px_35px_rgba(217,138,0,0.25)] lg:rotate-[var(--chip-rotate)] lg:text-base"
                    >
                      {item}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto flex max-w-2xl flex-col items-center py-1 lg:py-2">
            <div
              aria-hidden="true"
              className="absolute top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,138,0,0.18),transparent_68%)]"
            />
            <motion.div
              aria-hidden="true"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.62 }}
              className="relative h-24 w-px origin-top bg-gradient-to-b from-orange-1/20 via-orange-1 to-orange-1/20 lg:h-28"
            />
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 1.12 }}
              className="relative mt-[-2px] h-0 w-0 border-x-[7px] border-t-[10px] border-x-transparent border-t-orange-1/70"
            />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.82 }}
              className="relative mt-5 max-w-[520px] text-center text-lg font-semibold leading-relaxed text-text-primary lg:text-xl"
            >
              Методология связывает разрозненные форматы в понятную систему
            </motion.p>
          </div>

          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="mb-5 text-center font-heading text-2xl font-black uppercase text-text-primary lg:mb-7 lg:text-3xl"
            >
              И во что это вырастает
            </motion.p>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {systems.map((item, index) => (
                <motion.div
                  key={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={resultEntrance}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: 1.12 + index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                    boxShadow: "0 16px 35px rgba(217, 138, 0, 0.25)",
                  }}
                  className="flex min-h-[58px] cursor-default items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,#D98A00,#F2A51A)] px-6 py-3.5 text-center text-sm font-semibold leading-snug text-white shadow-[0_12px_30px_rgba(217,138,0,0.18)] lg:text-base"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
