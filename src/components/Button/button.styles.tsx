import styled, { css } from "styled-components";
import { ButtonProps } from "./button.utils";

export const BtnComponent = styled.h1<ButtonProps>`
  ${() => css`
    width: auto;
  `}
`;