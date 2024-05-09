import React from "react";
import ahmed from "../assets/ahmed.jpg";
import khaled from "../assets/khaled.jpg";
import zeineb from "../assets/zeineb.jpg";
import wiwi from "../assets/wiwi.jpg";
function AboutUsPage() {
  return (
    <div className="container">
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
            <div className="card">
              <img src={ahmed} className="card-img-top" alt="Developer 1" />

              <div className="card-body">
                <h5 className="card-title">Ahmed Khemiri </h5>
                <p className="card-text">Lead Developer</p>
              </div>
            </div>
            <div className="card">
              <img src={zeineb} className="card-img-top" alt="Developer 2" />
              <div className="card-body">
                <h5 className="card-title">Zeineb Ben Dhiaf </h5>
                <p className="card-text">ahmed's Gf</p>
              </div>
            </div>
            <div className="card">
              <img src={wiwi} className="card-img-top" alt="Developer 3" />
              <div className="card-body">
                <h5 className="card-title">Youssef Eloued</h5>
                <p className="card-text">Graphics Artist</p>
              </div>
            </div>
            <div className="card">
              <img src={khaled} className="card-img-top" alt="Developer 4" />
              <div className="card-body">
                <h5 className="card-title">Mohamed Khaled Dridi</h5>
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
