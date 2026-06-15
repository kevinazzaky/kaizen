import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/constants/clients";

export function ClientSection() {
  return (
    <section id="clients" className="bg-white py-20">
      <Container>
        <SectionHeading
          label="Our Client"
          title="Klien yang Pernah Kami Tangani"
          description="Pengalaman pekerjaan Kaizen Utama Teknik dalam mendukung kebutuhan maintenance kitchen equipment pada lingkungan operasional bisnis F&B."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          {clients.map((client) => (
            <article
              key={client.name}
              className="card-hover relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm hover:border-amber-300 hover:bg-white"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-blue)] via-[var(--color-accent)] to-[var(--color-primary)]" />

              <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-blue)]">
                {client.location}
              </p>

              <h3 className="mt-4 text-3xl font-black text-slate-950">
                {client.name}
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {client.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-[var(--color-blue-soft)] px-4 py-2 text-xs font-bold text-[var(--color-blue)]">
                  Kitchen Equipment
                </span>

                <span className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-xs font-bold text-amber-700">
                  Maintenance
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700">
                  Resort Operation
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
