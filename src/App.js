import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import AboutUsPage from "./Components/AboutUsPage";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
