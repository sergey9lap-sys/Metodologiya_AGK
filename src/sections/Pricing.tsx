"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
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

const TELEGRAM_MANAGER_URL = "https://t.me/lp_sergey";

type PricingProps = {
  title?: string;
  showStartDate?: boolean;
};

export function Pricing({ title = "Тарифы", showStartDate = true }: PricingProps) {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#FFA700] py-12 lg:py-16">
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
            {title}
          </h2>
          {showStartDate && (
            <p className="text-lg font-medium text-text-primary">Старт: {COURSE_START_DATE}</p>
          )}
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                variant="default"
                className={`relative h-full overflow-hidden p-0 ${
                  tariff.highlighted
                    ? "scale-[1.03] border-2 border-[#D63800] bg-[linear-gradient(145deg,rgba(214,56,0,0.92),rgba(214,56,0,0.82)_58%,rgba(255,158,15,0.68))] text-white shadow-[0_18px_46px_rgba(0,0,0,0.14)] backdrop-blur-sm hover:border-[#D63800] hover:shadow-[0_18px_46px_rgba(0,0,0,0.14)]"
                    : "border-white/80 bg-white/96"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-2xl ${
                    tariff.highlighted ? "bg-white/12" : "bg-orange-1/12"
                  }`}
                />
                {tariff.highlighted && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-14 top-24 h-40 w-40 rounded-full bg-white/14 blur-3xl"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.20)_34%,transparent_58%)]"
                    />
                  </>
                )}
                {tariff.highlighted && (
                  <div className="absolute right-2 top-2 z-10 flex items-center gap-1.5 rounded-full border border-white/50 bg-[#7D0000] px-2.5 py-1.5 pl-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(125,0,0,0.38)] ring-2 ring-[#FFF7E6]/75">
                    <span className="relative flex h-5.5 w-5.5 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#FFFFFF_0%,#FFE7A8_32%,#FF9E0F_72%,#D63800_100%)] shadow-[0_0_18px_rgba(255,231,168,0.9)]">
                      <span className="absolute inset-0 rounded-full bg-white/30 blur-[1px]" />
                      <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                      <Star className="relative h-3 w-3 fill-white text-white drop-shadow-sm" />
                    </span>
                    Рекомендуем
                  </div>
                )}

                <div className="relative flex h-full flex-col">
                  <div
                    className={`border-b px-4 py-4 ${
                      tariff.highlighted
                        ? "border-white/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,247,230,0.04))]"
                        : "border-orange-1/20 bg-[linear-gradient(135deg,#fff,#FFF4D1)]"
                    }`}
                  >
                    <p
                      className={`mb-2 text-xs font-black uppercase tracking-wide ${
                        tariff.highlighted ? "text-white/82" : "text-orange-1"
                      }`}
                    >
                      {tariff.number}
                    </p>
                    <h3
                      className={`font-heading text-2xl font-black leading-none ${
                        tariff.highlighted ? "text-[#FFF7E6]" : "text-text-primary"
                      }`}
                    >
                      {tariff.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm font-bold ${
                        tariff.highlighted ? "text-white/86" : "text-orange-1"
                      }`}
                    >
                      {tariff.duration}
                    </p>
                    <p
                      className={`mt-3 min-h-[40px] text-xs font-semibold leading-snug ${
                        tariff.highlighted ? "text-white/78" : "text-text-secondary"
                      }`}
                    >
                      {tariff.format}
                    </p>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <span
                        className={`font-heading text-3xl font-black leading-none xl:text-[34px] ${
                          tariff.highlighted ? "text-white" : "text-text-primary"
                        }`}
                      >
                        {tariff.price.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-4 py-4">
                    {tariff.spotsLeft && (
                      <div
                        className={`animate-pulse-glow mb-3 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-white shadow-md ${
                          tariff.highlighted
                            ? "border border-white/22 bg-white/12"
                            : "border border-orange-1 bg-orange-1"
                        }`}
                      >
                        <Users className="h-3.5 w-3.5" />
                        <span>Осталось {tariff.spotsLeft} мест</span>
                      </div>
                    )}

                    <div className="flex-1 space-y-2.5">
                      {tariff.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <div
                            className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                              tariff.highlighted ? "bg-[#FFF7E6]" : "bg-orange-1"
                            }`}
                          >
                            <Check
                              className={`h-2.5 w-2.5 ${
                                tariff.highlighted ? "text-[#D63800]" : "text-white"
                              }`}
                            />
                          </div>
                          <span
                            className={`text-xs leading-snug ${
                              tariff.highlighted ? "text-white/82" : "text-text-secondary"
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a href="#contact" className="mt-auto block pt-5">
                      <Button
                        variant="primary"
                        className="group w-full px-3 text-sm"
                      >
                        Оставить заявку
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-[24px] border-2 border-[#7D0000]/18 bg-white/96 shadow-[0_16px_42px_rgba(40,25,10,0.12)]"
        >
          <div className="grid items-center gap-5 p-5 md:grid-cols-[1fr_auto] lg:p-7">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-[#7D0000] px-4 py-1.5 text-xs font-black uppercase tracking-wide text-white">
                Спец. предложение только сегодня
              </p>
              <h3 className="font-heading text-2xl font-black uppercase leading-tight text-text-primary lg:text-3xl">
                Продуктовая стратегия 2026:
                <br className="hidden sm:block" />
                что и кому продавать
              </h3>
              <p className="mt-3 text-base font-semibold text-text-secondary">
                Стратегическая сессия для тех, кто хочет быстро собрать ясность
                по продукту, аудитории и следующим продажам.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <div className="font-heading text-4xl font-black leading-none text-[#7D0000]">
                18 000 ₽
              </div>
              <a
                href="https://agkedu.getcourse.ru/pl/lite/widget/editor?id=1600692"
                className="w-full md:w-auto"
              >
                <Button
                  variant="primary"
                  className="group w-full whitespace-nowrap px-6 text-sm md:w-auto"
                >
                  Оставить заявку
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mx-auto mt-4 max-w-6xl rounded-2xl border border-white/55 bg-white/82 p-4 shadow-[0_10px_28px_rgba(40,25,10,0.08)] backdrop-blur-sm"
        >
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-lg font-bold text-text-primary">
              Остались вопросы по тарифам или формату обучения?
            </p>
            <a
              href={TELEGRAM_MANAGER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#7D0000] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(125,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5E0000] hover:shadow-[0_8px_24px_rgba(125,0,0,0.32)] md:w-auto"
            >
              Задать вопрос менеджеру
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
