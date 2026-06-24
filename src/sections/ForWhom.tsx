"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const archetypes = [
  {
    title: "Эксперт",
    text: "Тем, кто хочет перестать объяснять «как умеет» и начать строить сильные, понятные и результативные продукты.",
    accent: "Вы научитесь превращать экспертизу в структуру, за которую готовы платить.",
    href: "#expert-results",
  },
  {
    title: "Предприниматель",
    text: "Тем, кто хочет выстроить продуктовую систему, сократить хаос в команде и масштабировать образовательное направление.",
    accent: "Методология усиливает системное мышление, планирование и управляемость бизнеса.",
    href: "#entrepreneur-results",
  },
  {
    title: "Будущий методолог",
    text: "Тем, кто хочет зайти в EdTech и начать проектировать востребованные образовательные продукты уже во время обучения.",
    accent: "Профессия методолога остаётся одной из самых перспективных в EdTech 2026.",
    href: "#methodologist-career",
  },
  {
    title: "Действующий методолог",
    text: "Тем, кто уже работает с экспертами, но хочет выйти из операционки и перейти к системной работе над проектом.",
    accent: "Курс помогает перейти от хаотичной практики к управляемому продукту.",
    href: "#methodologist-career",
  },
];

const archetypeNumerals = ["I", "II", "III", "IV"];

const galleryVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.16,
    },
  },
};

const archetypeVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function ForWhom() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#210007] py-12 lg:py-14">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:31.jpg"
        variant="orange"
        position="object-bottom"
        className="opacity-24 saturate-[0.7]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(242,229,197,0.13),transparent_18rem),radial-gradient(circle_at_82%_42%,rgba(214,171,87,0.1),transparent_20rem),linear-gradient(135deg,rgba(33,0,7,0.84),rgba(85,11,24,0.68)_48%,rgba(20,0,5,0.82))]"
      />
      <div aria-hidden="true" className="archetypes-dust pointer-events-none absolute inset-0 z-10" />

      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 max-w-4xl text-center lg:mb-5"
        >
          <h2 className="mb-3 font-heading text-3xl font-black uppercase text-white lg:text-[34px]">
            Кому подходит курс
          </h2>
          <p className="text-lg leading-snug text-white/90 lg:text-[19px]">
            Методология нужна не только школам и не только “людям из образования”.
            Она нужна всем, кто строит продукт и отвечает за результат ученика.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={galleryVariants}
          className="relative mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2"
        >
          {archetypes.map((archetype, index) => {
            return (
              <motion.a
                key={archetype.title}
                href={archetype.href}
                variants={archetypeVariants}
                className="group block min-h-[250px] cursor-pointer rounded-[20px] border border-[#F2E5C5]/18 bg-[#F2E5C5]/8 p-6 text-left shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#F2E5C5]/42 hover:bg-[#F2E5C5]/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96A32] focus-visible:ring-offset-4 focus-visible:ring-offset-[#3A000C]"
                aria-label={`${archetype.title}: перейти к подробностям`}
              >
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[#D96A32]/42 bg-[#D96A32] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_24px_rgba(217,106,50,0.22)]">
                    {archetypeNumerals[index]}
                  </span>
                  <span className="h-px flex-1 bg-[#F2E5C5]/18" />
                </div>
                <div>
                  <motion.h3
                    variants={textVariants}
                    className="font-heading text-3xl font-black uppercase leading-tight text-[#F7EBCF]"
                  >
                    {archetype.title}
                  </motion.h3>
                  <motion.div variants={textVariants} className="mt-4 space-y-3">
                    <p className="text-base leading-relaxed text-[#F7EBCF]/86">
                      {archetype.text}
                    </p>
                    <p className="text-sm font-bold leading-relaxed text-[#F2E5C5]">
                      {archetype.accent}
                    </p>
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
