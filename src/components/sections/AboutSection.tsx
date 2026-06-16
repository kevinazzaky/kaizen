import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/constants/company";

export function AboutSection() {
  return (
    <section id="about" className="section-pattern py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            label="About Us"
            title="Mitra Teknis untuk Keandalan Kitchen Equipment"
            description="Kaizen Utama Teknik hadir untuk mendukung operasional bisnis anda melalui layanan teknis yang responsif, tepat sasaran, dan berorientasi jangka panjang."
          />

          <div className="card-soft rounded-[2rem] p-7">
            <div className="border-l-4 border-[var(--color-accent)] pl-5">
              <p className="text-base leading-8 text-slate-700">
                {company.description}
              </p>

              <p className="mt-5 text-base leading-8 text-slate-700">
                Kami mendukung kebutuhan operasional restoran, hotel, café,
                resort, catering, bakery, cloud kitchen, food court, dan
                berbagai bisnis F&B lainnya. Fokus kami adalah membantu
                pelanggan menjaga keandalan aset dapur, mengurangi risiko
                downtime, dan memastikan peralatan siap digunakan dalam
                aktivitas harian.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--color-blue-soft)] p-5">
                <p className="text-3xl font-black text-[var(--color-blue)]">
                  F&B
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Fokus pada kebutuhan dapur komersial.
                </p>
              </div>

              <div className="rounded-2xl bg-[var(--color-accent-soft)] p-5">
                <p className="text-3xl font-black text-[var(--color-primary)]">
                  Bali
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Berbasis di Badung dan melayani kebutuhan bisnis Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
