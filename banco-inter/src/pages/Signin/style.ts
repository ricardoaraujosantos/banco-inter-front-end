import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.main `
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Background = styled.div<{image: any}> `
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 50vh;
    background-image: url(${props => props.image});
    background-size: contain;
    z-index: -1;
`
export const InputContainer = styled.div `
    width: 90%;
    margin-top: 67px;
    flex: 1;
`
export const ButtonContainer = styled.div `
    width: 90%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    p{
        font-family: Roboto, sans-serif
        font-size: 0.85rem;
        font-weight: 400;
       

        a {
            font-family: Roboto, sans-serif
            font-size: 0.95rem;
            font-weight: 700;
            color: ${theme.colors.primary};
            text-decoration: none;
        }
    }
`