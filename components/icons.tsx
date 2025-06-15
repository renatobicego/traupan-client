import Image from "next/image";

export const Logo: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement> & { footerlogo?: string }
> = (props) =>
  props.footerlogo ? (
    <Image
      src="/logo-traupan-footer.png"
      alt="logo traupan"
      {...props}
      width={300}
      height={228}
      className="max-md:w-20 md:w-48 xl:w-64"
    />
  ) : (
    <Image
      src="/logo-traupan.png"
      alt="logo traupan"
      {...props}
      width={141}
      height={102}
      className="max-md:w-20 md:w-28 xl:w-32"
    />
  );
