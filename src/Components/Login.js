// Login.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Styling/Login.css";
import { Link, useNavigate } from "react-router-dom";
//import Signup from "../sign-up/Signup";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../apiConfig";
import SignUp from "../Components/SignUp";

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
    console.log(newErrors);
    console.log("nor errors can submit");
    setErrors(newErrors);
    console.log(newErrors.length);
    if (newErrors.length === 0) {
      const data = {
        identifier: formData.phoneNumber,
        password: formData.password,
      };
      console.log(`${apiURL}/user/login`);
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
    <div className="login-container">
      <div className="login-form-container">
        <h1>Login to Mbachmet</h1>
        <div style={{ width: "500px" }}>
          <Form className="form-margin" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number </Form.Label>
              <div
                style={{
                  display: "inline-block",
                  color: "red",
                  marginLeft: "3px",
                }}
              >
                {errors.map((error) =>
                  error.id === "phoneNumber" ? error.msg : ""
                )}
              </div>
              <Form.Control
                type="tel"
                pattern="[0-9]*"
                maxLength="8"
                id="phoneNumber"
                placeholder="Enter your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password </Form.Label>
              <div
                style={{
                  display: "inline-block",
                  color: "red",
                  marginLeft: "3px",
                }}
              >
                {errors.map((error) =>
                  error.id === "password" ? error.msg : ""
                )}
              </div>
              <Form.Control
                type="password" // Change the input type to "password"
                id="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              size="lg"
              active
              style={{ width: "150px", margin: "30px" }}
            >
              Log In
            </Button>
          </Form>
        </div>
        {/* <h3 style={{ fontSize: "20px" }}>Forgot password? </h3> */}

        <div className="link-container">
          <h3 style={{ fontSize: "20px" }}>No account?</h3>
          <h3 style={{ fontSize: "20px" }}>
            <Link to="/Signup">Sign up</Link>
            <Routes>
              <Route path="/Signup" element={<SignUp />} />
            </Routes>
          </h3>
        </div>
      </div>
    </div>
  );
}
