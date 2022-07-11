import React from "react";
import "../css/usersidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBiking,
  faTimesCircle,
  faNoteSticky,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <section className="side-bar">
      <div className="side-bar-links">
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} className="space-icons" />
            Request Pickup
          </li>
          <li className="active">
            <FontAwesomeIcon icon={faBiking} className="space-icons" />
            Pending Deliveries
          </li>
          <li>
            <FontAwesomeIcon icon={faTimesCircle} className="space-icons" />
            Delivery History
          </li>
          <li>
            <FontAwesomeIcon icon={faNoteSticky} className="space-icons" />
            Report
          </li>
        </ul>

        <div className="side-bar-profile-detail">
          <div className="side-bar-profile-img">
            {/* <img src={} alt="" /> */}
          </div>
          <div className="side-bar-profile-name">
            <h5>Angie</h5>
            <p>View Profile</p>
          </div>
        </div>
        <ul>
          <li>
            {" "}
            <FontAwesomeIcon icon={faSignOut} className="space-icons" />
            Log out
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
