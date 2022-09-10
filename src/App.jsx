import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/switch/Switch";

const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
  icon: "#b6b6b6",
};

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333",
  icon: "#333",
};

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MoonIcon />
        <Name>Edmundo Domínguez</Name>
        <Info>Username: edagurcia</Info>
        <Info>Email: edagurcia@gmail.com</Info>
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
`;

const Name = styled.h1`
  margin: 1rem;
  color: ${(props) => props.theme.title};
`;

const Info = styled.p`
  margin: 1rem;
  color: ${(props) => props.theme.subtitle};
`;

export default App;
