import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles"
import Router from "./routes"

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
        <h1>Banco Inter</h1>
    </ThemeProvider>
  );
}

export default App;
