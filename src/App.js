import "./App.css";

import * as React from "react";
import { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import LogIn from "./pages/login/LogIn";
import NotFound from "./pages/notfound/NotFound";

function App() {
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#5c9882",
      },
      secondary: {
        main: "#fccfd7",
      },
      background: {
        default: "#212121",
      },
      text: {
        primary: "#ffffff",
      },
    },
    typography: {
      fontFamily: "monospace",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
