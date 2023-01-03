import { Grid, Box, Container, Typography, Link } from "@mui/material";
import ContactCard from "./ContactCard";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TelegramIcon from "@mui/icons-material/Telegram";

const nameArr = [
  {
    name: "Bob Brown",
    attitude: "Partner, Strategy",

    linkedIn: "https://www.linkedin.com/",
    mail: "https://www.gmail.com/",
    telegram: "https://t.me/",
  },
  {
    name: "Mary Smith",
    attitude: "Chief Accountaint",

    linkedIn: "https://www.linkedin.com/",
    mail: "https://www.gmail.com/",
    telegram: "https://t.me/",
  },
  {
    name: "Nick Dark",
    attitude: "Sales Manager",

    linkedIn: "https://www.linkedin.com/",
    mail: "https://www.gmail.com/",
    telegram: "https://t.me/",
  },
  {
    name: "Mark Dowson",
    attitude: "Finance Director",

    linkedIn: `https://www.linkedin.com/`,
    mail: "https://www.gmail.com/",
    telegram: "https://t.me/",
  },
  {
    name: "Betty Nilson",
    attitude: "Designer",

    linkedIn: "https://www.linkedin.com/",
    mail: "https://www.gmail.com/",
    telegram: "https://t.me/",
  },
  {
    name: "Adrian Scold",
    attitude: "Developer",

    linkedIn: "https://www.linkedin.com/",
    mail: "https://www.gmail.com/",
    telegram: "https://t.me/",
  },
];

const Contact = () => {
  return (
    <Container>
      <Box>
        <Box x={{ display: "flex" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Comfortaa",
            }}
          >
            Contact us
          </Typography>
        </Box>

        <Grid container columns={12} sx={{ mb: "4rem" }}>
          <Grid xs={6} sx={{}}>
            {" "}
            <Box sx={{ flexGrow: 1, mt: "2rem" }}>
              <Grid container spacing={2} columns={6}>
                {nameArr.map((card) => {
                  return (
                    <ContactCard
                      key={card.title}
                      name={card.name}
                      attitude={card.attitude}
                      linkedIn={card.linkedIn}
                      mail={card.mail}
                      telegram={card.telegram}
                    />
                  );
                })}
              </Grid>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Comfortaa",
                display: "inline-block",
                mt: "20rem",
              }}
            >
              Follow us
            </Typography>
            <Box>
              <Box sx={{ mt: "2rem" }}>
                <Link href="https://www.facebook.com">
                  <FacebookIcon sx={{ fontSize: "4rem", color: "black" }} />
                </Link>
                <Link href="https://www.twitter.com">
                  <TwitterIcon sx={{ fontSize: "4rem", color: "black" }} />
                </Link>
                <Link href="https://www.instagram.com">
                  <InstagramIcon sx={{ fontSize: "4rem", color: "black" }} />
                </Link>
                <Link href="https://www.pinterest.com">
                  <PinterestIcon sx={{ fontSize: "4rem", color: "black" }} />
                </Link>
                <Link href="https://www.telegram.com">
                  <TelegramIcon sx={{ fontSize: "4rem", color: "black" }} />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
