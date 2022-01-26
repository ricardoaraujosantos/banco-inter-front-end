import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles"
import Router from "./routes"
import SignIn from "./pages/Signin";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
    </ThemeProvider>
  );
}

export default App;
