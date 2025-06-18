import CatalogCard from "@/components/catalog-card";
import catalogItems from "../../data/catalog.json";
import Image from "next/image";

export default function CatalogoPage() {
  return (
    <main className="relative">
      <Image
        src="/fondo-traupan.png"
        alt="Fondo de Traupan con logo"
        width={1339}
        height={1339}
        className="absolute top-[60vh] md:top-[40vh]"
        unoptimized
      />
      <section className="flex flex-col items-center justify-center gap-4 ">
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
