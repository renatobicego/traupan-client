import Button from "@/components/button";
import { getCatalogById } from "@/utils/utils";
import { Link } from "@heroui/link";
import Image from "next/image";

export default function CatalogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const catalogItem = getCatalogById(id);
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
        className="absolute top-[60vh] md:top-[40vh]"
        unoptimized
      />
      <section className="flex flex-col items-start justify-center gap-8 ">
        <h1>
          {catalogItem.shortTitle
            ? ` ${catalogItem.shortTitle}`
            : "Detalle del Catálogo"}
        </h1>
        <menu className="flex flex-col items-start justify-start gap-2">
          {catalogItem.catalogUrls.map((url, index) => (
            <Button href={url.url} key={index} target="_blank" as={Link}>
              Ver Catálogo {url.title || `${index + 1}`}
            </Button>
          ))}
        </menu>
      </section>
    </main>
  );
}
