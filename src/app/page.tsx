import { Navbar } from "@/components/layout/navbar";

const sections = [
  {
    id: "home",
    title: "Home",
    description: "Hero section akan dibuat pada issue berikutnya.",
  },
  {
    id: "tentang-kami",
    title: "Tentang Kami",
    description: "Section profil perusahaan Kaizen.",
  },
  {
    id: "layanan",
    title: "Layanan",
    description: "Section daftar layanan maintenance kitchen equipment.",
  },
  {
    id: "galeri",
    title: "Galeri",
    description: "Section dokumentasi pekerjaan.",
  },
  {
    id: "kontak",
    title: "Kontak",
    description: "Section kontak dan CTA WhatsApp.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-24 border-b border-slate-200 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Kaizen
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {section.title}
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}