"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Send, MessagesSquare } from "lucide-react";
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
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 lg:gap-10 items-center rounded-[28px] border-2 border-white/70 bg-[rgba(255,255,255,0.22)] backdrop-blur-sm p-5 lg:p-8 shadow-card">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mx-auto w-full max-w-[420px] min-h-[520px] lg:min-h-[620px] rounded-[24px] overflow-hidden shadow-card"
            >
              <Image
                src="/images/botagkclub-portrait.png"
                alt="Служба заботы Академии"
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="text-center lg:text-left space-y-5">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white text-orange-1 font-semibold shadow-md">
                <MessageCircle className="w-5 h-5" />
                <span>Служба заботы</span>
              </div>

              <h2 className="font-heading font-black text-3xl lg:text-5xl text-text-primary uppercase">
                Связаться со службой заботы
              </h2>

              <p className="text-text-primary text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
                Поможем с выбором тарифа, ответим на вопросы по обучению и подскажем,
                какой формат подойдёт именно вам.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={process.env.NEXT_PUBLIC_MAX_SUPPORT_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="w-full bg-white text-orange-1 border-white hover:bg-white hover:text-orange-1">
                    <MessagesSquare className="w-5 h-5 mr-2" />
                    Макс
                  </Button>
                </a>

                <a
                  href={process.env.NEXT_PUBLIC_TG_SUPPORT_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="w-full bg-white text-orange-1 border-white hover:bg-white hover:text-orange-1">
                    <Send className="w-5 h-5 mr-2" />
                    Телеграм
                  </Button>
                </a>

                <a
                  href={process.env.NEXT_PUBLIC_VK_SUPPORT_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="w-full bg-white text-orange-1 border-white hover:bg-white hover:text-orange-1">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    ВКонтакте
                  </Button>
                </a>
              </div>

              <p className="text-text-primary/80 text-sm lg:text-base">
                Обычно отвечаем быстро в рабочее время и помогаем довести вопрос до результата.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
