"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const roadmap = [
  {
    period: "Сейчас",
    title: "Опыт и кейсы",
    text: "Есть практический капитал, но он пока не оформлен в продукт и публичную позицию.",
  },
  {
    period: "3 недели",
    title: "Архитектура",
    text: "Собран маршрут: тема, аудитория, формат, архитектура продукта.",
  },
  {
    period: "5 недель",
    title: "Первый продукт",
    text: "Готов формат, который можно показывать рынку, партнерам и закрытым сообществам.",
  },
  {
    period: "3 месяца",
    title: "Линейка",
    text: "Появляется набор форматов: выступление, программа, менторство, advisory.",
  },
  {
    period: "1 год",
    title: "Влияние",
    text: "Статус эксперта или визионера, который формирует повестку в своей нише.",
  },
];

const romanNumerals = ["I", "II", "III", "IV", "V"];

const desktopPositions = [
  { x: "0%", y: "70%", rotate: "-3deg" },
  { x: "23%", y: "58%", rotate: "2deg" },
  { x: "45%", y: "45%", rotate: "-2deg" },
  { x: "66%", y: "30%", rotate: "2deg" },
  { x: "82%", y: "14%", rotate: "-2deg" },
];

const pathSegments = [
  { x: "18%", y: "70%", width: "18%", rotate: "-18deg" },
  { x: "40%", y: "58%", width: "18%", rotate: "-20deg" },
  { x: "61%", y: "45%", width: "18%", rotate: "-21deg" },
  { x: "78%", y: "30%", width: "14%", rotate: "-23deg" },
];

const plaqueClassName =
  "roadmap-plaque group relative isolate overflow-hidden border border-[#D6AB57]/46 border-l-4 border-l-[#D6AB57] bg-[#B98534] p-4 pl-5 text-[#2D0B0F] opacity-0 shadow-[0_18px_38px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-16px_30px_rgba(58,0,12,0.16)] transition-all duration-300 [clip-path:polygon(0_0,92%_0,100%_50%,92%_100%,0_100%)] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_82%_82%,rgba(85,11,24,0.22),transparent_30%),repeating-linear-gradient(105deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_10px),linear-gradient(135deg,#8F5D24,#D6AB57_32%,#A66B2C_64%,#E0BE65)] after:absolute after:inset-[7px] after:-z-10 after:border after:border-[#75162E]/22 after:[clip-path:polygon(0_0,92%_0,99%_50%,92%_100%,0_100%)] hover:-translate-y-1 hover:border-[#F0CB74]/70 hover:shadow-[0_24px_54px_rgba(85,11,24,0.34),inset_0_1px_0_rgba(255,255,255,0.34),inset_0_-12px_24px_rgba(58,0,12,0.12)] lg:border-l lg:p-4 lg:[clip-path:polygon(3%_9%,13%_4%,30%_6%,46%_3%,64%_6%,85%_4%,98%_9%,99%_89%,87%_96%,69%_93%,51%_97%,32%_93%,14%_97%,1%_89%)] lg:after:[clip-path:polygon(3%_10%,14%_6%,31%_8%,47%_5%,64%_8%,84%_6%,97%_10%,98%_88%,86%_94%,69%_91%,51%_95%,33%_91%,15%_95%,2%_88%)]";

