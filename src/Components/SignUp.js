import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../apiConfig";
import MyLogo from "../public/logo.png"; // Assuming you have a component named MyLogo

export default function Signup() {
  const [finishedUser, setFinishedUser] = useState(false);
  const [errors, setErrors] = useState([]);
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "", // Add repeatPassword field to match the Login component
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setErrors([]);
    setUserFormData((userFormData) => ({
      ...userFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];

    // Validation checks

    setErrors(newErrors);
    if (newErrors.length === 0) {
      const data = {
        phoneNumber: userFormData.phoneNumber,
        password: userFormData.password,
        username: userFormData.username,
        email: userFormData.email,
      };
      axios
        .post(`${apiURL}/user/signup`, data)
        .then((response) => {
          navigate("/profile");
        })
        .catch((error) => {});
    } else {
      console.log("Form submission failed. Please fix the errors.");
    }
  };

  return (
    <>
      {!finishedUser && (
        <Grid container justifyContent="center" alignItems={"center"}>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <div className="login-form-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={MyLogo}
                  alt="My Logo"
                  style={{
                    marginBottom: "16px",
                    width: "100px",
                    height: "100px",
                  }} // Adjust width and height here
                />
                <Typography
                  variant="h5"
                  align="center"
                  gutterBottom
                  color={"white"}
                >
                  Sign up to Mbachmet
                </Typography>
              </div>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  required
                  id="username"
                  label="Username"
                  value={userFormData.username}
                  onChange={handleChange}
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
                  fullWidth
                  margin="normal"
                  required
                  id="email"
                  label="Email"
                  type="email"
                  value={userFormData.email}
                  onChange={handleChange}
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
                  fullWidth
                  margin="normal"
                  required
                  id="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  value={userFormData.phoneNumber}
                  onChange={handleChange}
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
                  fullWidth
                  margin="normal"
                  required
                  id="password"
                  label="Password"
                  type="password"
                  value={userFormData.password}
                  onChange={handleChange}
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
                  fullWidth
                  margin="normal"
                  required
                  id="repeatPassword"
                  label="Repeat Password"
                  type="password"
                  value={userFormData.repeatPassword}
                  onChange={handleChange}
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
                  Sign Up
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link
                      to="/Login"
                      variant="body2"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Already have an account?
                      <span
                        style={{
                          color: "yellow",
                          textDecoration: "underline yellow",
                        }}
                      >
                        Sign In
                      </span>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
}
