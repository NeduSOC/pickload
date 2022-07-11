import React from "react";
import Button from "../javascript/Button";
import { Head2 } from "../javascript/Head";
import Instant from "../Images/instant.png";
import Scheduled from "../Images/scheduled.png";
import "../css/deliverytype.css";
import { Link } from "react-router-dom";

export default function DeliveryType() {
  return (
    <>
      <Head2 />
      <form id="typeFlex">
        <h2>Select a Delivery Type</h2>
        <div id="signFlex">
          <label htmlFor="select">
            <div className="sign type" id="signUser">
              <input
                id="select"
                className="choose"
                type="radio"
                name="choose"
              />
              <img id="user_img" src={Instant} alt="User" />
              <br />
              <p>Instant Delivery</p>
            </div>
          </label>

          <label htmlFor="sel">
            <div className="sign type" id="signRider">
              <input
                id="sel"
                className="choose"
                type="radio"
                name="choose"
                // value="user"
              />
              <img id="rider_img" src={Scheduled} alt="Rider" />
              <br />
              <p>Scheduled Delivery</p>
            </div>
          </label>
        </div>

        <h2>Select a Delivery Medium</h2>
        <br />
        <div id="Radio-div">
          <input type="radio" value="Bike" name="Vehicle" className="RadioV" />
          <label htmlFor="Bike">
            {" "}
            <span className="vehicle-text">Bike</span>
          </label>

          <input type="radio" value="Bus" name="Vehicle" className="RadioV" />
          <label htmlFor="Bus">
            {" "}
            <span className="vehicle-text">Bus</span>
          </label>

          <input type="radio" value="Truck" name="Vehicle" className="RadioV" />
          <label htmlFor="Truck">
            {" "}
            <span className="vehicle-text">Truck</span>
          </label>

          <input type="radio" value="Car" name="Vehicle" className="RadioV" />
          <label htmlFor="Car">
            <span className="vehicle-text">Car</span>
          </label>
        </div>
        <br />

        <Link to="/formuser">
          <Button name="Next" />
        </Link>
      </form>
      <div id="ButtonDiv"></div>
    </>
  );
}
