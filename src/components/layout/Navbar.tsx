"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { company } from "@/constants/company";
import { navigationItems } from "@/constants/navigation";
import { createWhatsappLink } from "@/lib/whatsapp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const whatsappLink = createWhatsappLink(
    company.whatsappNumber,
    company.whatsappMessage,
  );

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-4 pt-4 lg:fixed">
      <div
        className={`mx-auto flex h-18 max-w-7xl items-center justify-between rounded-full border px-5 shadow-sm backdrop-blur-2xl transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border-white/15 bg-white/10 text-white lg:border-slate-200/80 lg:bg-white/90 lg:text-slate-950 lg:shadow-lg"
            : "border-white/15 bg-white/10 text-white"
        }`}
      >
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full bg-black shadow-sm">
            <Image
              src={company.logo}
              alt={company.name}
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div>
            <p
              className={`text-sm font-black leading-none sm:text-base ${
                isScrolled ? "text-white lg:text-slate-950" : "text-white"
              }`}
            >
              {company.name}
            </p>

            <p
              className={`mt-1 hidden text-xs sm:block ${
                isScrolled ? "text-white/65 lg:text-slate-500" : "text-white/65"
              }`}
            >
              Kitchen Equipment Specialist
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition ${
                isScrolled
                  ? "text-slate-700 hover:text-[var(--color-blue)]"
                  : "text-white/75 hover:text-[var(--color-accent)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-black text-[var(--color-primary)] shadow-sm transition hover:-translate-y-0.5 hover:bg-yellow-300 lg:inline-flex"
        >
          Konsultasi
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition lg:hidden"
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/15 bg-[var(--color-primary)]/90 px-5 py-5 text-white shadow-lg backdrop-blur-2xl lg:hidden">
          <div className="grid gap-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-white/80 transition hover:text-[var(--color-accent)]"
              >
                {item.label}
              </a>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-center text-sm font-black text-[var(--color-primary)]"
            >
              Konsultasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
