import React from "react";
import ahmed from "../assets/AboutUs images/ahmed.jpg";
import khaled from "../assets/AboutUs images/khaled.jpg";
import zeineb from "../assets/AboutUs images/zeineb.jpg";
import wiwi from "../assets/AboutUs images/wiwi.jpg";
import bimo from "../assets/AboutUs images/bimo.jpg";

function AboutUsPage() {
  return (
    <div className="container text-white">
      <div className="row">
        <div className="col">
          <h1 className="mt-5">About Us</h1>
          <p className="lead">
            We are a passionate team of game developers dedicated to creating
            immersive gaming experiences for players around the world.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to push the boundaries of gaming by delivering
            innovative gameplay, captivating storytelling, and cutting-edge
            technology.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become a leading game development studio known for
            creating unforgettable gaming experiences that inspire and delight
            players worldwide.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Meet Our Team</h2>
          <div className="card-group">
            <div
              className="card"
              style={{
                marginRight: "10px",
                borderRadius: "15px",
                backgroundColor: "#F8CB85",
              }}
            >
              <img
                src={ahmed}
                className="card-img-top "
                alt="Developer 1"
                style={{ borderRadius: "15px 15px 0 0", objectFit: "cover" }}
              />
              <div className="card-body" style={{ padding: "10px" }}>
                <h5 className="card-title" style={{ color: "#302C38" }}>
                  Ahmed Khemiri{" "}
                </h5>
                <p className="card-text">Lead Developer</p>
              </div>
            </div>
            <div
              className="card"
              style={{
                marginRight: "10px",
                borderRadius: "15px",
                backgroundColor: "#F8CB85",
              }}
            >
              <img
                src={zeineb}
                className="card-img-top team-member-image"
                alt="Developer 2"
                style={{ borderRadius: "15px 15px 0 0", objectFit: "cover" }}
              />
              <div className="card-body" style={{ padding: "10px" }}>
                <h5 className="card-title" style={{ color: "#302C38" }}>
                  Zeineb Ben Dhiaf{" "}
                </h5>
                <p className="card-text">ahmed's Gf</p>
              </div>
            </div>
            <div
              className="card"
              style={{
                marginRight: "10px",
                borderRadius: "15px",
                backgroundColor: "#F8CB85",
              }}
            >
              <img
                src={bimo}
                className="card-img-top team-member-image"
                alt="Developer 3"
                style={{ borderRadius: "15px 15px 0 0", objectFit: "cover" }}
              />
              <div className="card-body" style={{ padding: "10px" }}>
                <h5 className="card-title" style={{ color: "#302C38" }}>
                  Youssef Eloued
                </h5>
                <p className="card-text">Graphics Artist</p>
              </div>
            </div>
            <div
              className="card"
              style={{ borderRadius: "15px", backgroundColor: "#F8CB85" }}
            >
              <img
                src={khaled}
                className="card-img-top "
                alt="Developer 4"
                style={{ borderRadius: "15px 15px 0 0", objectFit: "cover" }}
              />
              <div className="card-body" style={{ padding: "10px" }}>
                <h5 className="card-title" style={{ color: "#302C38" }}>
                  Mohamed Khaled Dridi
                </h5>
                <p className="card-text">Game Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
