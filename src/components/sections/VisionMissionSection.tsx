import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/constants/company";

export function VisionMissionSection() {
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
          label="Our Vision & Mission"
          title="Berorientasi pada Keandalan dan Perawatan Berkelanjutan"
          description="Kaizen Utama Teknik hadir sebagai mitra teknis yang membantu pelanggan menjaga aset kitchen equipment agar tetap efisien, aman, dan siap mendukung operasional harian."
          dark
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Our Vision
            </p>

            <p className="mt-5 text-lg leading-8 text-white/85">
              {company.vision}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Our Mission
            </p>

            <div className="mt-5 grid gap-4">
              {company.missions.map((mission, index) => (
                <div key={mission} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-[var(--color-primary)]">
                    {index + 1}
                  </div>

                  <p className="text-base leading-7 text-white/80">{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
