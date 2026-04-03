import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gourav Sahu | MERN Stack Developer",
  description:
    "MERN Stack Developer with 2+ years of experience building scalable SaaS applications using React.js, Next.js, Node.js, and MongoDB. Skilled in automation systems, real-time platforms, and high-performance APIs.",
  keywords: [
    "Gourav Sahu",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "System Design",
    "Portfolio",
    "Web Developer",
    "Bhopal",
  ],
  authors: [{ name: "Gourav Sahu" }],
  openGraph: {
    title: "Gourav Sahu | MERN Stack Developer",
    description:
      "Full Stack MERN Developer building scalable SaaS products, automation platforms, and real-time systems. 2+ years experience.",
    type: "website",
    siteName: "Gourav Sahu Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
