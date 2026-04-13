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
      "Не понимают, как упаковать большой опыт в простую и понятную систему.",
      "Перегружают курс и теряют фокус на результате ученика.",
      "Говорят сложным языком, из-за чего знания не превращаются в действие.",
      "Не могут объяснить, в чём уникальность своего продукта.",
    ],
  },
  {
    title: "Методологи",
    items: [
      "Работают без ясных границ роли и часто застревают в операционке.",
      "Решают задачи “по наитию”, а не через систему проектирования продукта.",
      "Не растут в цене, потому что не умеют показывать ценность своей работы.",
      "Слабо влияют на продуктовую стратегию и путь ученика.",
    ],
  },
  {
    title: "Предприниматели",
    items: [
      "Продают продукт, который не доводит учеников до результата.",
      "Создают линейку наугад и зависят от одного продукта.",
      "Не могут выстроить команду вокруг понятной образовательной системы.",
      "Тратят слишком много времени и ресурсов на хаос вместо роста.",
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
          className="mb-4 text-center font-heading text-3xl font-black uppercase text-text-primary lg:mb-6 lg:text-4xl"
        >
          Распространённые ошибки
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-8 max-w-2xl text-center text-lg font-medium text-text-secondary lg:mb-10 lg:text-xl"
        >
          тех, кто пока не выстроил методологию продукта и обучения
        </motion.p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {problemGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
            >
              <Card className="h-full card-accent-top">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-orange-1 p-2.5 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    {group.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body text-text-secondary">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-1" />
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
