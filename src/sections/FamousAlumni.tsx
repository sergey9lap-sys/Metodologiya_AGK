"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const employers = [
  "Skyeng",
  "РЖД",
  "Сбер",
  "ВКонтакте",
  "Skillbox",
  "Нетология",
  "Avito",
  "МГТУ им. Баумана",
];

const alumni = [
  {
    initials: "НК",
    name: "Наталья Хруленко",
    role: "Директор СБЕР-университета",
  },
  {
    initials: "МА",
    name: "Мария Азарёнок",
    role: "Бренд-стратег, бизнес-спикер",
  },
  {
    initials: "ГШ",
    name: "Галина Шевченко",
    role: "Продюсер форума Леонида Агутина",
  },
  {
    initials: "ИР",
    name: "Игорь Рызов",
    role: "Эксперт в области наставничества",
  },
];

export function FamousAlumni() {
  return (
    <section className="bg-white py-12 lg:py-14">
      <div className="bg-[#FFA700] py-10 lg:py-12">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center font-heading text-3xl font-black uppercase text-text-primary lg:mb-10 lg:text-4xl"
          >
            Наши выпускники работают в:
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {employers.map((name, index) => (
              <motion.div
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-xl border-2 border-white bg-white px-6 py-3 text-base font-bold text-text-primary shadow-md transition-all hover:-translate-y-1 hover:shadow-lg lg:text-lg"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="pt-12 lg:pt-14">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center font-heading text-3xl font-black uppercase text-text-primary lg:mb-10 lg:text-4xl"
        >
          Нас рекомендуют известные выпускники
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {alumni.map((person, index) => (
            <motion.div
              key={person.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-orange-1 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-card-hover lg:h-32 lg:w-32">
                <span className="font-heading text-3xl font-black text-orange-1">
                  {person.initials}
                </span>
              </div>
              <h3 className="text-base font-bold text-text-primary lg:text-lg">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-orange-1">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
