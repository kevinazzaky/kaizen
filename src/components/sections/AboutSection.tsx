const companyValues = [
  {
    title: "Fokus pada Operasional",
    description:
      "Kami membantu menjaga kitchen equipment tetap siap digunakan agar operasional bisnis F&B tidak terganggu.",
  },
  {
    title: "Perawatan Terjadwal",
    description:
      "Preventive maintenance membantu mengurangi risiko kerusakan mendadak dan memperpanjang umur equipment.",
  },
  {
    title: "Pendekatan Profesional",
    description:
      "Pekerjaan dilakukan dengan pengecekan yang rapi, komunikasi jelas, dan fokus pada keamanan equipment.",
  },
];

const customerTypes = [
  "Restaurant",
  "Hotel",
  "Cafe",
  "Catering",
  "Bakery",
  "Cloud Kitchen",
  "Food Court",
  "Commercial Kitchen",
];

export function AboutSection() {
  return (
    <section
      id="tentang-kami"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Tentang Kaizen
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Partner maintenance untuk commercial kitchen yang lebih aman dan
              siap operasional.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Kaizen adalah perusahaan yang bergerak di bidang maintenance,
              service, dan preventive maintenance kitchen equipment untuk
              kebutuhan bisnis F&amp;B seperti restoran, hotel, cafe, catering,
              bakery, cloud kitchen, food court, dan commercial kitchen.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Kami membantu pelanggan menjaga performa peralatan dapur agar
              tetap stabil, efisien, dan aman digunakan dalam aktivitas
              operasional harian.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <div className="grid gap-4">
              {companyValues.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-slate-950 p-5 text-white sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Target Pelanggan
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Layanan kami cocok untuk berbagai kebutuhan bisnis F&amp;B.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Dari dapur restoran sampai commercial kitchen, Kaizen membantu
                menjaga equipment tetap dalam kondisi terbaik.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {customerTypes.map((customer) => (
                <div
                  key={customer}
                  className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-4 text-center text-sm font-semibold leading-5 text-white transition hover:bg-white/15 sm:h-24"
                >
                  <span className="max-w-[120px]">{customer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}