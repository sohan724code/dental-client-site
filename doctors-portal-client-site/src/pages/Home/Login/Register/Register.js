import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import login from "../../../../images/login.png";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { isLoading, registerUser, user, authError } = useAuth();
  const history = useHistory();
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  const handleSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Your password didn't match");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      history
    );
    console.log(registerData);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="subtitle2" sx={{ m: 2 }}>
            Register
          </Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ width: "90%", mb: 2 }}
                onBlur={handleChange}
                name="name"
                id="standard-name-input"
                label="Your Name"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ width: "90%", mb: 2 }}
                onBlur={handleChange}
                name="email"
                id="standard-email-input"
                label="Your email"
                type="email"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ width: "90%", mb: 2 }}
                onBlur={handleChange}
                name="password"
                id="standard-password-input"
                label="Password"
                type="password"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ width: "90%", mb: 2 }}
                onBlur={handleChange}
                name="password2"
                id="standard-password2-input"
                label="Re-type Password"
                type="password"
                variant="standard"
              ></TextField>
              <Button
                sx={{ width: "90%", mt: 5, bgcolor: "#3AD5CB" }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button sx={{ mt: 3 }} variant="text">
                  Already have Account? Login Please
                </Button>
              </NavLink>
            </form>
          )}
          {user?.email && (
            <Alert severity="success">Registration Successful</Alert>
          )}
          {authError && <Alert severity="warning">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
