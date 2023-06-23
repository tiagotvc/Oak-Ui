import React from "react";
import { Container } from "./sidebar.styles";
import { SidebarProps } from "./sidebar.utils";

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
