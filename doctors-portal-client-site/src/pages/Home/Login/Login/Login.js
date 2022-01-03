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
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import login from "../../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading, user, authError, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);

    console.log(user);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="subtitle2" sx={{ m: 2 }}>
            Login
          </Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ width: "90%", mb: 2 }}
                onChange={handleChange}
                name="email"
                id="standard-name-input"
                label="Your Email"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ width: "90%", mb: 2 }}
                onChange={handleChange}
                name="password"
                id="standard-password-input"
                label="Password"
                type="password"
                variant="standard"
              ></TextField>
              <Button
                sx={{ width: "90%", mt: 5, bgcolor: "#3AD5CB" }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                <Button sx={{ mt: 3 }} variant="text">
                  New User? Register Please
                </Button>
              </NavLink>
            </form>
          )}
          {user?.email && <Alert severity="success">Login Successful</Alert>}
          {authError && <Alert severity="warning">{authError}</Alert>}
          <div>.........................................</div>
          <Button
            sx={{ width: "90%", mt: 2, bgcolor: "#3AD5CB" }}
            variant="contained"
            onClick={handleGoogleSignIn}
          >
            Login With Google
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
