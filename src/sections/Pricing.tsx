"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check, Star, Gift, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import { COURSE_START_DATE } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const tariffs = [
  {
    name: "БАЗОВЫЙ",
    duration: "3 недели",
    format: "Работа с наставниками индивидуально и в подгруппах",
    priceNow: 54900,
    priceInstallment: 64900,
    spotsLeft: null,
    results: [
      "Умение применять инструменты и техники базовой методологии",
      "Разработанная архитектура продукта",
    ],
    highlighted: false,
  },
  {
    name: "ОПТИМАЛЬНЫЙ",
    duration: "5 недель",
    format: "Работа с наставниками индивидуально и в подгруппах",
    priceNow: 99900,
    priceInstallment: 114900,
    spotsLeft: null,
    results: [
      "Умение применять инструменты и техники базовой методологии",
      "Разработанная архитектура с детальной программой и поурочным планом",
      "Способность использовать основы геймификации и геймдизайна",
    ],
    highlighted: false,
  },
  {
    name: "МАСТЕР",
    duration: "8 недель",
    format: "Наставники + защита проекта с Александрой",
    priceNow: 154900,
    priceInstallment: 179900,
    spotsLeft: 5,
    results: [
      "Умение применять инструменты базовой и стратегической методологии",
      "Разработанная архитектура с детальной программой и поурочным планом",
      "Построенная стратегическая продуктовая линейка",
      "Инструменты для работы с клиентами",
    ],
    highlighted: true,
  },
  {
    name: "ВИП",
    duration: "10 недель",
    format: "Работа с Александрой лично + наставник",
    priceNow: 350000,
    priceInstallment: 400000,
    spotsLeft: 3,
    results: [
      "Личная супервизия проектов Александрой",
      "Итоговая защита проекта лично от Александры",
      "Все навыки из тарифа МАСТЕР",
      "Полная геймификация + воронка продаж",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-orange-5 py-16 lg:py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-heading font-black text-3xl lg:text-5xl text-text-primary mb-4 uppercase">
            Выбери свой тариф
          </h2>
          <p className="text-text-secondary font-semibold text-lg">Старт: {COURSE_START_DATE}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tariffs.map((tariff, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                variant={tariff.highlighted ? "accent" : "default"}
                className={`h-full relative ${tariff.highlighted ? "ring-2 ring-orange-1 scale-[1.02]" : ""}`}
              >
                {tariff.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-orange-1 text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    Популярный
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <h3 className="font-heading font-black text-xl lg:text-2xl text-text-primary mb-1">
                      {tariff.name}
                    </h3>
                    <p className="text-orange-1 font-bold text-lg">
                      {tariff.duration}
                    </p>
                  </div>

                  {/* Prices */}
                  <div className="space-y-2 pb-4 border-b-2 border-orange-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl lg:text-4xl font-heading font-black text-text-primary">
                        {tariff.priceNow.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">
                      при оплате сразу
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-text-secondary font-semibold">
                        или {tariff.priceInstallment.toLocaleString("ru-RU")} ₽
                      </span>
                      <span className="text-xs text-text-muted">в рассрочку</span>
                    </div>
                  </div>

                  {/* Scarcity indicator */}
                  {tariff.spotsLeft && (
                    <div className="flex items-center gap-2 px-3 py-2 bg-orange-5 rounded-lg text-orange-1 text-sm font-semibold">
                      <Users className="w-4 h-4" />
                      <span>Осталось {tariff.spotsLeft} мест</span>
                    </div>
                  )}

                  <p className="text-text-secondary font-medium">
                    {tariff.format}
                  </p>

                  <div className="space-y-3">
                    {tariff.results.map((result, rIndex) => (
                      <div key={rIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-orange-1 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-text-secondary text-sm font-medium">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a href="#contact">
                      <Button
                        variant={tariff.highlighted ? "primary" : "secondary"}
                        className="w-full"
                      >
                        Записаться на курс
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Grant Program Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="p-6 lg:p-8 rounded-2xl bg-orange-1 flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow-card">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <Gift className="w-8 h-8 text-orange-1" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h4 className="font-heading font-bold text-xl text-white mb-2">
                Грантовая программа
              </h4>
              <p className="text-white/90 text-body">
                Мы поддерживаем молодых специалистов и экспертов с
                социально-значимыми проектами. Вы можете получить частичную
                финансовую субсидию на обучение.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="#contact">
                <Button variant="secondary" size="sm" className="bg-white text-orange-1 border-white hover:bg-orange-4">
                  Узнать подробнее
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
        {/* Guarantee Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div className="p-5 lg:p-6 rounded-2xl bg-white border-2 border-orange-4 flex items-center gap-4 shadow-sm">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-orange-5 flex items-center justify-center">
                <Shield className="w-6 h-6 text-orange-1" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-text-primary mb-1">
                Гарантия результата
              </h4>
              <p className="text-text-secondary text-sm">
                Если после прохождения курса вы не получите результат — мы вернём деньги или предоставим дополнительное обучение бесплатно
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
