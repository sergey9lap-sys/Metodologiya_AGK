"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Quote, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Мария Макош",
    role: "Руководитель, методолог",
    before: "Работала методологом без системы",
    result: "Провела 20 стратегических сессий, получила предложение выступить в ТПП г. Серпухов",
    highlight: null,
  },
  {
    name: "Татьяна Сивкова",
    role: "Владелица школы вязания",
    before: "Вела школу вязания без методологии",
    result: "Усовершенствовала курсы в школе вязания",
    highlight: "400 000+ ₽",
  },
  {
    name: "Константин Воробьев",
    role: "Тренер по плаванию",
    before: "Оффлайн тренер без онлайн-продуктов",
    result: "Разработал онлайн-курс по плаванию",
    highlight: "2 000 000 ₽",
  },
  {
    name: "Анна Алексеева",
    role: "Преподаватель английского языка",
    before: "Преподавала без собственного курса",
    result: "Создала с нуля свой курс, разработала и провела 4 вебинара",
    highlight: null,
  },
  {
    name: "Дарья Кривоженко",
    role: "Директор по продуктам, «Белка.Дизайн»",
    before: "Хотела запустить курсы по нейросетям",
    result: "Разработала 3 курса по нейросетям",
    highlight: "2 765 348 ₽",
  },
  {
    name: "Олеся Пильжис",
    role: "Специалист, ОАО РЖД",
    before: "Нужен был курс повышения квалификации",
    result: "Разработала курс повышения квалификации, одобренный руководством",
    highlight: null,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="font-heading font-black text-3xl lg:text-5xl text-text-primary text-center mb-12 lg:mb-16 uppercase"
        >
          Результаты наших выпускников
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full">
                <div className="space-y-4">
                  <Quote className="w-10 h-10 text-orange-1" />

                  {/* Before */}
                  <p className="text-text-muted text-sm">
                    <span className="font-semibold">До:</span> {item.before}
                  </p>

                  {/* After/Result */}
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-orange-1 flex-shrink-0 mt-0.5" />
                    <p className="text-text-primary text-body leading-relaxed font-semibold">
                      {item.result}
                    </p>
                  </div>

                  {/* Highlight badge */}
                  {item.highlight && (
                    <div className="inline-block px-3 py-1.5 bg-orange-1 text-white text-sm font-bold rounded-lg">
                      {item.highlight}
                    </div>
                  )}

                  <div className="pt-4 border-t-2 border-orange-4">
                    <p className="text-text-primary font-bold">
                      {item.name}
                    </p>
                    <p className="text-orange-1 text-sm font-medium">{item.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA after testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a href="#pricing">
            <Button variant="primary" size="lg">
              Хочу такие же результаты
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
