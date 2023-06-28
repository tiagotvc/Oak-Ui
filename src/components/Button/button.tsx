import React from "react";
import { BtnComponent } from "./button.styles";
import { ButtonProps } from "../../shared/interfaces/interfaces";

export const Button: React.FC<ButtonProps> = (
  { children, type, onClick,  animation = "none", rp },
  props
) => {

  return (
    <BtnComponent
      type={type}
      {...props}
      onClick={onClick}
      component="btn"
      animation={animation}
      style={rp ? {...rp} : ''}
    >
      {children}
    </BtnComponent>
  );
};

export default Button;
