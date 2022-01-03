import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Cupidatat occaecat ut consequat deserunt eiusmod Lorem exercitation sint ipsum irure Ipsum dolore sit quis est sint id nulla ut. Ea eu sunt exercitation nostrud enim dolore Lorem et proident qui voluptate. In incididunt do aliquip ut fugiat adipisicing non ex qui dolore ut consequat. Et incididunt minim nisi aliqua.",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Reprehenderit veniam deserunt veniam sint. Reprehenderit nostrud ullamco ex tempor aDo culpa veniam ad excepteur tempor id nostrud sit nostrud amet ad excepteur anim id. Ullamco occaecat cupidatat deserunt ullamco fugiat non in ullamco esse officia cillum incididunt excepteur duis. Veniam aliqua magna consequat officia.",
    img: cavity,
  },
  {
    name: "Teath Whitening",
    description:
      "Reprehenderit veniam deserunt veniam sint. Reprehenderit nostrud ullamco ex tempor aDo culpa veniam ad excepteur tempor id nostrud sit nostrud amet ad excepteur anim id. Ullamco occaecat cupidatat deserunt ullamco fugiat non in ullamco esse officia cillum incididunt excepteur duis. Veniam aliqua magna consequat officia.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            m: 2,
            color: "info.main",
          }}
          variant="h5"
          component="div"
        >
          Our Services
        </Typography>
        <Typography
          sx={{ display: "flex", justifyContent: "center", m: 2 }}
          variant="h3"
          component="div"
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
