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
  {
    name: "Сбер",
    logo: "https://optim.tildacdn.com/tild3031-3333-4330-b764-623863636162/-/resize/192x/-/format/webp/image_3.png.webp",
    logoClassName: "h-12 max-w-[170px]",
    description: "Корпоративное обучение",
  },
];

const alumni = [
  {
    initials: "ИА",
    name: "Ирина Мамаклаб Акопян",
    handle: "@irina_mamaclub",
    audience: "3 млн подписчиков",
    photo:
      "https://optim.tildacdn.com/tild6137-6334-4062-a665-316461636530/-/resize/180x/-/format/webp/image_26.png.webp",
  },
  {
    initials: "МА",
    name: "Мария Азарёнок",
    handle: "@azarenok",
    audience: "130 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild6366-3030-4439-b731-666261313761/-/resize/180x/-/format/webp/image_26_1.png.webp",
  },
  {
    initials: "ЛЯ",
    name: "Лейли Ялунина",
    handle: "@leyli_yalunina",
    audience: "131 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild6632-3633-4366-a439-356432323432/-/resize/180x/-/format/webp/image_21.png.webp",
  },
  {
    initials: "НГ",
    name: "Ната Гончар",
    handle: "@ryzov_igor",
    audience: "166 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild3236-6230-4531-b637-326334326337/-/resize/180x/-/format/webp/image_27_1.png.webp",
  },
  {
    initials: "ИР",
    name: "Игорь Рызов",
    handle: "@ryzov_igor",
    audience: "286 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild3533-6634-4361-b834-646231626263/-/cover/180x180/center/center/-/format/webp/photo.png.webp",
  },
  {
    initials: "НЗ",
    name: "Натэла Зубченко",
    handle: "@natelazub",
    audience: "50,4 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild6438-3665-4438-a136-313230303136/-/resize/180x/-/format/webp/image_22_1.png.webp",
  },
  {
    initials: "ЕП",
    name: "Евгения Павловская",
    handle: "@pavlovskaia_evgeniya",
    audience: "145 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild3966-3364-4135-b635-396462393934/-/resize/180x/-/format/webp/Gfdkjdcrfz.png.webp",
  },
  {
    initials: "ЮС",
    name: "Юлия Столярова",
    handle: "@stolyarovajulia",
    audience: "389 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild6638-3862-4435-a535-636532376434/-/resize/180x/-/format/webp/image_28.png.webp",
  },
  {
    initials: "ТМ",
    name: "Татьяна Маричева",
    handle: "@marichevva",
    audience: "202 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild3230-3635-4133-a134-383435643933/-/resize/180x/-/format/webp/image_23.png.webp",
  },
  {
    initials: "МЛ",
    name: "Мила Литвинская",
    handle: "@mila_litvinskaya",
    audience: "271 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild3839-6365-4736-b462-353361356161/-/resize/180x/-/format/webp/image_23_1.png.webp",
  },
  {
    initials: "ВБ",
    name: "Владислав Бермуда",
    handle: "@vlad.bermuda",
    audience: "102 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild6262-6635-4434-b264-336662633036/-/resize/180x/-/format/webp/image_27.png.webp",
  },
  {
    initials: "ГМ",
    name: "Галина Мельникова",
    handle: "@galya.melnikova",
    audience: "155 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild6365-3063-4666-a230-343239373539/-/resize/180x/-/format/webp/image_27_3.png.webp",
  },
  {
    initials: "ИН",
    name: "Игорь Новокриницкий",
    handle: "@massagist_novokrinitskii",
    audience: "1,5 млн подписчиков",
    photo:
      "https://optim.tildacdn.com/tild6262-3438-4039-b265-396239393532/-/resize/180x/-/format/webp/image_29.png.webp",
  },
  {
    initials: "ОС",
    name: "Ольга Савонина",
    handle: "@doctor_savonina",
    audience: "111 тыс. подписчиков",
    photo:
      "https://optim.tildacdn.com/tild3664-6535-4366-b030-386139626362/-/resize/180x/-/format/webp/image_27_2.png.webp",
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
          Александра работала с:
        </motion.h2>

        <div className="grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {alumni.map((person, index) => (
            <motion.div
              key={person.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[22px] border border-orange-1/12 bg-white/86 px-3 py-5 text-center shadow-[0_12px_30px_rgba(40,25,10,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-1/45 hover:shadow-card-hover"
            >
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-orange-1 bg-[#FFF9EF] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-card-hover lg:h-32 lg:w-32">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={180}
                    height={180}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-heading text-3xl font-black text-orange-1">
                    {person.initials}
                  </span>
                )}
              </div>
              <h3 className="text-sm font-bold leading-tight text-text-primary lg:text-base">
                {person.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-orange-1">{person.handle}</p>
              <p className="mt-2 text-sm italic text-text-secondary">
                {person.audience}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
