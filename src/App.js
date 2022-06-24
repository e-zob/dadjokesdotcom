import "./App.css";

import * as React from "react";
import { useState } from "react";

import { getJoke } from "./Networking";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import JokeCard from "./components/JokeCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";

function App() {
  const [joke, setJoke] = useState("boa");

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
      typography: {
        body1: {
          fontFamily: "monospace",
        },
      },
    },
  });

  function showJokeCard() {
    if (joke) return <JokeCard theme={theme} joke={joke} />;
  }

  async function handleJokeButton() {
    const info = await getJoke();
    console.log(info);
    setJoke(info.joke);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", spacing: "3px", height: "100vh", width: "100vw" }}>
        <Box sx={{ width: "70vw", paddingBottom: 2 }}>{showJokeCard()}</Box>
        <Button onClick={handleJokeButton} variant="contained" startIcon={joke ? <AutorenewIcon /> : null}>
          Joke
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
