import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { Corporations } from "@/sections/Corporations";
import { ForWhom } from "@/sections/ForWhom";
import { WhatIsMethodology } from "@/sections/WhatIsMethodology";
import { HowItWorks } from "@/sections/HowItWorks";
import { Benefits } from "@/sections/Benefits";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <Corporations />
      <WhatIsMethodology />
      <Benefits />
      <ForWhom />
      <ExpertResults />
      <MethodologistCareer />
      <EntrepreneurResults />
      <Myths />
      <NichesAndFormats />
      <Problems />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <ExpertIntro />
      <FamousAlumni />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
