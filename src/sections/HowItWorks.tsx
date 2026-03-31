"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CheckCircle, GitBranch, Award } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: CheckCircle,
    title: "Твёрдый навык",
    text: "На курсе ученики получают не готовые шаблоны, а твёрдый навык создания качественного образовательного продукта",
  },
  {
    icon: GitBranch,
    title: "2 трека развития",
    text: "Внутри курса 2 трека — ученик может развиваться как автор своих продуктов или как методолог",
  },
  {
    icon: Award,
    title: "Супервизированный кейс",
    text: "После курса каждый ученик выходит минимум с одним готовым учебным супервизированным кейсом",
  },
];

export function HowItWorks() {
  return (
    <section id="program" className="bg-orange-1 py-12 lg:py-16">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 lg:mb-10"
        >
          <h2 className="font-heading font-black text-3xl lg:text-5xl text-text-primary mb-4 uppercase">
            Как мы обеспечиваем результат
          </h2>
          <p className="text-text-primary text-lg lg:text-xl max-w-3xl mx-auto">
            В курсе используется инновационная пошаговая система создания
            образовательных продуктов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center bg-white">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-1 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-body">
                    {feature.text}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
