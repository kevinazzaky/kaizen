"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { company } from "@/constants/company";
import { t, useLanguage } from "@/lib/language";
import { createWhatsappLink } from "@/lib/whatsapp";

const heroCopy = {
  id: {
    label: "Company Profile",
    intro:
      "Kami membantu menjaga performa peralatan dapur agar tetap optimal, efisien, dan siap mendukung operasional harian.",
    primaryCta: "Konsultasi Sekarang",
    secondaryCta: "Lihat Layanan",
    cardTitle: "Mitra Teknis Kitchen Equipment Komersial",
    market:
      "Restoran, hotel, cafe, resort, catering, bakery, dan cloud kitchen.",
    location: "Berbasis di Badung dan mendukung kebutuhan bisnis Anda.",
    highlights: [
      "Preventive Maintenance",
      "Pasokan Spare Part",
      "Instalasi & Perbaikan",
    ],
  },
  en: {
    label: "Company Profile",
    intro:
      "We help keep kitchen equipment performing optimally, efficiently, and ready to support daily operations.",
    primaryCta: "Consult Now",
    secondaryCta: "View Services",
    cardTitle: "Technical Partner for Commercial Kitchen Equipment",
    market:
      "Restaurants, hotels, cafes, resorts, catering, bakeries, and cloud kitchens.",
    location: "Based in Badung and ready to support your business needs.",
    highlights: [
      "Preventive Maintenance",
      "Spare Part Supply",
      "Installation & Repair",
    ],
  },
};

export function HeroSection() {
  const { language } = useLanguage();
  const copy = heroCopy[language];
  const whatsappLink = createWhatsappLink(
    company.whatsappNumber,
    t(company.whatsappMessage, language),
  );

  return (
    <section className="relative overflow-hidden pt-28 text-white dark-pattern">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />

      <Container className="relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[var(--color-accent)]/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {copy.label}
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t(company.tagline, language)}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {copy.intro}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--color-accent)] px-7 py-3 text-center text-sm font-black text-[var(--color-primary)] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                {copy.primaryCta}
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {copy.secondaryCta}
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {copy.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur"
                >
                  <p className="text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--color-accent)]/10 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-7 text-slate-950">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-3xl bg-black shadow-xl">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain p-3"
                    priority
                  />
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-[var(--color-blue)]">
                  Kaizen Utama Teknik
                </p>

                <h2 className="mt-4 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                  {copy.cardTitle}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {t(company.description, language)}
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[var(--color-blue-soft)] p-5">
                    <p className="text-2xl font-black text-[var(--color-blue)]">
                      F&B
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {copy.market}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[var(--color-accent-soft)] p-5">
                    <p className="text-2xl font-black text-[var(--color-primary)]">
                      Bali
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {copy.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
