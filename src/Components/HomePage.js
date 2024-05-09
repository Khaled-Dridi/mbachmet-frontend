import React from "react";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-5">Welcome to My Game Website</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card">
            <img
              src="/path/to/your/game/screenshot1.jpg"
              className="card-img-top"
              alt="Game Screenshot 1"
            />
            <div className="card-body">
              <h5 className="card-title">Game Screenshot 1</h5>
              <p className="card-text">Description of screenshot 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img
              src="/path/to/your/game/screenshot2.jpg"
              className="card-img-top"
              alt="Game Screenshot 2"
            />
            <div className="card-body">
              <h5 className="card-title">Game Screenshot 2</h5>
              <p className="card-text">Description of screenshot 2.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          {" "}
          {/* Centering the content */}
          <a
            href="/path/to/your/game/download"
            className="btn btn-primary"
            download
          >
            Download Game
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
