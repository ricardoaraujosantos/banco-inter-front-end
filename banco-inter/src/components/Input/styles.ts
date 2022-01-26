import styled from "styled-components";
import { theme } from "../../styles/theme";

export const InputContainer = styled.div `
    display:flex;
    justfy-content: center;
    z-index: 5000;
    width: 100%;
    height: 46px;
    background: ${theme.colors.background};
    border: 1px solid ${theme.colors.primary};
    border-radius: 10px;
    margin-bottom: 20px;

    input {
        background: transparent;
        width: 100%;
        margin: 0 20px;
        font-weight: 400;
        font-size: 0.85rem;
        border: none;
        
        &:focus {
            outline: 0;
        }
    }
`