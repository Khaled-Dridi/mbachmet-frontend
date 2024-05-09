import React from "react";
import { Card } from "react-bootstrap";
import image1 from "../assets/tutorial/image1.png";
import image2 from "../assets/tutorial/image2.png";
import image3 from "../assets/tutorial/image3.png";
import image4 from "../assets/tutorial/image4.png";
import image5 from "../assets/tutorial/image5.png";
import image6 from "../assets/tutorial/image6.png";

function Tutorial() {
  return (
    <div className="container" style={{ margin: "20px" }}>
      <div className="row">
        <div className="col-md-6">
          <Card className="mb-3" style={{ backgroundColor: "#F8CB85" }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Text style={{ color: "black" }}>
                Join Room in Your Mobile Device:{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="mb-3" style={{ backgroundColor: "#F8CB85" }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Text style={{ color: "black" }}>
                Press Play in the Web Game{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Card className="mb-3" style={{ backgroundColor: "#F8CB85" }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Text style={{ color: "black" }}>
                Choose a Name for the Room and Press Create Room{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="mb-3" style={{ backgroundColor: "#F8CB85" }}>
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Text style={{ color: "black" }}>
                Note the Room Number and Share It with Your Friends{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Card className="mb-3" style={{ backgroundColor: "#F8CB85" }}>
            <Card.Img variant="top" src={image5} />
            <Card.Body>
              <Card.Text style={{ color: "black" }}>
                Enter the Room Number You Want to Join
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="mb-3" style={{ backgroundColor: "#F8CB85" }}>
            <Card.Img variant="top" src={image6} />
            <Card.Body>
              <Card.Text style={{ color: "black" }}>
                Wait for the Game to Start
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
