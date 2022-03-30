import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const AppoinmentBanner = () => {
  const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 150,
    backgroundColor: "rgba(79, 95, 94, .8)",
    backgroundBlendMode: "darken, luminosity",
  };
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 500, marginTop: "-130px", marginBottom: "-4px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
          }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography
              sx={{ my: 5 }}
              style={{ color: "#5EC5BF" }}
              variant="h5"
            >
              Appointment
            </Typography>
            <Typography sx={{ mb: 5 }} variant="h3" style={{ color: "white" }}>
              Make An Appointment Today
            </Typography>
            <Typography sx={{ mb: 5 }} style={{ color: "white" }} variant="h6">
              Do ipsum minim eu deserunt cillum magna amet sunt sunt officia
              eiusmod non quis.
            </Typography>
            <Button style={{ backgroundColor: "#39FDF2" }} variant="contained">
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;
