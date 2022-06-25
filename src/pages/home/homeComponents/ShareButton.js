import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShareIcon from "@mui/icons-material/Share";

import { useState } from "react";

import { EmailShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";
import { EmailIcon, WhatsappIcon } from "react-share";

export default function ShareButton(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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
      >
        <WhatsappShareButton title={props.joke}>
          <WhatsappIcon />
        </WhatsappShareButton>
        <EmailShareButton subject="DadJokesDotCom" body={props.joke}>
          <EmailIcon />
        </EmailShareButton>
      </Menu>
    </div>
  );
}
