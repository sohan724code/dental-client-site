import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://frozen-mesa-36688.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setIsAdmin(true);
          setEmail("");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          variant="standard"
          onBlur={handleOnBlur}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {isAdmin && <Alert severity="success">You are Admin Now</Alert>}
    </div>
  );
};

export default MakeAdmin;
