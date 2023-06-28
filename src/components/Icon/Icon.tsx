import React from "react";
import { Alert } from "./Alert/Alert";
import { Close } from "./Close/close";
import { Sucess } from "./Sucess/sucess";
import { IconProps } from "../../shared/interfaces/interfaces";

export const Icon: React.FC<IconProps> = ({ iconName }) => {
  let icon: React.ReactNode = <Alert />;

  switch (iconName) {
    case "Alert":
      icon = <Alert />;
      break;
    case "Close":
      icon = <Close />;
      break;
    case "Sucess":
      icon = <Sucess />;
      break;
    default:
      icon = <Alert />;
  }
  return icon;
};
