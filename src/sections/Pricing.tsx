"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionBackground } from "@/components/SectionBackground";
import { ArrowRight, Check, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { COURSE_START_DATE } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const tariffs = [
  {
    number: "1 тариф",
    name: "БАЗОВЫЙ",
    duration: "3 недели",
    format: "Стартовая сборка продукта с поддержкой",
    price: 69900,
    spotsLeft: null,
    features: [
      "Предобучение перед стартом курса",
      "Уроки в записи в рамках тарифа",
      "3 практические Zoom-сессии с Александрой",
      "Домашние задания и обратная связь в подгруппах",
      "Декомпозиция образовательного продукта под контролем наставников",
      "Формирование продукта и применение инструментов базовой методологии",
      "Защита проекта на живой сессии с наставниками",
      "Доступ к материалам курса 30 дней",
    ],
    highlighted: false,
  },
  {
    number: "2 тариф",
    name: "ОПТИМАЛЬНЫЙ",
    duration: "5 недель",
    format: "Больше практики и защита проекта",
    price: 124900,
    spotsLeft: null,
    features: [
      "Всё из базового тарифа",
      "5 практических Zoom-сессий с Александрой",
      "Индивидуальная и групповая работа с наставниками в подгруппах",
      "Подробный план продукта и фиксация практических заданий",
      "Проработка контрольных мероприятий на хакатоне",
      "Защита проекта с наставником",
      "Доступ к материалам курса 60 дней",
    ],
    highlighted: false,
  },
  {
    number: "3 тариф",
    name: "МАСТЕР",
    duration: "8 недель",
    format: "Стратегия линейки и разборы проекта",
    price: 194900,
    spotsLeft: 5,
    features: [
      "Всё из тарифа «Оптимальный»",
      "8 практических Zoom-сессий с Александрой",
      "Стратегическое построение продуктовой линейки в подгруппах",
      "Разбор продающих элементов внутри образовательного процесса",
      "Разборы и предзащита проектов с наставниками",
      "Итоговая защита проекта и обратная связь лично от Александры",
      "Доступ к материалам курса 90 дней",
    ],
    highlighted: true,
  },
  {
    number: "4 тариф",
    name: "ВИП",
    duration: "10 недель",
    format: "Персональная стратегия с Александрой",
    price: 400000,
    spotsLeft: 3,
    features: [
      "Всё из тарифа «Мастер»",
      "9 практических Zoom-сессий с Александрой",
      "Итоговая защита проекта и обратная связь лично от Александры",
      "Две персональные стратегические сессии с Александрой",
      "Совместная разработка продуктовой линейки, флагмана и стратегии запуска",
      "Личный ВИП-наставник и отдельный приватный чат с Александрой",
      "Возможность подключить команду к программе: 1 + 2 участника по согласованию",
      "Личная рекомендация подрядчиков под задачи запуска",
      "Доступ к материалам курса 120 дней",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-black py-12 lg:py-16">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:29.jpg"
        variant="orange"
        position="object-bottom"
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
            Тарифы
          </h2>
          <p className="text-lg font-medium text-text-primary">Старт: {COURSE_START_DATE}</p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {tariffs.map((tariff, index) => (
            <motion.div
              key={tariff.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                variant={tariff.highlighted ? "accent" : "default"}
                className={`relative h-full overflow-hidden border-white/80 bg-white/96 p-0 ${
                  tariff.highlighted ? "scale-[1.02] ring-2 ring-orange-1" : ""
                }`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-1/12 blur-2xl"
                />
                {tariff.highlighted && (
                  <div className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full bg-orange-1 px-4 py-2 text-xs font-bold text-white shadow-lg">
                    <Star className="h-4 w-4 fill-white" />
                    Рекомендуем
                  </div>
                )}

                <div className="relative flex h-full flex-col">
                  <div className="border-b border-orange-1/20 bg-[linear-gradient(135deg,#fff,#FFF4D1)] px-5 py-5 lg:px-6">
                    <p className="mb-2 text-sm font-black uppercase tracking-wide text-orange-1">
                      {tariff.number}
                    </p>
                    <h3 className="font-heading text-2xl font-black text-text-primary lg:text-3xl">
                      {tariff.name}
                    </h3>
                    <p className="mt-1 text-base font-bold text-orange-1">{tariff.duration}</p>
                    <p className="mt-3 text-sm font-semibold text-text-secondary">
                      {tariff.format}
                    </p>
                    <div className="mt-5 flex items-end justify-between gap-4">
                      <span className="font-heading text-4xl font-black leading-none text-text-primary lg:text-5xl">
                        {tariff.price.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-5 py-5 lg:px-6">
                    {tariff.spotsLeft && (
                      <div className="animate-pulse-glow mb-4 flex items-center gap-2 rounded-xl border border-orange-1 bg-orange-1 px-3 py-2 text-sm font-bold text-white shadow-md">
                        <Users className="h-4 w-4" />
                        <span>Осталось {tariff.spotsLeft} мест</span>
                      </div>
                    )}

                    <div className="min-h-[308px] flex-1 space-y-3 lg:min-h-[336px]">
                      {tariff.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-1">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm leading-relaxed text-text-secondary">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a href="#contact" className="mt-auto block pt-6">
                      <Button
                        variant="primary"
                        className="group w-full shadow-[0_10px_28px_rgba(255,167,0,0.34)]"
                      >
                        Записаться на курс
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
