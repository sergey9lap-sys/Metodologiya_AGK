"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { motion, useScroll, useTransform } from "framer-motion";
import { COURSE_START_DATE, COURSE_START_DATE_RAW } from "@/lib/constants";
import { Award, BookOpen, Calendar, Globe, Target } from "lucide-react";
import Image from "next/image";

const heroStats = [
  { value: "15", label: "потоков курса", icon: BookOpen },
  { value: ">40 000", label: "выпускников из 50 стран", icon: Globe },
  { value: "98-100%", label: "учеников с результатом", icon: Target },
  { value: "5", label: "премий за вклад в образование", icon: Award },
];

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -80]);

  return (
    <section className="relative z-20 overflow-hidden bg-[#F2E5C5] py-8 lg:py-10">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[46vw] lg:block"
      >
        <Image
          src="/images/blok-1.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="46vw"
          className="object-cover object-top"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 8%, rgba(0,0,0,0.72) 20%, #000 34%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 8%, rgba(0,0,0,0.72) 20%, #000 34%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,229,197,0.62)_0%,rgba(242,229,197,0.08)_34%,rgba(58,0,12,0.14)_100%)]" />
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,#F2E5C5_0%,#F2E5C5_55%,rgba(242,229,197,0.42)_70%,rgba(242,229,197,0.03)_100%)]" />

      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 lg:min-h-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="max-w-[780px] space-y-4 text-left lg:space-y-5"
          >
            <div className="space-y-3 lg:space-y-4">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="inline-flex max-w-full items-center gap-3 rounded-[22px] border border-orange-1/28 bg-[#F7EBCF]/86 px-4 py-2 text-sm font-semibold leading-snug text-orange-1 shadow-sm backdrop-blur-sm sm:rounded-full">
                  <Award className="h-4 w-4 flex-shrink-0" />
                  <span className="min-w-0 break-words">Легендарный курс Академии методологии Александры Горевой-Куртышевой</span>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex max-w-full items-center gap-3 rounded-xl border border-[#F2E5C5]/28 bg-orange-1 px-5 py-2.5 font-bold leading-snug text-[#F7EBCF] shadow-md transition-all hover:-translate-y-0.5 hover:bg-orange-2 hover:shadow-lg"
                >
                  <Calendar className="h-5 w-5 flex-shrink-0 text-white" />
                  <span className="min-w-0 break-words">Старт 16-го потока: {COURSE_START_DATE}</span>
                </motion.div>
              </div>

              <h1 className="whitespace-nowrap font-heading text-[44px] font-black leading-[0.9] tracking-normal text-text-primary uppercase sm:text-6xl md:text-7xl lg:text-[86px] xl:text-[98px]">
                МЕТОД
                <span className="text-gradient-orange">ОЛОГИЯ</span>
              </h1>

              <p className="max-w-[760px] text-xl font-bold text-text-primary lg:text-[23px] xl:text-2xl">
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
              className="flex w-full flex-col items-start gap-4 pt-1 lg:max-w-none lg:flex-row lg:items-center"
            >
              <a href="#program" className="w-full lg:flex-[1_1_430px]">
                <Button variant="primary" size="lg" className="min-h-[68px] w-full px-8 text-lg lg:text-xl">
                  Посмотреть программу обучения
                </Button>
              </a>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="w-full rounded-2xl border border-orange-1/25 bg-[#F7EBCF]/84 px-5 py-3.5 shadow-sm backdrop-blur-sm lg:w-[340px] lg:flex-none"
              >
                <p className="mb-2 text-sm font-semibold text-text-secondary">
                  До старта курса:
                </p>
                <CountdownTimer targetDate={COURSE_START_DATE_RAW} compact />
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 pt-2 lg:max-w-none lg:grid-cols-4 lg:gap-4">
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-orange-1/18 bg-[#F7EBCF]/86 px-5 py-5 text-center shadow-[0_10px_24px_rgba(85,11,24,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-2/42"
                  >
                    <div className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-1 text-[#F7EBCF] shadow-[0_8px_16px_rgba(85,11,24,0.24)]">
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
        </div>
      </Container>
    </section>
  );
}
