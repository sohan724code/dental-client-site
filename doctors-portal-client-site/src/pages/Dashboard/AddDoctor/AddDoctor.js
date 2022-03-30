import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CircularProgress, Input } from "@mui/material";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("https://frozen-mesa-36688.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("a new Doctor added Successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Name"
          required
          variant="standard"
          onBlur={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          required
          type="email"
          variant="standard"
          onBlur={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <Input
          accept="image/*"
          type="file"
          sx={{ width: "50%" }}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />

        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddDoctor;
