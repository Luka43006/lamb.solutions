import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Fraunces } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const serif = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Lamb Solutions — Automatizacija poslovanja",
  description:
    "Lamb Solutions dizajnira i gradi sisteme automatizacije, AI agente i softver po meri za firme koje žele da posluju bez ručnog rada i tabela.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper font-sans">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
