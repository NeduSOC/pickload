import React from "react";
import Animal from "../Images/animal.png";
import Button from "../javascript/Button";
import "../css/Success.css";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <div id="mmm">
        <div id="success">
          <h2>Account Creation Successful</h2>
          <img src={Animal} alt="Animal" />
          <p id="successText">
            You will receive a confirmatory email and SMS after
            <br />
            your account has been approved by the Admin
          </p>
        </div>
        <br />

        <Link to="/message">
          <Button name="Login" />
        </Link>
      </div>
    </>
  );
}
