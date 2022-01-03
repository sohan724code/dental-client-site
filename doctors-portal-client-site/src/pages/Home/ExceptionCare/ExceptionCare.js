import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Treatment from "../../../images/treatment.png";

const ExceptionCare = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <img
            style={{ width: "500px", height: "550px" }}
            src={Treatment}
            alt=""
          />
        </Grid>
        <Grid item md={6}>
          <Box style={{ textAlign: "left" }}>
            <Typography variant={"h3"} sx={{ mt: 4 }}>
              Exceptional Dental <br /> care, on your terms
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 5, color: "gray", fontWeight: "400", lineHeight: 1.8 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              cupiditate porro sit soluta delectus dolore suscipit nisi libero
              odio perferendis, aliquam id magni amet repellat voluptates
              molestiae error velit nulla impedit dicta doloremque voluptatibus,
              cum enim deserunt! Doloribus porro iusto cumque rem nemo aliquam
              perferendis, cupiditate sunt. Optio, et excepturi?
            </Typography>
            <Button variant="contained" sx={{ mt: 7, bgcolor: "#3AD5CB" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExceptionCare;
