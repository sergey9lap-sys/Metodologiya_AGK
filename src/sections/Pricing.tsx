"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
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
  "Воркбук «Как оформить в своей работе кейсы»",
  "Мастер-класс «Как создать свой входной продукт: мастер-класс, марафон»",
  "Метрики, которые методолог может использовать в своей работе",
  "Пакет документов для подготовки и запуска программ ДО и ДПО",
];

const advancedBonuses = [
  "Мастер-класс «Продающие консультации»",
  "Мастер-класс «Pro мастермайнд»",
  "Интенсив: продающие консультации",
  "Онлайн-воркшоп: бизнес-разминки",
];

const tariffs = [
  {
    number: "1 тариф",
    name: "БАЗОВЫЙ",
    duration: "3 недели",
    format: "Стартовая сборка продукта с поддержкой",
    price: 64900,
    oldPrice: 74900,
    spotsLeft: null,
    widgetId: "954167",
    features: [
      "Предобучение перед стартом курса",
      "Уроки в записи в рамках тарифа",
      "3 практические Zoom-сессии с Александрой",
      "Домашние задания и обратная связь в подгруппах",
      "Декомпозиция образовательного продукта под контролем наставников",
      "Формирование продукта и применение инструментов базовой методологии",
      "Защита проекта на живой сессии с наставниками",
      "Доступ к материалам курса 30 дней",
    ],
    highlighted: false,
  },
  {
    number: "2 тариф",
    name: "ОПТИМАЛЬНЫЙ",
    duration: "5 недель",
    format: "Больше практики и защита проекта",
    price: 119900,
    oldPrice: 134900,
    spotsLeft: null,
    widgetId: "954169",
    features: [
      "Всё из базового тарифа",
      "5 практических Zoom-сессий с Александрой",
      "Индивидуальная и групповая работа с наставниками в подгруппах",
      "Подробный план продукта и фиксация практических заданий",
      "Защита проекта с наставником",
      "Доступ к материалам курса 60 дней",
    ],
    highlighted: false,
  },
  {
    number: "3 тариф",
    name: "МАСТЕР",
    duration: "2 месяца",
    format: "Стратегия линейки и разборы проекта",
    price: 184900,
    oldPrice: 209900,
    spotsLeft: 5,
    widgetId: "954170",
    features: [
      "Всё из тарифа «Оптимальный»",
      "8 практических Zoom-сессий с Александрой",
      "Стратегическое построение продуктовой линейки в подгруппах",
      "Разбор продающих элементов внутри образовательного процесса",
      "Библиотека «готовых гипотез» по нишам",
      "Разборы и предзащита проектов с наставниками",
      "Итоговая защита проекта и обратная связь лично от Александры",
      "Бонус: стратегический разбор через год — 30-минутная личная встреча с Александрой о том, где вы сейчас, что построили и куда двигаться дальше",
      "Доступ к материалам курса 90 дней",
    ],
    highlighted: true,
  },
  {
    number: "4 тариф",
    name: "ВИП",
    duration: "3 месяца",
    format: "Персональная стратегия с Александрой",
    price: 400000,
    oldPrice: 450000,
    spotsLeft: 3,
    widgetId: "1477920",
    features: [
      "Всё из тарифа «Мастер»",
      "9 практических Zoom-сессий с Александрой",
      "Итоговая защита проекта и обратная связь лично от Александры",
      "Две персональные стратегические сессии с Александрой",
      "Совместная разработка продуктовой линейки, флагмана и стратегии запуска",
      "Личный ВИП-наставник и отдельный приватный чат с Александрой",
      "Возможность подключить команду к программе: 1 + 2 участника по согласованию",
      "Личная рекомендация подрядчиков под задачи запуска",
      "Доступ к материалам курса 120 дней",
    ],
    highlighted: false,
  },
];

const challengeItems = [
  "Библиотека материалов",
  "2 недели задания в чате участников",
  "Комьюнити экспертов и предпринимателей",
];

const TELEGRAM_MANAGER_URL = "https://agkedu.getcourse.ru/tg_subscribe";
const CHALLENGE_WIDGET_ID = "1606344";

