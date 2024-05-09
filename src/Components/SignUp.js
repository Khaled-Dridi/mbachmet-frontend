import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./UserSignUp.css";
import "./Test.css";
import { apiURL } from "../apiConfig";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [finishedUser, setFinishedUser] = useState(false);
  const [pickRole, setRole] = useState(null);
  const [errors, setErrors] = useState([]);
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(`Updating ${id} to ${value}`);
    setErrors([]);

    // For other inputs, update as usual
    setUserFormData((userFormData) => ({
      ...userFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];

    if (userFormData.phoneNumber.length !== 8) {
      newErrors = [
        ...newErrors,
        { id: "phoneNumber", msg: "Phone must be 8 digits" },
      ];
    }

    if (
      userFormData.username.trim().length === 0 ||
      userFormData.email.trim().length === 0 ||
      userFormData.password.trim().length === 0 ||
      userFormData.phoneNumber.trim().length === 0
    ) {
      newErrors = [
        ...newErrors,
        { id: "emptyField", msg: "All fields must be completed" },
      ];
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (
      !passwordRegex.test(userFormData.password) &&
      userFormData.password !== "admin" &&
      userFormData.password.length !== 8
    ) {
      newErrors = [
        ...newErrors,
        {
          id: "invalidPassword",
          msg: "Password must be either 8 characters long, or equal to 'admin', and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        },
      ];
    }

    if (userFormData.password !== userFormData.repeatPassword) {
      newErrors = [
        ...newErrors,
        { id: "passwordMismatch", msg: "Passwords do not match" },
      ];
    }
    if (!userFormData.email.includes("@")) {
      newErrors = [
        ...newErrors,
        { id: "invalidEmail", msg: "Email must contain @ character" },
      ];
    }
    if (userFormData.username.trim().length < 4) {
      newErrors = [
        ...newErrors,
        {
          id: "invalidUsername",
          msg: "Username must be at least 4 characters long",
        },
      ];
    }

    console.log(newErrors);
    setErrors(newErrors);
    console.log(newErrors.length);
    if (newErrors.length === 0) {
      console.log("Form data submitted:", userFormData);
      const data = {
        phoneNumber: userFormData.phoneNumber,
        password: userFormData.password,
        username: userFormData.username,
        email: userFormData.email,
      };
      console.log(data);
      console.log(`${apiURL}/user/signup`);
      axios
        .post(`${apiURL}/user/signup`, {
          email: data.email,
          password: data.password,
          phoneNumber: data.phoneNumber,
          username: data.username,
        })
        .then((response) => {
          navigate("/profile");
        })
        .catch((error) => {});
    } else {
      console.log("Form submission failed. Please fix the errors.");
    }
  };
  //when clicked on the button next
  const onClickNext = (e) => {
    e.preventDefault();
    setFinishedUser(true);
    if (pickRole === "worker") {
    } else if (pickRole === "client") {
      axios
        .post(apiURL + "/clients/signup", userFormData)
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    }
  };

  return (
    <>
      {!finishedUser && (
        <div className="signup-container">
          <div className="signup-form-container">
            <h1>Sign up to Mbachmet</h1>
            <Form className="form-margin" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <div
                  style={{
                    display: "inline-block",
                    color: "red",
                    marginLeft: "3px",
                  }}
                >
                  {errors.map((error) =>
                    error.id === "invalidUsername" ? error.msg : ""
                  )}
                </div>
                <Form.Control
                  type="text"
                  placeholder="Enter your Username"
                  id="username"
                  value={userFormData.username}
                  onChange={handleChange}
                />{" "}
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <div
                  style={{
                    display: "inline-block",
                    color: "red",
                    marginLeft: "3px",
                  }}
                >
                  {errors.map((error) =>
                    error.id === "invalidEmail" ? error.msg : ""
                  )}
                </div>
                <Form.Control
                  type="text"
                  placeholder="Enter your Email"
                  id="email" // <-- Use "Email" as the id
                  value={userFormData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
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
                  id="phoneNumber" // <-- Should match the key in formData
                  placeholder="Enter your Phone Number"
                  value={userFormData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <div
                  style={{
                    display: "inline-block",
                    color: "red",
                    marginLeft: "3px",
                  }}
                >
                  {errors.map((error) =>
                    error.id === "invalidPassword" ? error.msg : ""
                  )}
                </div>
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Enter your Password"
                  value={userFormData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Repeat Password</Form.Label>
                <div
                  style={{
                    display: "inline-block",
                    color: "red",
                    marginLeft: "3px",
                  }}
                >
                  {errors.map((error) =>
                    error.id === "passwordMismatch" ? error.msg : ""
                  )}
                </div>
                <Form.Control
                  type="password"
                  id="repeatPassword"
                  placeholder="Enter your Password"
                  value={userFormData.repeatPassword}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* <SearchAutocomplete /> */}
              {/* we put 0 if he didn't choose */}

              {/*  */}

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                active
                className="signup-button"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <div
                style={{
                  display: "inline-block",
                  color: "red",
                  marginLeft: "3px",
                }}
              >
                {errors.map((error) =>
                  error.id === "emptyField" ? error.msg : ""
                )}
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
