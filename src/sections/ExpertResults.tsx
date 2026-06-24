"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckSquare2,
  CircleDollarSign,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const chapters = [
  {
    key: "expert",
    roman: "Глава I",
    title: "Эксперт",
    heading:
      "Вы — эксперт. Ваши знания стоят миллионы. Но без методологии они так и останутся в вашей голове",
    subtitle:
      "Курс «Методология» превращает хаос вашей экспертизы в продукт, который ученики проходят до конца и приводят друзей.",
    anchors: ["expert-results", "expert"],
    requests: [
      "Не понимаю, как упаковать весь свой огромный опыт в простые и понятные уроки.",
      "Ученики сливаются после 3‑го урока, перестают выходить на связь и выполнять домашки.",
      "Я развиваюсь в двух разных нишах. Не понимаю, как определить своё позиционирование и какой продукт создать.",
      "Я уже пробовал запускать курс, но никто не купил, думаю, что большие курсы не для меня.",
      "Хочу развиваться как эксперт, а вместо этого приходится 24/7 продавать в блоге, чтобы были клиенты.",
      "Чтобы заработать больше, надо проводить больше консультаций, а в сутках только 24 часа.",
    ],
    resultIntro:
      "Вы выходите с курса с готовым продуктом: курс / тренинг / мастермайнд / наставничество, который:",
    outcomes: [
      "имеет чёткую структуру",
      "удерживает учеников до конца",
      "продаётся и рекомендуется друзьям",
    ],
    accent:
      "и сформированной продуктовой линейкой (3‑4 тариф), в которой клиенты развиваются, покупая все ваши продукты",
    cta: "Пройти курс и создать свой продукт",
  },
  {
    key: "methodologist",
    roman: "Глава II",
    title: "Методолог",
    heading: "Методолог — профессия № 1 в EdTech 2026",
    subtitle:
      "Вы научитесь проектировать образовательные продукты для экспертов и бизнеса. Старт в профессии — с первого месяца после обучения.",
    anchors: ["methodologist-career", "methodologist"],
    salaryItems: [
      {
        icon: Briefcase,
        title: "Начинающий методолог",
        amount: "50 000–80 000 ₽",
        caption: "за проект",
      },
      {
        icon: Target,
        title: "ТОП-методолог",
        amount: "от 150 000 ₽",
        caption: "за проект",
      },
      {
        icon: CircleDollarSign,
        title: "Директор по продукту",
        amount: "220 000–350 000 ₽",
        caption: "за проект",
      },
    ],
    requests: [
      "Не понимаю, как построить эксперту продуктовую линейку.",
      "Не понимаю, как «распаковать» эксперта и собрать его знания в востребованный продукт.",
      "Зависаю в операционке и не расту как специалист.",
      "Не знаю, как зайти в первый проект, а вдруг у меня не получится.",
      "Работаю в «рабском» режиме, делаю всё за эксперта.",
      "Экспертам выстраиваю продукты и продуктовые линейки, а себе не получается.",
    ],
    cta: "Пройти курс и усилить профессию",
  },
  {
    key: "entrepreneur",
    roman: "Глава III",
    title: "Предприниматель",
    heading: "Предприниматель без методологии — как генерал без карты",
    subtitle:
      "Методология — прокачка системного мышления. Наводит порядок в процессах, команде и продуктах.",
    anchors: ["entrepreneur-results", "entrepreneur"],
    requests: [
      "Хочу точно понимать путь клиента, чтобы вести его по шагам внутри продуктовой линейки.",
      "Хочу внедрить кураторов на курс, но опасаюсь, что качество обучения от этого пострадает.",
      "Не получается масштабировать проект, зависаю в операционке, много завязано на личной работе.",
      "Команда постоянно проваливается в тесты гипотез без фокуса на результат.",
      "Не получается управлять командой без нравоучений.",
      "Планёрки длятся в 3‑4 раза дольше, чем нужно: разговоров много, результата и плана действий нет.",
    ],
    team:
      "В тарифе «ВИП» вы можете подключить к обучению свою команду (1+2), чтобы внедрять методологию синхронно.",
    resultIntro:
      "Вы научитесь проектировать образовательные продукты и продуктовые линейки, которые влияют на мышление людей и приносят устойчивый результат: от базовой структуры до стратегической архитектуры.",
    cta: "Пройти курс и создать систему обучения",
  },
];

type Chapter = (typeof chapters)[number];

const shortWords = /(^|\s)(и|в|на|по|от|до|для|из|к|с|со|над|под|при)\s/giu;

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const formatTypography = (text: string) =>
  text
    .replace(shortWords, "$1$2\u00A0")
    .replace(/(\d)\s(?=\d)/g, "$1\u00A0")
    .replace(/\s₽/g, "\u00A0₽");

