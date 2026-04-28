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
    logoClassName: "h-9 max-w-[150px]",
  },
  {
    name: "РЖД",
    logo: "https://logo-teka.com/wp-content/uploads/2025/07/rzd-logo.png",
    logoClassName: "h-7 max-w-[120px]",
  },
  {
    name: "Сбер",
    logo: "https://optim.tildacdn.com/tild3031-3333-4330-b764-623863636162/-/resize/192x/-/format/webp/image_3.png.webp",
    logoClassName: "h-9 max-w-[128px]",
  },
  {
    name: "ВКонтакте",
    logo: "https://logo-teka.com/wp-content/uploads/2025/06/vk-logo.png",
    logoClassName: "h-7 max-w-[132px]",
  },
  {
    name: "Skillbox",
    logo: "https://static.tildacdn.com/tild3437-6632-4734-b838-323663306461/skillbox.svg",
  },
  {
    name: "Нетология",
    logo: "https://static.tildacdn.com/tild6230-3633-4137-a566-653531656136/image_19.svg",
  },
  {
    name: "Avito",
    logo: "https://logo-teka.com/wp-content/uploads/2025/06/avito-logo.png",
    logoClassName: "h-7 max-w-[112px]",
  },
  {
    name: "МГТУ им. Баумана",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_Color_No-BG.svg/250px-Logo_Color_No-BG.svg.png",
    logoClassName: "h-10 max-w-[112px]",
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
    <section className="bg-white py-12 lg:py-14">
      <div className="bg-[#FFA700] py-10 lg:py-12">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center font-heading text-3xl font-black uppercase text-text-primary lg:mb-10 lg:text-4xl"
          >
            Наши выпускники работают в:
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {employers.map((employer, index) => (
              <motion.div
                key={employer.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="flex min-h-[64px] min-w-[128px] items-center justify-center px-4 py-2 text-base font-bold text-text-primary transition-all hover:-translate-y-1 lg:text-lg"
              >
                {employer.logo ? (
                  <Image
                    src={employer.logo}
                    alt={employer.name}
                    width={180}
                    height={72}
                    className={`object-contain drop-shadow-sm ${
                      employer.logoClassName ?? "h-6 max-w-[120px]"
                    }`}
                    loading="lazy"
                  />
                ) : (
                  employer.name
                )}
              </motion.div>
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
