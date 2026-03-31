"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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
          className="max-w-2xl mx-auto text-center space-y-5"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-card-hover">
            <MessageCircle className="w-10 h-10 text-orange-1" />
          </div>

          <h2 className="font-heading font-black text-3xl lg:text-5xl text-text-primary uppercase">
            Остались вопросы?
          </h2>

          <p className="text-text-primary text-lg lg:text-xl">
            Свяжитесь с нами, и мы поможем подобрать оптимальный вариант обучения
          </p>

          <div className="pt-2">
            <a
              href={process.env.NEXT_PUBLIC_TG_SUPPORT_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="bg-white text-orange-1 border-white hover:bg-white hover:text-orange-1">
                Оставить заявку
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