function renderFormattedText(text: string) {
  if (text.startsWith("Вы — эксперт.")) {
    return (
      <>
        Вы — эксперт. Ваши знания стоят миллионы.
        <br />
        Но&nbsp;без методологии
        <br />
        они так и&nbsp;останутся в&nbsp;вашей голове
      </>
    );
  }

  if (text === "Зависаю в операционке и не расту как специалист.") {
    return (
      <>
        Зависаю в&nbsp;операционке и&nbsp;не&nbsp;расту
        <br />
        как&nbsp;специалист.
      </>
    );
  }

  if (text === "Не знаю, как зайти в первый проект, а вдруг у меня не получится.") {
    return (
      <>
        Не&nbsp;знаю, как&nbsp;зайти в&nbsp;первый проект, а&nbsp;вдруг
        <br />у&nbsp;меня не&nbsp;получится.
      </>
    );
  }

  if (text === "Предприниматель без методологии — как генерал без карты") {
    return (
      <>
        Предприниматель без методологии —
        <br />
        как&nbsp;генерал без&nbsp;карты
      </>
    );
  }

  if (text.startsWith("В тарифе «ВИП»")) {
    return (
      <>
        В&nbsp;тарифе «ВИП»
        <br />
        вы можете подключить к&nbsp;обучению свою команду (1+2), чтобы внедрять методологию синхронно.
      </>
    );
  }

  return formatTypography(text);
}

function ChapterResult({ chapter }: { chapter: Chapter }) {
  return (
    <div className="space-y-4">
      {"salaryItems" in chapter && chapter.salaryItems ? (
        <div className="grid gap-3">
          {chapter.salaryItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[14px] border border-[#550B18]/12 bg-[#F7EBCF] p-4"
              >
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 flex-none text-[#D96A32]" />
                  <p className="text-sm leading-relaxed text-[#5A2730]">
                    <span className="font-bold text-[#3A000C]">{formatTypography(item.title)}:</span>{" "}
                    <span className="font-heading text-xl font-black text-[#75162E]">
                      {item.amount}
                    </span>{" "}
                    {formatTypography(item.caption)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      {"resultIntro" in chapter && chapter.resultIntro ? (
        <p className="text-base font-semibold leading-relaxed text-[#3A000C]">
          {formatTypography(chapter.resultIntro)}
        </p>
      ) : null}

      {"outcomes" in chapter && chapter.outcomes ? (
        <div className="grid gap-2">
          {chapter.outcomes.map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm font-semibold text-[#5A2730]">
              <CheckSquare2 className="mt-0.5 h-4 w-4 flex-none text-[#D96A32]" />
              <p>{formatTypography(item)}</p>
            </div>
          ))}
        </div>
      ) : null}

      {"team" in chapter && chapter.team ? (
        <div className="flex items-start gap-3 rounded-[14px] border border-[#D96A32]/24 bg-[#F7EBCF] p-4">
          <Users className="mt-0.5 h-5 w-5 flex-none text-[#D96A32]" />
          <p className="text-sm font-semibold leading-relaxed text-[#5A2730]">
            {renderFormattedText(chapter.team)}
          </p>
        </div>
      ) : null}

      {"accent" in chapter && chapter.accent ? (
        <div className="flex items-start gap-3 rounded-[14px] border border-[#D96A32]/24 bg-[#F2E5C5] p-4">
          <Sparkles className="mt-0.5 h-5 w-5 flex-none text-[#D96A32]" />
          <p className="text-sm font-semibold leading-relaxed text-[#5A2730]">
            {formatTypography(chapter.accent)}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function ExpertResults() {
  return (
    <section className="relative overflow-hidden bg-[#F2E5C5] py-12 text-[#3A000C] lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-55 [background-image:linear-gradient(rgba(85,11,24,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(85,11,24,0.08)_1px,transparent_1px)] [background-size:72px_72px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_8%,rgba(85,11,24,0.08),transparent_22rem),radial-gradient(circle_at_88%_36%,rgba(217,106,50,0.10),transparent_24rem)]"
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-4xl text-center lg:mb-10"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-[#D96A32]">
            Библиотека Академии
          </p>
          <h2 className="font-heading text-3xl font-black uppercase leading-tight text-[#550B18] lg:text-4xl">
            Кто вы сейчас?
          </h2>
        </motion.div>

        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <motion.article
              key={chapter.key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-[24px] border border-[#F2E5C5]/18 bg-[#550B18] p-5 text-[#F7EBCF] shadow-[0_24px_62px_rgba(85,11,24,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] lg:p-6"
            >
              {chapter.anchors.map((anchor) => (
                <span key={anchor} id={anchor} className="absolute -top-28" />
              ))}
              <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
                <div className="flex flex-col justify-between">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#D96A32]">
                    {chapter.roman}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl font-black uppercase leading-tight text-[#F7EBCF] lg:text-[34px]">
                    {renderFormattedText(chapter.heading)}
                  </h3>
                  <p className="mt-4 text-base font-semibold italic leading-relaxed text-[#F7EBCF]/78">
                    {formatTypography(chapter.subtitle)}
                  </p>
                  <div className="pt-6">
                    <a href="#pricing" className="block w-full">
                      <Button variant="primary" size="sm" className="w-full justify-center">
                        {chapter.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[18px] border border-[#F2E5C5]/36 bg-[#F7EBCF] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]">
                    <p className="font-heading text-2xl font-black leading-tight text-[#550B18]">
                      Методология решает запросы:
                    </p>
                    <div className="mt-4 grid gap-2.5">
                      {chapter.requests.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-[14px] border border-[#550B18]/10 bg-[#F2E5C5] p-3 text-sm font-semibold leading-snug text-[#3A000C]"
                        >
                          <CheckSquare2 className="mt-0.5 h-4 w-4 flex-none text-[#D96A32]" />
                          <p>{renderFormattedText(item)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[18px] border border-[#F2E5C5]/36 bg-[#F7EBCF] p-4 text-[#3A000C] shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]">
                    <ChapterResult chapter={chapter} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
