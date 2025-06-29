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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased w-screen overflow-x-hidden",
          roboto.className
        )}
      >
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
