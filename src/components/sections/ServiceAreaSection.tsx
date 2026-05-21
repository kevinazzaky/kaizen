import Link from "next/link";
import { company } from "@/constants/company";
import { serviceAreas } from "@/constants/serviceAreas";

export function ServiceAreaSection() {
  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    "Halo Kaizen, saya ingin konsultasi mengenai layanan untuk area bisnis F&B saya.",
  )}`;

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Area Layanan
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Mendukung berbagai kebutuhan kitchen bisnis F&amp;B.
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Kaizen membantu berbagai jenis bisnis dengan kebutuhan maintenance,
            perbaikan, spare part, dan pengadaan alat kitchen sesuai kebutuhan
            operasional.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <div
              key={area.title}
              className="flex min-h-[220px] flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                {area.title.charAt(0)}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>

              <div className="mt-auto pt-6">
                <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  Business Support
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Tidak menemukan tipe bisnis Anda?
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Konsultasikan kebutuhan kitchen equipment Anda.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Setiap bisnis punya kebutuhan equipment yang berbeda. Ceritakan
              kondisi dapur, jenis alat, atau kebutuhan spare part Anda kepada
              tim Kaizen.
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
