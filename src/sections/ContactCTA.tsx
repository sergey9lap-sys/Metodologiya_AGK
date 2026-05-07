"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionBackground } from "@/components/SectionBackground";
import { ExternalLink, FileText, MessageCircle, Send, MessagesSquare } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const supportLinks = {
  max: "https://agkedu.getcourse.ru/max_subscribe",
  telegram: "https://agkedu.getcourse.ru/tg_subscribe",
  vk: "https://agkedu.getcourse.ru/vk_subscribe",
};

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-12 lg:py-16">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:42.jpg"
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
          className="mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-1 items-center gap-6 rounded-[28px] border-2 border-white/70 bg-[rgba(255,255,255,0.22)] p-5 shadow-card backdrop-blur-sm lg:grid-cols-[420px_1fr] lg:gap-10 lg:p-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mx-auto min-h-[520px] w-full max-w-[420px] overflow-hidden rounded-[24px] shadow-card lg:min-h-[620px]"
            >
              <Image
                src="/images/botagkclub-portrait.png"
                alt="Служба заботы Академии"
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 font-semibold text-orange-1 shadow-md">
                <MessageCircle className="h-5 w-5" />
                <span>Служба заботы</span>
              </div>

              <h2 className="font-heading text-3xl font-black uppercase text-text-primary lg:text-4xl">
                Присоединяйтесь к курсу «Методология»
              </h2>

              <p className="mx-auto max-w-2xl text-lg text-text-primary lg:mx-0 lg:text-xl">
                Поможем выбрать тариф, ответим на вопросы по обучению и подскажем,
                какой формат подойдёт именно вам.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                <a
                  href={supportLinks.max}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="w-full">
                    <MessagesSquare className="mr-2 h-5 w-5" />
                    Макс
                  </Button>
                </a>

                <a
                  href={supportLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Телеграм
                  </Button>
                </a>

                <a
                  href={supportLinks.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="w-full">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    ВКонтакте
                  </Button>
                </a>
              </div>

              <a
                href="https://islod.obrnadzor.gov.ru/rlic/details/6009a6d6-0d6f-7d9f-197f-9f9286292347/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border-2 border-white/80 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-1 hover:shadow-card"
              >
                <div className="mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-1" />
                  <p className="font-bold text-text-primary">Лицензия и документы</p>
                </div>
                <p className="text-sm text-text-secondary">
                  Внизу страницы доступны оферта, политика конфиденциальности и
                  основные данные Академии.
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-orange-1 transition-colors">
                  Проверить лицензию в реестре
                  <ExternalLink className="h-4 w-4" />
                </span>
              </a>

              <p className="text-sm text-text-primary/80 lg:text-base">
                Обычно отвечаем быстро в рабочее время и помогаем довести вопрос до результата.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
