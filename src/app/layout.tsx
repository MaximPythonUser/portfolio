import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Максим — Портфолио | Веб-разработчик",
  description: "Портфолио веб-разработчика: сайты, веб-приложения, Next.js, React, TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className={`${inter.variable} overflow-x-hidden dark`}>
      <body className="min-h-screen font-sans antialiased overflow-x-hidden">
        {/* Слой 1: тематический фон — светлый или тёмный, зависит от темы */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          aria-hidden="true"
          style={{ backgroundColor: "hsl(var(--background))" }}
        />
        {/* Слой 2: основное неоновое свечение */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle 900px at 50% 45%, rgba(139, 92, 246, 0.35) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 75%)",
          }}
        />
        {/* Слой 3: голубое свечение для асимметрии */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle 600px at 80% 70%, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
          }}
        />
        {/* Слой 4: контент поверх всего */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}