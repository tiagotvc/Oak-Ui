import React from "react";
import { ButtonProps } from "./button.utils";
import { BtnComponent } from "./button.styles";

export const Button: React.FC<ButtonProps> = ({ children, type, onClick }, props) => {
  return (
    <BtnComponent type={type} {...props} onClick={onClick}>
      {children}
    </BtnComponent>
  );
};

export default Button;
