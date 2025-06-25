import Brands from "@/sections/brands";
import Contact from "@/sections/contact";
import HeroSection from "@/sections/hero-section";
import OurCatalog from "@/sections/our-catalog";
import WeAreProviders from "@/sections/we-are-providers";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <OurCatalog />
      <Image
        src="/fondo-traupan.png"
        alt="Fondo de Traupan con logo"
        width={1339}
        height={1339}
        className="absolute max-md:object-cover max-md:h-screen top-[40vh]"
        unoptimized
      />
      <Image
        src="/fondo-traupan.png"
        alt="Fondo de Traupan con logo"
        width={1339}
        height={1339}
        className="absolute max-md:object-cover max-md:h-screen top-[160vh]"
        unoptimized
      />
      <WeAreProviders />
      <Brands />
      <Contact />
    </main>
  );
}
