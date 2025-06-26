import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import React from "react";
import Button from "./button";
import { Link } from "@heroui/link";

interface CatalogCardProps {
  item: {
    id: string;
    title: string;
    imgCover: string;
    imgLogo: string;
    url: string;
  };
}

const CatalogCard = ({ item }: CatalogCardProps) => {
  return (
    <Card className="bg-white" shadow="sm">
      <CardBody className="overflow-visible p-0 flex-initial">
        <Image
          alt={item.title}
          className="w-full object-cover lg:h-[30vh]"
          radius="lg"
          shadow="sm"
          src={item.imgCover}
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-secondary flex flex-col items-center justify-start gap-2 p-4 flex-1">
        <Image alt={item.title} src={item.imgLogo} width={120} />
        <b
          className={`whitespace-pre-line text-center ${!item.title.includes("\n") ? "text-lg lg:text-xl" : ""}`}
        >
          {item.title}
        </b>
        <Button as={Link} href={item.url} target="_blank" className="mt-auto">
          Ver Catálogo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CatalogCard;
