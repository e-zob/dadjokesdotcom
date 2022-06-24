import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import JokeCard from "./homeComponents/JokeCard";
import Header from "../components/Header";
import { getJoke } from "./NetworkingHome";

export default function Home() {
  const [joke, setJoke] = useState("");

  function showJokeCard() {
    if (joke) return <JokeCard joke={joke} />;
  }

  async function handleJokeButton() {
    const info = await getJoke();
    console.log(info);
    setJoke(info.joke);
  }

  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", spacing: "3px", height: "100vh", width: "100vw" }}>
        <Box sx={{ width: "70vw", paddingBottom: 2 }}>{showJokeCard()}</Box>
        <Button onClick={handleJokeButton} variant="contained" startIcon={joke ? <AutorenewIcon /> : null}>
          Joke
        </Button>
      </Box>
    </Box>
  );
}
