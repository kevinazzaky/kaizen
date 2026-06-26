"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/constants/company";
import { t, useLanguage } from "@/lib/language";

const aboutCopy = {
  id: {
    label: "Tentang Kami",
    title: "Mitra Teknis untuk Keandalan Kitchen Equipment",
    description:
      "Kaizen Utama Teknik hadir untuk mendukung operasional bisnis anda melalui layanan teknis yang responsif, tepat sasaran, dan berorientasi jangka panjang.",
    detail:
      "Kami mendukung kebutuhan operasional restoran, hotel, cafe, resort, catering, bakery, cloud kitchen, food court, dan berbagai bisnis F&B lainnya. Fokus kami adalah membantu pelanggan menjaga keandalan aset dapur, mengurangi risiko downtime, dan memastikan peralatan siap digunakan dalam aktivitas harian.",
    focus: "Fokus pada kebutuhan dapur komersial.",
    location: "Berbasis di Badung dan melayani kebutuhan bisnis Anda.",
  },
  en: {
    label: "About Us",
    title: "Technical Partner for Reliable Kitchen Equipment",
    description:
      "Kaizen Utama Teknik supports business operations through responsive, accurate, and long-term technical services.",
    detail:
      "We support operational needs for restaurants, hotels, cafes, resorts, catering, bakeries, cloud kitchens, food courts, and other F&B businesses. Our focus is helping customers maintain kitchen asset reliability, reduce downtime risk, and keep equipment ready for daily operations.",
    focus: "Focused on commercial kitchen needs.",
    location: "Based in Badung and serving your business needs.",
  },
};

export function AboutSection() {
  const { language } = useLanguage();
  const copy = aboutCopy[language];

  return (
    <section id="about" className="section-pattern py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            label={copy.label}
            title={copy.title}
            description={copy.description}
          />

          <div className="card-soft rounded-[2rem] p-7">
            <div className="border-l-4 border-[var(--color-accent)] pl-5">
              <p className="text-base leading-8 text-slate-700">
                {t(company.description, language)}
              </p>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.detail}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--color-blue-soft)] p-5">
                <p className="text-3xl font-black text-[var(--color-blue)]">
                  F&B
                </p>
                <p className="mt-2 text-sm text-slate-600">{copy.focus}</p>
              </div>

              <div className="rounded-2xl bg-[var(--color-accent-soft)] p-5">
                <p className="text-3xl font-black text-[var(--color-primary)]">
                  Bali
                </p>
                <p className="mt-2 text-sm text-slate-600">{copy.location}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
