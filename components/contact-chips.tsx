import { siteConfig } from "@/config/site";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLocationDot,
} from "react-icons/fa6";

interface ContactChipsProps {
  customClassName?: HTMLAttributes<HTMLElement>["className"];
}

const ContactChips: React.FC<ContactChipsProps> = ({ customClassName }) => {
  return (
    <address
      className={`lg:w-2/3 flex items-center gap-4 text-white justify-center flex-wrap ${customClassName}`}
    >
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
        <FaWhatsapp className="size-5" />
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
  );
};

export default ContactChips;
