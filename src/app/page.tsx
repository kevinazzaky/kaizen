import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

const sections = [
  {
    id: "galeri",
    title: "Galeri",
    description:
      "Dokumentasi pekerjaan akan ditambahkan setelah foto proyek tersedia.",
  },
  {
    id: "kontak",
    title: "Kontak",
    description: "Hubungi Kaizen untuk konsultasi kebutuhan kitchen equipment.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-24 border-b border-slate-200 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Kaizen
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {section.title}
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}