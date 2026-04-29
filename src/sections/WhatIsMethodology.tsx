"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Compass, Puzzle, Route } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="relative overflow-hidden bg-[#FFA700] py-12 lg:py-16">
      <Image
        src="/background/4 блок.jpg"
        alt=""
        aria-hidden="true"
        width={1120}
        height={900}
        sizes="(min-width: 1024px) 42vw, 110vw"
        className="pointer-events-none absolute right-[-45%] top-1/2 z-0 w-[110%] max-w-[560px] -translate-y-1/2 select-none object-cover opacity-[0.14] grayscale-[20%] [mask-image:linear-gradient(to_left,black_58%,transparent_100%)] lg:right-[-6%] lg:w-[42%] lg:opacity-[0.24] [-webkit-mask-image:linear-gradient(to_left,black_58%,transparent_100%)]"
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
          <h2 className="mb-4 font-heading text-3xl font-black uppercase text-text-primary lg:text-4xl">
            Что такое методология
          </h2>
          <p className="text-lg text-text-primary lg:text-xl">
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
      </Container>
    </section>
  );
}
