import { css, styled } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    height: 100px;
    position: relative;
    background-color: white;
  `}
`;