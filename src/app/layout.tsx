import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ГУНДЫРЕВ — ИТ‑решения и поставки (B2B/B2G)",
  description:
    "Комплексные ИТ‑решения, кибербезопасность, лицензии Dr.Web, веб‑разработка и поставки электроники для госсектора и бизнеса.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "ГУНДЫРЕВ — ИТ‑решения и поставки",
    description:
      "Комплексные ИТ‑решения и поставки для госсектора и бизнеса.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <Header />
        <Toaster position="top-center" richColors closeButton expand={false} />
        <main>{children}</main>
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
