import { Hero } from "@/sections/Hero";
import { Corporations } from "@/sections/Corporations";
import { ForWhom } from "@/sections/ForWhom";
import { WhatIsMethodology } from "@/sections/WhatIsMethodology";
import { HowItWorks } from "@/sections/HowItWorks";
import { Problems } from "@/sections/Problems";
import { Testimonials } from "@/sections/Testimonials";
import { FamousAlumni } from "@/sections/FamousAlumni";
import { Pricing } from "@/sections/Pricing";
import { FAQ } from "@/sections/FAQ";
import { ContactCTA } from "@/sections/ContactCTA";
import { Footer } from "@/sections/Footer";
import { ExpertIntro } from "@/sections/ExpertIntro";
import { NichesAndFormats } from "@/sections/NichesAndFormats";
import { ExpertResults } from "@/sections/ExpertResults";
import { MethodologistCareer } from "@/sections/MethodologistCareer";
import { EntrepreneurResults } from "@/sections/EntrepreneurResults";
import { Myths } from "@/sections/Myths";
import { InlineCTA } from "@/sections/InlineCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Corporations />
      <WhatIsMethodology />
      <InlineCTA text="Забронировать место" />
      <ForWhom />
      <ExpertResults />
      <MethodologistCareer />
      <InlineCTA text="Зарегистрироваться" />
      <EntrepreneurResults />
      <Myths />
      <NichesAndFormats />
      <InlineCTA text="Оставить заявку" />
      <Problems />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <InlineCTA text="Присоединиться к обучению" />
      <ExpertIntro />
      <FamousAlumni />
      <FAQ />
      <ContactCTA />
      <InlineCTA text="Присоединиться к обучению" />
      <Footer />
    </main>
  );
}