type PricingProps = {
  title?: string;
  showStartDate?: boolean;
};

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
      if (height > 0) {
        setWidgetHeight(Math.max(height, 680));
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [activeWidget]);

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#550B18] py-12 lg:py-16">
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                variant="default"
                className={`relative h-full overflow-hidden p-0 ${
                  tariff.highlighted
                    ? "scale-[1.03] border-2 border-[#F2E5C5]/55 bg-[linear-gradient(145deg,rgba(117,22,46,0.96),rgba(85,11,24,0.92)_58%,rgba(58,0,12,0.86))] text-white shadow-[0_18px_46px_rgba(0,0,0,0.18)] backdrop-blur-sm hover:border-[#F2E5C5]/75 hover:shadow-[0_18px_46px_rgba(0,0,0,0.18)]"
                    : "border-[#F2E5C5]/70 bg-[#F7EBCF]/96"
                }`}
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#F2E5C5]/44 to-transparent" />
                {tariff.highlighted && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.20)_34%,transparent_58%)]"
                    />
                  </>
                )}
                {tariff.highlighted && (
                  <div className="absolute right-2 top-2 z-10 flex items-center gap-1.5 rounded-full border border-white/50 bg-[#550B18] px-2.5 py-1.5 pl-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(85,11,24,0.38)] ring-2 ring-[#F7EBCF]/75">
                    <span className="relative flex h-5.5 w-5.5 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#FFFFFF_0%,#F7EBCF_32%,#F2E5C5_72%,#75162E_100%)] shadow-[0_0_18px_rgba(247,235,207,0.72)]">
                      <span className="absolute inset-0 rounded-full bg-white/30 blur-[1px]" />
                      <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                      <Star className="relative h-3 w-3 fill-white text-white drop-shadow-sm" />
                    </span>
                    Рекомендуем
                  </div>
                )}

                <div className="relative flex h-full flex-col">
                  <div
                    className={`border-b px-4 py-4 ${
                      tariff.highlighted
                        ? "border-white/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,247,230,0.04))]"
                        : "border-orange-1/20 bg-[linear-gradient(135deg,#fff,#F2E5C5)]"
                    }`}
                  >
                    <p
                      className={`mb-2 text-xs font-black uppercase tracking-wide ${
                        tariff.highlighted ? "text-white/82" : "text-orange-1"
                      }`}
                    >
                      {tariff.number}
                    </p>
                    <h3
                      className={`font-heading text-2xl font-black leading-none ${
                        tariff.highlighted ? "text-[#F7EBCF]" : "text-text-primary"
                      }`}
                    >
                      {tariff.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm font-bold ${
                        tariff.highlighted ? "text-white/86" : "text-orange-1"
                      }`}
                    >
                      {tariff.duration}
                    </p>
                    <p
                      className={`mt-3 min-h-[40px] text-xs font-semibold leading-snug ${
                        tariff.highlighted ? "text-white/78" : "text-text-secondary"
                      }`}
                    >
                      {tariff.format}
                    </p>
                    <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
                      <span
                        className={`font-heading text-3xl font-black leading-none xl:text-[34px] ${
                          tariff.highlighted ? "text-white" : "text-text-primary"
                        }`}
                      >
                        {tariff.price.toLocaleString("ru-RU")} ₽
                      </span>
                      <span
                        className={`text-base font-bold leading-none line-through decoration-2 ${
                          tariff.highlighted ? "text-white/62" : "text-text-secondary/70"
                        }`}
                      >
                        {tariff.oldPrice.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-4 py-4">
                    {tariff.spotsLeft && (
                      <div
                        className={`animate-pulse-glow mb-3 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-white shadow-md ${
                          tariff.highlighted
                            ? "border border-white/22 bg-white/12"
                            : "border border-orange-1 bg-orange-1"
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
                            className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                              tariff.highlighted ? "bg-[#F7EBCF]" : "bg-orange-1"
                            }`}
                          >
                            <Check
                              className={`h-2.5 w-2.5 ${
                                tariff.highlighted ? "text-[#75162E]" : "text-white"
                              }`}
                            />
                          </div>
                          <span
                            className={`text-xs leading-snug ${
                              tariff.highlighted ? "text-white/82" : "text-text-secondary"
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-5">
                      <Button
                        type="button"
                        variant={tariff.highlighted ? "cream" : "primary"}
                        className="group w-full px-3 text-sm"
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
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-2xl border-2 border-white/70 bg-white shadow-[0_18px_46px_rgba(40,25,10,0.14)]"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between bg-[linear-gradient(145deg,#550B18,#75162E)] p-5 text-white lg:p-7">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/16 ring-1 ring-white/25">
                  <Gift className="h-6 w-6" />
                </div>
                <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-white/72">
                  Подарочный набор
                </p>
                <h3 className="font-heading text-3xl font-black uppercase leading-none lg:text-4xl">
                  Бонусы к тарифам
                </h3>
              </div>
              <div className="mt-6 rounded-xl border border-white/24 bg-white/12 px-4 py-3">
                <p className="text-sm font-black leading-snug text-white">
                  Все бонусы стоимостью 59 000 ₽ — бесплатно
                </p>
                <div className="mt-2 flex flex-wrap items-end gap-x-2 gap-y-1">
                  <span className="text-lg font-black leading-none text-white/62 line-through decoration-2">
                    59 000 ₽
                  </span>
                  <span className="text-lg font-black leading-none text-white/75">→</span>
                  <span className="font-heading text-3xl font-black leading-none text-white">
                    0 ₽
                  </span>
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white/72">
                  при оплате в течение 48 часов
                </p>
              </div>
              <div className="mt-6 rounded-xl bg-white px-4 py-3 text-[#550B18]">
                <div className="flex items-start gap-2">
                  <Flame className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-wide opacity-70">
                      Сгорающий бонус во всех тарифах
                    </p>
                    <p className="text-sm font-black leading-snug">Участие в челлендже</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-2 lg:p-7">
              <div className="rounded-xl border border-orange-1/25 bg-[#F2E5C5] p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-wide text-[#75162E]">
                    1-4 тариф
                  </p>
                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-black text-[#550B18]">
                    5 бонусов
                  </span>
                </div>
                <div className="space-y-2.5">
                  {commonBonuses.map((bonus) => (
                    <div key={bonus} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-1" />
                      <p className="text-sm font-semibold leading-snug text-text-primary">
                        {bonus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#550B18]/20 bg-[linear-gradient(145deg,#fff,#F7EBCF)] p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-wide text-[#550B18]">
                    Только 2-4 тариф
                  </p>
                  <span className="rounded-full bg-[#550B18] px-2.5 py-1 text-xs font-black text-white">
                    +4 бонуса
                  </span>
                </div>
                <div className="mb-3 rounded-lg border border-orange-1/25 bg-[#F2E5C5] px-3 py-2">
                  <p className="text-xs font-black leading-snug text-[#550B18]">
                    Включает все 5 бонусов из блока 1-4 тарифов
                  </p>
                </div>
                <div className="space-y-2.5">
                  {advancedBonuses.map((bonus) => (
                    <div key={bonus} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#75162E]" />
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
          className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-2xl border-2 border-[#550B18]/35 bg-white shadow-[0_18px_46px_rgba(85,11,24,0.18)]"
        >
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-5 lg:p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#550B18] px-4 py-2 text-sm font-black uppercase tracking-wide text-white">
                <Flame className="h-4 w-4" />
                Челлендж
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {challengeItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-orange-1/25 bg-[#F2E5C5] p-3"
                  >
                    <Check className="mb-2 h-4 w-4 text-[#75162E]" />
                    <p className="text-sm font-bold leading-snug text-text-primary">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xl font-black leading-tight text-text-primary lg:text-2xl">
                Разработаете свою продуктовую линейку и распакуете свою экспертность
              </p>
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-orange-1/30 bg-white p-4 shadow-[0_8px_24px_rgba(40,25,10,0.06)]">
                <Gift className="mt-1 h-5 w-5 flex-shrink-0 text-[#75162E]" />
                <p className="text-sm font-bold leading-relaxed text-text-primary">
                  Бонус на выбор: 1 месяц клуба или сессия с методологом команды/маркетологом
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-[linear-gradient(145deg,#550B18,#75162E)] p-5 text-white lg:p-7">
              <p className="mb-2 text-sm font-black uppercase tracking-wide text-white/75">
                Стоимость участия
              </p>
              <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="font-heading text-4xl font-black leading-none">5 900 ₽</span>
                <span className="text-xl font-bold leading-none text-white/58 line-through decoration-2">
                  19 900 ₽
                </span>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[12px] bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#550B18] shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F2E5C5]"
                onClick={() =>
                  setActiveWidget({
                    id: CHALLENGE_WIDGET_ID,
                    title: "Челлендж за 5 900 ₽",
                  })
                }
              >
                Записаться на челлендж
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
          className="mx-auto mt-4 max-w-6xl rounded-2xl border border-white/55 bg-white/82 p-4 shadow-[0_10px_28px_rgba(40,25,10,0.08)] backdrop-blur-sm"
        >
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-lg font-bold text-text-primary">
              Остались вопросы по тарифам или формату обучения?
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
