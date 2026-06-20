"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const schedule = [
  {
    title: "1 модуль = 1 тариф",
    items: [
      {
        date: "8 июня 16:00-18:00",
        title:
          "Лекция с Александрой Горевой-Куртышевой «Основы проектирования топовых образовательных продуктов: реалии 2026»",
      },
      {
        date: "9 июня",
        title: "Открытие уроков первого модуля обучения",
      },
      {
        date: "9-14 июня",
        title:
          "Распределение по наставникам, действующим дипломированным методологам-практикам",
      },
      {
        date: "15 июня 16:00-18:00",
        title:
          "Практика в zoom с Александрой Горевой-Куртышевой «Продуктовая линейка на миллион»",
      },
      {
        date: "16-21 июня",
        title:
          "Индивидуальные сессии с наставниками, формирование индивидуального плана обучения, обсуждение проекта на защиту",
      },
      {
        date: "22 июня 16:00-18:00",
        title:
          "Практика в zoom с Александрой Горевой-Куртышевой «Продукт, который продает себя сам: тема, модули, продуктовое обещание, ИКР»",
      },
      {
        date: "23-28 июня",
        title:
          "Сессия с наставниками по детальной декомпозиции образовательного продукта",
      },
      {
        date: "29 июня 16:00-18:00",
        title:
          "Практика в zoom с Александрой Горевой-Куртышевой «Мастерство автора: как выбрать идеальную форму и ритм работы»",
      },
      {
        date: "30 июня-5 июля",
        title: "Разборы проектов с наставниками и защиты (для участников 1 тарифа)",
      },
    ],
  },
  {
    title: "2 модуль = 2 тариф",
    items: [
      "Включает всё, что входит в 1 модуль",
      "Практика в zoom с Александрой Горевой-Куртышевой «Секретные приёмы в создании продукта: домашние задания, геймификация, сквозные проекты, ИИ»",
      "Уроки в записи второго модуля обучения",
      "Сессия с наставниками по уточнению продукта через мастерство автора",
      "Сессия с наставниками по формированию подробного плана продукта",
      "Практика в zoom с Александрой Горевой-Куртышевой «Идеальный урок: как стать незабываемым тем самым Мастером с большой буквы. Фишки управления вниманием»",
      "Фиксация практических и контрольных заданий на хакатоне с наставниками, докрутка уроков",
      "Разборы проектов с наставниками и защиты (для участников 2 тарифа)",
    ],
  },
  {
    title: "3 модуль = 3‑4 тариф",
    items: [
      "Включает всё, что входит в 1 и 2 модули",
      "Практика в zoom с Александрой Горевой-Куртышевой «Богатый эксперт / бедный эксперт: стратегическая методология на страже вашего благополучия»",
      "Уроки в записи третьего модуля обучения",
      "Сессия с наставниками по стратегической методологии",
      "Практика в zoom с Александрой Горевой-Куртышевой «Продающая методология: механики внутри продукта, которые создаются один раз, а работают постоянно»",
      "Индивидуальные разборы продающих элементов с наставниками в группе",
      "Разборы и предзащита проектов с наставниками",
      "Итоговые защиты тарифа 3‑4 и обратная связь лично от Александры Горевой-Куртышевой",
    ],
  },
];

function keepShortWords(text: string) {
  return text
    .replace(/\s(и|в|на|по|от|до|для|из|к|с|со|над|под|при|а|но|что|как)\s/gi, " $1\u00A0")
    .replace(/\s([а-яА-ЯёЁ]{1,2})\s/g, " $1\u00A0");
}

function renderScheduleText(text: string) {
  if (text === "Включает всё, что входит в 1 и 2 модули") {
    return (
      <>
        Включает всё, что входит
        <br />в 1 и 2 модули
      </>
    );
  }

  const lecturePhrase = "Лекция с Александрой Горевой-Куртышевой";

  if (text.includes(lecturePhrase)) {
    const [before, after] = text.split(lecturePhrase);
    return (
      <>
        {keepShortWords(before)}
        <span className="whitespace-nowrap">{lecturePhrase}</span>
        {keepShortWords(after)}
      </>
    );
  }

  return keepShortWords(text);
}

const scrollShellClassName =
  "group relative isolate h-full origin-top overflow-visible px-3 pb-8 pt-8 opacity-0";

