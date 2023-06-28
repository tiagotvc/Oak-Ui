import React from "react";
import { Container } from "./infoWidget.style";
import { Typograph } from "../../Typograph/typograph";

export const InfoWidget = () => {
  const information =
    "Primeira vez aqui ? Conheça tudo sobre nós clicando aqui!";
  return (
    <Container>
      <Typograph variant="body3">{information}</Typograph>
    </Container>
  );
};
