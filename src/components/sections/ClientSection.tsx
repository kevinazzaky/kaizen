import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/constants/clients";

export function ClientSection() {
  return (
    <section id="clients" className="bg-white py-20">
      <Container>
        <SectionHeading
          label="Our Client"
          title="Dipercaya oleh Berbagai Bisnis F&B"
          description="Beberapa klien yang pernah kami tangani dalam kebutuhan perawatan, perbaikan, dan dukungan teknis kitchen equipment."
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {clients.map((client) => (
            <article
              key={client.name}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)]">
                {client.location}
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-950">
                {client.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {client.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
