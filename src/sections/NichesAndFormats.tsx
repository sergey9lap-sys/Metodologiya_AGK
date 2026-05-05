"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";

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
            Разрозненные форматы собираются в понятную продуктовую линейку
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
                transition={{ duration: 0.72, ease: "easeInOut", delay: 0.28 }}
                className="absolute left-5 top-8 bottom-8 z-0 w-px origin-top bg-[rgba(191,129,35,0.34)]"
              />

              <div className="relative z-10 space-y-4">
                {productColumns.map((column, columnIndex) => (
                  <motion.div
                    key={column.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.48,
                      ease: "easeOut",
                      delay: columnIndex * 0.08,
                    }}
                    className="relative rounded-[22px] border border-[rgba(191,129,35,0.2)] bg-white/88 p-4 shadow-[0_14px_36px_rgba(40,25,10,0.08)] backdrop-blur-sm"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-1 font-heading text-lg font-black text-white shadow-[0_10px_24px_rgba(255,167,0,0.24)]">
                        {columnIndex + 1}
                      </span>
                      <h3 className="font-heading text-xl font-black uppercase leading-tight text-text-primary">
                        {column.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2">
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
                          className="flex min-h-[54px] items-center justify-center rounded-2xl border border-orange-1/18 bg-[#FFF9EF] px-4 py-3 text-center text-sm font-bold leading-snug text-text-primary shadow-sm"
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
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[360px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,167,0,0.18),transparent_68%)] blur-sm"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 1000 420"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
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
                    <path d="M 1 1 L 11 6 L 1 11 z" fill="#FFA700" />
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
                    stroke="rgba(191,129,35,0.18)"
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
                    stroke="rgba(191,129,35,0.12)"
                    strokeDasharray="6 12"
                    strokeWidth="1"
                  />
                ))}

                {matrixPaths.map((path, index) => (
                  <motion.path
                    key={path}
                    d={path}
                    fill="none"
                    stroke="rgba(255,167,0,0.88)"
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
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-1 font-heading text-lg font-black text-white shadow-[0_10px_24px_rgba(255,167,0,0.26)]">
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
                  className="group absolute z-10 flex min-h-[68px] w-[180px] -translate-x-1/2 -translate-y-1/2 cursor-default items-center justify-center rounded-[20px] border border-orange-1/24 bg-[#FFF9EF] px-4 py-3 text-center text-sm font-bold leading-snug text-text-primary shadow-[0_12px_30px_rgba(40,25,10,0.08)] transition-colors duration-300 hover:border-orange-1/70 hover:shadow-[0_18px_48px_rgba(255,167,0,0.22)]"
                >
                  <span className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 rounded-b-full bg-orange-1/70 transition-all duration-300 group-hover:w-20" />
                  <span className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-orange-1 shadow-[0_0_18px_rgba(255,167,0,0.5)]" />
                  <span className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-orange-1 shadow-[0_0_18px_rgba(255,167,0,0.5)]" />
                  {node.label}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.82 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 1.72 }}
                className="absolute bottom-8 left-1/2 z-20 flex min-h-[72px] w-[260px] -translate-x-1/2 items-center justify-center rounded-full border border-white/80 bg-[linear-gradient(135deg,#FFA700,#E58A00)] px-8 text-center font-heading text-2xl font-black leading-none text-white shadow-[0_0_58px_rgba(255,167,0,0.42)]"
              >
                Методология
              </motion.div>
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
              И во что это вырастает
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
                      boxShadow: "0 18px 48px rgba(255, 167, 0, 0.20)",
                    }}
                    className="group relative flex min-h-[76px] items-center justify-center overflow-hidden rounded-[22px] border border-[rgba(191,129,35,0.22)] bg-[#FFF9EF] px-5 py-4 text-center text-sm font-bold leading-snug text-text-primary shadow-[0_12px_30px_rgba(40,25,10,0.07)] transition-colors duration-300 hover:border-orange-1/70 lg:text-base"
                  >
                    <span className="absolute left-1/2 top-0 h-1.5 w-14 -translate-x-1/2 rounded-b-full bg-orange-1/70 transition-all duration-300 group-hover:w-24" />
                    {item}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
