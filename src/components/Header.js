import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import { useState } from "react";

export default function Header(props) {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton color="inherit">
            <EmojiEmotionsIcon sx={{ display: { xs: "none", md: "flex" }, fontSize: 33, mr: 1 }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontSize: 33,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DadJokesDotCom
          </Typography>
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ display: { xs: "none", md: "flex" }, fontSize: 33, mr: 1 }} />
              </IconButton>
              <IconButton color="inherit">
                <LogoutIcon sx={{ display: { xs: "none", md: "flex" }, fontSize: 33, mr: 1 }} />
              </IconButton>
            </div>
          ) : (
            <IconButton color="inherit">
              <LoginIcon sx={{ display: { xs: "none", md: "flex" }, fontSize: 33, mr: 1 }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
