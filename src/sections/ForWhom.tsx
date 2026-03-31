"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { GraduationCap, TrendingUp, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cards = [
  {
    icon: GraduationCap,
    title: "Для начинающих методологов",
    text: "Для начинающих методологов и тех, кто хочет получить востребованную профессию",
    subtext:
      "Сразу после обучения вы сможете зайти в проект как методолог с оплатой 50 000 – 80 000 \u20BD и выше",
  },
  {
    icon: TrendingUp,
    title: "Для действующих методологов",
    text: "Для действующих методологов, которые хотят прокачать скилы и стать директором по продукту",
    subtext:
      "Оплата труда директора по продукту в среднем по рынку составляет 220 000 – 350 000 \u20BD и выше",
  },
  {
    icon: Lightbulb,
    title: "Для экспертов",
    text: "Для экспертов, которые хотят создавать сильные востребованные продукты и обучать людей",
    subtext:
      "Знание методологии усилит любой ваш продукт и сделает его высококонверсионным",
  },
  {
    icon: Users,
    title: "Для предпринимателей",
    text: "Для предпринимателей и продюсеров, которые хотят выстроить системный подход к бизнесу",
    subtext:
      "Внедрение методологии позволит достичь более высоких результатов за короткий срок",
  },
];

export function ForWhom() {
  return (
    <section id="about" className="bg-white py-12 lg:py-16">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="font-heading font-black text-3xl lg:text-5xl text-text-primary text-center mb-8 lg:mb-10 uppercase"
        >
          Для кого этот курс
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full card-accent-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-orange-1 group-icon shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-text-primary">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-body mb-3">
                    {card.text}
                  </p>
                  <p className="text-orange-1 text-sm font-semibold">
                    {card.subtext}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
