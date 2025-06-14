import Button from "@/components/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const OurCatalog = () => {
  return (
    <section className="flex flex-col items-center gap-4 w-full relative z-10 max-md:mb-16">
      <h2>Nuestro Catálogo</h2>
      <p className="md:w-2/3 xl:w-1/2 text-center">
        Ofrecemos una amplia selección de productos para el hogar, uso
        profesional o proyectos empresariales. Con marcas líderes y
        asesoramiento técnico, te ayudamos a elegir lo que mejor se adapta a tu
        necesidad.
      </p>
      <Button as={Link} href={siteConfig.urls.catalog} color="primary">
        Explorar Catálogo
      </Button>
    </section>
  );
};

export default OurCatalog;
