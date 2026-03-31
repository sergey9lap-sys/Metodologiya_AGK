"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const credentials = [
  "EdTech предприниматель, основатель крупнейшей школы по методологии, методического агентства и тренингового центра",
  "Генеральный продюсер и архитектор СБЕР Акселератора 360 на 40 000 предпринимателей",
  "3 высших образования в сфере педагогики и обучения, выпускница Сколково",
  "С 2009 года в бизнес-обучении / с 2020 года в онлайне",
  "Консультант и тренер СБЕР, РОСНЕФТЬ, Норникель, Нестле, X5, Вкусвилл и др.",
  "Вице-президент Ассоциации Спикеров СНГ",
  "5 премий за вклад в образование, победа в номинации «Лучшая школа методологии» 2024-2025",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ExpertIntro() {
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
          Об авторе программы
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Expert Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[480px] rounded-2xl overflow-hidden shadow-card border-4 border-orange-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <Image
                src="/expert.png"
                alt="Александра Горева-Куртышева"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-text-primary">
              Александра Горева-Куртышева
            </h3>

            {/* Credentials list */}
            <ul className="space-y-3">
              {credentials.map((item, index) => (
                <motion.li
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Star className="w-5 h-5 text-orange-1 flex-shrink-0 mt-0.5 fill-orange-1" />
                  <span className="text-text-secondary text-body">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
