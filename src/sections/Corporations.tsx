"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const corporations = [
  {
    name: "СБЕР",
    logo: "https://optim.tildacdn.com/tild3031-3333-4330-b764-623863636162/-/resize/192x/-/format/webp/image_3.png.webp",
    logoClassName: "h-9 max-w-[132px]",
  },
  {
    name: "РОСНЕФТЬ",
    logo: "https://optim.tildacdn.com/tild3562-3062-4561-a664-373766383434/-/resize/192x/-/format/webp/image_6.png.webp",
    logoClassName: "h-8 max-w-[136px]",
  },
  {
    name: "Норникель",
    logo: "https://optim.tildacdn.com/tild6430-3335-4636-b036-343331646165/-/resize/192x/-/format/webp/cropped-nornikel-1_.png.webp",
    logoClassName: "h-9 max-w-[136px]",
  },
  {
    name: "X5 Group",
    logo: "https://optim.tildacdn.com/tild3536-3065-4064-b433-653566333831/-/resize/192x/-/format/webp/image_2.png.webp",
    logoClassName: "h-9 max-w-[118px]",
  },
  {
    name: "ВкусВилл",
    logo: "https://logo-teka.com/wp-content/uploads/2025/06/vkusvill-sign-logo.png",
    logoClassName: "h-10 max-w-[118px]",
  },
  {
    name: "Nestle",
    logo: "https://optim.tildacdn.com/tild6130-3766-4030-b866-306334633065/-/resize/192x/-/format/webp/74115522153f631bee37.png.webp",
    logoClassName: "h-8 max-w-[122px]",
  },
  {
    name: "Tele2",
    logo: "https://logo-teka.com/wp-content/uploads/2025/07/t2-logo.png",
    logoClassName: "h-8 max-w-[84px]",
  },
  {
    name: "РЖД",
    logo: "https://logo-teka.com/wp-content/uploads/2025/07/rzd-logo.png",
    logoClassName: "h-7 max-w-[112px]",
  },
  {
    name: "Western Union",
    logo: "/images/WU_BIG.png",
    logoClassName: "h-8 max-w-[144px]",
  },
  {
    name: "Альфа-Банк",
    logo: "https://optim.tildacdn.com/tild6264-6338-4535-a461-663833343031/-/resize/192x/-/format/webp/og_og_16157248482433.png.webp",
    logoClassName: "h-8 max-w-[138px]",
  },
  {
    name: "ВТБ",
    logo: "https://optim.tildacdn.com/tild6666-3337-4261-b436-376565313964/-/resize/192x/-/format/webp/754598838847774untit.png.webp",
    logoClassName: "h-8 max-w-[92px]",
  },
  {
    name: "L'Oréal",
    logo: "https://logo-teka.com/wp-content/uploads/2026/01/loreal-paris-logo.png",
    logoClassName: "h-8 max-w-[140px]",
  },
];

export function Corporations() {
  return (
    <section className="bg-[#FFA700] py-10 lg:py-12">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mx-auto mb-6 max-w-4xl text-lg font-semibold text-text-primary lg:text-xl">
            Методология Александры выросла из практики с экспертами,
            предпринимателями и крупнейшими компаниями рынка.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 lg:gap-4"
        >
          {corporations.map((company, index) => (
            <div
              key={company.name}
              className="flex min-h-[64px] min-w-[120px] items-center justify-center px-4 py-2 text-sm font-bold text-text-primary transition-all hover:-translate-y-1 hover:scale-[1.03] lg:text-base"
            >
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={180}
                  height={72}
                  className={`object-contain drop-shadow-sm ${
                    company.logoClassName ?? "h-8 max-w-[132px]"
                  }`}
                  loading="lazy"
                />
              ) : (
                company.name
              )}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
