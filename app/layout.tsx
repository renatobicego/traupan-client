import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";

import { Roboto } from "next/font/google";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";

const roboto = Roboto({
  subsets: ["latin"],
  preload: true,
});
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  keywords: [
    "traupan",
    "herramientas",
    "fabricación",
    "maquinaria",
    "maquinaria pesada",
    "maquinaria industrial",
    "maquinaria de construcción",
    "ferretería",
    "herramientas industriales",
    "herramientas de construcción",
    "herramientas eléctricas",
    "herramientas manuales",
    "herramientas de medición",
    "herramientas de seguridad",
    "herramientas de mantenimiento",
    "escaleras",
    "mayorista ferretería",
    "mayorista herramientas",
    "Buenos Aires",
    "Argentina",
    "CABA",
    "Ciudad Autónoma de Buenos Aires",
    "Ciudad de Buenos Aires",
    "Ciudad de Buenos Aires Argentina",
    "máquinas",
    "industria",
    "industriales",
    "equipos industriales",
    "equipos de seguridad",
    "equipos de medición",
    "equipos de construcción",
    "equipos de mantenimiento",
    "equipos de transporte",
    "equipos de energía",
    "equipos de limpieza",
  ],
  openGraph: {
    title: siteConfig.name,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es",
    type: "website",
    description: siteConfig.description,
    images: [`${siteConfig.url}/${siteConfig.thumbnail}`], // Must be an absolute URL
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/${siteConfig.thumbnail}`], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    notranslate: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteConfig.url,
    name: siteConfig.name,
    image: [`${siteConfig.url}/${siteConfig.thumbnail}`],
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.direction.streetAddres,
      addressLocality: siteConfig.direction.locality,
      addressRegion: siteConfig.direction.region,
      postalCode: siteConfig.direction.postalCode,
      addressCountry: "AR",
    },
    areaServed: siteConfig.direction.label,
  };
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased w-screen overflow-x-hidden",
          roboto.className
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Navbar />
          {children}
          <WhatsappButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
