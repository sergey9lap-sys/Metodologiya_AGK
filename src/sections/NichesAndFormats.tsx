"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const productColumns = [
  {
    title: "Точки входа",
    products: ["Вебинары", "Интенсивы"],
  },
  {
    title: "Повышение",
    products: ["Мастермайнды", "Тренинги", "Мастер-классы"],
  },
  {
    title: "Генератор",
    products: ["Курсы", "Наставничество"],
  },
  {
    title: "Мечта",
    products: ["Мастер-группы", "Стратегические сессии"],
  },
];

const resultCards = [
  "Сильная продуктовая линейка",
  "Понятный путь клиента",
  "Экосистема продуктов",
  "Самостоятельная система продукта",
  "Структура сопровождения учеников",
  "Рост качества без хаоса",
];

const matrixHeaders = [
  { title: "Точки входа", x: 125 },
  { title: "Повышение", x: 375 },
  { title: "Генератор", x: 625 },
  { title: "Мечта", x: 875 },
];

const matrixNodes = [
  { label: "Вебинары", x: 125, y: 190, delay: 0.18 },
  { label: "Интенсивы", x: 125, y: 300, delay: 0.26 },
  { label: "Мастермайнды", x: 375, y: 130, delay: 0.38 },
  { label: "Тренинги", x: 375, y: 220, delay: 0.46 },
  { label: "Мастер-классы", x: 375, y: 310, delay: 0.54 },
  { label: "Курсы", x: 625, y: 180, delay: 0.68 },
  { label: "Наставничество", x: 625, y: 285, delay: 0.76 },
  { label: "Мастер-группы", x: 875, y: 155, delay: 0.9 },
  { label: "Стратегические сессии", x: 875, y: 280, delay: 0.98 },
];

const matrixPaths = [
  "M 205 190 C 260 160, 295 140, 290 130",
  "M 205 300 C 260 272, 300 235, 290 220",
  "M 205 300 C 260 312, 300 315, 290 310",
  "M 460 130 C 520 140, 548 168, 540 180",
  "M 460 220 C 515 210, 548 190, 540 180",
  "M 460 310 C 520 305, 548 292, 540 285",
  "M 710 180 C 765 165, 790 156, 790 155",
  "M 710 285 C 765 282, 790 280, 790 280",
];

