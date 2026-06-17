"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type InlineCTAProps = {
  text: string;
};

export function InlineCTA({ text }: InlineCTAProps) {
  return (
    <section className="bg-[#550B18] py-6 lg:py-8">
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
            className="inline-flex min-h-[60px] w-full max-w-[420px] items-center justify-center gap-3 rounded-[12px] border border-[#F2E5C5]/70 bg-[#F2E5C5] px-9 py-[18px] text-center text-lg font-semibold uppercase tracking-wide text-[#550B18] shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F7EBCF] hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)] sm:w-auto"
          >
            {text}
            <ArrowRight className="h-5 w-5 flex-shrink-0" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
