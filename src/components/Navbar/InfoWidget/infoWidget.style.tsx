import { css, styled } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    height: 20px;
    position: relative;
    background-color: #ff6f9c;
    font-size: 15px;
    color:white;
    justify-content: center;
  `}
`;