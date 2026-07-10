import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { IntroLoader } from "@/components/intro-loader";
import { SITE, SOCIAL_LINKS } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://piusnyika.co.zw";
const TITLE = `${SITE.name} | Web Developer in Zimbabwe`;
const DESCRIPTION =
  "Zimbabwe-based web developer specializing in React, Next.js, and WordPress — building fast, SEO-friendly websites and e-commerce stores.";
const KEYWORDS = [
  "Pius Nyika",
  "web developer Zimbabwe",
  "WordPress developer Zimbabwe",
  "Next.js developer Zimbabwe",
  "React developer Zimbabwe",
  "WooCommerce developer",
  "e-commerce website Zimbabwe",
  "web designer Harare",
  "freelance web developer Zimbabwe",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#080f16",
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  url: SITE_URL,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZW",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "WordPress",
    "WooCommerce",
    "Elementor",
    "PHP",
    "Node.js",
    "PostgreSQL",
    "SEO",
  ],
  sameAs: [
    SOCIAL_LINKS.github,
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.dribbble,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <IntroLoader />
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
