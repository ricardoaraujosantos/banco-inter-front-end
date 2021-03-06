import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";


const GlobalStyle = createGlobalStyle `
* {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 16px;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: ${theme.colors.background};
} 

input, button, textarea, select {
    font-family: 'Roboto', sans-serif;
  }

  input:focus, textarea:focus, select:focus{
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    &:hover {
      filter: opacity(0.8)
    } 
  }

  .primary-color{
    color: ${theme.colors.primary};
  }

  .font-bold{
    font-weight: 700;
  }

  .h2{
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 28px;
    color: #000000;
  }

  .wallet{
    font-weight: 500;
    color: ${theme.colors.primary};
    font-size: 2rem; //40px
    line-height: 47px;
  }
`
export default GlobalStyle;