import React from "react";
import train from "../public/Temporary Avatar.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear the JWT token from local storage
    console.log("Removing token from local storage");
    localStorage.removeItem("token");
    navigate("/Login");

    // Refresh the page
    console.log("Reloading page");
    window.location.reload();
  };

  const userData = {
    username: "JohnDoe",
    profilePic: "profile.jpg",
    phoneNumber: "123456789",
    email: "john.doe@example.com",
    achievements: [
      { title: "Completed Level 1", progress: 50 },
      { title: "Completed Level 2", progress: 75 },
      { title: "Completed Level 3", progress: 100 },
    ],
  };

  return (
    <div
      style={{
        margin: "10px",
        backgroundImage: `url(${require("../public/1-Banner.png")})`,
        backgroundSize: "cover", // Stretch image on the sides
        backgroundRepeat: "no-repeat",
        padding: "150px",
      }}
    >
      {/* Container for the background and images */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // Set pointer-events to none
        }}
      >
        <img
          src={require("../assets/food/Tomato.png")}
          alt="Image 1"
          style={{
            position: "absolute",
            top: "30%",
            left: "20%",
            maxWidth: "200px",
            zIndex: 1,
            pointerEvents: "none", // Set pointer-events to none
          }}
        />
        <img
          src={require("../assets/food/meat.png")}
          alt="Image 2"
          style={{
            position: "absolute",
            top: "50%",
            left: "70%",
            maxWidth: "200px",
            zIndex: 1,
            pointerEvents: "none", // Set pointer-events to none
          }}
        />
        <img
          src={require("../assets/food/egg2.png")}
          alt="Image 2"
          style={{
            position: "absolute",
            top: "50%",
            left: "8%",
            maxWidth: "200px",
            zIndex: 1,
            pointerEvents: "none", // Set pointer-events to none
          }}
        />
        <img
          src={require("../assets/food/egg.png")}
          alt="Image 2"
          style={{
            position: "absolute",
            top: "80%",
            left: "85%",
            maxWidth: "200px",
            zIndex: 1,
            pointerEvents: "none", // Set pointer-events to none
          }}
        />
        <img
          src={require("../assets/food/Toast.png")}
          alt="Image 2"
          style={{
            position: "absolute",
            top: "80%",
            left: "20%",
            maxWidth: "200px",
            zIndex: 1,
            pointerEvents: "none", // Set pointer-events to none
          }}
        />
        <img
          src={require("../assets/food/lettuce.png")}
          alt="Image 2"
          style={{
            position: "absolute",
            top: "30%",
            left: "85%",
            maxWidth: "200px",
            zIndex: 1,
            pointerEvents: "none", // Set pointer-events to none,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={train}
          alt="avatar"
          style={{ maxWidth: "150px", marginBottom: "50px" }} // Increased margin bottom
        />
        <p
          className="text-muted mb-1"
          style={{ margin: "10px", fontSize: "30px" }}
        >
          {userData.username}
        </p>
        <p style={{ margin: "10px", fontSize: "30px" }}>
          Full Name: {userData.username}
        </p>{" "}
        <p style={{ margin: "10px", fontSize: "30px" }}>
          Email: {userData.email}
        </p>
        <p style={{ margin: "10px", fontSize: "30px" }}>
          Phone: (+216) {userData.phoneNumber}
        </p>{" "}
        <Button
          style={{
            backgroundColor: "#2f2a39",
            border: "none",
            width: "150px", // Adjusted width of the button
            padding: "15px 30px", // Adjusted padding to make the button bigger
            marginTop: "110px",
          }}
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      </div>
    </div>
  );
}
