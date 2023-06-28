import React from "react";
import { Container } from "./navbar.styles";
import { InfoWidget } from "./InfoWidget/infoWidget";
import { SocialWidget } from "./SocialWidget/socialWidget";
import { NavbarProps } from "../../shared/interfaces/interfaces";

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
