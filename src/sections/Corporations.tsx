"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
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
    logoClassName: "h-11 max-w-[150px]",
  },
  {
    name: "РОСНЕФТЬ",
    logo: "https://optim.tildacdn.com/tild3562-3062-4561-a664-373766383434/-/resize/192x/-/format/webp/image_6.png.webp",
    logoClassName: "h-10 max-w-[150px]",
  },
  {
    name: "Норникель",
    logo: "https://optim.tildacdn.com/tild6430-3335-4636-b036-343331646165/-/resize/192x/-/format/webp/cropped-nornikel-1_.png.webp",
    logoClassName: "h-11 max-w-[150px]",
  },
  {
    name: "X5 Group",
    logo: "https://optim.tildacdn.com/tild3536-3065-4064-b433-653566333831/-/resize/192x/-/format/webp/image_2.png.webp",
    logoClassName: "h-10 max-w-[132px]",
  },
  {
    name: "ВкусВилл",
    logo: "https://logo-teka.com/wp-content/uploads/2025/06/vkusvill-sign-logo.png",
    logoClassName: "h-12 max-w-[132px]",
  },
  {
    name: "Nestle",
    logo: "https://optim.tildacdn.com/tild6130-3766-4030-b866-306334633065/-/resize/192x/-/format/webp/74115522153f631bee37.png.webp",
    logoClassName: "h-10 max-w-[132px]",
  },
  {
    name: "Tele2",
    logo: "https://logo-teka.com/wp-content/uploads/2025/07/t2-logo.png",
    logoClassName: "h-10 max-w-[96px]",
  },
  {
    name: "РЖД",
    logo: "https://logo-teka.com/wp-content/uploads/2025/07/rzd-logo.png",
    logoClassName: "h-9 max-w-[126px]",
  },
  {
    name: "Western Union",
    logo: "/images/WU_BIG.png",
    logoClassName: "h-10 max-w-[158px]",
  },
  {
    name: "Альфа-Банк",
    logo: "https://optim.tildacdn.com/tild6264-6338-4535-a461-663833343031/-/resize/192x/-/format/webp/og_og_16157248482433.png.webp",
    logoClassName: "h-10 max-w-[152px]",
  },
  {
    name: "ВТБ",
    logo: "https://optim.tildacdn.com/tild6666-3337-4261-b436-376565313964/-/resize/192x/-/format/webp/754598838847774untit.png.webp",
    logoClassName: "h-9 max-w-[106px]",
  },
  {
    name: "L'Oréal",
    logo: "https://logo-teka.com/wp-content/uploads/2026/01/loreal-paris-logo.png",
    logoClassName: "h-10 max-w-[158px]",
  },
];

export function Corporations() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-12 lg:py-14">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:31:18.jpg"
        variant="light"
        position="object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[360px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,167,0,0.18),transparent_68%)] blur-sm"
      />
      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <p className="mx-auto mb-8 max-w-4xl text-lg font-semibold text-text-primary lg:mb-10 lg:text-xl">
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
          className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-8"
        >
          {corporations.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 24, scale: 0.92, rotate: index % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.045,
              }}
              whileHover={{
                y: -14,
                scale: 1.08,
                rotate: index % 2 ? -1.5 : 1.5,
                transition: { type: "spring", stiffness: 260, damping: 17 },
              }}
              className="group relative flex min-h-[96px] items-center justify-center px-3 py-3 text-sm font-bold text-text-primary lg:text-base"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-4 bottom-2 h-5 rounded-full bg-orange-1/15 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              {company.logo ? (
                <div className="relative flex flex-col items-center gap-2">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={200}
                    height={82}
                    className={`object-contain drop-shadow-sm transition-[filter,transform] duration-300 group-hover:drop-shadow-[0_12px_18px_rgba(0,0,0,0.16)] ${
                      company.logoClassName ?? "h-10 max-w-[150px]"
                    }`}
                    loading="lazy"
                  />
                  <span className="translate-y-2 text-center text-xs font-semibold text-text-secondary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {company.name}
                  </span>
                </div>
              ) : (
                company.name
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
