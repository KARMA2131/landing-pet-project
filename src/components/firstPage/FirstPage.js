import * as React from "react";
import { Typography, Box, Container, CardActions, Button } from "@mui/material";
import "./first-page-styles.css";

const FirstPage = () => {
  return (
    <Container className="first-page-container">
      <Box className="first-page-box" sx={{}}>
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
          MUI Design
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#F2E5E5",
            textAlign: "left",
            mb: 4,
            fontFamily: "Comfortaa",
            fontSize: "2rem",
          }}
        >
          Quickly incentivize impactful action
          <br />
          items before tactical collaboration
          <br />
          and idea-sharing. Monotonically
          <br />
          engagemarket-driven intellectual capital.
        </Typography>
        <CardActions>
          <Button
            className="MuiButton-root"
            sx={{
              width: "10rem",
              backgroundColor: "#ECA869",
              color: "#F8F4EA",
              mb: 4,
              mt: 4,
              borderRadius: "1rem",
              fontFamily: "Comfortaa",
            }}
          >
            {" "}
            LEARN MORE
          </Button>
        </CardActions>
      </Box>
    </Container>
  );
};

export default FirstPage;
