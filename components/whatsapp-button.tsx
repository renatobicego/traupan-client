"use client";
import { FaWhatsapp } from "react-icons/fa6";
import Button from "./button";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";

const WhatsappButton = () => {
  return (
    <Button
      isIconOnly
      color="secondary"
      as={Link}
      href={`https://wa.me/${siteConfig.whatsapp.number}`}
      target="_blank"
      radius="full"
      className="fixed right-6 bottom-6 z-50 p-2 md:size-12 lg:right-8 lg:bottom-8 2xl:size-12 rounded-full"
    >
      <FaWhatsapp className="text-white size-6 md:size-8 2xl:size-10" />
    </Button>
  );
};

export default WhatsappButton;
