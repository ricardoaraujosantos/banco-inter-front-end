import styled from "styled-components"
import { theme } from "../../styles/theme"

export const HeaderContainer = styled.head `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90px;
    background-color: ${theme.colors.background};
`
export const HeaderWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height:90px;
`
export const UserInfo = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`