export function MethodologyRoadmap() {
  const roadmapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: roadmapRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.set(".roadmap-plaque", { autoAlpha: 0, y: 30, scale: 0.96 });
      gsap.set(".roadmap-step-light", { autoAlpha: 0, scale: 0.7 });
      gsap.set(".roadmap-path-segment", { scaleX: 0, scaleY: 0, transformOrigin: "left center" });
      gsap.set(".roadmap-path-segment-mobile", { transformOrigin: "top center" });
      gsap.set(".roadmap-impulse", { autoAlpha: 0, x: -20, y: 12 });

      roadmap.forEach((_, index) => {
        timeline
          .to(`[data-roadmap-step="${index}"]`, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.24,
          })
          .to(
            `[data-roadmap-light="${index}"]`,
            {
              autoAlpha: 0.62,
              scale: 1,
              duration: 0.22,
            },
            "<"
          );

        if (index < roadmap.length - 1) {
          timeline
            .to(`[data-roadmap-segment="${index}"]`, {
              scaleX: 1,
              scaleY: 1,
              duration: 0.22,
              ease: "power2.inOut",
            })
            .to(
              `[data-roadmap-impulse="${index}"]`,
              {
                keyframes: [
                  { autoAlpha: 0, x: -20, y: 12 },
                  { autoAlpha: 0.95, x: 8, y: -4 },
                  { autoAlpha: 0, x: 28, y: -18 },
                ],
                duration: 0.36,
                ease: "power2.inOut",
              },
              "<"
            );
        }
      });
    }, roadmapRef);

    return () => context.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#120B08] py-12 text-white lg:py-16">
      <div className="absolute inset-0">
        <Image
          src="/images/methodology-roadmap-stairs.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-72"
          priority={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,11,8,0.82)_0%,rgba(18,11,8,0.68)_34%,rgba(18,11,8,0.36)_72%,rgba(18,11,8,0.20)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,11,8,0.74)_0%,rgba(18,11,8,0.18)_48%,rgba(18,11,8,0.48)_100%)]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_22%_78%,rgba(214,171,87,0.14),transparent_18rem),radial-gradient(circle_at_78%_22%,rgba(247,235,207,0.12),transparent_20rem)]"
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="max-w-4xl font-heading text-3xl font-black uppercase leading-tight text-[#F7EBCF] lg:text-4xl">
            Дорожная карта эксперта
          </h2>
        </motion.div>

        <div ref={roadmapRef} className="relative mt-10 lg:mt-12 lg:min-h-[680px]">
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {roadmap.map((_, index) => (
              <span
                key={index}
                data-roadmap-light={index}
                className="roadmap-step-light absolute h-24 w-48 rounded-full bg-[radial-gradient(ellipse,rgba(224,190,101,0.36),transparent_68%)] blur-[2px]"
                style={
                  {
                    left: desktopPositions[index].x,
                    top: desktopPositions[index].y,
                    transform: "translate(-10%, -12%)",
                  } as CSSProperties
                }
              />
            ))}
            {pathSegments.map((segment, index) => (
              <span
                key={index}
                data-roadmap-segment={index}
                className="roadmap-path-segment absolute h-[3px] rounded-full bg-[linear-gradient(90deg,#75162E,#E0BE65,#75162E)] shadow-[0_0_18px_rgba(224,190,101,0.36)]"
                style={
                  {
                    left: segment.x,
                    top: segment.y,
                    width: segment.width,
                    rotate: segment.rotate,
                  } as CSSProperties
                }
              >
                <span
                  data-roadmap-impulse={index}
                  className="roadmap-impulse absolute right-0 top-1/2 h-2 w-12 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,transparent,#F7EBCF,transparent)] blur-[1px]"
                />
              </span>
            ))}
          </div>

          <div className="relative z-10 lg:min-h-[680px]">
            {roadmap.map((step, index) => (
              <div
                key={step.title}
                className="relative lg:absolute lg:left-[var(--roadmap-x)] lg:top-[var(--roadmap-y)] lg:w-[235px] lg:rotate-[var(--roadmap-rotate)] xl:w-[250px]"
                style={
                  {
                    "--roadmap-x": desktopPositions[index].x,
                    "--roadmap-y": desktopPositions[index].y,
                    "--roadmap-rotate": desktopPositions[index].rotate,
                  } as CSSProperties
                }
              >
                <div data-roadmap-step={index} className={plaqueClassName}>
                  <span className="pointer-events-none absolute -left-10 top-8 hidden h-px w-24 rotate-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(247,235,207,0.6),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block" />
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#E0BE65]/48 bg-[radial-gradient(circle_at_32%_22%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(145deg,#75162E,#550B18_52%,#3A000C)] font-heading text-2xl font-black text-[#F7E7B8] shadow-[0_10px_22px_rgba(58,0,12,0.26),inset_0_1px_0_rgba(255,255,255,0.2)] lg:rounded-[14px]">
                      {romanNumerals[index]}
                    </span>
                    <span className="rounded-full border border-[#75162E]/20 bg-[#F7EBCF]/22 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#3A000C] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                      {step.period}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-black leading-tight text-[#2D0B0F]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-[#4A1B20]">
                    {step.text}
                  </p>
                </div>

                {index < roadmap.length - 1 && (
                  <div className="flex h-12 justify-center lg:hidden" aria-hidden="true">
                    <span
                      data-roadmap-segment={index}
                      className="roadmap-path-segment roadmap-path-segment-mobile relative block h-full w-[3px] rounded-full bg-[linear-gradient(180deg,#75162E,#E0BE65,#75162E)] shadow-[0_0_16px_rgba(224,190,101,0.34)]"
                    >
                      <span
                        data-roadmap-impulse={index}
                        className="roadmap-impulse absolute left-1/2 top-1/2 h-10 w-2 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,transparent,#F7EBCF,transparent)] blur-[1px]"
                      />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
