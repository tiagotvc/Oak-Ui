import { css, styled } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 45px;
    position: relative;
    background-color: white;

    .phone-info {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        > span:first-child {
            margin-left: 5px;
        }

        > span:last-child {
            color:blue;
        }
    }

    > ul {
        display: flex;
        
        > li {
            margin-right: 35px;
        }
    }
  `}
`;