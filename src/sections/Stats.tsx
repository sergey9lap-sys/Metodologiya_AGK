"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";
import { BookOpen, Globe, Target } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  {
    value: 15,
    label: "потоков курса",
    icon: BookOpen,
  },
  {
    value: 40000,
    label: "выпускников из 36 стран",
    prefix: ">",
    icon: Globe,
  },
  {
    value: 98,
    label: "учеников с результатом",
    suffix: "-100%",
    icon: Target,
  },
];

export function Stats() {
  return (
    <section className="bg-orange-1 py-10 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Icon className="w-7 h-7 text-orange-1" />
                </div>
                <div className="text-4xl lg:text-6xl font-heading font-black text-text-primary mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-text-primary text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
