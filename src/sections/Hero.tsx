"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { motion, useScroll, useTransform } from "framer-motion";
import { COURSE_START_DATE, COURSE_START_DATE_RAW } from "@/lib/constants";
import { Calendar, Users } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF4D1_38%,rgba(255,167,0,0.72)_100%)] py-12 lg:py-16 relative overflow-hidden">
      {/* Floating decorative elements - desktop only with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10 hidden lg:block pointer-events-none"
      >
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-orange-1 to-orange-3 rounded-full blur-3xl opacity-20 animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-orange-2 to-orange-1 rounded-full blur-3xl opacity-25 animate-float-slower" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-br from-orange-3 to-orange-1 rounded-full blur-2xl opacity-15 animate-float-slower" />
      </motion.div>

      {/* Mobile decorative elements (no parallax) */}
      <div className="absolute inset-0 -z-10 lg:hidden pointer-events-none">
        <div className="absolute top-10 right-5 w-40 h-40 bg-gradient-to-br from-orange-1 to-orange-2 rounded-full blur-2xl opacity-20 animate-float-slow" />
        <div className="absolute bottom-40 left-5 w-32 h-32 bg-gradient-to-br from-orange-2 to-orange-3 rounded-full blur-2xl opacity-15 animate-float-slower" />
      </div>

      <Container>
        <div className="max-w-2xl mx-auto lg:max-w-4xl flex flex-col items-center justify-center min-h-[62vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-5 lg:space-y-6 text-center"
          >
            <div className="space-y-4 lg:space-y-5">
              <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-text-primary text-center leading-tight tracking-tight uppercase">
                МЕТОД
                <span className="text-gradient-orange">ОЛОГИЯ</span>
              </h1>
              <p className="text-xl lg:text-2xl text-text-primary font-bold">
                Создай востребованный продукт и стань{" "}
                <span>Учителем с большой буквы</span>
              </p>
              <p className="text-text-secondary text-lg lg:text-xl max-w-2xl mx-auto">
                Научитесь доводить до результата минимум 98% учеников за счёт
                грамотного донесения идей и управления процессом обучения
              </p>
            </div>

            {/* Start date badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-orange-1 border-2 border-orange-1 text-white font-bold shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Старт: {COURSE_START_DATE}</span>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="space-y-3"
            >
              <p className="text-text-secondary text-sm font-semibold uppercase tracking-wide">
                До старта осталось:
              </p>
              <CountdownTimer targetDate={COURSE_START_DATE_RAW} />
            </motion.div>

            {/* Scarcity indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-orange-1 text-orange-1 font-semibold text-sm shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
            >
              <Users className="w-4 h-4" />
              <span>Осталось 12 мест на поток</span>
            </motion.div>

            {/* CTA */}
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
        </div>
      </Container>
    </section>
  );
}
