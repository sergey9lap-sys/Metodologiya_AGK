"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type InlineCTAProps = {
  text: string;
};

export function InlineCTA({ text }: InlineCTAProps) {
  return (
    <section className="bg-[#FFA700] py-6 lg:py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex justify-center"
        >
          <a
            href="#pricing"
            className="inline-flex min-h-[60px] w-full max-w-[420px] items-center justify-center gap-3 rounded-[12px] bg-[#7D0000] px-9 py-[18px] text-center text-lg font-semibold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(125,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5E0000] hover:shadow-[0_8px_24px_rgba(125,0,0,0.32)] sm:w-auto"
          >
            {text}
            <ArrowRight className="h-5 w-5 flex-shrink-0" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
