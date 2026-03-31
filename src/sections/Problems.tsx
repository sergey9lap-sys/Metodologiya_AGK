"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const problemGroups = [
  {
    title: "Эксперты",
    items: [
      "Сильно перегружают курс",
      "«Льют много воды» — дают много нецелевой информации",
      "Пишут / говорят сложным языком",
      "Не понимают уникальности своего продукта",
    ],
  },
  {
    title: "Методологи",
    items: [
      "Не знают своих обязанностей",
      "Работают в «рабском» режиме",
      "Оплата в разы ниже средней по рынку",
      "Зависают в операционке, не растут",
    ],
  },
  {
    title: "Предприниматели",
    items: [
      "Занимаются нравоучениями вместо обучения",
      "Создают «попсовый» курс для всех",
      "Не могут управлять командой",
      "Планёрки длятся в 3–4 раза дольше",
    ],
  },
];

export function Problems() {
  return (
    <section className="bg-[#FFA700] py-12 lg:py-16">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="font-heading font-black text-3xl lg:text-5xl text-text-primary text-center mb-4 lg:mb-6 uppercase"
        >
          Распространённые ошибки
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary text-lg lg:text-xl text-center mb-8 lg:mb-10 max-w-2xl mx-auto font-medium"
        >
          тех, кто не знаком с методологией
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {problemGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
            >
              <Card className="h-full card-accent-top">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-orange-1 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-text-primary">
                    {group.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-text-secondary text-body"
                    >
                      <span className="w-2 h-2 rounded-full bg-orange-1 flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
