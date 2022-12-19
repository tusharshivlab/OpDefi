import React from "react";
import Button, { ButtonProps } from "./Button";


export interface ButtonPrimaryProps extends ButtonProps {
  background?: string;
  hover?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className ="",
  background = "bg-primary-6000",
  hover = "hover:bg-primary-700",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 text-neutral-50 ${className} ${background} ${hover}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
