import Image from "next/image";

export const Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (
  props
) => (
  <Image
    src="/logo-traupan.png"
    alt="logo traupan"
    {...props}
    width={141}
    height={102}
    className="max-md:w-20 md:w-28 xl:w-32"
  />
);
