"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/constants/company";
import { t, useLanguage } from "@/lib/language";
import { createWhatsappLink } from "@/lib/whatsapp";

const contactCopy = {
  id: {
    label: "Kontak Kami",
    title: "Butuh Bantuan untuk Kitchen Equipment Anda?",
    description:
      "Hubungi Kaizen Utama Teknik untuk konsultasi pengadaan, instalasi, perawatan, perbaikan, atau kebutuhan spare part kitchen equipment komersial.",
    primaryWhatsapp: "WhatsApp Utama",
    secondaryWhatsapp: "WhatsApp Alternatif",
    email: "Email Kami",
    address: "Alamat",
  },
  en: {
    label: "Contact Us",
    title: "Need Help with Your Kitchen Equipment?",
    description:
      "Contact Kaizen Utama Teknik for procurement, installation, maintenance, repair, or commercial kitchen equipment spare part consultation.",
    primaryWhatsapp: "Primary WhatsApp",
    secondaryWhatsapp: "Alternative WhatsApp",
    email: "Email Us",
    address: "Address",
  },
};

export function ContactSection() {
  const { language } = useLanguage();
  const copy = contactCopy[language];
  const whatsappMessage = t(company.whatsappMessage, language);
  const primaryWhatsapp = createWhatsappLink(
    company.whatsappNumber,
    whatsappMessage,
  );

  const secondaryWhatsapp = createWhatsappLink(
    company.whatsappSecondNumber,
    whatsappMessage,
  );

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] shadow-2xl dark-pattern">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 text-white sm:p-10 lg:p-12">
              <SectionHeading
                label={copy.label}
                title={copy.title}
                description={copy.description}
                dark
              />

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={primaryWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-center text-sm font-black text-[var(--color-primary)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  {copy.primaryWhatsapp}
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {copy.email}
                </a>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <div className="grid gap-6">
                <div className="rounded-2xl bg-[var(--color-blue-soft)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-blue)]">
                    {copy.primaryWhatsapp}
                  </p>
                  <a
                    href={primaryWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-xl font-black text-slate-950 hover:text-[var(--color-blue)]"
                  >
                    {company.whatsappDisplay}
                  </a>
                </div>

                <div className="rounded-2xl bg-[var(--color-accent-soft)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                    {copy.secondaryWhatsapp}
                  </p>
                  <a
                    href={secondaryWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-xl font-black text-slate-950 hover:text-amber-600"
                  >
                    {company.whatsappSecondDisplay}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-blue)]">
                    {copy.email}
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-2 block text-base font-bold text-slate-950 hover:text-[var(--color-blue)]"
                  >
                    {company.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-blue)]">
                    {copy.address}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {company.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
