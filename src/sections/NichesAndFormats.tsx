"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const niches = [
  "маркетинг / SMM",
  "личный бренд",
  "продюссирование",
  "таргет и реклама",
  "инвестиции",
  "недвижимость",
  "бухгалтерия и финансы",
  "продажи",
  "менеджмент",
  "психология / коучинг",
  "бизнес-консалтинг",
  "педагогика",
  "медицина",
  "йога / фитнес / спорт",
  "нутрициология",
  "дизайн и архитектура",
];

const formats = [
  "подкасты",
  "марафоны",
  "разборы",
  "личные консультации",
  "челленджи",
  "наставничество",
  "лекции",
  "мастер-классы",
  "сообщество",
  "курсы",
  "vip-сопровождение",
  "интенсивы",
  "ретриты",
  "клуб",
  "вебинары",
];

export function NichesAndFormats() {
  return (
    <section className="bg-[#FFA700] py-12 lg:py-16">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="font-heading font-black text-3xl lg:text-5xl text-text-primary text-center mb-8 lg:mb-10 uppercase"
        >
          К нам приходят ученики из всех ниш
        </motion.h2>

        <div className="space-y-7 lg:space-y-8">
          {/* Niches */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {niches.map((niche, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 bg-white border-2 border-orange-1 text-text-primary rounded-full text-sm lg:text-base font-semibold shadow-md hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02] transition-all cursor-default"
                >
                  {niche}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Divider text */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-2xl lg:text-4xl font-heading font-black text-text-primary uppercase"
          >
            И создают
          </motion.p>

          {/* Formats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {formats.map((format, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 bg-white border-2 border-orange-1 text-text-primary rounded-full text-sm lg:text-base font-semibold shadow-sm hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02] transition-all cursor-default"
                >
                  {format}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
