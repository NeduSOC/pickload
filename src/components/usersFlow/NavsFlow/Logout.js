import React from "react";
import Amico3 from "../../Images/amico3.png";
import Button, { Button3 } from "../../javascript/Button";
import "../../css/logout.css";

export default function Logout() {
  return (
    <>
      <div id="logout-wrapper">
        <div id="logout-div">
          <div id="logout-text">
            <h2>Log out?</h2>
            <br />
            <img src={Amico3} alt="Animal" />
            <br />
            <p id="successText">
              Are you sure you want to logout of your account?
            </p>
          </div>
          <br />
          <div id="div-button">
            <Button3 name="No" /> <Button name="Yes" />
          </div>
        </div>
      </div>
    </>
  );
}
