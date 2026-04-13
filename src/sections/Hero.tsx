"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { COURSE_START_DATE, COURSE_START_DATE_RAW } from "@/lib/constants";
import { Award, Calendar, ChevronDown, ShieldCheck, Users } from "lucide-react";

const authorFacts = [
  "EdTech-предприниматель, основатель крупнейшей школы по методологии и методического агентства.",
  "Генеральный продюсер и архитектор СБЕР Акселератора 360 на 40 000 предпринимателей.",
  "3 высших образования в сфере педагогики и обучения, выпускница Сколково.",
  "Консультант и тренер СБЕР, РОСНЕФТЬ, Норникель, Nestle, X5, ВкусВилл и других компаний.",
  "Вице-президент Ассоциации Спикеров СНГ.",
  "5 премий за вклад в образование и победа в номинации «Лучшая школа методологии».",
];

export function Hero() {
  const [isFactsOpen, setIsFactsOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF4D1_38%,rgba(255,167,0,0.72)_100%)] py-12 lg:py-16">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
      >
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-orange-1 to-orange-3 opacity-20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 h-56 w-56 rounded-full bg-gradient-to-br from-orange-2 to-orange-1 opacity-25 blur-3xl animate-float-slower" />
        <div className="absolute left-1/3 top-1/2 h-40 w-40 rounded-full bg-gradient-to-br from-orange-3 to-orange-1 opacity-15 blur-2xl animate-float-slower" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 -z-10 lg:hidden">
        <div className="absolute right-5 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-1 to-orange-2 opacity-20 blur-2xl animate-float-slow" />
        <div className="absolute bottom-40 left-5 h-32 w-32 rounded-full bg-gradient-to-br from-orange-2 to-orange-3 opacity-15 blur-2xl animate-float-slower" />
      </div>

      <Container>
        <div className="grid min-h-[72vh] items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-5 text-center lg:space-y-6"
          >
            <div className="space-y-4 lg:space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border-2 border-orange-1 bg-white px-4 py-2 text-sm font-semibold text-orange-1 shadow-sm">
                <Award className="h-4 w-4" />
                <span>Легендарный курс Академии Александры Горевой-Куртышевой</span>
              </div>

              <h1 className="font-heading text-5xl font-black leading-tight tracking-tight text-text-primary uppercase md:text-7xl lg:text-8xl">
                МЕТОД
                <span className="text-gradient-orange">ОЛОГИЯ</span>
              </h1>

              <p className="mx-auto max-w-3xl text-xl font-bold text-text-primary lg:text-2xl">
                Пошаговая система создания онлайн-курсов и продуктовых линеек для
                экспертов и предпринимателей
              </p>

              <p className="mx-auto max-w-3xl text-lg text-text-secondary lg:text-xl">
                Чтобы ваши курсы покупали, проходили до результата и
                рекомендовали другим.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-3 rounded-xl border-2 border-orange-1 bg-orange-1 px-6 py-3 font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Calendar className="h-5 w-5 text-white" />
              <span>Старт 16-го потока: {COURSE_START_DATE}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="space-y-3"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
                До старта осталось:
              </p>
              <CountdownTimer targetDate={COURSE_START_DATE_RAW} />
            </motion.div>

            <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-orange-1 bg-white px-4 py-2 text-sm font-semibold text-orange-1 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <Users className="h-4 w-4" />
                <span>Осталось 12 мест на поток</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-orange-1 bg-white px-4 py-2 text-sm font-semibold text-text-primary shadow-sm"
              >
                <ShieldCheck className="h-4 w-4 text-orange-1" />
                <span>Проверено GetCourse</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="pt-2"
            >
              <a href="#pricing">
                <Button variant="primary" size="lg">
                  Иду на курс
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mx-auto w-full max-w-[420px]"
          >
            <div className="rounded-[32px] border-2 border-orange-1 bg-white/90 p-5 shadow-card backdrop-blur-sm">
              <div className="rounded-[28px] border-2 border-dashed border-orange-1/70 bg-white p-5">
                <div className="rounded-[24px] border border-orange-1/20 bg-white px-5 py-6 text-center shadow-sm">
                  <div className="space-y-4">
                    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-orange-1 text-white shadow-md">
                      <span className="font-heading text-4xl font-black">АГ</span>
                    </div>

                    <div>
                      <h2 className="font-heading text-2xl font-bold text-text-primary">
                        Александра Горева-Куртышева
                      </h2>
                      <p className="mt-2 text-body text-text-secondary">
                        Автор курса и основатель Академии методологии
                      </p>
                    </div>

                    <div className="rounded-2xl border-2 border-orange-1 bg-white text-left shadow-sm">
                      <button
                        type="button"
                        onClick={() => setIsFactsOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                        aria-expanded={isFactsOpen}
                      >
                        <span className="font-semibold text-text-primary">
                          Почему Александре доверяют
                        </span>
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full bg-orange-1 transition-transform duration-300 ${isFactsOpen ? "rotate-180" : ""}`}
                        >
                          <ChevronDown className="h-5 w-5 text-white" />
                        </span>
                      </button>

                      <AnimatePresence>
                        {isFactsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-3 px-4 pb-4">
                              {authorFacts.map((fact) => (
                                <div key={fact} className="flex items-start gap-3">
                                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-1" />
                                  <p className="text-sm leading-relaxed text-text-secondary">
                                    {fact}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
