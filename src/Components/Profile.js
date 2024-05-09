import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

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
  return (
    <div>
      <p>Profile</p>

      <Button
        style={{
          backgroundColor: "#2f2a39",
          border: "none",
          width: "100",
        }}
        onClick={handleSignOut}
      >
        Sign out
      </Button>
    </div>
  );
}
