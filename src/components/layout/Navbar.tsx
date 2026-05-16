"use client";

import { useState } from "react";
import Link from "next/link";
import { company } from "@/constants/company";
import { navigationItems } from "@/constants/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Kaizen homepage"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
            K
          </div>

          <div className="leading-tight">
            <p className="text-lg font-bold text-slate-900">{company.name}</p>
            <p className="hidden text-xs text-slate-500 sm:block">
              Kitchen Equipment Maintenance
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Konsultasi WhatsApp
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-900 transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-2xl leading-none">☰</span>
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Konsultasi WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}