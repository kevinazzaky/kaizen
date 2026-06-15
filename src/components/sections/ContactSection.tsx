import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/constants/company";
import { createWhatsappLink } from "@/lib/whatsapp";

export function ContactSection() {
  const primaryWhatsapp = createWhatsappLink(
    company.whatsappNumber,
    company.whatsappMessage,
  );

  const secondaryWhatsapp = createWhatsappLink(
    company.whatsappSecondNumber,
    company.whatsappMessage,
  );

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] shadow-2xl dark-pattern">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 text-white sm:p-10 lg:p-12">
              <SectionHeading
                label="Contact Us"
                title="Butuh Bantuan untuk Kitchen Equipment Anda?"
                description="Hubungi Kaizen Utama Teknik untuk konsultasi pengadaan, instalasi, perawatan, perbaikan, atau kebutuhan spare part kitchen equipment komersial."
                dark
              />

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={primaryWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-center text-sm font-black text-[var(--color-primary)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  WhatsApp Utama
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Email Kami
                </a>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <div className="grid gap-6">
                <div className="rounded-2xl bg-[var(--color-blue-soft)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-blue)]">
                    WhatsApp Utama
                  </p>
                  <a
                    href={primaryWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-xl font-black text-slate-950 hover:text-[var(--color-blue)]"
                  >
                    {company.whatsappDisplay}
                  </a>
                </div>

                <div className="rounded-2xl bg-[var(--color-accent-soft)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                    WhatsApp Alternatif
                  </p>
                  <a
                    href={secondaryWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-xl font-black text-slate-950 hover:text-amber-600"
                  >
                    {company.whatsappSecondDisplay}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-blue)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-2 block text-base font-bold text-slate-950 hover:text-[var(--color-blue)]"
                  >
                    {company.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-blue)]">
                    Alamat
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {company.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
