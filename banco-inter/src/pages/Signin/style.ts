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
    background-size: 100% 100%;
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

    p {
        font-size: 0.75ren;
        font-weight: 400;
        color: ${theme.colors.secondary};

        a {
            font-size: 1ren;
            font-weight: 700;
        }
    }
`