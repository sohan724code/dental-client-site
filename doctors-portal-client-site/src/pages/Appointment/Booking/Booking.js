import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccessful }) => {
  const { name, time, space, price } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleModalOpen = () => setOpenBooking(true);
  const handleModalClose = () => setOpenBooking(false);
  return (
    <>
      <Grid xs={12} sm={6} md={4}>
        <Paper sx={{ py: 5, m: 2 }} elevation={3}>
          <Typography sx={{ color: "info.main" }} variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ fontWeight: 600 }} variant="h6" component="div">
            {time}
          </Typography>
          <Typography sx={{ mb: 2 }} variant="caption text" component="div">
            Price: ${price}
          </Typography>
          <Typography sx={{ mb: 2 }} variant="caption text" component="div">
            {space} SPACE AVAILABLE
          </Typography>
          <Button onClick={handleModalOpen} variant="contained">
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleModalClose={handleModalClose}
        setBookingSuccessful={setBookingSuccessful}
      ></BookingModal>
    </>
  );
};

export default Booking;
