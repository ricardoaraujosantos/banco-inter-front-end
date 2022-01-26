import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";


const GlobalStyle = createGlobalStyle `
* {
    padding: 0;
    margin: 0;
}

body {
    background-color: ${theme.colors.background};
} `

export default GlobalStyle;