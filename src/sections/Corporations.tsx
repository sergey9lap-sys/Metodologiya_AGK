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
    <section className="bg-[#FFA700] py-10 lg:py-12">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 lg:mb-8"
        >
          <p className="text-text-primary text-lg lg:text-xl font-semibold max-w-3xl mx-auto">
            В курсе применяются образовательные техники и методики, апробированные{" "}
            <span className="font-bold underline decoration-text-primary/40 underline-offset-4">
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
              className="px-5 py-3 bg-white border-2 border-orange-1 rounded-xl text-text-primary text-sm lg:text-base font-bold shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
