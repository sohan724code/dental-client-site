import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleModalClose,
  booking,
  date,
  setBookingSuccessful,
}) => {
  const { name, time, price } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };
  const handleSubmit = (e) => {
    // console.log(bookingInfo);
    //collect the data
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    fetch("https://frozen-mesa-36688.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccessful(true);
          handleModalClose();
        }
      });

    e.preventDefault();
  };
  return (
    <Modal
      open={openBooking}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{ color: "info.main", textAlign: "center", mb: 2 }}
          id="modal-modal-title"
          variant="h5"
          component="h2"
        >
          {name}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            disabled
            sx={{ width: "95%", m: 1 }}
            id="filled-hidden-label-small"
            defaultValue={time}
            size="small"
          />
          <TextField
            sx={{ width: "95%", m: 1 }}
            id="filled-hidden-label-small"
            name="patientName"
            onBlur={handleOnBlur}
            defaultValue={user.displayName}
            size="small"
          />
          <TextField
            sx={{ width: "95%", m: 1 }}
            id="filled-hidden-label-small"
            name="email"
            onBlur={handleOnBlur}
            defaultValue={user.email}
            size="small"
          />
          <TextField
            sx={{ width: "95%", m: 1 }}
            id="filled-hidden-label-small"
            name="phone"
            onBlur={handleOnBlur}
            defaultValue="Phone Number"
            size="small"
          />
          <TextField
            disabled
            sx={{ width: "95%", m: 1 }}
            id="filled-hidden-label-small"
            defaultValue={date.toDateString()}
            size="small"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
