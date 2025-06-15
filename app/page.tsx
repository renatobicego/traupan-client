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
        className="absolute top-[80vh] md:top-[50vh]"
        unoptimized
      />
      <Image
        src="/fondo-traupan.png"
        alt="Fondo de Traupan con logo"
        width={1339}
        height={1339}
        className="absolute top-[140vh]  lg:top-[200vh] "
        unoptimized
      />
      <Image
        src="/fondo-traupan.png"
        alt="Fondo de Traupan con logo"
        width={1339}
        height={1339}
        className="absolute top-[200vh] md:hidden"
        unoptimized
      />
      <WeAreProviders />
      <Brands />
      <Contact />
    </main>
  );
}
