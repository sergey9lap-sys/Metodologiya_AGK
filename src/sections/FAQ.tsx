"use client";

import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const faqItems = [
  {
    question: "Для кого подходит этот курс?",
    answer:
      "Курс подходит для начинающих и действующих методологов, экспертов, предпринимателей, продюсеров и проджект-менеджеров, которые хотят создавать сильные образовательные продукты и системно управлять процессом обучения.",
  },
  {
    question: "Нужен ли опыт в методологии?",
    answer:
      "Нет, опыт не обязателен. Курс построен так, чтобы дать фундаментальные знания с нуля. Если у вас уже есть опыт — вы сможете систематизировать его и выйти на новый уровень.",
  },
  {
    question: "Какой формат обучения?",
    answer:
      "Обучение проходит онлайн. Вас ждут видеоуроки, живые встречи с Александрой, домашние задания с обратной связью и доступ в закрытое комьюнити методологов.",
  },
  {
    question: "Сколько длится курс?",
    answer:
      "Длительность зависит от выбранного тарифа: от 3 недель (Базовый) до 10 недель (ВИП). Оставьте заявку, и мы поможем выбрать оптимальный вариант.",
  },
  {
    question: "Будет ли обратная связь?",
    answer:
      "Да, обратная связь — важная часть обучения. Вы будете получать фидбэк по домашним заданиям, а также сможете задавать вопросы на живых встречах с Александрой.",
  },
  {
    question: "Выдаётся ли сертификат?",
    answer:
      "Да, после успешного завершения курса вы получите сертификат от Академии Наставничества, Менторинга и Методологии.",
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
      className="border-2 border-orange-4 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-orange-5 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-text-primary text-body lg:text-lg pr-4">
          {item.question}
        </span>
        <div className={`w-8 h-8 rounded-full bg-orange-1 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown className="w-5 h-5 text-white" />
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
            <div className="px-5 pb-5 lg:px-6 lg:pb-6">
              <p className="text-text-secondary text-body">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 lg:py-24">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="font-heading font-black text-3xl lg:text-5xl text-text-primary text-center mb-12 lg:mb-16 uppercase"
        >
          Часто задаваемые вопросы
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
