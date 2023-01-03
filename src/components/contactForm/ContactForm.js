import { Container, Box, Typography, Link, Button } from "@mui/material";
import UnstyledInputBasic from "./Input";

import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ContactForm = () => {
  return (
    <Container>
      <Box sx={{ width: "35rem", m: "auto" }}>
        <Typography variant="h3" sx={{ fontFamily: "Comfortaa" }}>
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Comfortaa", mt: "2rem", mb: "2rem" }}
        >
          ​​Send us a message and we’ll get back to you as soon as possible. You
          can also reach us by phone at (123) 456-7893.
        </Typography>
        <Typography sx={{ fontFamily: "Comfortaa", mb: "2rem" }}>
          ​​ Looking forward to hearing from you.
        </Typography>

        <Box sx={{ left: 0 }}>
          <Typography
            sx={{
              fontFamily: "Comfortaa",
              textAlign: "left",
              ml: "1rem",
              mb: "1rem",
            }}
          >
            Name
          </Typography>
          <UnstyledInputBasic
            placeHolder={"Enter your name"}
          ></UnstyledInputBasic>
          <Typography
            sx={{
              fontFamily: "Comfortaa",
              textAlign: "left",
              ml: "1rem",
              mb: "1rem",
              mt: "2rem",
            }}
          >
            Email
          </Typography>
          <UnstyledInputBasic
            placeHolder={"Enter a walid email address"}
          ></UnstyledInputBasic>
          <Typography
            sx={{
              fontFamily: "Comfortaa",
              textAlign: "left",
              ml: "1rem",
              mb: "1rem",
              mt: "2rem",
            }}
          >
            Massage
          </Typography>
          <UnstyledInputBasic
            placeHolder={"Enter your massage"}
          ></UnstyledInputBasic>
          <Typography sx={{ mb: "1rem", mt: "3rem" }}></Typography>
          <UnstyledInputBasic placeHolder={""}></UnstyledInputBasic>
        </Box>

        <Box sx={{ display: "flex", mt: "1rem" }}>
          <Checkbox {...label} />
          <Typography sx={{ mt: "0.7rem", fontFamily: "Comfortaa" }}>
            I accept the{" "}
            <Link href="#" sx={{ textDecoration: "none" }}>
              Terms of Service
            </Link>
          </Typography>
        </Box>
        <Button
          className="btn"
          sx={{
            fontFamily: "Comfortaa",
            bgcolor: "black",
            borderRadius: "2rem",
            width: "34rem",
            height: "3rem",
            color: "white",
            mt: "1rem",
            mb: "4rem",
          }}
        >
          Submit your request
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
