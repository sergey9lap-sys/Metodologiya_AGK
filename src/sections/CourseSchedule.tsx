"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionBackground } from "@/components/SectionBackground";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const schedule = [
  {
    title: "1 тариф",
    items: [
      "Лекция с Александрой Горевой-Куртышевой «Основы проектирования топовых образовательных продуктов: реалии 2026»",
      "Уроки в записи первого модуля обучения",
      "Практика в zoom с Александрой Горевой-Куртышевой «Продуктовая линейка на миллион»",
      "Индивидуальные сессии с наставниками, формирование индивидуального плана обучения, обсуждение проекта на защиту",
      "Практика в zoom с Александрой Горевой-Куртышевой «Продукт, который продает себя сам: тема, модули, продуктовое обещание, ИКР»",
      "Сессия с наставниками по детальной декомпозиции образовательного продукта",
      "Практика в zoom с Александрой Горевой-Куртышевой «Мастерство автора: как выбрать идеальную форму и ритм работы»",
      "Разборы проектов с наставниками и защиты (для участников 1 тарифа)",
    ],
  },
  {
    title: "2 тариф",
    items: [
      "Практика в zoom с Александрой Горевой-Куртышевой «Секретные приёмы в создании продукта: домашние задания, геймификация, сквозные проекты, ИИ»",
      "Уроки в записи второго модуля обучения",
      "Сессия с наставниками по уточнению продукта через мастерство автора",
      "Сессия с наставниками по формированию подробного плана продукта",
      "Практика в zoom с Александрой Горевой-Куртышевой «Идеальный урок: как стать незабываемым тем самым Мастером с большой буквы. Фишки управления вниманием»",
      "Фиксация практических и контрольных заданий на хакатоне с наставниками, докрутка уроков",
      "Разборы проектов с наставниками и защиты (для участников 2 тарифа)",
    ],
  },
  {
    title: "3 / 4 тариф",
    items: [
      "Практика в zoom с Александрой Горевой-Куртышевой «Богатый эксперт / бедный эксперт: стратегическая методология на страже вашего благополучия»",
      "Уроки в записи третьего модуля обучения",
      "Сессия с наставниками по стратегической методологии",
      "Практика в zoom с Александрой Горевой-Куртышевой «Продающая методология: механики внутри продукта, которые создаются один раз, а работают постоянно»",
      "Индивидуальные разборы продающих элементов с наставниками в группе",
      "Разборы и предзащита проектов с наставниками",
      "Итоговые защиты тарифа 3-4 и обратная связь лично от Александры Горевой-Куртышевой",
    ],
  },
];

export function CourseSchedule() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:31:03.jpg"
        variant="light"
        position="object-center"
      />
      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center lg:mb-10"
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-orange-1">
            Методология 16.0
          </p>
          <h2 className="font-heading text-3xl font-black uppercase text-text-primary lg:text-4xl">
            Расписание
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {schedule.map((tariff, index) => (
            <motion.div
              key={tariff.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-orange-1/80 bg-white/96 shadow-card-hover">
                <div className="mb-5 inline-flex rounded-full bg-orange-1 px-4 py-2 text-sm font-black uppercase text-white shadow-soft">
                  {tariff.title}
                </div>
                <div className="space-y-4">
                  {tariff.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-1" />
                      <p className="text-sm font-semibold leading-relaxed text-text-primary">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
