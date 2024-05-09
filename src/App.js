import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import AboutUsPage from "./Components/AboutUsPage";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import CustomFooter from "./Components/CustomFooter";
import "./Styling/globalStyles.css"; // Import the global styles
import Tutorial from "./Components/Tutorial";

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${require("./assets/Wallpaper.png")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            minHeight: "calc(100vh - 56px)" /* Subtracting the navbar height */,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <CustomFooter />
      </div>
    </Router>
  );
}

export default App;
