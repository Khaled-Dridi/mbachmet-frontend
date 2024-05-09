import React from "react";
import Mbachmet from "../assets/MBACHMET.png";
import { Link } from "react-router-dom";
import { isSignedIn } from "../User";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";
import Tutorial from "./Tutorial"; // Import Tutorial component

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
});

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#F8CB85" }}
      >
        <div className="container-fluid d-flex align-items-center">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={Mbachmet}
              alt="Logo"
              width="200"
              height="70 "
              className="d-inline-block align-text-top me-2"
              style={{ objectFit: "cover" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link border-end"
                  to="/"
                  style={{
                    fontSize: "20px",
                    borderColor: "black", // Change border color here
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link border-end"
                  to="/about"
                  style={{
                    fontSize: "20px",
                    borderColor: "black", // Change border color here
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/tutorial"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Tutorial
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              {isSignedIn() ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#64D3C3",
                        borderColor: "#64D3C3",
                        color: "#000000",
                      }}
                    >
                      Profile
                    </Button>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#64D3C3",
                        borderColor: "#64D3C3",
                        color: "#000000",
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
}

export default Navbar;
