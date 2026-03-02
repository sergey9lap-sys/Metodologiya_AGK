"use client";

import { Container } from "@/components/ui/Container";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const questions = [
  "Как спроектировать образовательный продукт интересно для учеников и комфортно для вас",
  "В какой нише вас ждёт успех",
  "Какие домашние задания давать студентам / ученикам",
  "Что сделать, чтобы ученик / слушатель получил максимальный результат",
  "Как организовать практику во время обучения",
  "Какие должны быть цены на ваши инфопродукты",
];

export function WhatIsMethodology() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="font-heading font-black text-3xl lg:text-5xl text-text-primary text-center mb-12 lg:mb-16 uppercase"
        >
          МЕТОДОЛОГИЯ отвечает на вопросы:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-orange-5 border-l-4 border-orange-1"
            >
              <CheckCircle className="w-6 h-6 text-orange-1 flex-shrink-0 mt-0.5" />
              <p className="text-text-primary text-body lg:text-lg font-medium">
                {question}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
