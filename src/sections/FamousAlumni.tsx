"use client";

import { Container } from "@/components/ui/Container";
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
  const employerRows = [
    [...employers, ...employers],
    [...employers.slice(4), ...employers.slice(0, 4), ...employers.slice(4), ...employers.slice(0, 4)],
  ];

  return (
    <section className="bg-white py-12 lg:py-14">
      <div className="overflow-hidden bg-[#FFA700] py-10 lg:py-12">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mb-3 text-center font-heading text-3xl font-black uppercase text-text-primary lg:text-4xl"
          >
            Выпускники-методологи Александры работают в:
          </motion.h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-base font-medium text-text-secondary lg:mb-10 lg:text-lg">
            Наши ученики применяют методологию в онлайн-школах, образовательных
            платформах, продюсерских центрах и собственных проектах.
          </p>
        </Container>

        <div className="space-y-4">
          {employerRows.map((rowItems, row) => (
            <div
              key={row}
            className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            >
              <div
                className={`flex min-w-max gap-4 px-2 ${
                  row === 0 ? "animate-marquee-left" : "animate-marquee-right"
                } group-hover:[animation-play-state:paused]`}
              >
                {rowItems.map((employer, index) => (
              <motion.div
                key={`${row}-${employer.name}-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="flex min-h-[124px] w-[260px] flex-shrink-0 items-center justify-center px-6 py-4 text-base font-bold text-text-primary transition-all duration-300 hover:-translate-y-2 hover:scale-[1.05] lg:w-[300px]"
              >
                {employer.logo ? (
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src={employer.logo}
                      alt={employer.name}
                          width={220}
                          height={88}
                      className={`object-contain drop-shadow-sm ${
                            employer.logoClassName
                      }`}
                      loading="lazy"
                    />
                    <span className="max-w-[220px] text-center text-sm font-semibold leading-tight text-text-primary">
                      {employer.description}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="font-heading text-3xl font-black uppercase leading-none text-text-primary">
                      {employer.name}
                    </span>
                    <span className="max-w-[220px] text-xs font-semibold leading-tight text-text-secondary">
                      {employer.description}
                    </span>
                  </div>
                )}
              </motion.div>
                ))}
              </div>
            </div>
          ))}
          </div>
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
