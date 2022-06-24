import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

import { useState } from "react";

export default function LogIn() {
  const [error, setError] = useState(false);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", spacing: "3px", height: "100vh", width: "100vw" }}>
      <Typography
        variant="h6"
        noWrap
        sx={{
          pb: 2,
          fontSize: 33,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "#5c9882",
        }}
      >
        Log In
      </Typography>
      <TextField
        sx={{
          pb: 2,
          "& .MuiInputLabel-root": { color: "white" }, //styles the label
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
          },
        }}
        required
        id="filled-required"
        label="Username"
      />
      <TextField
        sx={{
          pb: 2,
          "& .MuiInputLabel-root": { color: "white" }, //styles the label
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
          },
        }}
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Stack>
        <Button variant="contained">Login</Button>
        <Link href="/register">Don't have an account?</Link>
      </Stack>
    </Box>
  );
}
