"use client";

import { FormEvent, useState } from "react";
import { company } from "@/constants/company";
import { services } from "@/constants/services";

type ContactFormState = {
  name: string;
  businessName: string;
  needType: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  businessName: "",
  needType: "",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = [
      "Halo Kaizen, saya ingin konsultasi layanan kitchen equipment.",
      "",
      `Nama: ${formData.name}`,
      `Nama Bisnis: ${formData.businessName || "-"}`,
      `Jenis Kebutuhan: ${formData.needType}`,
      "",
      "Pesan:",
      formData.message || "-",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${
      company.whatsappNumber
    }?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="kontak" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Kontak Kaizen
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Butuh bantuan untuk kitchen equipment Anda?
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Hubungi Kaizen untuk konsultasi maintenance, perbaikan alat
              kitchen, spare part, atau kebutuhan equipment dapur bisnis Anda.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">
                  WhatsApp
                </p>
                <p className="mt-2 text-lg font-bold text-slate-950">
                  {company.whatsappNumber}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">
                  Layanan
                </p>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  Maintenance, perbaikan alat kitchen, spare part, pengadaan
                  barang kitchen, dan troubleshooting equipment.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">
                  Target Bisnis
                </p>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  Restoran, hotel, cafe, catering, cloud kitchen, bakery, food
                  court, dan commercial kitchen.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6 lg:p-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-950">
                Form Konsultasi
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Isi data singkat berikut, lalu sistem akan membuat pesan
                WhatsApp otomatis untuk dikirim ke Kaizen.
              </p>
            </div>

            <div className="mt-6 grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700"
                >
                  Nama
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400"
                />
              </div>

              <div>
                <label
                  htmlFor="businessName"
                  className="text-sm font-semibold text-slate-700"
                >
                  Nama Bisnis
                </label>

                <input
                  id="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={(event) =>
                    handleChange("businessName", event.target.value)
                  }
                  placeholder="Contoh: Kaizen Cafe"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400"
                />
              </div>

              <div>
                <label
                  htmlFor="needType"
                  className="text-sm font-semibold text-slate-700"
                >
                  Jenis Kebutuhan
                </label>

                <select
                  id="needType"
                  required
                  value={formData.needType}
                  onChange={(event) =>
                    handleChange("needType", event.target.value)
                  }
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400"
                >
                  <option value="">Pilih jenis kebutuhan</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-700"
                >
                  Pesan
                </label>

                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(event) =>
                    handleChange("message", event.target.value)
                  }
                  placeholder="Ceritakan kendala alat, kebutuhan spare part, atau equipment yang Anda cari."
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}