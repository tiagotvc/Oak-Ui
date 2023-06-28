import styled, { css } from "styled-components";

export const Container = styled.ul`
  ${() => css`
    display: flex;
    flex-direction: column;
    text-align: left;
    list-style: none;
  `}
`;
