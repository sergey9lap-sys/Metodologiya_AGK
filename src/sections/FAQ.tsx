"use client";

import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const faqItems: { question: string; answer: ReactNode }[] = [
  {
    question: "Для кого подходит этот курс?",
    answer:
      "Курс подойдёт экспертам, предпринимателям, наставникам и тем, кто создаёт или усиливает образовательные продукты и хочет выстроить понятную, сильную методологию.",
  },
  {
    question: "Нужен ли опыт в методологии?",
    answer:
      "Нет, специальный опыт не обязателен. Мы идём от базы к системе: вы разберётесь в логике методологии и сможете применять её в своём продукте шаг за шагом.",
  },
  {
    question: "Какой формат обучения?",
    answer:
      "Обучение проходит онлайн. Вас ждут видеоуроки, живые встречи с Александрой и домашние задания с обратной связью от наставников Академии.",
  },
  {
    question: "Сколько длится курс?",
    answer:
      "Продолжительность зависит от выбранного тарифа и вашего темпа. Материалы вы проходите в удобном ритме, а практика и сопровождение помогают не просто посмотреть уроки, а внедрить их в работу.",
  },
  {
    question: "Будет ли обратная связь?",
    answer:
      "Да. На курсе предусмотрена обратная связь по домашним заданиям и поддержка от наставников Академии, чтобы вы не оставались один на один с вопросами.",
  },
  {
    question: "Выдаётся ли сертификат?",
    answer:
      "Да. После прохождения курса выдаётся сертификат Академии методологии.",
  },
  {
    question: "У меня нет команды. Я смогу внедрить это один?",
    answer:
      "Да. Методология нужна не только большим школам и командам. Вы сможете собрать сильную основу продукта самостоятельно, а уже потом масштабировать её вместе с командой.",
  },
  {
    question:
      "У меня уже есть курс или, наоборот, ещё нет флагмана. Мне это подходит?",
    answer:
      "Да. Курс подходит и тем, у кого уже есть продукт и его нужно усилить, и тем, кто только собирает флагман. В первом случае вы пересоберёте структуру, путь ученика и логику результата, во втором создадите крепкую основу для продукта с самого начала.",
  },
  {
    question: "Сколько времени нужно на прохождение?",
    answer:
      "Это зависит от тарифа и вашей скорости внедрения. Базовый путь можно пройти быстрее, а старшие тарифы дают больше сопровождения, практики и глубины.",
  },
  {
    question: "Есть ли рассрочка?",
    answer:
      "Да, для тарифов предусмотрены варианты оплаты в рассрочку. Точную схему поможет подобрать служба заботы.",
  },
  {
    question: "Можно ли сделать возврат, если мне не подойдёт?",
    answer:
      <>
        Да, возврат возможен согласно условиям{" "}
        <a
          href="https://agkedu.getcourse.ru/oferta_club"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-orange-1 underline underline-offset-4"
        >
          оферты
        </a>
        .
      </>,
  },
];

function FAQItem({
  item,
  index,
}: {
  item: (typeof faqItems)[0];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="overflow-hidden rounded-2xl border-2 border-orange-1 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between p-4 lg:p-5">
          <span className="pr-4 text-body font-bold text-text-primary lg:text-lg">
            {item.question}
          </span>
          <div
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <ChevronDown className="h-5 w-5 text-white" />
          </div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 lg:px-5 lg:pb-5">
              <p className="text-body text-text-secondary">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-12 lg:py-16">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center font-heading text-3xl font-black uppercase text-text-primary lg:mb-10 lg:text-4xl"
        >
          Ответы на вопросы, которые вы нам точно зададите
        </motion.h2>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem key={item.question} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
