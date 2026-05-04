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
    tone: "from-white/96 to-white/78",
    tilt: "-rotate-1 lg:translate-y-2",
  },
  {
    value: 40000,
    label: "выпускников из 50 стран",
    prefix: ">",
    icon: Globe,
    tone: "from-white/90 to-white/72",
    tilt: "rotate-[0.7deg]",
  },
  {
    value: 98,
    label: "учеников с результатом",
    suffix: "-100%",
    icon: Target,
    tone: "from-white/96 to-white/76",
    tilt: "-rotate-[0.6deg] lg:translate-y-3",
  },
  {
    value: 5,
    label: "премий за вклад в образование",
    icon: Award,
    tone: "from-white/92 to-white/74",
    tilt: "rotate-1",
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 lg:gap-5">
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
                whileHover={{
                  y: -12,
                  rotate: 0,
                  scale: 1.035,
                  transition: { type: "spring", stiffness: 260, damping: 18 },
                }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br ${stat.tone} px-5 py-6 text-center shadow-[0_18px_45px_rgba(126,74,0,0.16)] backdrop-blur-md ${stat.tilt}`}
              >
                <div
                  aria-hidden="true"
                  className="animate-stat-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-transparent via-orange-1 to-transparent"
                />
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-1 text-white shadow-[0_12px_28px_rgba(255,167,0,0.34)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="relative mb-2 font-heading text-5xl font-black leading-none text-text-primary lg:text-6xl">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="relative mx-auto mb-3 h-px w-16 bg-orange-1/60 transition-all duration-300 group-hover:w-24" />
                <div className="relative text-base font-semibold leading-snug text-text-primary lg:text-lg">
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
