"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/constants/services";
import { t, useLanguage } from "@/lib/language";

const servicesCopy = {
  id: {
    label: "Layanan Kami",
    title: "Layanan Kitchen Equipment yang Terintegrasi",
    description:
      "Kami menyediakan layanan teknis mulai dari pengadaan unit baru, instalasi, spare part, hingga perawatan dan perbaikan peralatan dapur komersial.",
    cta: "Pelajari lebih lanjut",
  },
  en: {
    label: "What We Do",
    title: "Integrated Kitchen Equipment Services",
    description:
      "We provide technical services from new unit procurement, installation, and spare parts to maintenance and repair for commercial kitchen equipment.",
    cta: "Learn more",
  },
};

export function WhatWeDoSection() {
  const { language } = useLanguage();
  const copy = servicesCopy[language];

  return (
    <section id="services" className="bg-slate-50 py-20">
      <Container>
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={t(service.title, language)}
              className="card-hover relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm hover:border-amber-200"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-accent)]" />

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-blue-soft)] text-sm font-black text-[var(--color-blue)]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 text-xl font-black text-slate-950">
                {t(service.title, language)}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {t(service.description, language)}
              </p>

              <p className="mt-6 text-sm font-black text-[var(--color-primary)]">
                {copy.cta} -&gt;
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
