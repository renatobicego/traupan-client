import HeroSection from "@/sections/hero-section";
import OurCatalog from "@/sections/our-catalog";
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
        className="absolute top-[50vh]"
        unoptimized
      />
    </main>
  );
}
