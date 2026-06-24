"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

function renderMythText(text: string) {
  if (text === "Если бы знали — уже сделали. Проблема не в знаниях, а в отсутствии системы") {
    return (
      <>
        Если бы знали — уже сделали.{" "}
        <span className="whitespace-nowrap">Проблема не&nbsp;в&nbsp;знаниях,</span>{" "}
        а&nbsp;в&nbsp;отсутствии системы
      </>
    );
  }

  return formatTypography(text);
}

function BeforeAfterRow({
  myth,
  truth,
  index,
}: {
  myth: string;
  truth: string;
  index: number;
}) {
  const baseDelay = index * 0.26;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.28, ease: "easeOut", delay: baseDelay }}
      className="grid gap-3 rounded-[18px] border border-[#F2E5C5]/18 bg-[#F2E5C5]/8 p-3 shadow-[0_18px_48px_rgba(0,0,0,0.14)] backdrop-blur-md lg:grid-cols-[1fr_auto_1.1fr] lg:items-stretch lg:gap-4"
    >
      <motion.div
        initial={{ opacity: 0, x: -22, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.38, ease: "easeOut", delay: baseDelay + 0.04 }}
        className="rounded-[14px] border border-[#F2E5C5]/14 bg-[#3A000C]/30 p-4 text-[#F7EBCF]"
      >
        <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#D6AB57]">
          Было
        </p>
        <p className="text-base font-semibold leading-snug text-[#F7EBCF]/78 lg:text-lg">
          {formatTypography(myth)}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.72, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.34, ease: "easeOut", delay: baseDelay + 0.18 }}
        className="flex items-center justify-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F2E5C5]/38 bg-[#C45A32] text-white shadow-[0_14px_34px_rgba(196,90,50,0.30)]">
          <ArrowRight className="h-5 w-5" />
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 22, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.38, ease: "easeOut", delay: baseDelay + 0.3 }}
        className="rounded-[14px] border border-[#F2E5C5]/70 bg-[#F7EBCF] p-4 text-[#3A000C] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
      >
        <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#75162E]">
          Стало
        </p>
        <p className="text-lg font-semibold leading-snug text-[#3A000C] lg:text-xl">
          {renderMythText(truth)}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Myths() {
  return (
    <section className="relative overflow-hidden bg-[#210007] py-10 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_16%_14%,rgba(242,229,197,0.10),transparent_18rem),radial-gradient(circle_at_80%_28%,rgba(214,171,87,0.08),transparent_22rem),linear-gradient(180deg,#210007,#550B18_52%,#210007)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-20 [background-image:linear-gradient(rgba(247,235,207,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(247,235,207,0.10)_1px,transparent_1px)] [background-size:56px_56px]"
      />

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

        <div className="mx-auto max-w-6xl space-y-4">
          {myths.map((item, index) => (
            <BeforeAfterRow
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
