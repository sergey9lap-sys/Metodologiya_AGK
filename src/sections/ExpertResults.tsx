"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionBackground } from "@/components/SectionBackground";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckSquare2,
  CircleDollarSign,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    key: "expert",
    roman: "Глава I",
    title: "Эксперт",
    heading:
      "Вы — эксперт. Ваши знания стоят миллионы. Но без методологии они так и останутся в вашей голове",
    mobileRole: "Вы эксперт",
    mobileCard: "/academy/mobile-cards/expert-card.png",
    subtitle:
      "Курс «Методология» превращает хаос вашей экспертизы в продукт, который ученики проходят до конца и приводят друзей.",
    image: "/эксперт.png",
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
      "и сформированной продуктовой линейкой (3‑4\u00A0тариф), в которой клиенты развиваются, покупая все ваши продукты",
    cta: "Пройти курс и создать свой продукт",
  },
  {
    key: "methodologist",
    roman: "Глава II",
    title: "Методолог",
    heading: "Методолог — профессия № 1 в EdTech 2026",
    mobileRole: "Вы методолог",
    mobileCard: "/academy/mobile-cards/methodologist-card.png",
    subtitle:
      "Вы научитесь проектировать образовательные продукты для экспертов и бизнеса. Старт в профессии — с первого месяца после обучения.",
    image: "/будущий методолог.png",
    anchors: ["methodologist-career", "methodologist"],
    salaryItems: [
      {
        icon: Briefcase,
        title: "Начинающий методолог",
        amount: "50\u00A0000–80\u00A0000\u00A0₽",
        caption: "за проект",
      },
      {
        icon: Target,
        title: "ТОП-методолог",
        amount: "от\u00A0150\u00A0000\u00A0₽",
        caption: "за проект",
      },
      {
        icon: CircleDollarSign,
        title: "Директор по продукту",
        amount: "220\u00A0000–350\u00A0000\u00A0₽",
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
  },
  {
    key: "entrepreneur",
    roman: "Глава III",
    title: "Предприниматель",
    heading: "Предприниматель без методологии — как генерал без карты",
    mobileRole: "Вы предприниматель",
    mobileCard: "/academy/mobile-cards/entrepreneur-card.png",
    subtitle:
      "Методология — прокачка системного мышления. Наводит порядок в процессах, команде и продуктах.",
    image: "/предприниматель.png",
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

const anchorTops = ["0%", "34%", "68%"];
const shortWords = /(^|\s)(и|в|на|по|от|до|для|из|к|с|со|над|под|при)\s/giu;

const inkVariants = {
  hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.38,
      ease: "easeOut",
      delay: index * 0.045,
    },
  }),
};

const formatTypography = (text: string) =>
  text
    .replace(shortWords, "$1$2\u00A0")
    .replace(/(\d)\s(?=\d)/g, "$1\u00A0")
    .replace(/\s₽/g, "\u00A0₽");

export function ExpertResults() {
  const sectionRef = useRef<HTMLElement>(null);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current) return;

    let context: { revert: () => void } | undefined;

    const setupScroll = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const nextIndex = Math.min(2, Math.floor(self.progress * 3));
            if (nextIndex !== activeRef.current) {
              activeRef.current = nextIndex;
              setActiveIndex(nextIndex);
            }
          },
        });
      }, sectionRef);

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      window.setTimeout(refresh, 350);

      return () => window.removeEventListener("load", refresh);
    };

    let removeLoadListener: (() => void) | undefined;
    setupScroll().then((cleanup) => {
      removeLoadListener = cleanup;
    });

    return () => {
      removeLoadListener?.();
      context?.revert();
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    setIsFlipping(true);
    const timer = window.setTimeout(() => setIsFlipping(false), 620);
    return () => window.clearTimeout(timer);
  }, [activeIndex, shouldReduceMotion]);

  const activeChapter = chapters[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="academy-library relative overflow-visible bg-[#210007] text-[#3A000C] md:h-[330vh]"
    >
      {chapters.map((chapter, index) =>
        chapter.anchors.map((anchor) => (
          <span
            key={anchor}
            id={anchor}
            className="academy-library-anchor"
            style={{ top: anchorTops[index] }}
          />
        ))
      )}

      <DesktopLibraryScene
        chapter={activeChapter}
        activeIndex={activeIndex}
        isFlipping={isFlipping}
      />
      <MobileLibraryScene />
    </section>
  );
}

