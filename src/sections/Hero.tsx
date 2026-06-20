"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { COURSE_START_DATE, COURSE_START_DATE_RAW } from "@/lib/constants";
import { Award, BookOpen, Calendar, Globe, Target } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

const heroStats = [
  { value: "15", label: "потоков курса", icon: BookOpen },
  { value: "> 40 000", label: "выпускников из 50 стран", icon: Globe },
  { value: "98-100%", label: "учеников с результатом", icon: Target },
  { value: "5", label: "премий за вклад в образование", icon: Award },
];

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleReady, setTitleReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageScrollY = useTransform(scrollY, [0, 1000], [0, -72]);
  const imageScrollScale = useTransform(scrollY, [0, 420], [1.03, 1]);
  const backgroundScrollY = useTransform(scrollY, [0, 1000], [0, -26]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 70, damping: 24, mass: 0.6 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 70, damping: 24, mass: 0.6 });
  const photoX = useTransform(smoothMouseX, [-1, 1], [-8, 8]);
  const photoY = useTransform(smoothMouseY, [-1, 1], [-7, 7]);
  const dustX = useTransform(smoothMouseX, [-1, 1], [10, -10]);
  const dustY = useTransform(smoothMouseY, [-1, 1], [7, -7]);
  const lightX = useTransform(smoothMouseX, [-1, 1], [-5, 5]);
  const lightY = useTransform(smoothMouseY, [-1, 1], [-3, 3]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setTitleReady(true);
      return;
    }

    let split: { chars?: HTMLElement[]; revert: () => void } | undefined;
    let context: { revert: () => void } | undefined;

    const animateTitle = async () => {
      if (!titleRef.current) return;

      const [{ default: SplitType }, { gsap }] = await Promise.all([
        import("split-type"),
        import("gsap"),
      ]);

      if (!titleRef.current) return;

      split = new SplitType(titleRef.current, {
        types: "words,chars",
        tagName: "span",
      }) as unknown as { chars?: HTMLElement[]; revert: () => void };

      context = gsap.context(() => {
        const chars = split?.chars ?? [];
        gsap.set(chars, {
          yPercent: 72,
          opacity: 0,
          filter: "blur(10px)",
          transformOrigin: "50% 100%",
        });
        setTitleReady(true);
        gsap.to(chars, {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.82,
          ease: "power3.out",
          stagger: 0.026,
          delay: 0.12,
        });
      }, titleRef);
    };

    animateTitle().catch(() => setTitleReady(true));

    return () => {
      context?.revert();
      split?.revert();
    };
  }, [shouldReduceMotion]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || window.innerWidth < 1024) return;

    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const renderStatValue = (value: string) => {
    if (value === "15") return <AnimatedCounter end={15} duration={1400} />;
    if (value === "> 40 000") return <AnimatedCounter end={40000} duration={1800} prefix=">" />;
    if (value === "98-100%") {
      return (
        <>
          <AnimatedCounter end={98} duration={1300} />
          -
          <AnimatedCounter end={100} duration={1500} suffix="%" />
        </>
      );
    }
    if (value === "5") return <AnimatedCounter end={5} duration={1100} />;
    return value;
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-20 overflow-hidden bg-[#F2E5C5] py-8 lg:py-10"
    >
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : imageScrollY,
          x: shouldReduceMotion ? 0 : photoX,
          scale: shouldReduceMotion ? 1 : imageScrollScale,
        }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[46vw] lg:block"
      >
        <div className="absolute -inset-x-16 -inset-y-10 z-0 bg-[radial-gradient(circle_at_48%_40%,rgba(255,236,181,0.36),transparent_34rem),radial-gradient(circle_at_66%_54%,rgba(117,22,46,0.18),transparent_28rem)] blur-3xl" />
        <Image
          src="/images/blok-1.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="46vw"
          className="object-cover object-top"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 8%, rgba(0,0,0,0.72) 20%, #000 34%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 8%, rgba(0,0,0,0.72) 20%, #000 34%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,229,197,0.62)_0%,rgba(242,229,197,0.08)_34%,rgba(58,0,12,0.14)_100%)]" />
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,#F2E5C5_0%,#F2E5C5_55%,rgba(242,229,197,0.42)_70%,rgba(242,229,197,0.03)_100%)]" />
      <motion.div
        aria-hidden="true"
        style={{ y: shouldReduceMotion ? 0 : backgroundScrollY, x: shouldReduceMotion ? 0 : lightX }}
        className="hero-light-rays pointer-events-none absolute inset-0 z-0"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: shouldReduceMotion ? 0 : dustX, y: shouldReduceMotion ? 0 : dustY }}
        className="hero-gold-dust pointer-events-none absolute inset-0 z-0"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: shouldReduceMotion ? 0 : lightX, y: shouldReduceMotion ? 0 : lightY }}
        className="hero-antique-columns pointer-events-none absolute inset-y-0 right-[25vw] z-0 hidden w-[42vw] lg:block"
      />

      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 lg:min-h-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="max-w-[780px] space-y-4 text-left lg:space-y-5"
          >
            <div className="space-y-3 lg:space-y-4">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="inline-flex max-w-full items-center gap-3 rounded-[22px] border border-orange-1/28 bg-[#F7EBCF]/86 px-4 py-2 text-sm font-semibold leading-snug text-orange-1 shadow-sm backdrop-blur-sm sm:rounded-full">
                  <Award className="h-4 w-4 flex-shrink-0" />
                  <span className="min-w-0 break-words">Легендарный курс Академии методологии Александры Горевой-Куртышевой</span>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex max-w-full items-center gap-3 rounded-xl border border-[#F2E5C5]/28 bg-orange-1 px-5 py-2.5 font-bold leading-snug text-[#F7EBCF] shadow-md transition-all hover:-translate-y-0.5 hover:bg-orange-2 hover:shadow-lg"
                >
                  <Calendar className="h-5 w-5 flex-shrink-0 text-white" />
                  <span className="min-w-0 break-words">Старт 16-го потока: {COURSE_START_DATE}</span>
                </motion.div>
              </div>

              <h1 className="font-heading text-[clamp(31px,8.4vw,36px)] font-black leading-[0.92] tracking-normal text-text-primary uppercase sm:text-6xl md:text-7xl lg:hidden">
                МЕТОДОЛОГИЯ
              </h1>
              <h1
                ref={titleRef}
                style={{ visibility: titleReady ? "visible" : "hidden" }}
                className="hero-title hidden whitespace-nowrap font-heading font-black leading-[0.9] tracking-normal text-text-primary uppercase lg:block lg:text-[86px] xl:text-[98px]"
              >
                МЕТОД
                <span className="text-gradient-orange">ОЛОГИЯ</span>
              </h1>

              <p className="max-w-[760px] text-xl font-bold text-text-primary lg:text-[23px] xl:text-2xl">
                <span className="lg:hidden">
                  Пошаговая система создания онлайн‑курсов и продуктовых линеек для экспертов и предпринимателей
                </span>
                <span className="hidden lg:inline">
                  Пошаговая система создания онлайн‑курсов и
                  <br />
                  <span className="whitespace-nowrap">продуктовых линеек для экспертов и предпринимателей</span>
                </span>
              </p>

            </div>

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.58, ease: "easeOut", delay: 0.24 }}
              className="relative mx-auto my-4 h-[250px] w-full max-w-[360px] overflow-hidden rounded-[22px] border border-[#D6AB57]/42 bg-[#F7EBCF]/62 shadow-[0_18px_42px_rgba(85,11,24,0.16),inset_0_1px_0_rgba(255,255,255,0.62)] sm:h-[290px] lg:hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,236,181,0.45),transparent_15rem),linear-gradient(180deg,rgba(242,229,197,0.08),rgba(85,11,24,0.12))]" />
              <Image
                src="/images/blok-1.jpg"
                alt="Александра Горева-Куртышева"
                fill
                priority
                sizes="(max-width: 640px) 360px, 46vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(242,229,197,0.92)_100%)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.34 }}
              className="flex w-full flex-col items-start gap-4 pt-1 lg:max-w-none lg:flex-row lg:items-center"
            >
              <a href="#program" className="w-full lg:flex-[1_1_430px]">
                <Button variant="primary" size="lg" className="min-h-[68px] w-full px-8 text-lg lg:text-xl">
                  Посмотреть программу обучения
                </Button>
              </a>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="hero-timer-card relative w-full overflow-hidden rounded-2xl border border-orange-1/22 bg-[#F7EBCF]/72 px-5 py-3.5 shadow-[0_16px_40px_rgba(85,11,24,0.14)] backdrop-blur-md lg:w-[340px] lg:flex-none"
              >
                <p className="mb-2 text-sm font-semibold text-text-secondary">
                  До старта курса:
                </p>
                <CountdownTimer targetDate={COURSE_START_DATE_RAW} compact />
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.32 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.09,
                    delayChildren: 0.08,
                  },
                },
              }}
              className="grid grid-cols-2 gap-3 pt-2 lg:max-w-none lg:grid-cols-4 lg:gap-4"
            >
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={{
                      hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.56, ease: "easeOut" }}
                    className="rounded-2xl border border-orange-1/18 bg-[#F7EBCF]/86 px-5 py-5 text-center shadow-[0_10px_24px_rgba(85,11,24,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-2/42 hover:shadow-[0_18px_38px_rgba(85,11,24,0.18)]"
                  >
                    <div className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-1 text-[#F7EBCF] shadow-[0_8px_16px_rgba(85,11,24,0.24)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-heading text-2xl font-black leading-none text-text-primary lg:text-3xl">
                      {renderStatValue(stat.value)}
                    </div>
                    <div className="mx-auto my-1.5 h-px w-8 bg-orange-1/45" />
                    <p className="text-xs font-semibold leading-tight text-text-primary">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
