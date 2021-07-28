import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(7, 94, 84)",
    },
    secondary: {
      main: "rgb(18, 140, 126)",
    },
    background: {
      default: "rgb(236, 229, 221)",
      main: "rgb(220, 248, 198)",
      secondary:'rgb(54, 69, 79)',
    },
  },
  props: {
    MuiCard: {
      elevation: 0,
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        cursor: "pointer",
        fontSize: "1em",
        color: "white",
        backgroundColor: "rgb(18, 140, 126)",
        padding:"0.5rem"
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
