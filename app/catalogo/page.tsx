import CatalogCard from "@/components/catalog-card";
import catalogItems from "../../data/catalog.json";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Descubre nuestro catálogo de herramientas y maquinaria industrial. Ofrecemos una amplia gama de productos de alta calidad para satisfacer todas tus necesidades industriales.",
};

export default function CatalogoPage() {
  return (
    <main className="relative">
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
        className="absolute object-cover h-screen top-[150vh] md:hidden"
        unoptimized
      />
      <section className="flex flex-col items-center justify-center gap-4 mt-8 mb-16">
        <h1 className="self-start">Nuestro Catálogo</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {catalogItems.catalog.map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
