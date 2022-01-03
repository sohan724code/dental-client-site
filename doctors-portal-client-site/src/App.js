import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Appointment from "./pages/Appointment/Appoinment/Appointment";
import Register from "./pages/Home/Login/Register/Register";
import Login from "./pages/Home/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./pages/Home/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