export function NichesAndFormats() {
  return (
    <section className="relative overflow-hidden bg-[#F2E5C5] py-12 lg:py-16">
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
            Методология усиливает не один продукт, а всю систему
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl text-lg font-semibold text-text-secondary lg:text-xl"
          >
            Разрозненные форматы собираются в понятную продуктовую линейку
          </motion.p>
        </div>

        <div className="mt-9 lg:mt-12">
          <div className="lg:hidden">
            <div className="relative mx-auto max-w-[440px]">
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.25, ease: "easeInOut", delay: 0.18 }}
                className="absolute bottom-10 left-6 top-6 z-0 w-[3px] origin-top rounded-full bg-[linear-gradient(180deg,#75162E,#D6AB57,#75162E)] shadow-[0_0_18px_rgba(214,171,87,0.38)]"
              />

              <div className="relative z-10 space-y-5">
                {productColumns.map((column, columnIndex) => (
                  <motion.div
                    key={column.title}
                    initial={{ opacity: 0, x: -18, y: 16 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.1 + columnIndex * 0.12,
                    }}
                    className="relative ml-12 overflow-hidden border border-[#B8843C]/36 bg-[#F8EBCB]/94 p-4 shadow-[0_16px_36px_rgba(40,25,10,0.1),inset_0_1px_0_rgba(255,255,255,0.58)] backdrop-blur-sm [clip-path:polygon(2%_5%,16%_2%,33%_4%,51%_2%,70%_4%,87%_2%,98%_6%,99%_92%,86%_98%,68%_95%,50%_98%,31%_95%,14%_98%,1%_92%)] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.46),transparent_35%),radial-gradient(circle_at_86%_86%,rgba(117,22,46,0.06),transparent_28%),repeating-linear-gradient(105deg,rgba(85,11,24,0.02)_0_1px,transparent_1px_9px)]"
                  >
                    <span className="absolute left-3 top-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#F8EBCB] bg-[#75162E] font-heading text-lg font-black text-[#F7E7B8] shadow-[0_0_18px_rgba(214,171,87,0.42)]">
                      {columnIndex + 1}
                    </span>
                    <div className="mb-3 flex min-h-12 items-center gap-3 pl-14">
                      <h3 className="font-heading text-xl font-black uppercase leading-tight text-text-primary">
                        {column.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                      {column.products.map((product, productIndex) => (
                        <motion.div
                          key={product}
                          initial={{ opacity: 0, x: -18, scale: 0.96 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.42,
                            ease: "easeOut",
                            delay: 0.16 + columnIndex * 0.1 + productIndex * 0.05,
                          }}
                          className="relative flex min-h-[54px] items-center justify-center border border-[#B8843C]/34 bg-[#F7E7BE] px-4 py-3 text-center text-sm font-bold leading-snug text-text-primary shadow-[0_8px_18px_rgba(40,25,10,0.08),inset_0_1px_0_rgba(255,255,255,0.52)] [clip-path:polygon(3%_12%,15%_5%,32%_8%,50%_4%,68%_8%,86%_5%,98%_12%,98%_88%,86%_95%,68%_92%,50%_96%,32%_92%,14%_95%,2%_88%)]"
                        >
                          {product}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-[520px] max-w-6xl overflow-hidden rounded-[30px] border border-white/70 bg-white/48 shadow-[0_20px_60px_rgba(40,25,10,0.08)] backdrop-blur-[2px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[360px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(85,11,24,0.18),transparent_68%)] blur-sm"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 1000 420"
                className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
              >
                <defs>
                  <marker
                    id="product-matrix-arrow"
                    viewBox="0 0 12 12"
                    refX="10"
                    refY="6"
                    markerWidth="8"
                    markerHeight="8"
                    orient="auto-start-reverse"
                  >
                    <path d="M 1 1 L 11 6 L 1 11 z" fill="#550B18" />
                  </marker>
                  <filter id="product-matrix-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {[125, 375, 625, 875].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="76"
                    x2={x}
                    y2="372"
                    stroke="rgba(117,22,46,0.18)"
                    strokeDasharray="8 10"
                    strokeWidth="1"
                  />
                ))}
                {[128, 215, 304].map((y) => (
                  <line
                    key={y}
                    x1="72"
                    y1={y}
                    x2="928"
                    y2={y}
                    stroke="rgba(117,22,46,0.12)"
                    strokeDasharray="6 12"
                    strokeWidth="1"
                  />
                ))}

                {matrixPaths.map((path, index) => (
                  <motion.path
                    key={path}
                    d={path}
                    fill="none"
                    stroke="rgba(85,11,24,0.88)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    markerEnd="url(#product-matrix-arrow)"
                    filter="url(#product-matrix-glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 1.02 + index * 0.08,
                    }}
                  />
                ))}
              </svg>

              {matrixHeaders.map((header, index) => (
                <motion.div
                  key={header.title}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.42,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  style={{ left: `${header.x / 10}%` }}
                  className="absolute top-9 z-20 flex w-[190px] -translate-x-1/2 flex-col items-center text-center"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-1 font-heading text-lg font-black text-white shadow-[0_10px_24px_rgba(85,11,24,0.26)]">
                    {index + 1}
                  </span>
                  <h3 className="font-heading text-lg font-black uppercase leading-tight text-text-primary">
                    {header.title}
                  </h3>
                </motion.div>
              ))}

              {matrixNodes.map((node, index) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, x: -32, y: 12, scale: 0.94 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: node.delay,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 260, damping: 18 },
                  }}
                  style={{
                    left: `${node.x / 10}%`,
                    top: `${node.y / 4.2}%`,
                  }}
                  className="group absolute z-10 flex min-h-[68px] w-[180px] -translate-x-1/2 -translate-y-1/2 cursor-default items-center justify-center overflow-hidden rounded-[20px] border border-[#B8843C]/32 bg-[#F7E7BE]/78 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.42),transparent_32%),radial-gradient(circle_at_84%_80%,rgba(117,22,46,0.052),transparent_28%),repeating-linear-gradient(105deg,rgba(85,11,24,0.018)_0_1px,transparent_1px_9px)] px-4 py-3 text-center text-sm font-bold leading-snug text-text-primary shadow-[0_12px_30px_rgba(40,25,10,0.09),inset_0_1px_0_rgba(255,255,255,0.56)] backdrop-blur-[1px] transition-colors duration-300 hover:border-orange-1/70 hover:shadow-[0_18px_48px_rgba(85,11,24,0.18)]"
                >
                  <span className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 rounded-b-full bg-orange-1/70 transition-all duration-300 group-hover:w-20" />
                  <span className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-orange-1 shadow-[0_0_18px_rgba(85,11,24,0.5)]" />
                  <span className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-orange-1 shadow-[0_0_18px_rgba(85,11,24,0.5)]" />
                  {node.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative mx-auto mt-8 max-w-6xl lg:mt-10">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 1.26 }}
              className="mb-5 text-center font-heading text-xl font-black text-text-primary lg:mb-7 lg:text-2xl"
            >
              И во что это вырастает
            </motion.p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {resultCards.map((item, index) => {
                const fromLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: fromLeft ? -38 : 38,
                      y: 12,
                      scale: 0.98,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 1.34 + index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      boxShadow: "0 18px 48px rgba(85, 11, 24, 0.18)",
                    }}
                    className="group relative flex min-h-[76px] items-center justify-center overflow-hidden rounded-[22px] border border-[rgba(117,22,46,0.22)] bg-[#F6E8C8] px-5 py-4 text-center text-sm font-bold leading-snug text-text-primary shadow-[0_12px_30px_rgba(40,25,10,0.07)] transition-colors duration-300 hover:border-orange-1/70 lg:text-base"
                  >
                    <span className="absolute left-1/2 top-0 h-1.5 w-14 -translate-x-1/2 rounded-b-full bg-orange-1/70 transition-all duration-300 group-hover:w-24" />
                    {item}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 1.74 }}
              className="mt-7 flex justify-center"
            >
              <a
                href="#pricing"
                className="inline-flex min-h-[60px] w-full max-w-[390px] items-center justify-center gap-3 rounded-[12px] bg-[#550B18] px-9 py-[18px] text-center text-lg font-semibold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(85,11,24,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3A000C] hover:shadow-[0_8px_24px_rgba(85,11,24,0.32)] sm:w-auto"
              >
                <span className="whitespace-nowrap">Мне нужна система</span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
