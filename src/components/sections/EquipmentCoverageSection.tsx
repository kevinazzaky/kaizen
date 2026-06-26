"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { equipmentCategories } from "@/constants/equipment";
import { t, useLanguage } from "@/lib/language";

const equipmentCopy = {
  id: {
    label: "Cakupan Equipment",
    title: "Kitchen Equipment yang Kami Tangani",
    description:
      "Kaizen Utama Teknik menangani berbagai jenis kitchen equipment komersial untuk mendukung kebutuhan operasional restoran, hotel, cafe, resort, catering, bakery, cloud kitchen, dan bisnis F&B lainnya.",
  },
  en: {
    label: "Equipment Coverage",
    title: "Kitchen Equipment We Handle",
    description:
      "Kaizen Utama Teknik handles various types of commercial kitchen equipment to support restaurants, hotels, cafes, resorts, catering, bakeries, cloud kitchens, and other F&B businesses.",
  },
};

const equipmentStyles = [
  {
    icon: "bg-[linear-gradient(135deg,var(--color-accent),#f59e0b)]",
    badge: "bg-[var(--color-accent-soft)] text-amber-700",
    border: "hover:border-amber-300",
  },
  {
    icon: "bg-[linear-gradient(135deg,var(--color-blue),var(--color-blue-dark))]",
    badge: "bg-[var(--color-blue-soft)] text-[var(--color-blue)]",
    border: "hover:border-[var(--color-blue)]",
  },
  {
    icon: "bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))]",
    badge: "bg-slate-100 text-slate-700",
    border: "hover:border-slate-400",
  },
];

export function EquipmentCoverageSection() {
  const { language } = useLanguage();
  const copy = equipmentCopy[language];

  return (
    <section id="equipment" className="section-pattern py-20">
      <Container>
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {equipmentCategories.map((equipment, index) => {
            const style = equipmentStyles[index % equipmentStyles.length];

            return (
              <article
                key={t(equipment.title, language)}
                className={`card-hover group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm ${style.border}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-blue)] via-[var(--color-accent)] to-[var(--color-primary)] opacity-70" />

                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon} shadow-lg`}
                >
                  <span className="text-lg font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {t(equipment.title, language)}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {t(equipment.description, language)}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {equipment.items.map((item) => (
                    <span
                      key={t(item, language)}
                      className={`rounded-full px-3 py-1.5 text-xs font-bold ${style.badge}`}
                    >
                      {t(item, language)}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
