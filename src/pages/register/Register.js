import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

export default function Register() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", spacing: "3px", height: "100vh", width: "100vw" }}>
      <Typography
        variant="h6"
        noWrap
        sx={{
          pb: 2,
          fontSize: 33,
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "#5c9882",
        }}
      >
        Register
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
        label="Confirm Password"
        type="password"
        autoComplete="current-password"
      />
      <Stack>
        <Button href="/login" variant="contained">
          Register
        </Button>
        <Link href="/login">Have an account?</Link>
      </Stack>
    </Box>
  );
}
