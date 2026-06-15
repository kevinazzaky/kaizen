import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { advantages } from "@/constants/advantages";

const advantageStyles = [
  {
    label: "Expertise",
    accent: "bg-[var(--color-accent)] text-[var(--color-primary)]",
    border: "hover:border-amber-300",
  },
  {
    label: "Original",
    accent: "bg-[var(--color-blue)] text-white",
    border: "hover:border-[var(--color-blue)]",
  },
  {
    label: "Long Term",
    accent: "bg-[var(--color-primary)] text-white",
    border: "hover:border-slate-500",
  },
  {
    label: "Reliable",
    accent: "bg-[var(--color-accent)] text-[var(--color-primary)]",
    border: "hover:border-amber-300",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-white py-20">
      <Container>
        <SectionHeading
          label="Why Choose Us"
          title="Alasan Memilih Kaizen Utama Teknik"
          description="Kami tidak hanya menangani kerusakan, tetapi juga membantu pelanggan menjaga efisiensi, keandalan, dan umur pakai aset kitchen equipment secara berkelanjutan."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((advantage, index) => {
            const style = advantageStyles[index % advantageStyles.length];

            return (
              <article
                key={advantage.title}
                className={`card-hover relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm ${style.border}`}
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-white" />

                <div className="relative z-10">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black ${style.accent}`}
                  >
                    {index + 1}
                  </div>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-[var(--color-blue)]">
                    {style.label}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight text-slate-950">
                    {advantage.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {advantage.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
