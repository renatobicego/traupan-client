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
      <CardBody className="overflow-visible p-0">
        <Image
          alt={item.title}
          className="w-full object-cover h-[30vh]"
          radius="lg"
          shadow="sm"
          src={item.imgCover}
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-secondary flex flex-col items-center justify-center gap-2 p-4">
        <Image alt={item.title} src={item.imgLogo} width={120} />
        <b className="whitespace-pre-line text-center">{item.title}</b>
        <Button as={Link} href={item.url} target="_blank">
          Ver Catálogo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CatalogCard;
