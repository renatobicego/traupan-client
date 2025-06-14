import React from "react";
import { ButtonProps, Button as HeroUIButton } from "@heroui/button";

const Button = ({
  children,
  ...props
}: { children: React.ReactNode } & ButtonProps) => {
  return (
    <HeroUIButton
      {...props}
      className={`rounded-xl py-3 h-auto px-6 md:text-base ${props.className}`}
      color={props.color || "primary"}
    >
      {children}
    </HeroUIButton>
  );
};

export default Button;
