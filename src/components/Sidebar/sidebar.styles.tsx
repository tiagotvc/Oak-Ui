import styled, { css, keyframes } from "styled-components";

const gradient = keyframes`
  0%  {  background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% { background-position: 0% 50%;}
`;

const typeStyles = {
  primary: () => css`
    background: #00bfff;
  `,
  secondary: () => css`
    background: #ff355e;
  `,
  dark: () => css`
    background: #4b4458;
  `,
  sucess: () => css`
    background: #32cd32;
  `,
  danger: () => css`
    background: #ff0000;
  `,
  gradient: () => css`
    color: rgba(255, 255, 255, 0.9);
    background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
    background-size: 600%;
    animation: ${gradient} 16s linear infinite;
  `,
};

export const Container = styled.div`
  ${() => css`
    display: flex;
    width: 180px;
    border-right: 1px solid lightgrey;
    height: 100vh;
    position: relative;
  `}
`;
