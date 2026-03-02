import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { ExpertIntro } from "@/sections/ExpertIntro";
import { Corporations } from "@/sections/Corporations";
import { ForWhom } from "@/sections/ForWhom";
import { NichesAndFormats } from "@/sections/NichesAndFormats";
import { WhatIsMethodology } from "@/sections/WhatIsMethodology";
import { HowItWorks } from "@/sections/HowItWorks";
import { Benefits } from "@/sections/Benefits";
import { Problems } from "@/sections/Problems";
import { Testimonials } from "@/sections/Testimonials";
import { Employers } from "@/sections/Employers";
import { FamousAlumni } from "@/sections/FamousAlumni";
import { Pricing } from "@/sections/Pricing";
import { FAQ } from "@/sections/FAQ";
import { ContactCTA } from "@/sections/ContactCTA";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <ExpertIntro />
      <Corporations />
      <ForWhom />
      <NichesAndFormats />
      <WhatIsMethodology />
      <HowItWorks />
      <Benefits />
      <Problems />
      <Testimonials />
      <Employers />
      <FamousAlumni />
      <Pricing />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
