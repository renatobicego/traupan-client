import React from "react";

const Brands = () => {
  const images = [
    { src: "/brands/allen.png", alt: "Logo de la marca Allen" },
    { src: "/brands/amstrong.png", alt: "Logo de la marca Amstrong" },
    { src: "/brands/dinox.png", alt: "Logo de la marca Dinox" },
    {
      src: "/brands/escaleras-ferpak.png",
      alt: "Logo de la marca Escaleras Ferpak",
    },
    { src: "/brands/fpl.png", alt: "Logo de la marca FPL" },
    { src: "/brands/fravida.png", alt: "Logo de la marca Fravida" },
    { src: "/brands/guardalock.png", alt: "Logo de la marca Guardalock" },
    { src: "/brands/herle.png", alt: "Logo de la marca Herle" },
    { src: "/brands/impactools.png", alt: "Logo de la marca Impactools" },
    { src: "/brands/liga.png", alt: "Logo de la marca Liga" },
    { src: "/brands/parct.png", alt: "Logo de la marca Parct" },
    { src: "/brands/portaflex.png", alt: "Logo de la marca Portaflex" },
    { src: "/brands/sata.png", alt: "Logo de la marca Sata" },
    { src: "/brands/shinano.png", alt: "Logo de la marca Shinano" },
    { src: "/brands/stihl.png", alt: "Logo de la marca Stihl" },
    { src: "/brands/urban.png", alt: "Logo de la marca Urban" },
  ];

  return (
    <section className="flex flex-col items-center gap-4 w-full relative z-10 max-md:mb-16">
      <h4 className="heading4">Trabajamos con las mejores marcas</h4>
      <div className="flex flex-wrap w-full justify-center gap-4">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="object-contain max-md:max-w-24 max-md:max-h-16 md:max-lg:max-w-32 md:max-lg:max-h-24"
          />
        ))}
      </div>
    </section>
  );
};

export default Brands;
