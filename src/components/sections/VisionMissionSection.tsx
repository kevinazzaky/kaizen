"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/constants/company";
import { t, useLanguage } from "@/lib/language";

const visionCopy = {
  id: {
    label: "Visi & Misi Kami",
    title: "Berorientasi pada Keandalan dan Perawatan Berkelanjutan",
    description:
      "Kaizen Utama Teknik hadir sebagai mitra teknis yang membantu pelanggan menjaga aset kitchen equipment agar tetap efisien, aman, dan siap mendukung operasional harian.",
    vision: "Visi Kami",
    mission: "Misi Kami",
  },
  en: {
    label: "Our Vision & Mission",
    title: "Focused on Reliability and Continuous Maintenance",
    description:
      "Kaizen Utama Teknik acts as a technical partner that helps customers keep kitchen equipment assets efficient, safe, and ready for daily operations.",
    vision: "Our Vision",
    mission: "Our Mission",
  },
};

export function VisionMissionSection() {
  const { language } = useLanguage();
  const copy = visionCopy[language];

  return (
    <section
      id="vision"
      className="py-20 text-white"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 55%, var(--color-blue-dark) 100%)",
      }}
    >
      <Container>
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
          dark
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {copy.vision}
            </p>

            <p className="mt-5 text-lg leading-8 text-white/85">
              {t(company.vision, language)}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {copy.mission}
            </p>

            <div className="mt-5 grid gap-4">
              {company.missions.map((mission, index) => (
                <div key={t(mission, language)} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-[var(--color-primary)]">
                    {index + 1}
                  </div>

                  <p className="text-base leading-7 text-white/80">
                    {t(mission, language)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
