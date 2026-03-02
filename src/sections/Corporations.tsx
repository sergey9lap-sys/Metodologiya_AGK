"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const corporations = [
  "Tele2",
  "ВкусВилл",
  "РЖД",
  "Western Union",
  "L'Oréal",
  "Райффайзен Банк",
  "ВТБ",
  "Норникель",
  "Эльдорадо",
  "Роснефть",
  "X5 Group",
  "Альфа Банк",
  "ЕВРАЗ",
  "Сбер",
  "Nestlé",
];

export function Corporations() {
  return (
    <section className="bg-orange-5 py-12 lg:py-16">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 lg:mb-10"
        >
          <p className="text-text-primary text-lg lg:text-xl font-semibold max-w-3xl mx-auto">
            В курсе применяются образовательные техники и методики, апробированные{" "}
            <span className="text-orange-1 font-bold">
              в крупнейших корпорациях
            </span>
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 lg:gap-4"
        >
          {corporations.map((name, index) => (
            <div
              key={index}
              className="px-5 py-3 bg-white border-2 border-orange-4 rounded-xl text-text-primary text-sm lg:text-base font-bold shadow-sm hover:border-orange-1 hover:shadow-md transition-all"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
