import React from "react";
import { Logo } from "./icons";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary z-10 relative padding-space text-white">
      <section className="flex flex-col items-center max-w-screen-xl text-secondary overflow-hidden mx-auto gap-8">
        <div className="flex items-start w-full gap-12">
          <Logo footerlogo="true" />
          <nav>
            <ul className="flex flex-col gap-2">
              <h5 className="heading5 text-white">Navegación</h5>
              {siteConfig.navMenuItems.map((item, index) => (
                <li key={`${item}-${index}`} className="mb-2">
                  <Link
                    href={item.href}
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <hr className="border-white text-white w-full" />
        <div className="w-full flex items-center justify-between max-md:flex-col max-md:items-start gap-4">
          <p className="self-start text-white">Traupan SA @ 2025</p>
          <Link href="https://dutsiland.com" target="_blank">
            <Image
              width={170}
              height={30}
              className="max-md:w-1/2"
              src="/dutsiland.png"
              alt="logo dutsiland"
              unoptimized
            />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
