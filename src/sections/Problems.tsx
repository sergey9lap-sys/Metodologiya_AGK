"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const problemGroups = [
  {
    title: "Эксперты",
    items: [
      "Не понимают, как упаковать большой опыт в простую и понятную систему.",
      "Перегружают курс и теряют фокус на результате ученика.",
      "Говорят сложным языком, из-за чего знания не превращаются в действие.",
      "Не могут объяснить, в чём уникальность своего продукта.",
    ],
  },
  {
    title: "Методологи",
    items: [
      "Работают без ясных границ роли и часто застревают в операционке.",
      "Решают задачи “по наитию”, а не через систему проектирования продукта.",
      "Не растут в цене, потому что не умеют показывать ценность своей работы.",
      "Слабо влияют на продуктовую стратегию и путь ученика.",
    ],
  },
  {
    title: "Предприниматели",
    items: [
      "Продают продукт, который не доводит учеников до результата.",
      "Создают линейку наугад и зависят от одного продукта.",
      "Не могут выстроить команду вокруг понятной образовательной системы.",
      "Тратят слишком много времени и ресурсов на хаос вместо роста.",
    ],
  },
];

const columnImages = [
  "/column-expert.png",
  "/column-methodologist.png",
  "/column-entrepreneur.png",
];

function AntiqueColumn({
  index,
  baseDelay,
}: {
  index: number;
  baseDelay: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="relative mx-auto h-[385px] w-full max-w-[340px] sm:h-[420px] lg:h-[455px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.36 }}
      transition={{
        duration: 0.74,
        ease: [0.22, 1, 0.36, 1],
        delay: baseDelay,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 h-16 w-[76%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,245,220,0.15),transparent_68%)] blur-xl"
      />
      <motion.div
        className="relative h-full w-full"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 6.8 + index * 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: baseDelay + 0.8,
        }}
      >
        <Image
          src={columnImages[index]}
          alt=""
          fill
          sizes="(max-width: 768px) 88vw, 340px"
          className="object-contain mix-blend-screen drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
          priority={index === 0}
        />
      </motion.div>
    </motion.div>
  );
}

export function Problems() {
  return (
    <section className="relative overflow-hidden bg-[#2B1207] py-12 lg:py-16">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:22.jpg"
        variant="orange"
        position="object-bottom"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_16%,rgba(247,235,207,0.24),transparent_24rem),linear-gradient(180deg,rgba(43,18,7,0.18),rgba(43,18,7,0.58))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-30 [background-image:radial-gradient(circle,rgba(214,171,87,0.32)_0_1px,transparent_1.6px),radial-gradient(circle,rgba(247,235,207,0.36)_0_1px,transparent_1.7px)] [background-position:14%_18%,76%_34%] [background-size:190px_170px,270px_240px]"
      />
      <Container className="relative z-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center font-heading text-3xl font-black uppercase text-[#F7EBCF] lg:mb-6 lg:text-4xl"
        >
          Распространённые ошибки
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-8 max-w-2xl text-center text-lg font-medium text-[#F7EBCF]/90 lg:mb-10 lg:text-xl"
        >
          тех, кто пока не выстроил методологию продукта и обучения
        </motion.p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-7">
          {problemGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className="relative flex min-h-[calc(100vh-112px)] flex-col justify-center py-7 lg:min-h-0 lg:justify-start lg:py-0"
            >
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: groupIndex * 0.74,
                }}
                className="text-center font-heading text-2xl font-black uppercase text-[#F7EBCF] drop-shadow-[0_4px_16px_rgba(58,0,12,0.45)] lg:text-3xl"
              >
                {group.title}
              </motion.h3>

              <div className="relative mt-2">
                <AntiqueColumn index={groupIndex} baseDelay={0.16 + groupIndex * 0.74} />
              </div>

              <ul className="mx-auto mt-2 max-w-[420px] space-y-3 text-left lg:mt-4">
                {group.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.44,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 1.06 + groupIndex * 0.74 + itemIndex * 0.08,
                    }}
                    className="flex items-start gap-3 text-base font-medium leading-snug text-[#F7EBCF] drop-shadow-[0_2px_9px_rgba(58,0,12,0.5)]"
                  >
                    <span className="mt-[0.45rem] h-2 w-2 flex-shrink-0 rotate-45 border border-[#E0BE65]/80 bg-[#75162E]/80 shadow-[0_0_12px_rgba(224,190,101,0.26)]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
