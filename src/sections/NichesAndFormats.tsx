"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

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

        <div className="space-y-7 lg:space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-4 text-center text-lg font-semibold text-text-primary lg:text-xl">
              Что можно усиливать с её помощью
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {niches.map((item) => (
                <div
                  key={item}
                  className="cursor-default rounded-full border-2 border-orange-1 bg-orange-1 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg lg:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center font-heading text-2xl font-black uppercase text-text-primary lg:text-3xl"
          >
            И во что это вырастает
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {systems.map((item) => (
                <div
                  key={item}
                  className="cursor-default rounded-full border-2 border-orange-1 bg-orange-1 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg lg:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
