import {
  faAngleLeft,
  faAngleRight,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PendingDeliveryList } from "../Details info/PendingDeliveryList";
import "./pendingdeliverypickup.css";

const PendingDeliveryPickup = () => {
  return (
    <section className="user-dashboard pending-delivery">
      <div className="pending-delivery-pickup-wrapper">
        <div className="pending-delivery-pickup-slides">
          <br />
          <br />
          <div>
            <span className="pickup-btn activated">
              Pending Instant Delivery
            </span>
            <span className="dropoff-btn">Pending Scheduled Delivery</span>
          </div>
        </div>
        <br />

        <PendingDeliveryList />
        <PendingDeliveryList />
        <PendingDeliveryList />
        <div className="pending-delivery-pickup-entries">
          <h6>
            Showing <span>1</span> to <span>10</span> of <span>30</span> entries
          </h6>
          <div>
            <FontAwesomeIcon icon={faAngleLeft} className="icon-space" />{" "}
            <h6>View more</h6>
            <FontAwesomeIcon icon={faAngleRight} className="icon-space" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PendingDeliveryPickup;
