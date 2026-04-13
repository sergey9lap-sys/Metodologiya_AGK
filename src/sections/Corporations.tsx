"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const corporations = [
  "СБЕР",
  "РОСНЕФТЬ",
  "Норникель",
  "X5 Group",
  "ВкусВилл",
  "Nestle",
  "Tele2",
  "РЖД",
  "Western Union",
  "Альфа-Банк",
  "ВТБ",
  "L'Oréal",
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
          className="text-center"
        >
          <p className="mx-auto mb-6 max-w-4xl text-lg font-semibold text-text-primary lg:text-xl">
            Методология Александры выросла из практики с экспертами,
            предпринимателями и крупнейшими компаниями рынка.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 lg:gap-4"
        >
          {corporations.map((name, index) => (
            <div
              key={index}
              className="rounded-xl border-2 border-orange-1 bg-white px-5 py-3 text-sm font-bold text-text-primary shadow-sm transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg lg:text-base"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
