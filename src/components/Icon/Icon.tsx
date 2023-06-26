import React from "react";
import { Alert } from "./Alert/Alert";
import { IconProps } from "./icons.utils";
import { Close } from "./Close/close";
import { Sucess } from "./Sucess/sucess";

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
