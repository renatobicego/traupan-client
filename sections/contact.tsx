import ContactChips from "@/components/contact-chips";
import ContactForm from "@/components/form/contact-form";

const Contact = () => {
  return (
    <section
      id="contacto"
      className="flex flex-col items-center gap-4 w-full relative z-10 max-md:mb-16"
    >
      <h2>Contáctese con Nosotros</h2>
      <p className="md:w-2/3 xl:w-1/2 text-center">
        Estamos aquí para ayudarle. Si tiene alguna pregunta, necesita
        asesoramiento o quiere conocer más sobre nuestros productos y servicios,
        no dude en ponerse en contacto con nosotros
      </p>
      <ContactForm />

      <ContactChips />
    </section>
  );
};

export default Contact;
