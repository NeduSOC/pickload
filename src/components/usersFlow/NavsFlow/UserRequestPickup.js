import React from "react";
import map from "../../Images/map.png";
import "./resquestpickup.css";
import LoggedinMainPage from "./LoggedinMainPage";
import { Link } from "react-router-dom";

export default function UserRequestPickup() {
  return <LoggedinMainPage file={<UserRequestPickup1 />} />;
}

export function UserRequestPickup1() {
  return (
    <section className="user-dashboard">
      <div className="user-right-side">
        <div className="map-container">
          <img src={map} alt="" />
        </div>
      </div>
      <div className="set-location-pickup">
        <div className="location-form">
          <div className="location-form-input" id="location-form-input-1">
            <label htmlFor="Pickup Location">Pickup Location</label>
            <input
              name="Pickup Location"
              placeholder="5 Noma Street GRA Edo State "
            />
          </div>

          <div className="location-form-input" id="location-form-input-2">
            <label htmlFor="Delivery Location">Delivery Location</label>
            <input
              name="Delivery Location"
              placeholder="19 Akpakpava Road Benin City Ed.."
            />
          </div>
        </div>
        <div id="price-div">
          <p>Delivery Fee </p>
          <p id="price-p">N 1500</p>
        </div>

        <Link to="/type">
          <button className="set-location-btn">Next</button>
        </Link>
      </div>
    </section>
  );
}
