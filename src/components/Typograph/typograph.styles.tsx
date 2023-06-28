import { css, styled } from "styled-components";
import { globalTypographTypeStyles } from "../../styles/theme/functions";
import { TypographStyleProps } from "../../shared/interfaces/interfaces";

export const Container = styled.span<TypographStyleProps>`
  ${({ theme, variant }) => css`
    ${globalTypographTypeStyles[variant](theme)}
  `}
`;
