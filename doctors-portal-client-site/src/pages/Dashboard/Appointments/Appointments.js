import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Appointments = ({ date }) => {
  const { user, token } = useAuth();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch(
      `https://frozen-mesa-36688.herokuapp.com/appointments?email=${user.email}&date=${date}`,
      { headers: { authorization: `Bearer ${token}` } }
    )
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date, user.email, token]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="Appointment table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Service</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.serviceName}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Appointments;
