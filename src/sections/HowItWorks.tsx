"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { BookOpen, Layers3, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const modules = [
  {
    icon: BookOpen,
    title: "Основа методологии",
    text: "Соберёте логику сильного продукта: путь ученика, структуру обучения, задания, практику и результат.",
  },
  {
    icon: Layers3,
    title: "Продукт и линейка",
    text: "Разберётесь, как формировать отдельный курс и как выстраивать из продуктов систему, которая масштабируется.",
  },
  {
    icon: Rocket,
    title: "Внедрение и рост",
    text: "Поймёте, как внедрять методологию в экспертизу, команду и текущие процессы без лишнего хаоса.",
  },
];

export function HowItWorks() {
  return (
    <section id="program" className="relative overflow-hidden bg-orange-1 py-12 lg:py-16">
      <Image
        src="/background/14 блок.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-[0.20] grayscale-[20%] lg:opacity-[0.34]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-orange-1/45"
      />
      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center lg:mb-10"
        >
          <h2 className="mb-4 font-heading text-3xl font-black uppercase text-text-primary lg:text-4xl">
            Программа обучения
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-primary lg:text-xl">
            Программа выстроена так, чтобы вы последовательно собрали сильный
            продукт, продуктовую систему и понятную логику внедрения.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center bg-white">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-1 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-text-primary">
                    {module.title}
                  </h3>
                  <p className="text-body text-text-secondary">{module.text}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
