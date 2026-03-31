"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Zap, Users, List, Package } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const benefits = [
  {
    icon: Zap,
    title: "Быстрая сборка продукта",
    text: "Помогает собрать основу любого продукта всего за несколько часов",
  },
  {
    icon: Users,
    title: "Продуктивные отношения",
    text: "Учит выстраивать продуктивные отношения с командой и клиентами без потерь времени",
  },
  {
    icon: List,
    title: "Структурирование мероприятий",
    text: "Учит составлять структуру любых мероприятий от живых выступлений до мастер-классов",
  },
  {
    icon: Package,
    title: "Упаковка знаний",
    text: "Позволяет ёмко упаковывать ваши знания в продукт и доносить их до аудитории",
  },
];

export function Benefits() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="font-heading font-black text-3xl lg:text-5xl text-text-primary text-center mb-8 lg:mb-10 uppercase"
        >
          Знание основ МЕТОДОЛОГИИ
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-orange-1 group-icon shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-text-primary">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-body">
                    {benefit.text}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 lg:mt-10 max-w-3xl mx-auto"
        >
          <div className="p-5 lg:p-6 rounded-2xl bg-orange-1 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
            <p className="text-white text-lg lg:text-xl font-bold mb-4">
              Вы научитесь доводить до результата минимум{" "}
              <span className="underline decoration-white/70 underline-offset-4">98% учеников</span>{" "}
              своего курса
            </p>
            <a href="#pricing">
              <Button variant="secondary" size="lg" className="bg-white text-orange-1 border-white hover:bg-white hover:text-orange-1">
                Получить эти навыки
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
