import {
  Typography,
  CardActions,
  Button,
  Grid,
  Paper,
  Box,
} from "@mui/material";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const SecPageCard = ({ title, info, bgColor }) => {
  return (
    <Grid item xs={4}>
      <Paper>
        <Box sx={{ bgcolor: `${bgColor}`, p: 3, border: "none" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#F2E5E5",
              textAlign: "left",
              mb: 4,
              fontFamily: "Comfortaa",
              fontSize: "3rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#F2E5E5",
              textAlign: "justify",
              mb: 4,
              fontFamily: "Comfortaa",
              fontSize: "1rem",
            }}
          >
            {info}
          </Typography>
          <CardActions>
            <Button sx={{ borderRadius: "30px" }}>
              <ArrowForwardIosRoundedIcon sx={{ color: "#F2E5E5" }} />
            </Button>
          </CardActions>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SecPageCard;
