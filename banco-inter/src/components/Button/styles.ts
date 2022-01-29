import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonContainer = styled.button`
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 5000;
    width: 100%;
    height: 46px;
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
    border: 1px solid ${theme.colors.primary};
    border-radius: 10px;
    margin-bottom: 20px;

    &:hover {
        filter: opacity(0.8)
    }

    &:disabled {
        filter: opacity(0.4)
    }
    
`