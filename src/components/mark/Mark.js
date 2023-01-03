import {
  Link,
  Container,
  Grid,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

import markImg from "./mark.png";

const Mark = () => {
  return (
    <Container sx={{ mt: "2rem" }}>
      <Box sx={{ display: "flex", mb: "3rem" }}>
        <Box>
          <Avatar
            alt="Mark"
            src={markImg}
            sx={{ minWidth: "25rem", minHeight: "25rem", ml: "2rem" }}
          />
        </Box>

        <Box sx={{ textAlign: "left", ml: "3rem", mt: "3rem" }}>
          <Typography variant="h2" sx={{ fontFamily: "Comfortaa" }}>
            Hello!
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Comfortaa", mt: "2rem", mb: "2rem" }}
          >
            Hi, I am Mark, focusing on creating emotional experiances.
          </Typography>
          <Button
            className="btn"
            sx={{
              fontFamily: "Comfortaa",
              bgcolor: "black",
              borderRadius: "2rem",
              width: "15rem",
              height: "3rem",
              color: "white",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mb: "4rem" }}>
        <Grid xs={4} sx={{ fontFamily: "Comfortaa", mb: "4rem" }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
              fontFamily: "Comfortaa",
              ml: "2rem",
              mt: "2rem",
            }}
          >
            Strategy
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontFamily: "Comfortaa",
              ml: "2rem",
              mt: "2rem",
              lineHeight: "2rem",
            }}
          >
            Analytics and Research
            <br />
            Interactive Workshops
            <br />
            Brand Strategy
            <br />
            Content Strategy
            <br />
            Digital Strategy
            <br />
            <Link href="#" sx={{ color: "black" }}>
              Conversion Rate Optimization
            </Link>
          </Typography>
        </Grid>

        <Grid xs={4} sx={{ fontFamily: "Comfortaa", mb: "4rem" }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
              fontFamily: "Comfortaa",
              ml: "2rem",
              mt: "2rem",
            }}
          >
            Design
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontFamily: "Comfortaa",
              ml: "2rem",
              mt: "2rem",
              lineHeight: "2rem",
            }}
          >
            ​Creative Direction
            <br />
            Brand Guides
            <br />
            Prototypes
            <br />
            <Link href="#" sx={{ color: "black" }}>
              UI/UX & Web Design
            </Link>
            <br />
            Visual Asset Creation
            <br />
            Motion Design
          </Typography>
        </Grid>

        <Grid xs={4} sx={{ fontFamily: "Comfortaa", mb: "4rem" }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
              fontFamily: "Comfortaa",
              ml: "2rem",
              mt: "2rem",
            }}
          >
            Development
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontFamily: "Comfortaa",
              ml: "2rem",
              mt: "2rem",
              lineHeight: "2rem",
            }}
          >
            ​System Architecture Design
            <br />
            Full-Stack Development
            <br />
            <Link href="#" sx={{ color: "black" }}>
              3rd Party Integrations{" "}
            </Link>
            <br />
            Performance Optimization
            <br />
            WordPress Development
            <br />
            Shopify Development
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mark;

// Sample text. Click to select the text box. Click again or double click to start editing the text.
