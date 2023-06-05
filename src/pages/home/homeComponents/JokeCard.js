import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import ShareButton from "./ShareButton";

export default function JokeCard(props) {
  return (
    <Card sx={{ backgroundColor: "transparent" }}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} gutterBottom>
          {props.joke}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2}>
          {/* <Button variant="outlined" startIcon={<SaveIcon />}>
            Save
          </Button> */}
          <ShareButton joke={props.joke} />
        </Stack>
      </CardActions>
    </Card>
  );
}
