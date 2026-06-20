"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const myths = [
  {
    myth: "Методология - для больших школ, а я один.",
    truth: "Нет. Она особенно нужна соло-эксперту, чтобы перестать быть заложником хаоса в своём продукте.",
  },
  {
    myth: "Это сложно, я не педагог.",
    truth: "Вы не пишете диссертацию. Курс даёт структуру, шаблоны и чек-листы для реального внедрения.",
  },
  {
    myth: "Методология убьёт креативность.",
    truth: "Она забирает рутину на себя. Креативность остаётся в вашем контенте, подаче и экспертизе.",
  },
  {
    myth: "Мне нужен трафик, а не методология.",
    truth: "Бесполезный трафик + слабый продукт = пустые кассы. Сначала нужен сильный продукт, потом масштабирование.",
  },
  {
    myth: "Я уже пробовал - не работает.",
    truth: "Чаще всего люди пробовали не систему, а набор абстрактных правил без нормальной логики продукта.",
  },
  {
    myth: "Методология - дорого.",
    truth: "Стоимость ошибки при создании курса на глаз часто выше в разы, чем стоимость обучения на сильной системе.",
  },
  {
    myth: "У меня уже есть курс, зачем?",
    truth:
      "90% курсов — это просто набор записей. Методология пересобирает продукт так, что ученики доходят до результата",
  },
  {
    myth: "Я и так всё знаю, мне это не нужно",
    truth:
      "Если бы знали — уже сделали. Проблема не в знаниях, а в отсутствии системы",
  },
];

const shortWords = /(^|\s)(и|в|на|по|от|до|для|из|к|с|со|над|под|при|а|но|что|как)\s/giu;

const formatTypography = (text: string) => text.replace(shortWords, "$1$2\u00A0");

function MythTablet({
  myth,
  truth,
  index,
}: {
  myth: string;
  truth: string;
  index: number;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.48 });
  const shouldReduceMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const revealTablet = useCallback(() => {
    if (revealed || isOpening) return;

    if (shouldReduceMotion) {
      setRevealed(true);
      return;
    }

    setIsOpening(true);
    window.setTimeout(() => {
      setRevealed(true);
    }, 150);
    window.setTimeout(() => {
      setIsOpening(false);
    }, 560);
  }, [isOpening, revealed, shouldReduceMotion]);

  useEffect(() => {
    if (!isInView || index !== 0 || revealed || isOpening) return;

    if (shouldReduceMotion) {
      setRevealed(true);
      return;
    }

    const timer = window.setTimeout(revealTablet, 900);
    return () => window.clearTimeout(timer);
  }, [index, isInView, isOpening, revealTablet, revealed, shouldReduceMotion]);

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-expanded={revealed}
      onClick={revealTablet}
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.42, ease: "easeOut", delay: index * 0.035 }}
      className="academy-myth-tablet"
      data-revealed={revealed ? "true" : "false"}
      data-opening={isOpening ? "true" : "false"}
    >
      <div className="academy-myth-crack" aria-hidden="true" />
      <div className="academy-myth-face academy-myth-face--myth">
        <div className="academy-myth-kicker">
          <X className="h-3.5 w-3.5" />
          Миф
        </div>
        <p className="academy-myth-text">{formatTypography(myth)}</p>
        <span className="academy-myth-verdict">
          Открыть вердикт Академии →
        </span>
      </div>

      <div className="academy-myth-face academy-myth-face--truth">
        <div className="academy-myth-kicker academy-myth-kicker--truth">
          <Check className="h-3.5 w-3.5" />
          Правда
        </div>
        <p className="academy-truth-text">{formatTypography(truth)}</p>
      </div>
    </motion.button>
  );
}

export function Myths() {
  return (
    <section className="relative overflow-hidden bg-black py-10 lg:py-12">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:33.jpg"
        variant="orange"
        position="object-bottom"
        className="opacity-70 saturate-[0.8]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_16%_14%,rgba(242,229,197,0.12),transparent_18rem),radial-gradient(circle_at_80%_28%,rgba(214,171,87,0.08),transparent_22rem),linear-gradient(180deg,rgba(58,0,12,0.84),rgba(32,0,7,0.9))]"
      />
      <div aria-hidden="true" className="academy-myths-dust pointer-events-none absolute inset-0 z-10" />

      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-7 max-w-4xl text-center lg:mb-8"
        >
          <h2 className="mb-3 font-heading text-3xl font-black uppercase text-white lg:text-4xl">
            Почему вы до сих пор не внедрили методологию
          </h2>
          <p className="text-lg leading-snug text-white/90 lg:text-xl">
            Чаще всего мешают не факты, а мифы и возражения, которые держат
            эксперта или предпринимателя в старой модели.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
          {myths.map((item, index) => (
            <MythTablet
              key={item.myth}
              myth={item.myth}
              truth={item.truth}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
