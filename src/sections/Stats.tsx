"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";
import { Award, BookOpen, Globe, Target } from "lucide-react";
import Image from "next/image";

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
  {
    value: 5,
    label: "премий за вклад в образование",
    icon: Award,
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-orange-1 py-10 lg:py-12">
      <Image
        src="/background/2 блок.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-[0.40] brightness-[1.04] contrast-[1.18] lg:opacity-[0.58]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-orange-1/38 lg:bg-orange-1/30"
      />
      <Container className="relative z-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 lg:gap-8">
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
