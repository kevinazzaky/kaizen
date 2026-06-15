import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ClientSection } from "@/components/sections/ClientSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { EquipmentCoverageSection } from "@/components/sections/EquipmentCoverageSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <WhatWeDoSection />
      <ClientSection />
      <WhyChooseUsSection />
      <ProjectSection />
      <EquipmentCoverageSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
