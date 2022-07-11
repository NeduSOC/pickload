import React from "react";
import "../css/signup.css";
import DeliveryImage from "../Images/DeliveryImage.png";
import Button from "../javascript/Button";
import Head from "../javascript/Head";
import "../css/WelcomeUser.css";
import Footer from "../javascript/Footer";
import { Link } from "react-router-dom";

export default function WelcomeUser() {
  const asterik = <span id="asterik">*</span>;

  return (
    <>
      <Head />
      <div className="mainBox" id="welcome-main">
        <div id="DeliveryImage">
          <p>
            Door to Door <span id="yellow">delivery</span>
            <br /> services for individuals
            <br /> and businesses.
          </p>
          <br />
          <br />
          <img src={DeliveryImage} alt="Deliver" />
        </div>

        <div id="Form-flex-ULogin">
          <h2 id="join">Welcome Back</h2>
          <br />

          <form id="User-form-ULogin">
            <label className="reuiredText">Phone Number{asterik}</label>
            <input
              type="number"
              className="input-field"
              placeholder="Enter your Phone Number"
              name="PhoneNumber"
            />

            <Link to="/forgot">
              <p id="forgot">Forgot your Phone Number?</p>
            </Link>

            <br />
            <Button name="Login" />
          </form>

          <p id="accountAlready">
            Already Have an account? <span id="loginSpan">Log in</span>
          </p>
        </div>
      </div>
      <p id="agree-p">
        By clicking Login, you agree to our{" "}
        <span className="policy">Terms of Use </span>and our{" "}
        <span className="policy">Privacy Policy</span>.
      </p>
      <Footer />
    </>
  );
}
