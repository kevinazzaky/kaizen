"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/constants/clients";
import { t, useLanguage } from "@/lib/language";

const clientCopy = {
  id: {
    label: "Klien Kami",
    title: "Klien yang Pernah Kami Tangani",
    description:
      "Pengalaman pekerjaan Kaizen Utama Teknik dalam mendukung kebutuhan maintenance kitchen equipment pada lingkungan operasional bisnis F&B.",
  },
  en: {
    label: "Our Clients",
    title: "Clients We Have Supported",
    description:
      "Kaizen Utama Teknik's work experience in supporting kitchen equipment maintenance needs across F&B business operations.",
  },
};

export function ClientSection() {
  const { language } = useLanguage();
  const copy = clientCopy[language];

  return (
    <section id="clients" className="bg-white py-20">
      <Container>
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {clients.map((client) => (
            <article
              key={client.name}
              className="card-hover relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm hover:border-amber-300 hover:bg-white"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-blue)] via-[var(--color-accent)] to-[var(--color-primary)]" />

              <div className="relative h-40 bg-white p-6">
                {client.image ? (
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-contain p-6"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[var(--color-blue-soft)]">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-black text-[var(--color-blue)] shadow-sm">
                      {client.name
                        .split(" ")
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-blue)]">
                  {client.location}
                </p>

                <h3 className="mt-4 text-2xl font-black text-slate-950">
                  {client.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {t(client.description, language)}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {client.tags.map((tag, index) => (
                    <span
                      key={t(tag, language)}
                      className={`rounded-full px-4 py-2 text-xs font-bold ${
                        index === 0
                          ? "bg-[var(--color-blue-soft)] text-[var(--color-blue)]"
                          : index === 1
                            ? "bg-[var(--color-accent-soft)] text-amber-700"
                            : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {t(tag, language)}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
