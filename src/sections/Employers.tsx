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

export function Employers() {
  return (
    <section className="bg-orange-5 py-12 lg:py-16">
      <Container>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-2xl lg:text-3xl text-text-primary text-center mb-8 uppercase"
        >
          Наши выпускники работают в:
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 lg:gap-6"
        >
          {employers.map((name, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white border-2 border-orange-1 rounded-xl text-text-primary text-base lg:text-lg font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
