import Link from "next/link";
import { company } from "@/constants/company";

const featureHighlights = [
  {
    title: "Preventive Maintenance",
    description: "Perawatan berkala agar equipment tetap stabil.",
  },
  {
    title: "Emergency Support",
    description: "Bantuan cepat saat equipment mengganggu operasional.",
  },
  {
    title: "Commercial Kitchen",
    description: "Cocok untuk restoran, hotel, cafe, dan catering.",
  },
];

const serviceCards = [
  {
    title: "Preventive Maintenance",
    description:
      "Pengecekan dan perawatan berkala untuk mengurangi risiko kerusakan.",
  },
  {
    title: "Equipment Service",
    description:
      "Service kompor industri, oven, fryer, chiller, freezer, dan equipment dapur lainnya.",
  },
  {
    title: "Operational Support",
    description:
      "Membantu bisnis F&B menjaga dapur tetap siap digunakan setiap hari.",
  },
];

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-4 pt-10 pb-16 sm:px-6 sm:pt-12 sm:pb-20 lg:px-8 lg:pt-16 lg:pb-24"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,#f8fafc,#ffffff,#f1f5f9)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Maintenance • Service • Preventive Care
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Solusi Maintenance Equipment Kitchen Profesional
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Kami membantu restoran, hotel, cafe, catering, dan commercial
            kitchen menjaga performa peralatan dapur agar tetap aman, efisien,
            dan siap operasional.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Konsultasi via WhatsApp
            </Link>

            <Link
              href="#layanan"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Lihat Layanan Kami
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {featureHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-bold text-slate-950">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl sm:p-6">
            <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
              <p className="text-sm font-medium text-slate-300">
                Kaizen Service Coverage
              </p>

              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Kitchen equipment tetap prima untuk operasional bisnis Anda.
              </h2>

              <div className="mt-6 grid gap-3">
                {serviceCards.map((item) => (
                  <div key={item.title} className="rounded-xl bg-white/10 p-4">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-white p-4 text-slate-900">
                <p className="text-sm font-semibold">Cocok untuk:</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Restoran, hotel, cafe, catering, cloud kitchen, dan commercial
                  kitchen.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                <div>
                  <p className="text-xl font-bold">Fast</p>
                  <p className="mt-1 text-xs text-slate-400">Respon cepat</p>
                </div>

                <div>
                  <p className="text-xl font-bold">Safe</p>
                  <p className="mt-1 text-xs text-slate-400">Aman</p>
                </div>

                <div>
                  <p className="text-xl font-bold">Care</p>
                  <p className="mt-1 text-xs text-slate-400">Terjadwal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}