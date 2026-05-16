import Link from "next/link";
import { company } from "@/constants/company";
import { services } from "@/constants/services";

export function ServicesSection() {
  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    "Halo Kaizen, saya ingin konsultasi mengenai layanan maintenance, spare part, atau perbaikan alat kitchen."
  )}`;

  return (
    <section id="layanan" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Layanan Kaizen
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Solusi Service dan Maintenance Kitchen Equipment
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Dari perawatan, perbaikan, spare part, hingga kebutuhan alat
            kitchen, Kaizen siap membantu operasional dapur bisnis Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex min-h-[260px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-auto pt-6">
                <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                  Kaizen Service
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-slate-950 p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Butuh bantuan teknisi?
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Butuh maintenance, spare part, atau perbaikan alat kitchen?
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Ceritakan kendala equipment Anda, kebutuhan spare part, atau
              barang kitchen yang sedang dicari. Tim Kaizen akan membantu
              memberikan arahan awal.
            </p>
          </div>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 sm:w-auto lg:mt-0"
          >
            Konsultasi WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}