import React from "react";
import { Container } from "./socialWidget.styles";
import { ColoredPhone } from "../../Icon/ColoredPhone/ColoredPhone";

export const SocialWidget = () => {
  return (
    <Container>
        <div className="phone-info">
            <ColoredPhone /> 
            <span>Telefone:</span>
            <span>(51) 999402438</span>
        </div>
      
      <ul>
        <li>Facebook</li>
        <li>Whatsapp</li>
        <li>Instagran</li>
      </ul>
    </Container>
  );
};
