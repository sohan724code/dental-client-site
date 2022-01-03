import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";
import { Button, Typography } from "@mui/material";

const Banner = () => {
  const bannerBg = {
    background: `url(${bg})`,
  };

  const varticalCenter = {
    height: "500px",
    display: "flex",
    alignItems: "center",
  };
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ ...varticalCenter, textAlign: "left" }}
        >
          <Box>
            <Typography variant="h3" style={{ fontWeight: 600 }}>
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              style={{ color: "gray", fontWeight: 300, fontSize: 14 }}
              sx={{ my: 3 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              quam reiciendis dolor ad. Cupiditate est accusantium quisquam
              reprehenderit, eos distinctio!
            </Typography>
            <Button style={{ backgroundColor: "#39FDF2" }} variant="contained">
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={varticalCenter}>
          <img style={{ width: "500px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
