"use client";
import React, { useState } from "react";
import Button from "./button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

const CatalogButtons = ({
  catalogItem,
}: {
  catalogItem: {
    id: string;
    title: string;
    shortTitle: string;
    imgCover: string;
    imgLogo: string;
    url: string;
    catalogUrls?: {
      url: string;
      title: string;
      isImage?: boolean;
      sideText?: string;
    }[];
  };
}) => {
  const [showImage, setShowImage] = useState(false);
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between w-full">
      <menu className="flex flex-col items-start justify-start gap-4">
        {catalogItem.catalogUrls?.map((url, index) =>
          url.isImage ? (
            <Button key={index} onPress={() => setShowImage(!showImage)}>
              Ver Catálogo {url.title || `${index + 1}`}
            </Button>
          ) : (
            <Button href={url.url} key={index} target="_blank" as={Link}>
              Ver Catálogo {url.title || `${index + 1}`}
            </Button>
          )
        )}
      </menu>
      {showImage && catalogItem.catalogUrls?.find((u) => u.isImage) && (
        <figure className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-start relative z-10">
          <figcaption className="text-secondary font-semibold">
            {catalogItem.catalogUrls?.find((u) => u.isImage)?.sideText}
          </figcaption>
          <Image
            src={catalogItem.catalogUrls?.find((u) => u.isImage)?.url}
            alt={catalogItem.catalogUrls?.find((u) => u.isImage)?.sideText}
            className="w-full"
            removeWrapper
          />
        </figure>
      )}
    </div>
  );
};

export default CatalogButtons;
