"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type InlineCTAProps = {
  text: string;
};

export function InlineCTA({ text }: InlineCTAProps) {
  return (
    <section className="bg-[#F8F5EF] py-6 lg:py-8">
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
            className="inline-flex min-h-[60px] w-full max-w-[420px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-1 to-orange-2 px-8 py-4 text-center text-lg font-bold tracking-wide text-white shadow-button transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:brightness-105 hover:shadow-button-hover sm:w-auto"
          >
            {text}
            <ArrowRight className="h-5 w-5 flex-shrink-0" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
