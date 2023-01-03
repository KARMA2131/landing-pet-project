import { Box, Container, Avatar, Grid, Typography } from "@mui/material";
import martaImg from "./marta.png";

const Marta = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", mb: "3rem" }}>
        <Box sx={{ m: "auto 0" }}>
          <Avatar
            alt="Mark"
            src={martaImg}
            sx={{ minWidth: "25rem", minHeight: "25rem", ml: "2rem" }}
          />
        </Box>

        <Grid container spacing={2} sx={{ mb: "4rem" }}>
          <Grid xs={10} sx={{ fontFamily: "Comfortaa", m: "0 0 0 4rem" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "left",
                fontFamily: "Comfortaa",
                ml: "2rem",
                mt: "2rem",
              }}
            >
              Growth, Marketing <br /> & Sales Insights
            </Typography>

            <Typography
              variant="h5"
              sx={{
                textAlign: "left",
                fontFamily: "Comfortaa",
                ml: "2rem",
                mt: "2rem",
                lineHeight: "2rem",
              }}
            >
              Sales Insights
            </Typography>

            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "Comfortaa",
                ml: "2rem",
                mt: "1rem",
                lineHeight: "2rem",
              }}
            >
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Sample text. Click to select the
              text box. Click again or double click to start editing the text.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                textAlign: "left",
                fontFamily: "Comfortaa",
                ml: "2rem",
                mt: "2rem",
                lineHeight: "2rem",
              }}
            >
              Management
            </Typography>

            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "Comfortaa",
                ml: "2rem",
                mt: "1rem",
                lineHeight: "2rem",
              }}
            >
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Sample text. Click to select the
              text box. Click again or double click to start editing the text.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                textAlign: "left",
                fontFamily: "Comfortaa",
                ml: "2rem",
                mt: "2rem",
                lineHeight: "2rem",
              }}
            >
              Marketing
            </Typography>

            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "Comfortaa",
                ml: "2rem",
                mt: "1rem",
                lineHeight: "2rem",
              }}
            >
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Sample text. Click to select the
              text box. Click again or double click to start editing the text.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Marta;
