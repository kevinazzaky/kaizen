import { benefits } from "@/constants/benefits";

export function BenefitsSection() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Keunggulan Kaizen
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Kenapa memilih Kaizen untuk kitchen equipment Anda?
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Kami membantu bisnis F&amp;B menjaga equipment dapur tetap aman,
            stabil, dan siap digunakan melalui layanan maintenance, perbaikan,
            spare part, dan support operasional.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Preventive Care
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Perawatan lebih baik daripada menunggu alat rusak.
              </h3>
            </div>

            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              Dengan pengecekan berkala, potensi masalah bisa diketahui lebih
              awal sehingga bisnis dapat mengurangi risiko downtime dan menjaga
              aktivitas kitchen tetap berjalan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}