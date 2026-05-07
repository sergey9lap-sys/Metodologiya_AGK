"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionBackground } from "@/components/SectionBackground";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Надежда Логинова",
    role: "автор программы «Геном успеха», наставник",
    image: "/images/nadezhda-loginova.jpg",
    result:
      "Пришла с запросом доработать программу и выйти в масштаб. После курса — 100% учеников дошли до конца, все вышли с результатами и оставили отзывы. Финансовый результат — 205 000 ₽.",
  },
  {
    name: "Екатерина Заушицына",
    role: "методолог, кандидат тех. наук",
    image: "/images/ekaterina-zaushitsyna.jpg",
    result:
      "Разобралась в форматах продуктов и выстроила продуктовую воронку. Собрала собственный продукт, к которому не могла приступить 3 года. Финансовый результат — 451 000 ₽.",
  },
  {
    name: "Дарья Кривоженко",
    role: "директор по продуктам, методолог",
    image: "/images/darya-krivozhenko.jpg",
    result:
      "Выстроила продуктовую линейку, усилила курс Нейросети 2.0, запустила марафон, упаковала мастер-класс, прогрев и допродажи. Финансовый результат запуска — 2 765 348 ₽.",
  },
  {
    name: "Алие Насурова",
    role: "нейронутрициолог, фудхакер",
    image: "/images/alie-nasurova.jpg",
    result:
      "Повысила чек в 2 раза. Еще до завершения обучения получила предложение поработать методологом для коллеги-нутрициолога и стать куратором федерального проекта.",
  },
  {
    name: "Диана Семенычева",
    role: "лингвокоуч, AI-архитектор обучения",
    image: "/images/diana-semenecheva.jpg",
    result:
      "Создала две новые продуктовые линейки, запустила продажи интенсивной программы, получила запросы на премиальную личную работу. Финансовый результат — 550 000 ₽.",
  },
  {
    name: "Алиса Задорожная",
    role: "фасилитатор, экс-маркетинг директор Яндекс Дзена",
    image: "/images/alisa-zadorozhnaya.jpg",
    result:
      "Методологически проработала курс «Навыкология», улучшила лекции, домашние задания, геймификацию и запустила второй поток на 45 участников.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:47.jpg"
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
                <div className="flex h-full flex-col">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-orange-1 shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-body font-semibold leading-relaxed text-text-primary">
                    {item.result}
                  </p>
                  <div className="mt-auto min-h-[76px] border-t-2 border-orange-1 pt-3">
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
