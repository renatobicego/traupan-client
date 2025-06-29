"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import { Drawer, DrawerContent, DrawerBody } from "@heroui/drawer";
import { useDisclosure } from "@heroui/modal";
import Link from "next/link";

const MobileMenu = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  // Function to close the drawer
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      <Button
        onPress={onOpen}
        isIconOnly
        variant="light"
        className="relative bg-transparent p-0 text-primary"
        aria-label="Menu"
      >
        <div className="mb-0.5 flex h-6 w-6 flex-col items-center justify-center">
          <span
            className={`block h-0.5 w-6 transform bg-current transition duration-300 ease-in-out ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`my-1 block h-0.5 w-6 transform bg-current transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 transform bg-current transition duration-300 ease-in-out ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </div>
      </Button>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "bg-secondary backdrop-blur-2xl ",
          closeButton: "text-white top-4 right-6 p-0 [&>svg]:size-5",
        }}
      >
        <DrawerContent>
          <DrawerBody>
            <ul className="flex flex-col gap-4 pt-12">
              {siteConfig.navMenuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
