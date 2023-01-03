import { Button, CardMedia, Grid, Paper, Typography } from "@mui/material";

const ServicesCard = ({ title, info, img }) => {
  return (
    <Grid item xs={4}>
      <Paper sx={{ p: 3 }}>
        <CardMedia component="img" image={img} alt="img1"></CardMedia>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Comfortaa", fontSize: "1.1rem" }}
        >
          {info}
        </Typography>

        <Button
          className="btn"
          sx={{
            width: "10rem",
            backgroundColor: "#2C74B3",
            color: "#F8F4EA",
            mb: 4,
            mt: 4,
            borderRadius: "1rem",
            fontFamily: "Comfortaa",
            fontSize: "1rem",
          }}
        >
          LEARN MORE
        </Button>
      </Paper>
    </Grid>
  );
};

export default ServicesCard;
