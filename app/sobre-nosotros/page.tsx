import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function AboutUs() {
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
      <section className="flex flex-col items-center justify-center gap-4 mt-8 mb-16 relative z-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-start justify-between gap-4">
            <h1>Sobre Nosotros</h1>
            <p>
              En Traupan, somos su aliado confiable en el suministro de
              herramientas y equipos industriales de alta calidad. Con más de 40
              años de experiencia en el sector, nos especializamos en ofrecer
              soluciones integrales para profesionales y empresas que buscan
              productos duraderos y eficientes.
            </p>
          </div>
          <Image
            src="/logo-fondo-blanco.png"
            alt="logo de Traupan con fondo blanco"
            width={325}
            height={247}
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-4">
          <h2 className="heading3">Nuestra Misión</h2>
          <p>
            Nuestra misión es proporcionar a nuestros clientes todo lo que
            necesitan para llevar a cabo sus proyectos con éxito. Nos
            comprometemos a ofrecer un servicio excepcional, asesoramiento
            personalizado y una amplia gama de productos que se adaptan a las
            necesidades específicas de su industria.
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 w-full">
          <h2 className="heading3">¿Qué Ofrecemos?</h2>
          <ul className="list-disc list-inside">
            <li>
              <b>Herramientas de mano eléctricas y a explosion:</b> Disponemos
              de una amplia selección de herramientas de alta calidad para
              facilitar su trabajo diario.
            </li>
            <li>
              <b>Materiales de construcción:</b>
              Ofrecemos una variedad de materiales que cumplen con los
              estándares más exigentes del mercado.
            </li>
            <li>
              <b>Equipos de seguridad:</b>
              La seguridad es nuestra prioridad. Encuentre aquí todo lo
              necesario para garantizar el bienestar de su equipo de trabajo.
            </li>
            <li>
              <b>Accesorios y consumibles:</b>
              Desde tornillos y tuercas hasta productos químicos y lubricantes,
              tenemos todo lo que usted necesita.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 w-full">
          <h3 className="heading3">¿Por Qué Elegirnos?</h3>
          <ul className="list-disc list-inside">
            <li>
              <b>Calidad garantizada: </b> Trabajamos solo con marcas
              reconocidas en la industria, asegurando que nuestros productos
              ofrezcan rendimiento y durabilidad
            </li>
            <li>
              <b>Asesoramiento experto:</b>
              Nuestro equipo está compuesto por profesionales capacitados que
              están listos para ayudarlo a encontrar las soluciones más
              adecuadas para su proyecto.
            </li>
            <li>
              <b>Precios competitivos:</b> Ofrecemos una excelente relación
              calidad-precio, con opciones que se ajustan a todos los
              presupuestos.
            </li>
            <li>
              <b>Entrega rápida y eficiente:</b> Sabemos que el tiempo es
              crucial, por lo que nos aseguramos de que su pedido llegue a
              tiempo y en perfectas condiciones.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 w-full">
          <h3 className="heading3">Contáctenos</h3>
          <p>
            Estamos aquí para ayudarle. Si tiene alguna pregunta, necesita
            asesoramiento o quiere conocer más sobre nuestros productos y
            servicios, no dude en ponerse en contacto con nosotros a través de
          </p>
          <address className="flex items-center gap-4 text-white justify-center flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
              <FaEnvelope className="size-4" />
              <Link
                target="_blank"
                className="text-white not-italic"
                href={`mailto:${siteConfig.email}`}
                aria-label="Email de Traupan"
              >
                {siteConfig.email}
              </Link>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
              <FaPhone className="size-4" />
              <Link
                href={`
             tel:${siteConfig.phone.number}
            `}
                target="_blank"
                aria-label="Teléfono de Traupan"
                className="text-white not-italic"
              >
                {siteConfig.phone.label}
              </Link>
              /
              <Link
                href={`
             https://wa.me/${siteConfig.whatsapp.number}
            `}
                target="_blank"
                aria-label="WhatsApp de Traupan"
                className="text-white not-italic  "
              >
                {siteConfig.whatsapp.label}
              </Link>
            </div>
          </address>
        </div>
      </section>
    </main>
  );
}
