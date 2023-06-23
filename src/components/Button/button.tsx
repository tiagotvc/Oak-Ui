import React from "react";
import { ButtonProps } from "./button.utils";
import { BtnComponent } from "./button.styles";

export const Button: React.FC<ButtonProps> = ({ children, type }, props) => {
  return (
    <BtnComponent type={type} {...props}>
      {children}
    </BtnComponent>
  );
};

export default Button;
