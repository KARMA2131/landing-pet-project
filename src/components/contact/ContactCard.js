import { Typography, Grid, Box, Link } from "@mui/material";

import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const ContactCard = ({ name, attitude, linkedIn, mail, telegram }) => {
  return (
    <Grid
      xs={3}
      sx={{
        display: "flex",
        mt: "3rem",
        p: "0.5rem",
      }}
    >
      <Box sx={{ borderLeft: "1rem solid gray" }}>
        <Typography variant="h5" sx={{ fontFamily: "Comfortaa", m: "1rem" }}>
          {name}
        </Typography>
        <Typography variant="h7" sx={{ fontFamily: "Comfortaa", m: "1rem" }}>
          {attitude}
        </Typography>

        <Box sx={{ m: "1rem" }}>
          <Link href={linkedIn}>
            <LinkedInIcon sx={{ fontSize: "2rem", color: "black" }} />
          </Link>
          <Link href={mail}>
            <EmailRoundedIcon sx={{ fontSize: "2rem", color: "black" }} />
          </Link>
          <Link href={telegram}>
            <TelegramIcon sx={{ fontSize: "2rem", color: "black" }} />
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default ContactCard;
