"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check, Star, Users } from "lucide-react";
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
    format: "Работа с кураторами",
    priceNow: 54900,
    priceInstallment: 64900,
    spotsLeft: null,
    features: [
      "Проработка курса и его структуры",
      "Уроки в записи и домашние задания",
      "3 практические онлайн-сессии с Александрой",
      "Проверка домашних заданий и обратная связь от кураторов",
      "Доступ к материалам курса 60 дней",
      "Подключение к общему чату",
    ],
    highlighted: false,
  },
  {
    name: "ОПТИМАЛЬНЫЙ",
    duration: "5 недель",
    format: "Кураторы + наставники + интервизоры",
    priceNow: 99900,
    priceInstallment: 114900,
    spotsLeft: null,
    features: [
      "Всё из базового тарифа",
      "6 практических онлайн-сессий с Александрой",
      "Обратная связь от кураторов и наставников",
      "Подробная проработка практических и контрольных мероприятий",
      "Защита проекта с наставником",
      "Доступ к интеллект-картам курса",
      "Возможность получить индивидуальный диплом",
    ],
    highlighted: false,
  },
  {
    name: "МАСТЕР",
    duration: "8 недель",
    format: "Наставники + личная защита",
    priceNow: 154900,
    priceInstallment: 179900,
    spotsLeft: 5,
    features: [
      "Всё из тарифа ОПТИМАЛЬНЫЙ",
      "8 практических онлайн-сессий с Александрой",
      "Стратегическое наставничество по продуктовой линейке",
      "Предзащиты и разборы",
      "Итоговая защита проекта",
      "Продлеваемый доступ к материалам",
      "Приоритет на дальнейшее сотрудничество",
    ],
    highlighted: true,
  },
  {
    name: "ВИП",
    duration: "10 недель",
    format: "Персональная работа с Александрой",
    priceNow: 350000,
    priceInstallment: 400000,
    spotsLeft: 3,
    features: [
      "Всё из тарифа МАСТЕР",
      "Две персональные стратегические сессии",
      "Персональный ВИП-наставник",
      "Личное сопровождение в приватном чате",
      "Финальная индивидуальная консультация",
      "Безлимитный доступ к материалам",
      "Подключение команды в зависимости от формата",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#FFA700] py-12 lg:py-16">
      <Container>
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

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
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
                className={`relative h-full ${tariff.highlighted ? "scale-[1.02] ring-2 ring-orange-1" : ""}`}
              >
                {tariff.highlighted && (
                  <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-orange-1 px-5 py-2 text-sm font-bold text-white shadow-lg">
                    <Star className="h-4 w-4 fill-white" />
                    Рекомендуем
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="mb-1 font-heading text-xl font-black text-text-primary lg:text-2xl">
                      {tariff.name}
                    </h3>
                    <p className="text-lg font-bold text-orange-1">{tariff.duration}</p>
                  </div>

                  <div className="space-y-2 border-b-2 border-orange-1 pb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-3xl font-black text-text-primary lg:text-4xl">
                        {tariff.priceNow.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">при оплате сразу</p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="font-semibold text-text-secondary">
                        или {tariff.priceInstallment.toLocaleString("ru-RU")} ₽
                      </span>
                      <span className="text-xs text-text-muted">в рассрочку</span>
                    </div>
                  </div>

                  {tariff.spotsLeft && (
                    <div className="animate-pulse-glow flex items-center gap-2 rounded-lg border border-orange-1 bg-orange-1 px-3 py-2 text-sm font-bold text-white shadow-md">
                      <Users className="h-4 w-4" />
                      <span>Осталось {tariff.spotsLeft} мест</span>
                    </div>
                  )}

                  <p className="font-medium text-text-secondary">{tariff.format}</p>

                  <div className="max-h-[280px] space-y-2.5 overflow-y-auto pr-2">
                    {tariff.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-orange-1">
                          <Check className="h-2.5 w-2.5 text-white" />
                        </div>
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
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
      </Container>
    </section>
  );
}
