"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check, Flame, Gift, Sparkles, Star, Users, X } from "lucide-react";
import { motion } from "framer-motion";
import { COURSE_START_DATE } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const commonBonuses = [
  "Гайд «Продающее резюме»",
  "Воркбук «Как оформить в своей работе кейсы»",
  "Мастер-класс «Как создать свой входной продукт: мастер‑класс, марафон»",
  "Метрики, которые методолог может использовать в своей работе",
  "Пакет документов для подготовки и запуска программ ДО и ДПО",
];

const advancedBonuses = [
  "Мастер-класс «Продающие консультации»",
  "Мастер-класс «Pro мастермайнд»",
  "Интенсив: продающие консультации",
  "Онлайн-воркшоп: бизнес‑разминки",
];

const tariffs = [
  {
    number: "1 тариф",
    name: "БАЗОВЫЙ",
    duration: "3 недели",
    format: "Стартовая сборка продукта с поддержкой",
    price: 64900,
    oldPrice: 74900,
    spotsLeft: null,
    widgetId: "954167",
    features: [
      "Предобучение перед стартом курса",
      "Уроки в записи в рамках тарифа",
      "3 практические Zoom‑сессии с Александрой",
      "Домашние задания и обратная связь в подгруппах",
      "Декомпозиция образовательного продукта под контролем наставников",
      "Формирование продукта и применение инструментов базовой методологии",
      "Защита проекта на живой сессии с наставниками",
      "Доступ к материалам курса 30 дней",
    ],
    highlighted: false,
  },
  {
    number: "2 тариф",
    name: "ОПТИМАЛЬНЫЙ",
    duration: "5 недель",
    format: "Больше практики и защита проекта",
    price: 119900,
    oldPrice: 134900,
    spotsLeft: null,
    widgetId: "954169",
    features: [
      "Всё из базового тарифа",
      "5 практических Zoom‑сессий с Александрой",
      "Индивидуальная и групповая работа с наставниками в подгруппах",
      "Подробный план продукта и фиксация практических заданий",
      "Защита проекта с наставником",
      "Доступ к материалам курса 60 дней",
    ],
    highlighted: false,
  },
  {
    number: "3 тариф",
    name: "МАСТЕР",
    duration: "2 месяца",
    format: "Стратегия линейки и разборы проекта",
    price: 184900,
    oldPrice: 209900,
    spotsLeft: 5,
    widgetId: "954170",
    features: [
      "Всё из тарифа «Оптимальный»",
      "8 практических Zoom‑сессий с Александрой",
      "Стратегическое построение продуктовой линейки в подгруппах",
      "Разбор продающих элементов внутри образовательного процесса",
      "Библиотека «готовых гипотез» по нишам",
      "Разборы и предзащита проектов с наставниками",
      "Итоговая защита проекта и обратная связь лично от Александры",
      "Бонус: стратегический разбор через год — 30-минутная личная встреча с Александрой о том, где вы сейчас, что построили и куда двигаться дальше",
      "Доступ к материалам курса 90 дней",
    ],
    highlighted: true,
  },
  {
    number: "4 тариф",
    name: "ВИП",
    duration: "3 месяца",
    format: "Персональная стратегия с Александрой",
    price: 400000,
    oldPrice: 450000,
    spotsLeft: 3,
    widgetId: "1477920",
    features: [
      "Всё из тарифа «Мастер»",
      "9 практических Zoom‑сессий с Александрой",
      "Итоговая защита проекта и обратная связь лично от Александры",
      "Две персональные стратегические сессии с Александрой",
      "Совместная разработка продуктовой линейки, флагмана и стратегии запуска",
      "Личный ВИП-наставник и отдельный приватный чат с Александрой",
      "Возможность подключить команду к программе: 1 + 2 участника по согласованию",
      "Личная рекомендация подрядчиков под задачи запуска",
      "Доступ к материалам курса 120 дней",
    ],
    highlighted: false,
  },
];

const romanSteps = ["I СТУПЕНЬ", "II СТУПЕНЬ", "III СТУПЕНЬ", "IV СТУПЕНЬ"];

const challengeItems = [
  "Библиотека материалов",
  "2 недели задания в чате участников",
  "Комьюнити экспертов и предпринимателей",
];

const TELEGRAM_MANAGER_URL = "https://agkedu.getcourse.ru/tg_subscribe";
const CHALLENGE_WIDGET_ID = "1606344";

