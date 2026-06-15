import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/constants/projects";

export function ProjectSection() {
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
          label="Our Project"
          title="Dokumentasi Pekerjaan Kaizen"
          description="Beberapa kategori pekerjaan yang menjadi bagian dari layanan teknis Kaizen Utama Teknik untuk mendukung operasional kitchen equipment pelanggan."
          align="center"
          dark
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-white/5 p-6 text-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-black text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-white/70">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
