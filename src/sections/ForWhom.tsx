"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Briefcase, Building2, Lightbulb, Sparkles } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cards = [
  {
    icon: Lightbulb,
    title: "Экспертам",
    text: "Тем, кто хочет перестать объяснять «как умеет» и начать строить сильные, понятные и результативные продукты.",
    accent: "Вы научитесь превращать экспертизу в структуру, за которую готовы платить.",
    href: "#expert-results",
  },
  {
    icon: Building2,
    title: "Предпринимателям и продюсерам",
    text: "Тем, кто хочет выстроить продуктовую систему, сократить хаос в команде и масштабировать образовательное направление.",
    accent: "Методология усиливает системное мышление, планирование и управляемость бизнеса.",
    href: "#entrepreneur-results",
  },
  {
    icon: Sparkles,
    title: "Будущим методологам",
    text: "Тем, кто хочет зайти в EdTech и начать проектировать востребованные образовательные продукты уже во время обучения.",
    accent: "Профессия методолога остаётся одной из самых перспективных в EdTech 2026.",
    href: "#methodologist-career",
  },
  {
    icon: Briefcase,
    title: "Действующим методологам",
    text: "Тем, кто уже работает с экспертами, но хочет выйти из операционки и перейти к системной работе над проектом.",
    accent: "Курс помогает перейти от хаотичной практики к управляемому продукту.",
    href: "#methodologist-career",
  },
];

export function ForWhom() {
  return (
    <section id="about" className="bg-[#FFA700] py-12 lg:py-16">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-4xl text-center lg:mb-10"
        >
          <h2 className="mb-4 font-heading text-3xl font-black uppercase text-text-primary lg:text-4xl">
            Кому подходит курс
          </h2>
          <p className="text-lg text-text-primary lg:text-xl">
            Методология нужна не только школам и не только “людям из образования”.
            Она нужна всем, кто строит продукт и отвечает за результат ученика.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
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
                <a href={card.href} className="block h-full">
                  <Card className="h-full card-accent-left cursor-pointer">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="group-icon rounded-xl bg-orange-1 p-3 shadow-md">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-text-primary">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mb-3 text-body text-text-secondary">{card.text}</p>
                    <p className="text-sm font-semibold text-orange-1">{card.accent}</p>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
