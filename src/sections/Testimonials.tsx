"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Константин Воробьёв",
    role: "основатель школы плавания",
    result: "Разработал онлайн-курс и заработал на нём около 2 000 000 рублей.",
  },
  {
    name: "Анастасия Ланговая",
    role: "эксперт",
    result: "Запустила свой мастермайнд, создала 4 продукта и окупила курс до его завершения.",
  },
  {
    name: "Мария Макош",
    role: "методолог, руководитель",
    result: "Провела стратегические сессии, усилила экспертную упаковку и получила новые профессиональные приглашения.",
  },
  {
    name: "Дарья Кривоженко",
    role: "директор по продуктам",
    result: "Собрала новые образовательные продукты и масштабировала направление на основе методологической системы.",
  },
  {
    name: "Анна Алексеева",
    role: "преподаватель английского",
    result: "Создала собственный курс и провела серию вебинаров уже во время обучения.",
  },
  {
    name: "Олеся Пильжис",
    role: "специалист корпоративного обучения",
    result: "Разработала курс повышения квалификации, который одобрили внутри компании.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-4xl text-center lg:mb-10"
        >
          <h2 className="mb-4 font-heading text-3xl font-black uppercase text-text-primary lg:text-4xl">
            Выпускники выходят не с теорией, а с результатом
          </h2>
          <p className="text-body text-text-secondary">
            На курсе рождаются не абстрактные знания, а реальные продукты,
            решения, новые запуски и сильные кейсы.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full border-2 border-orange-1">
                <div className="space-y-4">
                  <Quote className="h-10 w-10 text-orange-1 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-body font-semibold leading-relaxed text-text-primary">
                    {item.result}
                  </p>
                  <div className="border-t-2 border-orange-1 pt-3">
                    <p className="font-bold text-text-primary">{item.name}</p>
                    <p className="text-sm font-medium text-orange-1">{item.role}</p>
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center lg:mt-10"
        >
          <a href="#pricing">
            <Button variant="primary" size="lg">
              Смотреть тарифы
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
