import Image from "next/image";
import { company } from "@/constants/company";
import { navigationItems } from "@/constants/navigation";
import { createWhatsappLink } from "@/lib/whatsapp";

export function Footer() {
  const whatsappLink = createWhatsappLink(
    company.whatsappNumber,
    company.whatsappMessage
  );

  return (
    <footer className="bg-[var(--color-primary)] py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-black">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain p-1"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold">{company.name}</h2>
              <p className="mt-1 text-xs text-white/50">
                Kitchen Equipment Specialist
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            Solusi profesional untuk pengadaan, instalasi, perawatan, dan
            perbaikan kitchen equipment komersial.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-bold text-[var(--color-primary)] transition hover:bg-yellow-300"
          >
            Hubungi Kami
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/35">
              Navigation
            </p>

            <div className="mt-4 grid gap-3">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/60 transition hover:text-[var(--color-blue)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/35">
              Contact
            </p>

            <div className="mt-4 grid gap-3 text-sm text-white/60">
              <a
                href={`mailto:${company.email}`}
                className="hover:text-[var(--color-blue)]"
              >
                {company.email}
              </a>

              <a
                href={whatsappLink}
                className="hover:text-[var(--color-blue)]"
              >
                {company.whatsappDisplay}
              </a>

              <p className="leading-7">{company.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-white/40 sm:px-6 lg:px-8">
        © 2025 {company.name}. All rights reserved.
      </div>
    </footer>
  );
}