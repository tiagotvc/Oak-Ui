import styled, { css } from "styled-components";
import {
  animations,
  globalBackgroundTypeStyle,
} from "../../styles/theme/functions";
import { ButtonPropsStyle } from "../../shared/interfaces/interfaces";
import { AnimationsType } from "../../shared/types/types";


export const BtnComponent = styled.button<ButtonPropsStyle>`
  ${({ theme, type, component, animation }) => css`
    display: flex;
    width: 140px;
    height: 35px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    ${animation !== "none" ? animations[animation as AnimationsType] : "none"}
    ${globalBackgroundTypeStyle[type](theme, component)}
    &:hover {
      opacity: 85%;
      border: 1px solid lightgray;
    }
  `}
`;
