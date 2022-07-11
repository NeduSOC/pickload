import React from "react";
import "../css/signup.css";
import Select from "../Images/Select.png";
import Selected from "../Images/SelectedTab.png";
import Button from "./Button";
import DeliveryImage from "../Images/DeliveryImage.png";
import Head from "./Head";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Sign(props) {
  return (
    <>
      <Head />
      <div className="mainBox">
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

        <div className="joinBox">
          <h2 id="join">{props.title}</h2>

          <div id="signFlex">
            <label htmlFor="select">
              <div className="sign" id="signUser">
                {/* <img
                id="selected"
                className="choose"
                src={Selected}
                alt="choose"
              /> */}
                <input
                  id="select"
                  className="choose"
                  type="radio"
                  name="choose"
                />
                <img id="user_img" src={props.imageJoin} alt="User" />
                <p>
                  {props.joinAs} <br /> {props.joinAs2}
                </p>
              </div>
            </label>

            <label htmlFor="sel">
              <div className="sign" id="signRider">
                {/* <img id="select" className="choose" src={Select} alt="choose" /> */}
                <input
                  id="sel"
                  className="choose"
                  type="radio"
                  name="choose"
                  // value="user"
                />
                <img id="rider_img" src={props.imageJoin2} alt="Rider" />
                <p>{props.secondAs}</p>
              </div>
            </label>
          </div>

          <div id="ButtonDiv">
            <Link to={props.link}>
              <Button name={props.name} />
            </Link>

            <p id="accountAlready">
              Already Have an account? <span id="loginSpan">Log in</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
