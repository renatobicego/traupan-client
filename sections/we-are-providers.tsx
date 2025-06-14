const WeAreProviders = () => {
  const items = [
    {
      src: "/icons/construccion.png",
      alt: "Construcción",
      width: 80,
      height: 80,
      label: "Construcción",
    },
    {
      src: "/icons/industria-general.png",
      alt: "Industria en General",
      width: 80,
      height: 80,
      label: "Industria en General",
    },
    {
      src: "/icons/industria.png",
      alt: "Amoblamiento Industrial",
      width: 80,
      height: 80,
      label: "Amoblamiento Industrial",
    },
    {
      src: "/icons/mineria.png",
      alt: "Minería",
      width: 80,
      height: 80,
      label: "Minería",
    },
    {
      src: "/icons/petroleo-gas.png",
      alt: "Petróleo y Gas",
      width: 80,
      height: 80,
      label: "Petróleo y Gas",
    },
    {
      src: "/icons/laboratorios.png",
      alt: "Laboratorios",
      width: 80,
      height: 80,
      label: "Laboratorios",
    },
    {
      src: "/icons/maquinas-electricas.png",
      alt: "Máquinas Eléctricas",
      width: 80,
      height: 80,
      label: "Máquinas Eléctricas",
    },
    {
      src: "/icons/maquinas-explosion.png",
      alt: "Máquinas a Explosión",
      width: 80,
      height: 80,
      label: "Máquinas a Explosión",
    },
    {
      src: "/icons/pistola-pintura.png",
      alt: "Herramientas Especiales",
      width: 80,
      height: 80,
      label: "Herramientas Especiales",
    },
  ];
  return (
    <section className="flex flex-col items-center gap-4 w-full relative z-10 max-md:mb-16">
      <h3 className="heading4">Somos proveedores de</h3>
      <div className="flex flex-wrap gap-4 w-full max-w-6xl justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex w-[45%] md:w-48 flex-col items-center justify-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="mb-2 max-md:size-16"
            />
            <h4 className="heading5 text-center">{item.label}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeAreProviders;
