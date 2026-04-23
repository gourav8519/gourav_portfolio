import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { personalInfo } from "@/data/portfolio";

const siteUrl = "https://gouravsahu.com";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gourav Sahu | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer with 3+ years of experience architecting and shipping production-grade SaaS applications using React.js, Next.js, Node.js, TypeScript, and MongoDB. Skilled in event-driven systems, real-time platforms, and high-performance APIs.",
  keywords: [
    "Gourav Sahu",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "System Design",
    "Event-Driven Architecture",
    "Microservices",
    "Portfolio",
    "Web Developer",
    "Bhopal",
  ],
  authors: [{ name: "Gourav Sahu", url: siteUrl }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Gourav Sahu | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building scalable SaaS products, automation platforms, and real-time systems. 3+ years experience.",
    type: "website",
    siteName: "Gourav Sahu Portfolio",
    url: siteUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourav Sahu | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building scalable SaaS products, automation platforms, and real-time systems. 3+ years experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: siteUrl,
    email: `mailto:${personalInfo.email}`,
    jobTitle: personalInfo.title,
    image: `${siteUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    sameAs: [personalInfo.linkedin, personalInfo.github],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "System Design",
      "Event-Driven Architecture",
      "REST APIs",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
