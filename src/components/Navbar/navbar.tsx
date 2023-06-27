import React from "react";
import { Container } from "./navbar.styles";
import { NavbarProps } from "./navbar.utils";
import { InfoWidget } from "./InfoWidget/infoWidget";
import { SocialWidget } from "./SocialWidget/socialWidget";

export const Navbar: React.FC<NavbarProps> = ({ infoWidget }) => {
  return (
    <>
    {infoWidget && <InfoWidget />}
    {infoWidget && <SocialWidget />}
    <Container>
        Teste
    </Container>
    </>
    
  );
};
