import ContactForm from "@/components/form/contact-form";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="flex flex-col items-center gap-4 w-full relative z-10 max-md:mb-16">
      <h2>Contáctese con Nosotros</h2>
      <p className="md:w-2/3 xl:w-1/2 text-center">
        Estamos aquí para ayudarle. Si tiene alguna pregunta, necesita
        asesoramiento o quiere conocer más sobre nuestros productos y servicios,
        no dude en ponerse en contacto con nosotros
      </p>
      <ContactForm />

      <address className="lg:w-2/3 flex items-center gap-4 text-white justify-center flex-wrap">
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
        <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
          <FaLocationDot className="size-4" />
          <Link
            href={`${siteConfig.direction.url}`}
            target="_blank"
            aria-label="WhatsApp de Traupan"
            className="text-white not-italic  "
          >
            {siteConfig.direction.label}
          </Link>
        </div>
      </address>
    </section>
  );
};

export default Contact;
