"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { Briefcase, CheckSquare2, CircleDollarSign, Target } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const salaryItems = [
  {
    icon: Briefcase,
    title: "Начинающий методолог",
    amount: "50 000 - 80 000 ₽",
    caption: "за проект",
  },
  {
    icon: Target,
    title: "ТОП-методолог",
    amount: "от 150 000 ₽",
    caption: "за проект",
  },
  {
    icon: CircleDollarSign,
    title: "Директор по продукту",
    amount: "220 000 - 350 000 ₽",
    caption: "в месяц",
  },
];

const requests = [
  "Не понимаю, как построить эксперту продуктовую линейку.",
  "Не понимаю, как «распаковать» эксперта и собрать его знания в востребованный продукт.",
  "Зависаю в операционке и не расту как специалист.",
  "Не знаю, как зайти в первый проект, а вдруг у меня не получится.",
  "Работаю в «рабском» режиме, делаю всё за эксперта.",
  "Экспертам выстраиваю продукты и продуктовые линейки, а себе не получается.",
];

export function MethodologistCareer() {
  return (
    <section id="methodologist-career" className="relative overflow-hidden bg-[#FFA700] py-10 lg:py-12">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:31.jpg"
        variant="orange"
        position="object-bottom"
      />
      <Container className="relative z-20 space-y-6 lg:space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] bg-white/90 p-6 shadow-card backdrop-blur-[2px] lg:bg-white lg:p-8"
        >
          <div className="mx-auto mb-6 max-w-5xl text-center lg:mb-7">
            <h2 className="mb-3 font-heading text-3xl font-black leading-tight text-text-primary lg:text-4xl">
              Методолог — профессия №1 в EdTech 2026
            </h2>
            <p className="text-body italic text-text-secondary">
              Вы научитесь проектировать образовательные продукты для экспертов и
              бизнеса. Старт в профессии — с первого месяца после обучения.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 lg:mb-7 lg:grid-cols-3">
            {salaryItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border-2 border-orange-1 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-1" />
                    <p className="text-body font-semibold leading-snug text-text-primary">
                      {item.title}:<br />
                      <span className="font-heading text-2xl font-black leading-tight text-orange-1">
                        {item.amount}
                      </span>
                      <br />
                      <span className="text-sm font-medium text-text-secondary">
                        {item.caption}
                      </span>
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div>
            <p className="mb-5 text-lg font-bold text-text-primary lg:text-xl">
              Методология решает запросы:
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {requests.map((item, index) => (
                <motion.div
                  key={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="rounded-2xl border-2 border-orange-1 bg-orange-1 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                  <div className="flex items-start gap-3">
                    <CheckSquare2 className="mt-1 h-5 w-5 flex-shrink-0 text-white" />
                    <p className="text-body leading-relaxed text-white">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
