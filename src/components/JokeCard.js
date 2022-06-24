import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import Stack from "@mui/material/Stack";

export default function JokeCard(props) {
  return (
    <Card sx={{ backgroundColor: "transparent" }}>
      <CardContent>
        <Typography variant="body1" component="body1" sx={{ fontSize: 25 }} gutterBottom>
          {props.joke}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<SaveIcon />}>
            Save
          </Button>
          <Button variant="outlined" startIcon={<ShareIcon />}>
            Share
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
