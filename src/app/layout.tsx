import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  src: [
    {
      path: "../fonts/Fraunces-Variable.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Fraunces-Italic-Variable.ttf",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = localFont({
  src: "../fonts/Manrope-Variable.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  title: "Shreyansh Paliwal — Software Engineer",
  description:
    "Portfolio of Shreyansh Paliwal — full-stack software engineer building agentic systems, real-time infrastructure, and behavioral security tools.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-ink text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
