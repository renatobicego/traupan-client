import Button from "@/components/button";
import CatalogButtons from "@/components/catalogs-buttons";
import { getCatalogById } from "@/utils/utils";
import { Link } from "@heroui/link";
import Image from "next/image";

export default async function CatalogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = await params.then((p) => p.id);
  const catalogItem: {
    id: string;
    title: string;
    shortTitle: string;
    imgCover: string;
    imgLogo: string;
    url: string;
    catalogUrls?: {
      url: string;
      title: string;
      isImage?: boolean;
      sideText?: string;
    }[];
  } = getCatalogById(id);
  if (!catalogItem) {
    return <p>Catalog item not found</p>;
  }
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
      <section className="flex flex-col items-start justify-center gap-16 my-8">
        <h1>
          {catalogItem.shortTitle
            ? ` ${catalogItem.shortTitle}`
            : "Detalle del Catálogo"}
        </h1>
        <CatalogButtons catalogItem={catalogItem} />
      </section>
    </main>
  );
}
