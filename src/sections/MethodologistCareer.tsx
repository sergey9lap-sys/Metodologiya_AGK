"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Briefcase, CheckSquare2, CircleDollarSign, Quote, Target } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const salaryItems = [
  {
    icon: Briefcase,
    text: "Начинающий методолог: 50 000 - 80 000 ₽ за проект",
  },
  {
    icon: Target,
    text: "ТОП-методолог: от 150 000 ₽ за проект",
  },
  {
    icon: CircleDollarSign,
    text: "Директор по продукту: 220 000 - 350 000 ₽",
  },
];

const requests = [
  "Не знаю, как зайти в первый проект, а вдруг у меня не получится.",
  "Работаю в «рабском» режиме, делаю всё за эксперта.",
  "Зависаю в операционке и не расту как специалист.",
  "Не понимаю, как построить эксперту продуктовую линейку.",
  "Не понимаю, как «распаковать» эксперта и собрать его знания в востребованный продукт.",
  "Экспертам выстраиваю продукты и продуктовые линейки, а себе не получается.",
];

const employers = [
  "Skyeng",
  "Skillbox",
  "Нетология",
  "Julia Marketing",
  "Академия переговоров Игоря Рызова",
  "MIRA SCHOOL",
];

export function MethodologistCareer() {
  return (
    <section id="methodologist-career" className="bg-[#FFA700] py-10 lg:py-12">
      <Container className="space-y-6 lg:space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] bg-white p-6 shadow-card lg:p-8"
        >
          <div className="mx-auto mb-6 max-w-5xl text-center lg:mb-7">
            <h2 className="mb-3 font-heading text-3xl font-black leading-tight text-text-primary lg:text-5xl">
              Методолог — профессия №1 в EdTech 2026
            </h2>
            <p className="text-base italic text-text-secondary lg:text-xl">
              Вы научитесь проектировать образовательные продукты для экспертов и
              бизнеса. Старт в профессии — с первого месяца после обучения.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 lg:mb-7 lg:grid-cols-3">
            {salaryItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border-2 border-orange-1 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-1" />
                    <p className="text-body font-semibold text-text-primary">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div>
            <p className="mb-5 text-xl font-bold text-text-primary lg:text-2xl">
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
                className="rounded-2xl border-2 border-orange-1 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                  <div className="flex items-start gap-3">
                    <CheckSquare2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-1" />
                    <p className="text-body leading-relaxed text-text-primary">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[28px] bg-white p-6 shadow-card lg:p-8"
        >
          <div className="space-y-5">
            <div>
              <p className="mb-4 text-xl font-semibold text-text-primary lg:text-2xl">
                Где работают выпускники-методологи:
              </p>
              <div className="flex flex-wrap gap-3">
                {employers.map((name) => (
                  <div
                    key={name}
                    className="rounded-xl border-2 border-orange-1 bg-white px-4 py-2 text-sm font-bold text-text-primary shadow-sm lg:text-base"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 border-orange-1 bg-white p-4 shadow-sm lg:p-5">
              <div className="flex items-start gap-3">
                <Quote className="mt-1 h-7 w-7 flex-shrink-0 text-orange-1" />
                <p className="text-lg leading-relaxed text-text-primary lg:text-xl">
                  «Анастасия Ланговая: запустила свой мастермайнд, создала 4 продукта,
                  заработала около 300 000 рублей, окупила курс до его завершения»
                </p>
              </div>
            </div>

            <div className="pt-1 text-center">
              <a href="#pricing">
                <Button variant="primary" size="lg" className="min-w-[280px] max-w-full">
                  Пройти курс и получить востребованную профессию
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
