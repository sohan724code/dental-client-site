import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { Box } from "@mui/system";

const Features = () => {
  return (
    <Container sx={{ mt: "-100px" }}>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#3AD5CB",
              px: 5,
              py: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AccessTimeIcon sx={{ fontSize: 70, color: "white", mr: 2 }} />

            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ color: "white", fontSize: 16 }} variant="h6">
                Opening Hours
              </Typography>
              <Typography
                sx={{ fontWeight: 200, color: "white" }}
                variant="caption text"
              >
                Lorem ipsum dolor sit amet
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#3F4646",
              px: 5,
              py: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocationOnIcon sx={{ fontSize: 70, color: "white", mr: 2 }} />

            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ color: "white", fontSize: 16 }} variant="h6">
                Visit Our Location
              </Typography>
              <Typography
                sx={{ fontWeight: 200, color: "white" }}
                variant="caption text"
              >
                Derma,Dhaka, Dhaka-1361
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#3AD5CB",
              px: 5,
              py: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PhoneInTalkOutlinedIcon
              sx={{ fontSize: 70, color: "white", mr: 2 }}
            />

            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ color: "white", fontSize: 16 }} variant="h6">
                Contact Us Now
              </Typography>
              <Typography
                sx={{ fontWeight: 200, color: "white" }}
                variant="caption text"
              >
                +000 174 4988083
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
