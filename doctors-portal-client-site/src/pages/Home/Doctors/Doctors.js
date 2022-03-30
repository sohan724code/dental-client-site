import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://frozen-mesa-36688.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div style={{ margin: "50px 0" }}>
      {doctors.length === 0 ? (
        <CircularProgress></CircularProgress>
      ) : (
        <Container>
          <Grid container spacing={2}>
            {doctors.map((doctor) => (
              <Doctor key={doctor._id} doctor={doctor}></Doctor>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Doctors;
