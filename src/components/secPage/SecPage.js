import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SecPageCard from "./SecPageCard";

const cardInfo = [
  {
    title: "Research",
    info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    bgColor: "#CE7777",
  },
  {
    title: "Strategy",
    info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    bgColor: "#9F73AB",
  },
  {
    title: "Design",
    info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    bgColor: "#5A8F7B",
  },
];

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "1200px", margin: "0 auto" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cardInfo.map((item) => {
          return (
            <SecPageCard
              key="title"
              title={item.title}
              info={item.info}
              bgColor={item.bgColor}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
