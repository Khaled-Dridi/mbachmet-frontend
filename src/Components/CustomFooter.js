import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import Mbachmet from "../assets/MBACHMET.png";
import LogoImage from "../public/logo.png"; // Update with your logo image

function CustomFooter() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-3 mb-4 mb-md-0 "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={LogoImage}
              alt="Your Logo"
              className="img-fluid mb-3 me-2"
              style={{ maxWidth: "150px" }}
            />
            <img
              src={Mbachmet}
              alt="Logo"
              width="200"
              height="65 "
              className="d-inline-block align-text-top me-2"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About Us
                </Link>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <BsFacebook className="me-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram className="me-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <BsTwitter className="me-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <BsGithub className="me-2" />
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Mbachmet™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;
