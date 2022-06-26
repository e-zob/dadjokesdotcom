import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShareIcon from "@mui/icons-material/Share";

import { useState } from "react";

import { EmailShareButton, FacebookShareButton, WhatsappShareButton } from "react-share";
import { WhatsappIcon, FacebookIcon, EmailIcon } from "react-share";

export default function ShareButton(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const url = "https://dadjokesdotcom.netlify.app/";

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
        startIcon={<ShareIcon />}
      >
        Share
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <WhatsappShareButton title={props.joke} url={url}>
          <WhatsappIcon round />
        </WhatsappShareButton>
        <FacebookShareButton quote={props.joke} hashtag="#dadjokesdotcom" url={url}>
          <FacebookIcon round />
        </FacebookShareButton>
        <EmailShareButton subject="DadJokesDotCom" body={props.joke} url={url}>
          <EmailIcon round />
        </EmailShareButton>
      </Menu>
    </div>
  );
}
