import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lamine Ndong | Développeur Full-Stack & Génie Logiciel",
  description:
    "Portfolio de Lamine Ndong, étudiant en double cursus Génie Logiciel et Développement Web. Spécialisé en React, Next.js, Node.js et architectures logicielles.",
  keywords: [
    "Lamine Ndong",
    "Développeur Web Dakar",
    "Développeur Full-Stack Sénégal",
    "React",
    "Next.js",
    "Node.js",
    "Génie Logiciel",
  ],
  authors: [{ name: "Lamine Ndong" }],
  openGraph: {
    title: "Lamine Ndong | Développeur Full-Stack & Génie Logiciel",
    description:
      "Conception logicielle et développement web moderne (React, Next.js, Node.js, Express, MongoDB, MySQL).",
    url: "https://ton-portfolio.vercel.app", // On mettra l'URL finale
    siteName: "Lamine Ndong Portfolio",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}