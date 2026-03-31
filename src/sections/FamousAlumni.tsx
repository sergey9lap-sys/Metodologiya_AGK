"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const alumni = [
  {
    name: "Наталья Хруленко",
    role: "Директор СБЕР-университета",
    initials: "НК",
  },
  {
    name: "Мария Азарёнок",
    role: "Бренд-стратег, бизнес-спикер",
    initials: "МА",
  },
  {
    name: "Галина Шевченко",
    role: "Продюсер форума Леонида Агутина",
    initials: "ГШ",
  },
  {
    name: "Игорь Рызов",
    role: "Эксперт в области наставничества",
    initials: "ИР",
  },
];

export function FamousAlumni() {
  return (
    <section className="bg-white py-12 lg:py-14">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="font-heading font-black text-3xl lg:text-4xl text-text-primary text-center mb-8 lg:mb-10 uppercase"
        >
          Нас рекомендуют известные выпускники
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {alumni.map((person, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-4 rounded-full bg-orange-1 flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-card-hover hover:scale-105">
                <span className="text-white text-2xl lg:text-3xl font-heading font-black">
                  {person.initials}
                </span>
              </div>
              <h3 className="font-bold text-text-primary text-base lg:text-lg mb-1">
                {person.name}
              </h3>
              <p className="text-orange-1 text-sm font-medium">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
