import React from "react";
import Mbachmet from "../assets/MBACHMET.png";

function HomePage() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 className="mt-5" style={{ color: "white" }}>
            Welcome to
            <img
              src={Mbachmet}
              alt="Logo"
              width="200"
              height="65 "
              className="d-inline-block align-text-top me-2"
              style={{ objectFit: "cover" }}
            />
          </h1>
        </div>
      </div>
      <div className="container-fluid">
        {/* Add your game container here */}
      </div>
    </div>
  );
}

export default HomePage;
