"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";
import Image from "next/image";

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
    image: "/эксперт.png",
  },
  {
    title: "Предприниматель",
    text: "Тем, кто хочет выстроить продуктовую систему, сократить хаос в команде и масштабировать образовательное направление.",
    accent: "Методология усиливает системное мышление, планирование и управляемость бизнеса.",
    href: "#entrepreneur-results",
    image: "/предприниматель.png",
  },
  {
    title: "Будущий методолог",
    text: "Тем, кто хочет зайти в EdTech и начать проектировать востребованные образовательные продукты уже во время обучения.",
    accent: "Профессия методолога остаётся одной из самых перспективных в EdTech 2026.",
    href: "#methodologist-career",
    image: "/будущий методолог.png",
  },
  {
    title: "Действующий методолог",
    text: "Тем, кто уже работает с экспертами, но хочет выйти из операционки и перейти к системной работе над проектом.",
    accent: "Курс помогает перейти от хаотичной практики к управляемому продукту.",
    href: "#methodologist-career",
    image: "/действующий методолог.png",
  },
];

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

const portraitVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
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
    <section id="about" className="relative overflow-hidden bg-black py-8 lg:py-7">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:31.jpg"
        variant="orange"
        position="object-bottom"
        className="opacity-68 saturate-[0.82]"
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
          className="archetypes-gallery relative mx-auto grid max-w-6xl grid-cols-1 gap-y-9 sm:gap-y-10 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-5"
        >
          <div aria-hidden="true" className="archetypes-cross-line archetypes-cross-line--vertical hidden lg:block" />
          <div aria-hidden="true" className="archetypes-cross-line archetypes-cross-line--horizontal hidden lg:block" />

          {archetypes.map((archetype, index) => {
            return (
              <motion.a
                key={archetype.title}
                href={archetype.href}
                variants={archetypeVariants}
                className="group block cursor-pointer text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6AB57] focus-visible:ring-offset-4 focus-visible:ring-offset-[#3A000C] sm:text-left"
                aria-label={`${archetype.title}: перейти к подробностям`}
              >
                <motion.div
                  variants={portraitVariants}
                  className={`archetype-portrait relative mx-auto mb-2 aspect-[6/4] w-full max-w-[245px] overflow-visible sm:mx-0 lg:max-w-[240px] ${
                    index % 2 === 1 ? "lg:ml-auto" : ""
                  }`}
                >
                  <Image
                    src={archetype.image}
                    alt={archetype.title}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 245px, 78vw"
                    className="archetype-portrait-image object-contain object-bottom transition duration-500 ease-out group-hover:scale-[1.035]"
                  />
                </motion.div>

                <div className={`mx-auto max-w-[520px] sm:mx-0 ${index % 2 === 1 ? "lg:ml-auto" : ""}`}>
                  <motion.h3
                    variants={textVariants}
                    className="font-heading text-[22px] font-black uppercase leading-tight text-[#F7EBCF] lg:text-[25px]"
                  >
                    {archetype.title}
                  </motion.h3>
                  <motion.div variants={textVariants} className="mt-1.5 space-y-1">
                    <p className="text-[15px] leading-snug text-[#F7EBCF]/86 lg:text-[15px]">
                      {archetype.text}
                    </p>
                    <p className="text-[13px] font-semibold leading-snug text-[#D6AB57] lg:text-sm">
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
