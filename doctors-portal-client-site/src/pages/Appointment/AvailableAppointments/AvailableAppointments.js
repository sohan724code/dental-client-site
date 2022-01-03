import { Container, Grid, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 0,
    name: "Teeth Orthodontics",
    time: "8.00 AM - 9.00 AM",
    space: 10,
  },
  {
    id: 1,
    name: "Cosmetic Dentistry",
    time: "10.05 AM - 11.30 AM",
    space: 5,
  },
  {
    id: 2,
    name: "Teeth Cleaning",
    time: "5.00 PM - 6.30 PM",
    space: 5,
  },
  {
    id: 3,
    name: "Cavity Protection",
    time: "7.00 AM - 8.30 AM",
    space: 10,
  },
  {
    id: 4,
    name: "Teeth Orthodontics",
    time: "8.00 AM - 9.00 AM",
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "8.00 AM - 9.00 AM",
    space: 10,
  },
];
const AvailableAppointments = ({ date }) => {
  const [bookingSuccessful, setBookingSuccessful] = useState(false);
  return (
    <Container>
      <Typography sx={{ mb: 4, color: "info.main" }} variant={"h4"}>
        Available Appointments on {date.toDateString()}
      </Typography>
      {bookingSuccessful && (
        <Alert severity="success">Appointment Booked Successful</Alert>
      )}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccessful={setBookingSuccessful}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
