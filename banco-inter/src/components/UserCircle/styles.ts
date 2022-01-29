import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CircleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin-right: 20px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    font-weight: 300;
    font-size: 1.5rem;
`