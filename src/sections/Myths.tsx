"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import Image from "next/image";

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
];

export function Myths() {
  return (
    <section className="relative overflow-hidden bg-[#FFA700] py-12 lg:py-16">
      <Image
        src="/background/10 блок.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1024px) 56vw, 115vw"
        className="pointer-events-none absolute inset-y-0 left-[-18%] z-0 h-full w-[118%] select-none object-cover object-left opacity-[0.22] grayscale [mask-image:linear-gradient(to_right,black_0%,black_48%,rgba(0,0,0,0.65)_66%,transparent_100%)] lg:left-0 lg:w-[58%] lg:opacity-[0.42] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_48%,rgba(0,0,0,0.65)_66%,transparent_100%)]"
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
          <h2 className="mb-4 font-heading text-3xl font-black uppercase text-text-primary lg:text-4xl">
            Почему вы до сих пор не внедрили методологию
          </h2>
          <p className="text-lg text-text-primary lg:text-xl">
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
              <Card className="h-full">
                <p className="mb-3 text-lg font-bold text-text-primary">{item.myth}</p>
                <p className="text-body text-text-secondary">{item.truth}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
