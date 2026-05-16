import Link from "next/link";
import { company } from "@/constants/company";
import { navigationItems } from "@/constants/navigation";

export function Footer() {
  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">
                K
              </div>

              <div>
                <p className="text-xl font-bold">{company.name}</p>
                <p className="text-sm text-slate-400">
                  Kitchen Equipment Maintenance
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              Kaizen membantu kebutuhan maintenance, perbaikan alat kitchen,
              pengadaan spare part, dan kebutuhan equipment dapur untuk
              restoran, hotel, cafe, catering, cloud kitchen, dan commercial
              kitchen.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Navigasi
            </h3>

            <div className="mt-4 grid gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Kontak
            </h3>

            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <p>Siap membantu kebutuhan kitchen equipment bisnis Anda.</p>

              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Hubungi WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}