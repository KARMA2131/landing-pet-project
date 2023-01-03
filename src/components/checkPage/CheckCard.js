import { Typography, Box, Grid } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const CheckCard = ({ title }) => {
  return (
    <Grid xs={6} sx={{}}>
      <Box
        sx={{
          height: "8rem",
          display: "flex",
          p: "3rem",
          m: "0.5rem",
          boxShadow: "1px 5px 5px 1px gray",
        }}
      >
        <CheckCircleRoundedIcon sx={{ mt: "-0.5rem", fontSize: "3rem" }} />
        <Typography
          variant="h6"
          sx={{
            mt: "0.2rem",
            ml: "1rem",
            fontFamily: "Comfortaa",
            fontWeight: 700,
            fontSize:'1rem'
          }}
        >
          {title}
        </Typography>
      </Box>
    </Grid>
  );
};

export default CheckCard;