function DesktopLibraryScene({
  chapter,
  activeIndex,
  isFlipping,
}: {
  chapter: Chapter;
  activeIndex: number;
  isFlipping: boolean;
}) {
  return (
    <div className="sticky top-0 hidden h-screen overflow-hidden md:block">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:33.jpg"
        variant="orange"
        position="object-center"
        className="opacity-70 saturate-[0.78]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_24%_24%,rgba(242,229,197,0.14),transparent_20rem),radial-gradient(circle_at_78%_38%,rgba(214,171,87,0.12),transparent_24rem),linear-gradient(112deg,rgba(23,0,5,0.9),rgba(85,11,24,0.66)_46%,rgba(18,0,4,0.9))]"
      />
      <div aria-hidden="true" className="academy-library-dust pointer-events-none absolute inset-0 z-10" />

      <Container className="relative z-20 flex h-full items-center">
        <div className="grid w-full grid-cols-[0.7fr_1.3fr] items-center gap-7 xl:gap-10">
          <div className="relative min-h-[620px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={chapter.key}
                initial={{ opacity: 0, x: -34, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 28, filter: "blur(10px)" }}
                transition={{ duration: 0.58, ease: "easeOut" }}
                className="absolute inset-0 flex items-end justify-center"
              >
                <div className="academy-character-glow relative h-[610px] w-full max-w-[410px]">
                  <Image
                    src={chapter.image}
                    alt={chapter.title}
                    fill
                    priority={activeIndex === 0}
                    sizes="410px"
                    className="object-contain object-bottom drop-shadow-[0_28px_42px_rgba(0,0,0,0.38)]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <div className="mb-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D6AB57]">
                Библиотека Академии
              </p>
              <div className="mx-auto mt-1 h-1.5 w-1.5 rotate-45 bg-[#D6AB57]" aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`${chapter.key}-title`}
                  initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                  transition={{ duration: 0.42, ease: "easeOut" }}
                  className="mt-1 font-heading text-[29px] font-black uppercase leading-tight text-[#F7EBCF]"
                >
                  {chapter.roman} — {chapter.title}
                </motion.h2>
              </AnimatePresence>
            </div>

            <div className={`academy-book ${isFlipping ? "academy-book--flipping" : ""}`}>
              <div className="academy-book-edge academy-book-edge--left" aria-hidden="true" />
              <div className="academy-book-edge academy-book-edge--right" aria-hidden="true" />
              <div className="academy-book-spine" />
              {isFlipping ? <div className="academy-turn-sheet" aria-hidden="true" /> : null}
              <div className="academy-page academy-page--left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${chapter.key}-left`}
                    initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                    transition={{ duration: 0.42, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <p className="font-heading text-[22px] font-black leading-tight text-[#550B18]">
                      Методология решает запросы:
                    </p>
                    <div className="mt-5 space-y-2.5">
                      {chapter.requests.map((item, index) => (
                        <motion.div
                          key={item}
                          custom={index}
                          variants={inkVariants}
                          initial="hidden"
                          animate="visible"
                          className="academy-ink-row"
                        >
                          <span className="academy-ink-mark" aria-hidden="true" />
                          <p>{formatTypography(item)}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="academy-page academy-page--right">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${chapter.key}-right`}
                    initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                    transition={{ duration: 0.42, ease: "easeOut", delay: 0.12 }}
                    className="relative z-10 flex min-h-full flex-col"
                  >
                    <p className="font-heading text-2xl font-black leading-tight text-[#550B18]">
                      <ChapterHeading chapter={chapter} />
                    </p>
                    <p className="mt-2 text-[15px] italic leading-snug text-[#5A2730]">
                      {formatTypography(chapter.subtitle)}
                    </p>
                    <ChapterResult chapter={chapter} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function ChapterHeading({ chapter }: { chapter: Chapter }) {
  if (chapter.key === "expert") {
    return (
      <>
        Вы — эксперт. Ваши знания стоят миллионы.
        <br />
        Но без методологии они
        <br />
        так и останутся
        <br />
        в вашей голове
      </>
    );
  }

  if (chapter.key === "entrepreneur") {
    return (
      <>
        Предприниматель без методологии —
        <br />
        как генерал без карты
      </>
    );
  }

  return <>{formatTypography(chapter.heading)}</>;
}

function ChapterResult({ chapter, hideCta = false }: { chapter: Chapter; hideCta?: boolean }) {
  return (
    <div className="mt-3 flex flex-1 flex-col">
      {"salaryItems" in chapter && chapter.salaryItems ? (
        <div className="space-y-3">
          {chapter.salaryItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="academy-seal-row">
                <Icon className="h-5 w-5 flex-none text-[#75162E]" />
                <p>
                  <span className="font-semibold">{formatTypography(item.title)}:</span>{" "}
                  <span className="whitespace-nowrap font-heading text-xl font-black text-[#75162E]">
                    {item.amount}
                  </span>{" "}
                  <span className="text-sm text-[#76585C]">{formatTypography(item.caption)}</span>
                </p>
              </div>
            );
          })}
        </div>
      ) : null}

      {"resultIntro" in chapter && chapter.resultIntro ? (
        <p className="text-[15px] leading-snug text-[#3A000C]">{formatTypography(chapter.resultIntro)}</p>
      ) : null}

      {"outcomes" in chapter && chapter.outcomes ? (
        <div className="my-3 space-y-1.5">
          {chapter.outcomes.map((item) => (
            <div key={item} className="academy-ink-row">
              <span className="academy-ink-mark mt-1" aria-hidden="true" />
              <p>{formatTypography(item)}</p>
            </div>
          ))}
        </div>
      ) : null}

      {"team" in chapter && chapter.team ? (
        <div className="academy-manuscript-note">
          <Users className="h-5 w-5 flex-none text-[#75162E]" />
          <p>{formatTypography(chapter.team)}</p>
        </div>
      ) : null}

      {"accent" in chapter && chapter.accent ? (
        <div className="academy-manuscript-note">
          <Sparkles className="h-5 w-5 flex-none text-[#75162E]" />
          <p>{formatTypography(chapter.accent)}</p>
        </div>
      ) : null}

      {!hideCta && "cta" in chapter && chapter.cta ? (
        <div className="mt-auto pt-3">
          <a href="#pricing">
            <Button variant="secondary" size="sm" className="w-full">
              {chapter.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      ) : null}
    </div>
  );
}

function MobileRoleCard({
  chapter,
  index,
  isActive,
  isRequestsOpen,
  onOpen,
  onOpenRequests,
}: {
  chapter: Chapter;
  index: number;
  isActive: boolean;
  isRequestsOpen: boolean;
  onOpen: () => void;
  onOpenRequests: () => void;
}) {
  const cardMinHeight = !isActive ? "min-h-[560px]" : isRequestsOpen ? "min-h-[740px]" : "min-h-[680px]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 + index * 0.1 }}
      className="relative"
    >
      <div className="[perspective:1400px]">
        <motion.div
          animate={{ rotateY: isActive ? 180 : 0 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className={`relative transition-[min-height] duration-500 [transform-style:preserve-3d] ${cardMinHeight}`}
        >
          <button
            type="button"
            onClick={onOpen}
            aria-expanded={isActive}
            className="absolute inset-0 block w-full overflow-hidden rounded-[28px] border border-[#D6AB57]/56 bg-[#210007] text-left shadow-[0_24px_58px_rgba(0,0,0,0.34),inset_0_0_0_1px_rgba(247,235,207,0.12)] [backface-visibility:hidden]"
          >
            <Image
              src={chapter.mobileCard}
              alt={chapter.title}
              fill
              sizes="(max-width: 767px) 92vw, 360px"
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,0,7,0.08)_0%,rgba(32,0,7,0.05)_48%,rgba(32,0,7,0.82)_100%)]" />
            <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-[#D6AB57]/54 bg-[#210007]/78 p-4 text-center shadow-[0_12px_28px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-sm">
              <p className="font-heading text-2xl font-black uppercase leading-none text-[#F7EBCF]">
                {chapter.title}
              </p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.13em] text-[#D6AB57]">
                Нажмите, чтобы увидеть запросы
              </p>
            </div>
          </button>

          <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-[#D6AB57]/54 bg-[#F5DEAB] p-5 text-[#3A000C] shadow-[0_24px_58px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.64)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_9%,rgba(255,255,255,0.5),transparent_12rem),radial-gradient(circle_at_82%_82%,rgba(117,22,46,0.08),transparent_13rem),repeating-linear-gradient(105deg,rgba(85,11,24,0.026)_0_1px,transparent_1px_10px)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 rounded-[22px] border border-[#75162E]/18"
            />
            <AnimatePresence mode="wait">
              {!isRequestsOpen ? (
                <motion.div
                  key={`${chapter.key}-mobile-result`}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="relative z-10 flex min-h-full flex-col"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B98534]">
                    {chapter.roman}
                  </p>
                  <h3 className="mt-1 font-heading text-3xl font-black uppercase leading-tight text-[#550B18]">
                    {chapter.mobileRole}
                  </h3>
                  <p className="mt-4 font-heading text-xl font-black leading-tight text-[#550B18]">
                    <ChapterHeading chapter={chapter} />
                  </p>
                  <p className="mt-3 text-sm italic leading-relaxed text-[#5A2730]">
                    {formatTypography(chapter.subtitle)}
                  </p>
                  <ChapterResult chapter={chapter} hideCta />
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="mt-auto w-full"
                    onClick={onOpenRequests}
                  >
                    Какие задачи решает методология
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={`${chapter.key}-mobile-requests`}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B98534]">
                    {chapter.mobileRole}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-black leading-tight text-[#550B18]">
                    Методология решает запросы:
                  </h3>
                  <div className="mt-5 space-y-2.5">
                    {chapter.requests.map((item) => (
                      <div key={item} className="academy-ink-row text-[14px] leading-snug">
                        <CheckSquare2 className="mt-0.5 h-4 w-4 flex-none text-[#75162E]" />
                        <p>{formatTypography(item)}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function MobileLibraryScene() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [requestsKey, setRequestsKey] = useState<string | null>(null);

  const openCard = (key: string) => {
    setActiveKey((current) => {
      if (current === key) return current;
      setRequestsKey(null);
      return key;
    });
  };

  return (
    <section className="relative z-20 overflow-hidden bg-[#210007] px-4 py-12 md:hidden">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:33.jpg"
        variant="orange"
        position="object-center"
        className="opacity-58 saturate-[0.78]"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_28%_12%,rgba(214,171,87,0.18),transparent_16rem),linear-gradient(180deg,rgba(31,0,7,0.88),rgba(85,11,24,0.7)_46%,rgba(20,0,5,0.92))]" />

      <div className="relative z-20 mx-auto max-w-[430px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.48, ease: "easeOut" }}
          className="mb-7 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6AB57]">
            Библиотека Академии
          </p>
          <h2 className="mt-2 font-heading text-3xl font-black uppercase leading-tight text-[#F7EBCF]">
            Кто вы сейчас?
          </h2>
        </motion.div>

        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <MobileRoleCard
              key={chapter.key}
              chapter={chapter}
              index={index}
              isActive={activeKey === chapter.key}
              isRequestsOpen={requestsKey === chapter.key}
              onOpen={() => openCard(chapter.key)}
              onOpenRequests={() => setRequestsKey(chapter.key)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
