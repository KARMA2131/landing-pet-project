import { Container, Typography, Box, Grid } from "@mui/material";
import CheckCard from "./CheckCard";

const cardInfo = [
  { title: "Leading with Finance" },
  { title: "​Harvard Business School Collection" },
  { title: "Managing Your Career Development" },
  { title: "Managing Your Career Development " },
];

const CheckPage = () => {
  return (
    <>
      <Container sx={{ mt: "4rem", mb: "6rem" }}>
        <Box sx={{ flexGrow: 1 }}>
          {" "}
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              width: "50rem",
              left: "20rem",
              mt: "4rem",
              fontFamily: "Comfortaa",
            }}
          >
            ​Small or big, your business will love our financial help and
            business consultations! We are happy when our clients are too…
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              display: "inline-block",
              fontSize: "1.1rem",
              width: "40rem",
              left: "25rem",
              mt: "2rem",
              mb: "4rem",
              fontFamily: "Comfortaa",
            }}
          >
            ​Actually, this is quite simple to achieve – because each time we
            help them in sorting out different accounting intricacies or save
            the day before filing the taxes, they are happy indeed.
          </Typography>
        </Box>

        <Grid
          container
          rowSpacing={2}
          // columnSpacing={{ xs: 1, sm: 2, md: 3 }}

          direction="row"
          justifyContent="center"
          alignItems="stretch"

          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ pl: "1.5rem" }}
        >
          {cardInfo.map((item) => {
            return <CheckCard key={item.title} title={item.title} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default CheckPage;
