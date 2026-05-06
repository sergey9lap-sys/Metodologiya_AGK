"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionBackground } from "@/components/SectionBackground";
import { ArrowRight, Compass, Puzzle, Route } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cards = [
  {
    icon: Puzzle,
    title: "Методология = конструктор",
    text: "Вы берёте свои знания, опыт и сильные смыслы и собираете из них цельную пошаговую систему обучения.",
  },
  {
    icon: Route,
    title: "Методология = навигатор",
    text: "Каждый шаг в продукте становится понятным: что идёт за чем, почему это работает и куда ведёт ученика.",
  },
  {
    icon: Compass,
    title: "Методология = система решений",
    text: "Она помогает строить продукты, домашние задания, практику и логику обучения так, чтобы ученики доходили до результата.",
  },
];

export function WhatIsMethodology() {
  return (
    <section className="relative overflow-hidden bg-black py-12 lg:py-16">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:27.jpg"
        variant="orange"
        position="object-bottom"
      />
      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-4xl text-center lg:mb-10"
        >
          <h2 className="mb-4 font-heading text-3xl font-black uppercase text-white lg:text-4xl">
            Что такое методология
          </h2>
          <p className="text-lg text-white/92 lg:text-xl">
            Это не теория ради теории, а рабочая система создания образовательных
            продуктов, которую можно сразу внедрять в курс, продуктовую линейку и
            команду.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="group-icon rounded-xl bg-orange-1 p-3 shadow-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-text-primary">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-body text-text-secondary">{card.text}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="#pricing"
            className="inline-flex min-h-[60px] w-full max-w-[340px] items-center justify-center gap-3 rounded-[12px] bg-[#7D0000] px-9 py-[18px] text-center text-lg font-semibold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(125,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5E0000] hover:shadow-[0_8px_24px_rgba(125,0,0,0.32)] sm:w-auto"
          >
            Забронировать место
            <ArrowRight className="h-5 w-5 flex-shrink-0" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
