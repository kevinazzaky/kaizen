"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/constants/projects";
import { t, useLanguage } from "@/lib/language";

const projectCopy = {
  id: {
    label: "Proyek Kami",
    title: "Dokumentasi Pekerjaan Kaizen",
    description:
      "Beberapa kategori pekerjaan yang menjadi bagian dari layanan teknis Kaizen Utama Teknik untuk mendukung operasional kitchen equipment pelanggan.",
  },
  en: {
    label: "Our Projects",
    title: "Kaizen Work Documentation",
    description:
      "A selection of Kaizen Utama Teknik technical work categories that support customer kitchen equipment operations.",
  },
};

export function ProjectSection() {
  const { language } = useLanguage();
  const copy = projectCopy[language];

  return (
    <section
      id="projects"
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
          align="center"
          dark
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={t(project.title, language)}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="relative h-48 bg-slate-950/45 p-3">
                <Image
                  src={project.image}
                  alt={t(project.title, language)}
                  fill
                  className="object-contain p-3"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {t(project.category, language)}
                  </p>

                  <h3 className="mt-2 text-lg font-black leading-tight text-white">
                    {t(project.title, language)}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-white/70">
                  {t(project.description, language)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
