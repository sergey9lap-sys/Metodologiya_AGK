"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const myths = [
  {
    myth: "Методология - для больших школ, а я один.",
    truth: "Нет. Она особенно нужна соло-эксперту, чтобы перестать быть заложником хаоса в своём продукте.",
  },
  {
    myth: "Это сложно, я не педагог.",
    truth: "Вы не пишете диссертацию. Курс даёт структуру, шаблоны и чек-листы для реального внедрения.",
  },
  {
    myth: "Методология убьёт креативность.",
    truth: "Она забирает рутину на себя. Креативность остаётся в вашем контенте, подаче и экспертизе.",
  },
  {
    myth: "Мне нужен трафик, а не методология.",
    truth: "Бесполезный трафик + слабый продукт = пустые кассы. Сначала нужен сильный продукт, потом масштабирование.",
  },
  {
    myth: "Я уже пробовал - не работает.",
    truth: "Чаще всего люди пробовали не систему, а набор абстрактных правил без нормальной логики продукта.",
  },
  {
    myth: "Методология - дорого.",
    truth: "Стоимость ошибки при создании курса на глаз часто выше в разы, чем стоимость обучения на сильной системе.",
  },
  {
    myth: "У меня уже есть курс, зачем?",
    truth:
      "90% курсов — это просто набор записей. Методология пересобирает продукт так, что ученики доходят до результата",
  },
  {
    myth: "Я и так всё знаю, мне это не нужно",
    truth:
      "Если бы знали — уже сделали. Проблема не в знаниях, а в отсутствии системы",
  },
];

export function Myths() {
  return (
    <section className="relative overflow-hidden bg-black py-12 lg:py-16">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:30:33.jpg"
        variant="orange"
        position="object-bottom"
      />
      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-4xl text-center lg:mb-10"
        >
          <h2 className="mb-4 font-heading text-3xl font-black uppercase text-white lg:text-4xl">
            Почему вы до сих пор не внедрили методологию
          </h2>
          <p className="text-lg text-white/90 lg:text-xl">
            Чаще всего мешают не факты, а мифы и возражения, которые держат
            эксперта или предпринимателя в старой модели.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {myths.map((item, index) => (
            <motion.div
              key={item.myth}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="h-full rounded-2xl border border-orange-1/18 bg-[#FFF9EF] p-5 shadow-[0_14px_34px_rgba(40,25,10,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-1/45 hover:shadow-[0_18px_42px_rgba(255,167,0,0.16)] lg:p-6">
                <div className="mb-5">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-text-muted">
                    <span aria-hidden="true">×</span>
                    Миф
                  </div>
                  <p className="text-lg font-bold leading-snug text-text-primary">
                    {item.myth}
                  </p>
                </div>

                <div className="rounded-2xl border border-orange-1/22 bg-orange-1/8 p-4 shadow-sm">
                  <div className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-1 h-auto w-1 flex-shrink-0 rounded-full bg-orange-1"
                    />
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-1 px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                        <span aria-hidden="true">✓</span>
                        Правда
                      </div>
                      <p className="text-body font-medium leading-relaxed text-text-primary">
                        {item.truth}
                      </p>
                    </div>
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