const scrollBodyClassName =
  "relative isolate h-full overflow-hidden px-5 py-7 text-[#3A000C] shadow-[0_22px_48px_rgba(58,0,12,0.16),inset_0_1px_0_rgba(255,255,255,0.58),inset_0_-18px_32px_rgba(85,11,24,0.06)] [clip-path:polygon(2%_2%,9%_0%,18%_1.5%,29%_0.5%,42%_1.8%,55%_0.4%,68%_1.6%,82%_0.5%,98%_2.2%,99%_97%,89%_99%,76%_97.8%,63%_99%,49%_97.7%,34%_99%,20%_97.6%,2%_98%)] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.5),transparent_28%),radial-gradient(circle_at_84%_88%,rgba(117,22,46,0.07),transparent_28%),repeating-linear-gradient(102deg,rgba(85,11,24,0.026)_0_1px,transparent_1px_10px),linear-gradient(100deg,#E5C98F,#F8E9C4_12%,#F2DFAE_50%,#FAECCD_88%,#D6AB57)] after:absolute after:inset-[9px] after:-z-10 after:border after:border-[#75162E]/12 after:[clip-path:polygon(2%_2%,10%_0.5%,19%_2%,30%_1%,43%_2%,55%_0.8%,68%_2%,82%_1%,98%_2.5%,98%_96.5%,89%_98%,76%_97%,63%_98.5%,49%_97%,34%_98.5%,20%_97%,2%_97.5%)]";

export function CourseSchedule() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:31:03.jpg"
        variant="light"
        position="object-center"
      />
      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center lg:mb-10"
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-orange-1">
            Методология 16.0
          </p>
          <h2 className="font-heading text-3xl font-black uppercase text-text-primary lg:text-4xl">
            Расписание
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-3 lg:gap-6">
          {schedule.map((tariff, index) => (
            <motion.div
              key={tariff.title}
              initial={{ opacity: 0, y: 28, scaleY: 0.86 }}
              whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.62,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.18 + index * 0.16,
              }}
              className={scrollShellClassName}
            >
              <div
                aria-hidden="true"
                className="absolute left-1 right-1 top-2 z-20 h-9 rounded-full border border-[#7C4B20]/24 bg-[linear-gradient(180deg,#B98534,#F2D18B_38%,#8F5D24_72%,#D6AB57)] shadow-[0_10px_20px_rgba(58,0,12,0.18),inset_0_1px_0_rgba(255,255,255,0.32)]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-2 left-1 right-1 z-20 h-9 rounded-full border border-[#7C4B20]/24 bg-[linear-gradient(180deg,#B98534,#F2D18B_38%,#8F5D24_72%,#D6AB57)] shadow-[0_10px_20px_rgba(58,0,12,0.18),inset_0_1px_0_rgba(255,255,255,0.32)]"
              />

              <div className={scrollBodyClassName}>
                <div className="relative z-10 mb-6 flex justify-center">
                  <div className="inline-flex rounded-[14px] border border-[#D6AB57]/40 bg-[radial-gradient(circle_at_32%_22%,rgba(255,255,255,0.2),transparent_30%),linear-gradient(145deg,#75162E,#550B18_54%,#3A000C)] px-4 py-2 text-center text-sm font-black uppercase leading-tight text-[#F7E7B8] shadow-[0_10px_22px_rgba(85,11,24,0.2),inset_0_1px_0_rgba(255,255,255,0.18)]">
                    {tariff.title}
                  </div>
                </div>

                <div className="relative z-10">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-[9px] top-2 w-px bg-[linear-gradient(180deg,rgba(117,22,46,0),rgba(117,22,46,0.42),rgba(214,171,87,0.38),rgba(117,22,46,0))]"
                  />
                  <div className="space-y-4">
                    {tariff.items.map((item, itemIndex) => (
                      <motion.div
                        key={typeof item === "string" ? item : `${item.date}-${item.title}`}
                        initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.42,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.46 + index * 0.16 + itemIndex * 0.045,
                        }}
                        className="relative flex items-start gap-4"
                      >
                        <span className="relative z-10 mt-1.5 h-[18px] w-[18px] flex-shrink-0 rounded-full border border-[#D6AB57]/70 bg-[#75162E] shadow-[0_0_14px_rgba(214,171,87,0.34),inset_0_1px_0_rgba(255,255,255,0.22)]">
                          <span className="absolute inset-[5px] rounded-full bg-[#F7E7B8]" />
                        </span>
                        <div>
                          {typeof item === "string" ? (
                            <p className="text-[15px] font-semibold leading-relaxed text-[#3A000C]">
                              {renderScheduleText(item)}
                            </p>
                          ) : (
                            <>
                              <p className="mb-1 whitespace-nowrap text-sm font-black leading-tight text-[#75162E]">
                                {item.date}
                              </p>
                              <p className="text-[15px] font-semibold leading-relaxed text-[#3A000C]">
                                {renderScheduleText(item.title)}
                              </p>
                            </>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
