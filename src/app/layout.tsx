import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaizen Utama Teknik",
  description:
    "Solusi profesional untuk pengadaan, instalasi, perawatan, dan perbaikan kitchen equipment komersial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
