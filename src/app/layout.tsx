import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Promedic vip 1994 العقبي",
  description: "الموقع الرسمي لـ Promedic vip 1994 العقبي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} min-h-full antialiased scroll-smooth`}>
      <body className="flex flex-col min-h-screen font-cairo bg-white text-navy overflow-x-hidden">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
