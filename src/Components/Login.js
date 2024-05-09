import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../apiConfig";
import MyLogo from "../public/logo.png"; // Assuming you have a component named MyLogo

// Define your custom theme with your site's color palette
const theme = createTheme({
  palette: {
    primary: {
      main: "#64D3C3", // Main color for primary elements
    },
    secondary: {
      main: "#F8CB85", // Main color for secondary elements
    },
    background: {
      default: "#302C38", // Default background color
    },
    text: {
      primary: "#ffffff", // White text color
    },
  },
});

export default function Login() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phoneNumber: "29188811",
    password: "rukki123",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setErrors([]);

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];

    if (formData.phoneNumber.length !== 8) {
      newErrors = [
        ...newErrors,
        { id: "phoneNumber", msg: "Phone must be 8 digits" },
      ];
    }
    if (formData.password.trim().length === 0) {
      newErrors = [
        ...newErrors,
        { id: "password", msg: "Password field should not be empty" },
      ];
    }
    setErrors(newErrors);
    if (newErrors.length === 0) {
      const data = {
        identifier: formData.phoneNumber,
        password: formData.password,
      };
      axios
        .post(`${apiURL}/user/login`, data)
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          navigate("/profile");
          window.location.reload();
        })
        .catch((error) => {
          console.log("ERROR:", error);
        });
    } else {
      console.log("Form submission failed. Please fix the errors.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={MyLogo}
            alt="My Logo"
            style={{ marginBottom: "16px", width: "100px", height: "100px" }} // Adjust width and height here
          />{" "}
          {/* Change src attribute accordingly */}
          <Typography component="h1" variant="h5" sx={{ color: "#ffffff" }}>
            {" "}
            {/* White text color */}
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              autoComplete="tel"
              autoFocus
              value={formData.phoneNumber}
              onChange={handleChange}
              error={errors.some((error) => error.id === "phoneNumber")}
              helperText={
                errors.find((error) => error.id === "phoneNumber")?.msg
              }
              InputProps={{
                sx: {
                  color: "#ffffff", // White text color
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "#ffffff", // White text color for label
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#ffffff !important", // White border color when focused
                  },
                "&:hover": {
                  borderColor: "#ffffff !important", // White border color on hover
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff !important", // White border color
                },
                "& .MuiInputLabel-outlined.Mui-focused": {
                  color: "#ffffff !important", // White text color when focused
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              error={errors.some((error) => error.id === "password")}
              helperText={errors.find((error) => error.id === "password")?.msg}
              InputProps={{
                sx: {
                  color: "#ffffff", // White text color
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "#ffffff", // White text color for label
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#ffffff !important", // White border color when focused
                  },
                "&:hover": {
                  borderColor: "#ffffff !important", // White border color on hover
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff !important", // White border color
                },
                "& .MuiInputLabel-outlined.Mui-focused": {
                  color: "#ffffff !important", // White text color when focused
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: "#64D3C3",
                borderColor: "#64D3C3",
                color: "#000000",
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  {/* White text color */}
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/Signup"
                  variant="body2"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {"Don't have an account? "}
                  <span
                    style={{
                      color: "yellow",
                      textDecoration: "underline yellow",
                    }}
                  >
                    Sign Up
                  </span>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
