"use client";

import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/SectionBackground";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, Landmark, ShieldCheck, WalletCards } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const instantPayments = [
  {
    name: "Банковская карта",
    label: "Visa / Mastercard / Мир",
    logo: "https://agkedu.getcourse.ru/saas/images/gcpay-ru.png",
  },
  {
    name: "Yandex Pay",
    label: "картой любого банка",
    logo: "https://agkedu.getcourse.ru/img/payments/ya_pay_2026.png",
  },
  {
    name: "SberPay",
    label: "быстрая оплата",
    logo: "https://agkedu.getcourse.ru/img/payments/new_sber_logo.png?v=1",
  },
  {
    name: "AlphaPay",
    label: "оплата через Альфа-Банк",
    logo: "https://agkedu.getcourse.ru/img/payments/new_alpha_logo.png?v=1",
  },
];

const installmentOptions = [
  {
    name: "Яндекс Сплит",
    logo: "https://agkedu.getcourse.ru/img/payments/yandex_split_improved_old_2.png?v=1",
    text: "Оплата частями без переплат.",
  },
  {
    name: "Всегда.Да",
    logo: "https://agkedu.getcourse.ru/saas/images/vsegdada.png?v=1",
    text: "Рассрочка на 6, 10, 12, 18 или 24 месяца.",
  },
  {
    name: "Т-Банк",
    logo: "https://logo-teka.com/wp-content/uploads/2025/06/t-bank-logo-en.png",
    text: "Рассрочка на 3, 4, 6, 10 или 12 месяцев.",
  },
  {
    name: "POSCREDIT",
    logo: "https://agkedu.getcourse.ru/img/payments/poscredit_payform.png",
    text: "Беспроцентная рассрочка на 6, 10 или 12 месяцев.",
  },
  {
    name: "Сбер Банк",
    logo: "https://agkedu.getcourse.ru/img/payments/sber_pokupay.png",
    text: "Для клиентов банка: варианты до 24 месяцев.",
  },
  {
    name: "Внутренняя рассрочка",
    logo: "",
    text: "Индивидуальный график через службу заботы Академии.",
  },
];

const paymentFeatures = [
  {
    icon: CreditCard,
    title: "Оплата картой",
    text: "Можно оплатить обучение банковской картой онлайн через защищенную платежную страницу.",
  },
  {
    icon: WalletCards,
    title: "Платежные сервисы",
    text: "Доступны Яндекс Сплит, Всегда.Да, Т-Банк, POSCREDIT и Сбер Банк.",
  },
  {
    icon: Landmark,
    title: "Рассрочка до 24 месяцев",
    text: "Можно подобрать комфортный ежемесячный платеж: обычно доступны сроки до 12 или до 24 месяцев.",
  },
  {
    icon: ShieldCheck,
    title: "Внутренняя рассрочка",
    text: "Если нужен индивидуальный график, служба заботы поможет подобрать подходящий вариант.",
  },
];

export function PaymentOptions() {
  return (
    <section className="relative overflow-hidden bg-black py-12 lg:py-16">
      <SectionBackground
        src="/background/IMAGE 2026-05-05 01:31:10.jpg"
        variant="orange"
        position="object-center"
      />
      <Container className="relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl rounded-[28px] border-2 border-white/70 bg-white/18 p-5 shadow-card backdrop-blur-sm lg:p-8"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-black uppercase leading-tight text-white lg:text-4xl">
              Доступны разные способы оплаты
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-white/90 lg:text-lg">
              Вы можете оплатить обучение сразу или выбрать рассрочку. Доступны
              банковские карты, быстрые платежи, платежные сервисы и внутренняя
              рассрочка Академии.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            {instantPayments.map((payment, index) => (
              <motion.div
                key={payment.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: 0.14 + index * 0.06 }}
                className="flex min-h-[112px] flex-col items-center justify-center rounded-2xl border border-white/80 bg-white px-3 py-4 text-center shadow-[0_12px_30px_rgba(40,25,10,0.12)]"
              >
                <div className="mb-3 flex h-12 items-center justify-center">
                  <Image
                    src={payment.logo}
                    alt={payment.name}
                    width={176}
                    height={54}
                    className="max-h-12 w-auto rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-bold leading-tight text-text-primary">
                  {payment.name}
                </p>
                <p className="mt-1 text-xs font-semibold leading-tight text-text-muted">
                  {payment.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {installmentOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: 0.18 + index * 0.06 }}
                className="flex min-h-[132px] flex-col justify-between rounded-2xl border border-white/80 bg-white px-4 py-4 shadow-[0_12px_30px_rgba(40,25,10,0.12)]"
              >
                <div className="flex min-h-[42px] items-center">
                  {option.logo ? (
                    <Image
                      src={option.logo}
                      alt={option.name}
                      width={180}
                      height={54}
                      className="max-h-11 w-auto object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="rounded-xl bg-orange-1 px-3 py-2 text-sm font-black text-white">
                      {option.name}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-text-secondary">
                  {option.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
            {paymentFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.24 + index * 0.07 }}
                  className="rounded-2xl border border-white/75 bg-white/94 p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-orange-1 text-white shadow-[0_8px_18px_rgba(255,167,0,0.24)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-black leading-tight text-text-primary">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm font-semibold leading-relaxed text-white/88">
            Точные условия зависят от выбранного тарифа и платежного партнера.
            Служба заботы подскажет доступные варианты перед оформлением.
          </p>

          <div className="mt-7 flex justify-center">
            <a
              href="#pricing"
              className="inline-flex min-h-[60px] w-full max-w-[380px] items-center justify-center gap-3 rounded-[12px] bg-[#7D0000] px-9 py-[18px] text-center text-lg font-semibold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(125,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5E0000] hover:shadow-[0_8px_24px_rgba(125,0,0,0.32)] sm:w-auto"
            >
              Присоединиться к обучению
              <ArrowRight className="h-5 w-5 flex-shrink-0" />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