type PricingProps = {
  title?: string;
  showStartDate?: boolean;
};

function renderFeature(feature: string) {
  if (feature.startsWith("Возможность подключить команду")) {
    return (
      <>
        Возможность подключить команду к программе:
        <br />
        1 + 2 участника
        <br />
        по согласованию
      </>
    );
  }

  return feature;
}

export function Pricing({ title = "Тарифы", showStartDate = true }: PricingProps) {
  const [activeWidget, setActiveWidget] = useState<{ id: string; title: string } | null>(null);
  const [widgetHeight, setWidgetHeight] = useState(680);

  const getWidgetUrl = (widgetId: string) => {
    if (typeof window === "undefined") {
      return `https://agkedu.getcourse.ru/pl/lite/widget/widget?id=${widgetId}`;
    }

    const params = new URLSearchParams(window.location.search);
    params.set("id", widgetId);
    params.set("ref", document.referrer);
    params.set("loc", window.location.href);

    return `https://agkedu.getcourse.ru/pl/lite/widget/widget?${params.toString()}`;
  };

  useEffect(() => {
    if (!activeWidget) {
      return;
    }

    setWidgetHeight(680);

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://agkedu.getcourse.ru") {
        return;
      }

      const height = Number(event.data?.height);
      if (height > 0) {
        setWidgetHeight(Math.max(height, 680));
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [activeWidget]);

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#140B0D] py-12 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(214,171,87,0.18),transparent_26rem),radial-gradient(circle_at_18%_72%,rgba(117,22,46,0.22),transparent_22rem),linear-gradient(180deg,#1B0D10,#2A0D14_48%,#12080A)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(90deg,transparent_0_42px,rgba(247,235,207,0.08)_42px_43px,transparent_43px_86px),repeating-linear-gradient(0deg,rgba(214,171,87,0.035)_0_1px,transparent_1px_26px)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#F2E5C5]/38" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[8%] top-0 hidden h-full w-px bg-[#F2E5C5]/10 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[12%] top-0 hidden h-full w-px bg-[#F2E5C5]/10 lg:block" />
      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center lg:mb-10"
        >
          <h2 className="mb-4 font-heading text-3xl font-black uppercase text-[#F7EBCF] lg:text-4xl">
            {title}
          </h2>
          {showStartDate && (
            <p className="text-lg font-medium text-[#F7EBCF]/86">Старт: {COURSE_START_DATE}</p>
          )}
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tariffs.map((tariff, index) => (
            <motion.div
              key={tariff.name}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              className={tariff.highlighted ? "lg:-mt-5" : ""}
            >
              <div
                className={`relative isolate h-full p-0 ${
                  tariff.highlighted
                    ? "overflow-visible border-2 border-[#E0BE65] bg-[#E8C16D] text-[#3A000C] shadow-[0_0_38px_rgba(224,190,101,0.26),0_34px_78px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-20px_38px_rgba(85,11,24,0.08)]"
                    : "overflow-hidden border border-[#D6AB57]/48 bg-[#F8EBCB] text-[#3A000C] shadow-[0_22px_52px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.66),inset_0_-18px_34px_rgba(85,11,24,0.055)]"
                } [clip-path:polygon(0_3%,7%_0,93%_0,100%_3%,100%_96%,94%_100%,6%_100%,0_96%)] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.62),transparent_28%),radial-gradient(circle_at_84%_84%,rgba(117,22,46,0.075),transparent_30%),repeating-linear-gradient(108deg,rgba(85,11,24,0.018)_0_1px,transparent_1px_12px),linear-gradient(135deg,#FFF4D7,#E7D6B4_48%,#F8EBCB)] after:absolute after:inset-[9px] after:-z-10 after:border after:border-[#75162E]/10 after:[clip-path:polygon(0_3%,7%_0,93%_0,100%_3%,100%_96%,94%_100%,6%_100%,0_96%)]`}
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#D6AB57]/58 to-transparent" />
                <div aria-hidden="true" className="pointer-events-none absolute left-6 right-6 top-3 h-2 rounded-full border border-[#D6AB57]/34 bg-[#F7EBCF]/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-3 left-6 right-6 h-2 rounded-full border border-[#D6AB57]/28 bg-[#E4D3AF]/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)]" />
                {tariff.highlighted && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.34)_34%,transparent_58%)]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_4%,rgba(224,190,101,0.22),transparent_18rem)]"
                    />
                  </>
                )}
                {tariff.highlighted && (
                  <div className="absolute -top-5 right-3 z-30 flex items-center gap-1.5 rounded-full border border-[#E0BE65]/80 bg-[#550B18] px-3 py-2 pl-2 text-[11px] font-black uppercase tracking-wide text-[#F7EBCF] shadow-[0_12px_30px_rgba(85,11,24,0.44),0_0_18px_rgba(224,190,101,0.22)] ring-2 ring-[#F7EBCF]/75">
                    <span className="relative flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#FFFFFF_0%,#F7EBCF_32%,#F2E5C5_72%,#75162E_100%)] shadow-[0_0_18px_rgba(247,235,207,0.72)]">
                      <span className="absolute inset-0 rounded-full bg-white/30 blur-[1px]" />
                      <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                      <Star className="relative h-3 w-3 fill-white text-white drop-shadow-sm" />
                    </span>
                    Рекомендуем
                  </div>
                )}

                <div className="relative flex h-full flex-col">
                  <div
                    className={`border-b px-4 pb-4 ${tariff.highlighted ? "pt-12" : "pt-6"} ${
                      tariff.highlighted
                        ? "border-[#9B6D24]/38 bg-[radial-gradient(circle_at_26%_8%,rgba(255,255,255,0.72),transparent_26%),radial-gradient(circle_at_76%_22%,rgba(224,190,101,0.34),transparent_28%),linear-gradient(135deg,#FFF1BF,#D6AB57_62%,#EED58E)]"
                        : "border-[#75162E]/16 bg-[linear-gradient(135deg,rgba(255,255,255,0.34),rgba(242,229,197,0.28))]"
                    }`}
                  >
                    <p
                      className={`mb-3 font-heading text-lg font-black uppercase tracking-wide ${
                        tariff.highlighted ? "text-[#75162E]" : "text-[#75162E]"
                      }`}
                    >
                      {romanSteps[index]}
                    </p>
                    <p
                      className={`mb-2 text-xs font-black uppercase tracking-wide ${
                        tariff.highlighted ? "text-[#9B6D24]" : "text-orange-1"
                      }`}
                    >
                      {tariff.number}
                    </p>
                    <h3
                      className={`font-heading text-2xl font-black leading-none ${
                        tariff.highlighted ? "text-[#3A000C]" : "text-text-primary"
                      }`}
                    >
                      {tariff.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm font-bold ${
                        tariff.highlighted ? "text-[#75162E]" : "text-orange-1"
                      }`}
                    >
                      {tariff.duration}
                    </p>
                    <p
                      className={`mt-3 min-h-[40px] text-xs font-semibold leading-snug ${
                        tariff.highlighted ? "text-[#5A2730]" : "text-text-secondary"
                      }`}
                    >
                      {tariff.format}
                    </p>
                    <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
                      <span
                        className={`font-heading text-3xl font-black leading-none xl:text-[34px] ${
                          tariff.highlighted ? "text-[#3A000C]" : "text-text-primary"
                        }`}
                      >
                        {tariff.price.toLocaleString("ru-RU")} ₽
                      </span>
                      <span
                        className={`text-base font-bold leading-none line-through decoration-2 ${
                          tariff.highlighted ? "text-[#76585C]/70" : "text-text-secondary/70"
                        }`}
                      >
                        {tariff.oldPrice.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-4 py-4">
                    {tariff.spotsLeft && (
                      <div
                        className={`animate-pulse-glow mb-3 flex items-center gap-2 rounded-[10px] border px-3 py-2 text-xs font-bold shadow-md ${
                          tariff.highlighted
                            ? "border-[#D6AB57]/46 bg-[#75162E] text-[#F7EBCF]"
                            : "border-orange-1 bg-orange-1 text-white"
                        }`}
                      >
                        <Users className="h-3.5 w-3.5" />
                        <span>Осталось {tariff.spotsLeft} мест</span>
                      </div>
                    )}

                    <div className="flex-1 space-y-2.5">
                      {tariff.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <div
                            className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border shadow-[0_0_12px_rgba(214,171,87,0.2)] ${
                              tariff.highlighted
                                ? "border-[#D6AB57]/60 bg-[#75162E]"
                                : "border-[#D6AB57]/42 bg-orange-1"
                            }`}
                          >
                            <Check
                              className={`h-2.5 w-2.5 ${
                                tariff.highlighted ? "text-[#F7EBCF]" : "text-white"
                              }`}
                            />
                          </div>
                          <span
                            className={`text-xs leading-snug ${
                              tariff.highlighted ? "text-[#4A1B20]" : "text-text-secondary"
                            }`}
                          >
                            {renderFeature(feature)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-5">
                      <Button
                        type="button"
                        variant="primary"
                        className="group w-full rounded-[10px] border border-[#D6AB57]/36 px-3 text-sm shadow-[0_12px_26px_rgba(85,11,24,0.16)]"
                        onClick={() =>
                          setActiveWidget({
                            id: tariff.widgetId,
                            title: `Тариф «${tariff.name}»`,
                          })
                        }
                      >
                        Оставить заявку
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mx-auto mt-7 max-w-6xl overflow-hidden rounded-[22px] border border-[#D6AB57]/50 bg-[#F8EBCB] shadow-[0_22px_56px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.62)]"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative isolate flex flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.56),transparent_26%),radial-gradient(circle_at_82%_84%,rgba(117,22,46,0.08),transparent_28%),repeating-linear-gradient(105deg,rgba(85,11,24,0.022)_0_1px,transparent_1px_10px),linear-gradient(145deg,#FFF4D7,#E7D5B2)] p-5 text-[#3A000C] lg:p-7">
              <div aria-hidden="true" className="pointer-events-none absolute left-4 right-4 top-4 h-3 rounded-full border border-[#D6AB57]/38 bg-[#F8EBCB] shadow-[0_7px_16px_rgba(58,0,12,0.08),inset_0_1px_0_rgba(255,255,255,0.7)]" />
              <div aria-hidden="true" className="pointer-events-none absolute bottom-4 left-4 right-4 h-3 rounded-full border border-[#D6AB57]/34 bg-[#E4D3AF]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.44)]" />
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D6AB57]/54 bg-[#550B18] text-[#F7EBCF] ring-1 ring-[#D6AB57]/25">
                  <Gift className="h-6 w-6" />
                </div>
                <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-[#75162E]/72">
                  Подарочный набор
                </p>
                <h3 className="font-heading text-3xl font-black uppercase leading-none lg:text-4xl">
                  Бонусы к тарифам
                </h3>
              </div>
              <div className="mt-6 rounded-[16px] border border-[#D6AB57]/36 bg-[#F8EBCB]/72 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.56)]">
                <p className="text-sm font-black leading-snug text-[#3A000C]">
                  Все бонусы стоимостью 59 000 ₽ — бесплатно
                </p>
                <div className="mt-2 flex flex-wrap items-end gap-x-2 gap-y-1">
                  <span className="text-lg font-black leading-none text-[#76585C]/62 line-through decoration-2">
                    59 000 ₽
                  </span>
                  <span className="text-lg font-black leading-none text-[#75162E]/75">→</span>
                  <span className="font-heading text-3xl font-black leading-none text-[#550B18]">
                    0 ₽
                  </span>
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#75162E]/72">
                  при оплате в течение 48 часов
                </p>
              </div>
              <div className="mt-6 rounded-[16px] border border-[#D6AB57]/32 bg-[#FFF6DC] px-4 py-3 text-[#550B18] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <div className="flex items-start gap-2">
                  <Flame className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-wide opacity-70">
                      Сгорающий бонус во всех тарифах
                    </p>
                    <p className="text-sm font-black leading-snug">Участие в челлендже</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-2 lg:p-7">
              <div className="rounded-[18px] border border-[#D6AB57]/38 bg-[#F2E5C5] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.58),0_12px_28px_rgba(85,11,24,0.06)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-wide text-[#75162E]">
                    1-4 тариф
                  </p>
                  <span className="rounded-full border border-[#D6AB57]/32 bg-white px-2.5 py-1 text-xs font-black text-[#550B18]">
                    5 бонусов
                  </span>
                </div>
                <div className="space-y-2.5">
                  {commonBonuses.map((bonus) => (
                    <div key={bonus} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#75162E] text-[#F7EBCF]">
                        <Sparkles className="h-2.5 w-2.5" />
                      </span>
                      <p className="text-sm font-semibold leading-snug text-text-primary">
                        {bonus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[18px] border border-[#550B18]/20 bg-[linear-gradient(145deg,#fff,#F7EBCF)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.58),0_12px_28px_rgba(85,11,24,0.06)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-wide text-[#550B18]">
                    Только 2-4 тариф
                  </p>
                  <span className="rounded-full border border-[#D6AB57]/38 bg-[#550B18] px-2.5 py-1 text-xs font-black text-white">
                    +4 бонуса
                  </span>
                </div>
                <div className="mb-3 rounded-[12px] border border-orange-1/25 bg-[#F2E5C5] px-3 py-2">
                  <p className="text-xs font-black leading-snug text-[#550B18]">
                    Включает все 5 бонусов из блока 1-4 тарифов
                  </p>
                </div>
                <div className="space-y-2.5">
                  {advancedBonuses.map((bonus) => (
                    <div key={bonus} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#75162E] text-[#F7EBCF]">
                        <Sparkles className="h-2.5 w-2.5" />
                      </span>
                      <p className="text-sm font-semibold leading-snug text-text-primary">
                        {bonus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-[22px] border border-[#D6AB57]/42 bg-[#F8EBCB] shadow-[0_18px_46px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.58)]"
        >
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-5 lg:p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6AB57]/42 bg-[#550B18] px-4 py-2 text-sm font-black uppercase tracking-wide text-white">
                <Flame className="h-4 w-4" />
                Челлендж
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {challengeItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[14px] border border-orange-1/25 bg-[#F2E5C5] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.56)]"
                  >
                    <Check className="mb-2 h-4 w-4 text-[#75162E]" />
                    <p className="text-sm font-bold leading-snug text-text-primary">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xl font-black leading-tight text-text-primary lg:text-2xl">
                Разработаете свою продуктовую линейку и распакуете свою экспертность
              </p>
              <div className="mt-4 flex items-start gap-3 rounded-[16px] border border-orange-1/30 bg-white p-4 shadow-[0_8px_24px_rgba(40,25,10,0.06)]">
                <Gift className="mt-1 h-5 w-5 flex-shrink-0 text-[#75162E]" />
                <p className="text-sm font-bold leading-relaxed text-text-primary">
                  Бонус на выбор: 1 месяц клуба или сессия с методологом команды/маркетологом
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center border-l border-[#D6AB57]/28 bg-[radial-gradient(circle_at_50%_0%,rgba(224,190,101,0.18),transparent_30%),linear-gradient(145deg,#FFF4D7,#E7D5B2)] p-5 text-[#3A000C] lg:p-7">
              <p className="mb-2 text-sm font-black uppercase tracking-wide text-[#75162E]/75">
                Стоимость участия
              </p>
              <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="font-heading text-4xl font-black leading-none"> 5 900 ₽</span>
                <span className="text-xl font-bold leading-none text-[#76585C]/58 line-through decoration-2">
                  19 900 ₽
                </span>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[12px] border border-[#D6AB57]/54 bg-[#550B18] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F7EBCF] shadow-[0_10px_28px_rgba(85,11,24,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#75162E]"
                onClick={() =>
                  setActiveWidget({
                    id: CHALLENGE_WIDGET_ID,
                    title: "Челлендж за 5 900 ₽",
                  })
                }
              >
                Записаться на челлендж
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mx-auto mt-4 max-w-6xl rounded-[18px] border border-[#D6AB57]/34 bg-[#F8EBCB]/90 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-sm"
        >
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-lg font-bold text-text-primary">
              Остались вопросы по тарифам или формату обучения?
            </p>
            <a
              href={TELEGRAM_MANAGER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[12px] border border-[#F2E5C5]/70 bg-[#F2E5C5] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-[#550B18] shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F7EBCF] hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)] md:w-auto"
            >
              Задать вопрос менеджеру
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </Container>

      {activeWidget && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeWidget.title}
          onClick={() => setActiveWidget(null)}
        >
          <div
            className="relative h-[min(760px,92vh)] w-full max-w-[560px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-orange-1/20 px-4 py-3">
              <p className="pr-4 text-sm font-bold uppercase tracking-wide text-text-primary">
                {activeWidget.title}
              </p>
              <button
                type="button"
                aria-label="Закрыть"
                onClick={() => setActiveWidget(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#550B18] text-white transition-colors hover:bg-[#3A000C]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-[calc(100%-65px)] overflow-y-auto">
              <iframe
                key={activeWidget.id}
                src={getWidgetUrl(activeWidget.id)}
                title={activeWidget.title}
                className="w-full border-0"
                style={{ height: `${widgetHeight}px` }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
