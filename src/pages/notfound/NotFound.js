import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function NotFound() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ backgroundColor: "transparent" }}>
        <CardContent>
          <Typography sx={{ fontSize: 40 }} gutterBottom>
            Oh no... Looks like this page doesn't exist :{"("}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
