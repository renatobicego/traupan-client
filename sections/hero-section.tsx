import Button from "@/components/button";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex items-start w-full justify-between max-md:mb-16 lg:min-h-[81vh] relative z-10 max-md:flex-col">
      <div className="flex flex-col items-start justify-center gap-4 text-secondary md:w-1/2  lg:my-16">
        <h1>Herramientas y máquinas para industrias</h1>
        <p>
          Empresa orientada a la industria del petróleo, gas y minería,
          especializada en herramientas especiales y fabricadas bajo plano.
          Atendida por sus propios dueños.
        </p>
        <menu className="flex items-center gap-2 md:gap-4">
          <Button as={Link} href={siteConfig.urls.catalog}>
            Explorar Catálogo
          </Button>
          <Button as={Link} href={siteConfig.urls.contact} color="secondary">
            Hace tu Consulta
          </Button>
        </menu>
      </div>
      <Image
        unoptimized
        src="/maquina-petroleo-herramientas.png"
        alt="Máquina extractora de petróleo y herramientas"
        width={447}
        height={445}
        className="flex-1 min-w-0 max-md:-order-1"
      />
    </section>
  );
};

export default HeroSection;
