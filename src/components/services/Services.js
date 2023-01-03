import { Container, Link, Typography, Grid, Box } from "@mui/material";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";

import "./style.css";
import ServicesCard from "./ServicesCard";

const servicesInfo = [
  {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptates nemo, officiis.",
    img: `${img1}`,
  },
  {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptates nemo, officiis.",

    img: `${img2}`,
  },
  {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptates nemo, officiis.",
    img: `${img3}`,
  },
];

const Services = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: "#2C74B3",
            letterSpacing: "0.5rem",
            mt: "4rem",
            fontFamily: "Comfortaa",
            fontSize: "1rem",
          }}
        >
          FEATURES
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "#2C74B3",
            mt: "2rem",
            fontFamily: "Comfortaa",
            fontSize: "4rem",
          }}
        >
          Quality Services
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, maxWidth: "1200px", margin: "0 auto" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ mt: "4rem", fontFamily: "Comfortaa" }}
        >
          {servicesInfo.map((item) => {
            return <ServicesCard key="title" info={item.info} img={item.img} />;
          })}
        </Grid>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{
            color: "#2C74B3",
            mt: "2rem",
            mb: "2rem",
            fontFamily: "Comfortaa",
          }}
        >
          Image From <Link sx={{ cursor: "pointer" }}>Freepik</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Services;
