"use client";

import { Container } from "@/components/ui/Container";
import { Briefcase, CheckSquare2, CircleDollarSign, Target } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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

export function MethodologistCareer() {
  return (
    <section id="methodologist-career" className="relative overflow-hidden bg-[#FFA700] py-10 lg:py-12">
      <Image
        src="/background/8 блок.jpg"
        alt=""
        aria-hidden="true"
        width={1040}
        height={1320}
        sizes="(min-width: 1024px) 40vw, 105vw"
        className="pointer-events-none absolute right-[-45%] top-1/2 z-0 w-[105%] max-w-[560px] -translate-y-1/2 select-none object-contain opacity-[0.28] brightness-[1.08] contrast-[1.18] [mask-image:linear-gradient(to_left,black_88%,transparent_100%)] lg:right-[-1%] lg:w-[42%] lg:opacity-[0.62] [-webkit-mask-image:linear-gradient(to_left,black_88%,transparent_100%)]"
      />
      <Container className="relative z-20 space-y-6 lg:space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] bg-white p-6 shadow-card lg:p-8"
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
                  key={item.text}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border-2 border-orange-1 bg-orange-1 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <p className="text-body font-semibold text-white">{item.text}</p>
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
