"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionBackground } from "@/components/SectionBackground";
import { ArrowRight, CheckSquare2, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const requests = [
  "Не понимаю, как упаковать весь свой огромный опыт в простые и понятные уроки.",
  "Ученики сливаются после 3-го урока, перестают выходить на связь и выполнять домашки.",
  "Я развиваюсь в двух разных нишах. Не понимаю, как определить своё позиционирование и какой продукт создать.",
  "Я уже пробовал запускать курс, но никто не купил, думаю, что большие курсы не для меня.",
  "Хочу развиваться как эксперт, а вместо этого приходится 24/7 продавать в блоге, чтобы были клиенты.",
  "Чтобы заработать больше, надо проводить больше консультаций, а в сутках только 24 часа.",
];

const outcomes = [
  "имеет чёткую структуру",
  "удерживает учеников до конца",
  "продаётся и рекомендуется друзьям",
];

export function ExpertResults() {
  return (
    <section id="expert-results" className="relative overflow-hidden bg-[#F8F5EF] py-10 lg:py-12">
      <Container className="relative z-20 space-y-8 lg:space-y-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden space-y-6 rounded-[28px] bg-[#FFA700] p-6 shadow-card lg:space-y-7 lg:p-8"
        >
          <SectionBackground
            src="/background/IMAGE 2026-05-05 01:30:38.jpg"
            variant="orange"
            position="object-[center_56%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#C77E00] via-[#C77E00] to-[#C77E00]/0"
          />
          <div className="relative z-20 space-y-6 lg:space-y-7">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="mb-4 font-heading text-2xl font-black leading-tight text-white lg:text-4xl">
                Вы — эксперт. Ваши знания стоят миллионы. Но без методологии они так и останутся в вашей голове
              </h2>
              <p className="mx-auto max-w-4xl text-body italic text-white/90">
                Курс «Методология» превращает хаос вашей экспертизы в продукт,
                который ученики проходят до конца и приводят друзей.
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <p className="mb-5 text-center text-xl font-bold text-white lg:text-2xl">
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
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="rounded-2xl border-2 border-white bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <div className="flex items-start gap-3">
                      <CheckSquare2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-1" />
                      <p className="text-body italic leading-relaxed text-text-primary">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-7 rounded-b-[28px] bg-[#C77E00]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto max-w-6xl space-y-5 rounded-[28px] bg-[#FFA700] p-5 shadow-card lg:p-6"
        >
          <div className="rounded-2xl border-2 border-white bg-white p-4 shadow-sm lg:p-5">
            <p className="text-body italic leading-relaxed text-text-primary">
              Вы выходите с курса с готовым продуктом: курс/тренинг/мастермайнд/наставничество, который:
            </p>

            <div className="my-6 space-y-3 pl-2 lg:pl-6">
              {outcomes.map((item, index) => (
                <motion.div
                  key={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-orange-1" />
                  <p className="text-body italic text-text-primary">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-xl bg-orange-1 px-4 py-4 shadow-md">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                <p className="text-body italic font-semibold leading-relaxed text-white">
                  и сформированной продуктовой линейкой (3-4 тариф), в которой
                  клиенты развиваются, покупая все ваши продукты
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border-2 border-white bg-white p-4 shadow-sm lg:p-5">
              <div className="flex items-start gap-3">
                <Quote className="mt-1 h-7 w-7 flex-shrink-0 text-orange-1" />
                <div>
                  <p className="text-body leading-relaxed text-text-primary">
                    «Константин Воробьёв, основатель школы плавания: разработал
                    онлайн-курс и заработал на нём около 2 000 000 рублей»
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1 text-center">
              <a href="#pricing">
                <Button variant="primary" size="lg" className="min-w-[280px] max-w-full">
                  Пройти курс и создать свой продукт
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
