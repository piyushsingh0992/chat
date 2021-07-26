import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    primary:{
      main:"rgb(255,255,0)"
    },
    background: {
      main: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
