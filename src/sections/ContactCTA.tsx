"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FileText, MessageCircle, Send, MessagesSquare } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ContactCTA() {
  return (
    <section id="contact" className="bg-orange-1 py-12 lg:py-16">
      <Container>
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
                  href={process.env.NEXT_PUBLIC_MAX_SUPPORT_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="w-full border-white bg-white text-orange-1 hover:bg-white hover:text-orange-1">
                    <MessagesSquare className="mr-2 h-5 w-5" />
                    Макс
                  </Button>
                </a>

                <a
                  href={process.env.NEXT_PUBLIC_TG_SUPPORT_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="w-full border-white bg-white text-orange-1 hover:bg-white hover:text-orange-1">
                    <Send className="mr-2 h-5 w-5" />
                    Телеграм
                  </Button>
                </a>

                <a
                  href={process.env.NEXT_PUBLIC_VK_SUPPORT_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="w-full border-white bg-white text-orange-1 hover:bg-white hover:text-orange-1">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    ВКонтакте
                  </Button>
                </a>
              </div>

              <div className="rounded-2xl border-2 border-white/80 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-1" />
                  <p className="font-bold text-text-primary">Лицензия и документы</p>
                </div>
                <p className="text-sm text-text-secondary">
                  Внизу страницы доступны оферта, политика конфиденциальности и
                  основные данные Академии.
                </p>
              </div>

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
