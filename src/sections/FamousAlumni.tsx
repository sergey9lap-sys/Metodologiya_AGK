"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const employers = [
  {
    name: "Skyeng",
    logo: "https://static.tildacdn.com/tild3637-6462-4164-b534-383836373235/skyeng-logo-light.svg",
    logoClassName: "h-11 max-w-[190px]",
    description: "Школа английского языка",
  },
  {
    name: "Julia Marketing",
    logo: "https://optim.tildacdn.com/tild3334-6534-4864-a436-366139663866/-/resize/313x/-/format/webp/2.png.webp",
    logoClassName: "h-14 max-w-[190px]",
    description: "Julia Marketing Юлии Родочинской",
  },
  {
    name: "AZARENOK PRO",
    logo: "https://static.tildacdn.com/tild6131-3665-4561-b530-373038373432/logo-red.svg",
    logoClassName: "h-20 max-w-[150px]",
    description: "Марии Азаренок",
  },
  {
    name: "Масштаб",
    logo: "https://optim.tildacdn.com/tild3830-6264-4363-a639-313464633231/-/resize/219x/-/format/webp/___2.jpg.webp",
    logoClassName: "h-20 max-w-[150px]",
    description: "Продюсерский центр",
  },
  {
    name: "Skillbox",
    logo: "https://static.tildacdn.com/tild3437-6632-4734-b838-323663306461/skillbox.svg",
    logoClassName: "h-12 max-w-[190px]",
    description: "Образовательная платформа",
  },
  {
    name: "Нетология",
    logo: "https://static.tildacdn.com/tild6230-3633-4137-a566-653531656136/image_19.svg",
    logoClassName: "h-10 max-w-[190px]",
    description: "Образовательная платформа",
  },
  {
    name: "Академия переговоров Игоря Рызова",
    logo: "https://static.tildacdn.com/tild3338-3363-4339-b362-343265616431/image_19_2.svg",
    logoClassName: "h-14 max-w-[190px]",
    description: "Академия переговоров",
  },
  {
    name: "MIRA SCHOOL",
    logo: "https://optim.tildacdn.com/tild6138-6533-4562-a565-636130656563/-/resize/111x/-/format/webp/744650.png.webp",
    logoClassName: "h-14 max-w-[110px]",
    description: "Онлайн-школа маркетинга",
  },
  {
    name: "МИИН",
    logo: "https://static.tildacdn.com/tild3036-3737-4366-b037-656433626266/image_19_1.svg",
    logoClassName: "h-16 max-w-[150px]",
    description: "Институт нутрициологии",
  },
];

const alumni = [
  {
    initials: "НК",
    name: "Наталья Хруленко",
    role: "Директор СБЕР-университета",
    photo: "/images/Наталья Хруленко.jpg",
    photoClassName: "object-[38%_50%]",
  },
  {
    initials: "МА",
    name: "Мария Азарёнок",
    role: "Бренд-стратег, бизнес-спикер",
    photo:
      "https://optim.tildacdn.com/tild6366-3030-4439-b731-666261313761/-/resize/180x/-/format/webp/image_26_1.png.webp",
  },
  {
    initials: "ГШ",
    name: "Галина Шевченко",
    role: "Продюсер форума Леонида Агутина",
    photo: "/images/Галина шевченко.jpg",
  },
  {
    initials: "ИР",
    name: "Игорь Рызов",
    role: "Эксперт в области наставничества",
    photo:
      "https://optim.tildacdn.com/tild3533-6634-4361-b834-646231626263/-/cover/180x180/center/center/-/format/webp/photo.png.webp",
  },
];

export function FamousAlumni() {
  return (
    <section className="overflow-hidden bg-white py-12 lg:py-14">
      <div className="relative overflow-hidden bg-black py-10 lg:py-12">
        <SectionBackground
          src="/background/IMAGE 2026-05-05 01:30:29.jpg"
          variant="orange"
          position="object-bottom"
        />
        <Container className="relative z-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mb-3 text-center font-heading text-3xl font-black uppercase text-white lg:text-4xl"
          >
            Выпускники-методологи Александры работают в:
          </motion.h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-base font-medium text-white/90 lg:mb-10 lg:text-lg">
            Наши ученики применяют методологию в онлайн-школах, образовательных
            платформах, продюсерских центрах и собственных проектах.
          </p>
        </Container>

        <Container className="relative z-20">
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
            {employers.map((employer) => (
              <div
                key={employer.name}
                className="flex min-h-[128px] items-center justify-center px-3 py-3 text-base font-bold text-text-primary"
              >
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={employer.logo}
                    alt={employer.name}
                    width={220}
                    height={88}
                    className={`object-contain drop-shadow-sm ${employer.logoClassName}`}
                    loading="lazy"
                  />
                  <span className="max-w-[220px] text-center text-sm font-semibold leading-tight text-white/90">
                    {employer.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="pt-12 lg:pt-14">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center font-heading text-3xl font-black uppercase text-text-primary lg:mb-10 lg:text-4xl"
        >
          Нас рекомендуют известные выпускники
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {alumni.map((person, index) => (
            <motion.div
              key={person.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-orange-1 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-card-hover lg:h-32 lg:w-32">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={180}
                    height={180}
                    className={`h-full w-full object-cover ${
                      person.photoClassName ?? ""
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <span className="font-heading text-3xl font-black text-orange-1">
                    {person.initials}
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-text-primary lg:text-lg">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-orange-1">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
