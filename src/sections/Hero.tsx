"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { COURSE_START_DATE, COURSE_START_DATE_RAW } from "@/lib/constants";
import { Award, BookOpen, Calendar, ChevronDown, Globe, Target, X } from "lucide-react";
import Image from "next/image";

const authorFacts = [
  "EdTech-предприниматель, основатель крупнейшей школы по методологии и методического агентства.",
  "Архитектор и генеральный продюсер крупнейшего акселератора для предпринимателей Бизнес 360 в Сбере (40 000 участников).",
  "3 высших образования в сфере педагогики и обучения, выпускница Сколково.",
  "Консультант и тренер СБЕР, РОСНЕФТЬ, Норникель, Nestle, X5, ВкусВилл и других компаний.",
  "Вице-президент Ассоциации Спикеров СНГ.",
  "5 премий за вклад в образование и победа в номинации «Лучшая школа методологии».",
];

const heroStats = [
  { value: "15", label: "потоков курса", icon: BookOpen },
  { value: ">40 000", label: "выпускников из 50 стран", icon: Globe },
  { value: "98-100%", label: "учеников с результатом", icon: Target },
  { value: "5", label: "премий за вклад в образование", icon: Award },
];

export function Hero() {
  const [isFactsOpen, setIsFactsOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section className="relative z-20 overflow-x-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF4D1_38%,rgba(255,167,0,0.72)_100%)] py-8 lg:py-10">
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
        <div className="grid items-center gap-7 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_430px] xl:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative z-10 space-y-4 text-left lg:space-y-5"
          >
            <div className="space-y-3 lg:space-y-4">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="inline-flex max-w-full items-center gap-3 rounded-full border-2 border-orange-1 bg-white px-4 py-2 text-sm font-semibold text-orange-1 shadow-sm">
                  <Award className="h-4 w-4 flex-shrink-0" />
                  <span>Легендарный курс Академии методологии Александры Горевой-Куртышевой</span>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex max-w-full items-center gap-3 rounded-xl border-2 border-orange-1 bg-orange-1 px-5 py-2.5 font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Calendar className="h-5 w-5 flex-shrink-0 text-white" />
                  <span>Старт 16-го потока: {COURSE_START_DATE}</span>
                </motion.div>
              </div>

              <h1 className="font-heading text-5xl font-black leading-tight tracking-tight text-text-primary uppercase md:text-7xl lg:text-8xl">
                МЕТОД
                <span className="text-gradient-orange">ОЛОГИЯ</span>
              </h1>

              <p className="max-w-4xl text-xl font-bold text-text-primary lg:w-[880px] lg:text-[23px] xl:text-2xl">
                <span className="lg:hidden">
                  Пошаговая система создания онлайн-курсов и продуктовых линеек для экспертов и предпринимателей
                </span>
                <span className="hidden lg:inline">
                  Пошаговая система создания онлайн-курсов и
                  <br />
                  <span className="whitespace-nowrap">продуктовых линеек для экспертов и предпринимателей</span>
                </span>
              </p>

            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.34 }}
              className="flex w-full flex-col items-start gap-4 pt-1 lg:w-[calc(100%+150px)] lg:max-w-none lg:flex-row lg:items-center xl:w-[calc(100%+165px)]"
            >
              <a href="#program" className="w-full lg:flex-[1_1_500px] xl:flex-[1_1_530px]">
                <Button variant="primary" size="lg" className="min-h-[68px] w-full px-8 text-lg shadow-[0_18px_36px_rgba(229,138,0,0.3)] lg:text-xl">
                  Посмотреть программу обучения
                </Button>
              </a>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="w-full rounded-2xl border border-orange-1/25 bg-white/78 px-5 py-3.5 shadow-sm backdrop-blur-sm lg:w-[340px] lg:flex-none"
              >
                <p className="mb-2 text-sm font-semibold text-text-secondary">
                  До старта курса:
                </p>
                <CountdownTimer targetDate={COURSE_START_DATE_RAW} compact />
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 pt-2 lg:w-[calc(100%+150px)] lg:max-w-none lg:grid-cols-4 lg:gap-4 xl:w-[calc(100%+165px)]">
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-orange-1/18 bg-white/88 px-5 py-5 text-center shadow-[0_10px_24px_rgba(126,74,0,0.12)] backdrop-blur-sm"
                  >
                    <div className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-1 text-white shadow-[0_8px_16px_rgba(255,167,0,0.24)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-heading text-2xl font-black leading-none text-text-primary lg:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mx-auto my-1.5 h-px w-8 bg-orange-1/45" />
                    <p className="text-xs font-semibold leading-tight text-text-primary">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative z-0 mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-[-96px] lg:translate-x-2 xl:max-w-[500px] xl:mr-[-136px] xl:translate-x-3"
          >
            <div className="relative overflow-visible rounded-[30px] border-2 border-orange-1 bg-white/90 p-3 shadow-card backdrop-blur-sm">
              <div className="relative min-h-[575px] rounded-[24px] bg-[#FFF6DF] shadow-sm xl:min-h-[600px]">
                <Image
                  src="/images/1 блок.jpg"
                  alt="Александра Горева-Куртышева"
                  fill
                  className="rounded-[24px] object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 rounded-b-[24px] bg-gradient-to-t from-black/78 via-black/34 to-transparent px-5 pb-5 pt-28 text-center">
                  <h2 className="font-heading text-2xl font-bold leading-tight text-white">
                    Александра Горева-Куртышева
                  </h2>
                  <p className="mx-auto mt-2 max-w-[270px] text-sm leading-relaxed text-white/86">
                    Автор курса и основатель Академии методологии
                  </p>
                  <div className="relative mx-auto mt-4 max-w-[290px] rounded-2xl border-2 border-orange-1 bg-white text-left shadow-sm">
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

                  </div>
                </div>
                <AnimatePresence>
                  {isFactsOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: 18, scale: 0.98 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 18, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute bottom-4 left-4 right-4 z-40 max-h-[56%] overflow-y-auto rounded-[22px] border-2 border-orange-1 bg-white/96 p-4 pr-12 text-left shadow-card backdrop-blur-sm"
                    >
                      <button
                        type="button"
                        onClick={() => setIsFactsOpen(false)}
                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-1 text-white shadow-sm transition-transform hover:scale-105"
                        aria-label="Закрыть регалии"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <div className="space-y-3">
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
