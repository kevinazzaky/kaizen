import Link from "next/link";
import { company } from "@/constants/company";
import { galleryItems } from "@/constants/gallery";

export function GallerySection() {
  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    "Halo Kaizen, saya ingin konsultasi mengenai layanan kitchen equipment."
  )}`;

  return (
    <section id="galeri" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Galeri Pekerjaan
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Dokumentasi layanan Kaizen akan ditampilkan di sini.
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Untuk sementara, galeri ini disiapkan sebagai placeholder
            dokumentasi. Setelah foto pekerjaan tersedia, section ini bisa
            langsung diisi dengan dokumentasi asli dari lapangan.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex h-52 items-center justify-center bg-slate-950 px-6 text-center text-white">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                    {item.category}
                  </p>

                  <p className="mt-4 text-4xl font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-4 text-sm text-slate-300">
                    Dokumentasi segera hadir
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6">
                  <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Dokumentasi asli menyusul
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Punya kebutuhan maintenance atau perbaikan alat kitchen?
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Hubungi Kaizen untuk konsultasi kebutuhan kitchen equipment Anda.
              Dokumentasi pekerjaan akan diperbarui setelah tersedia foto
              proyek yang valid.
            </p>
          </div>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 sm:w-auto lg:mt-0"
          >
            Konsultasi WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}