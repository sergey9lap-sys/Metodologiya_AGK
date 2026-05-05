"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionBackground } from "@/components/SectionBackground";
import { ArrowRight, CheckSquare2, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const items = [
  "Хочу точно понимать путь клиента, чтобы вести его по шагам внутри продуктовой линейки.",
  "Хочу внедрить кураторов на курс, но опасаюсь, что качество обучения от этого пострадает.",
  "Не получается масштабировать проект, зависаю в операционке, много завязано на личной работе.",
  "Команда постоянно проваливается в тесты гипотез без фокуса на результат.",
  "Не получается управлять командой без нравоучений.",
  "Планёрки длятся в 3-4 раза дольше, чем нужно: разговоров много, результата и плана действий нет.",
];

export function EntrepreneurResults() {
  return (
    <section id="entrepreneur-results" className="relative overflow-hidden bg-[#F8F5EF] py-10 lg:py-12">
      <Container className="relative z-20 space-y-6 lg:space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-black leading-tight text-text-primary lg:text-4xl">
            Предприниматель без методологии — как генерал без карты
          </h2>
          <p className="text-body italic text-text-secondary">
            Методология — прокачка системного мышления. Наводит порядок в
            процессах, команде и продуктах.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative overflow-hidden rounded-[28px] bg-[#FFA700] p-6 shadow-card lg:p-8"
        >
          <SectionBackground
            src="/background/IMAGE 2026-05-05 01:30:40.jpg"
            variant="orange"
            position="object-[center_40%]"
          />
          <p className="relative z-20 mb-5 text-center text-lg font-bold text-white lg:text-xl">
            Методология решает запросы:
          </p>

          <div className="relative z-20 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: 0.08 + index * 0.05 }}
                className="rounded-2xl border-2 border-white bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-start gap-3">
                  <CheckSquare2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-1" />
                  <p className="text-body leading-relaxed text-text-primary">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-[28px] bg-white p-5 shadow-card lg:p-6"
        >
          <div className="space-y-4">
            <div className="rounded-2xl bg-orange-1 p-4 shadow-sm lg:p-5">
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                <p className="text-body font-bold leading-relaxed text-white">
                  В тарифе «ВИП» вы можете подключить к обучению свою команду (1+2),
                  чтобы внедрять методологию синхронно.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-orange-1 bg-white p-4 shadow-sm lg:p-5">
              <p className="text-body leading-relaxed text-text-primary">
                Вы научитесь проектировать образовательные продукты и продуктовые
                линейки, которые влияют на мышление людей и приносят устойчивый результат:
                от базовой структуры до стратегической архитектуры.
              </p>
            </div>

            <div className="pt-1 text-center">
              <a href="#pricing">
                <Button variant="primary" size="lg" className="min-w-[280px] max-w-full">
                  Пройти курс и создать систему обучения
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
