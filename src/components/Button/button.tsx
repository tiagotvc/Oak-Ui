import React from "react";
import { ButtonProps } from "./button.utils";

export const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return <button disabled={disabled}>{children}</button>;
};
