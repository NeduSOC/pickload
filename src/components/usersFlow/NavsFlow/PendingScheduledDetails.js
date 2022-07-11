import React from "react";
import { DeliveryImages } from "../Details info/DeliveryImages";
import "./deliveryhistorydetails.css";
import { DeliverInfo2 } from "../Details info/DeliverInfo";
import Flag from "../../Images/flag.png";
import Arrow from "../../Images/Arrow.png";
import Selected from "../../Images/SelectedTab.png";
import Cancel from "../../Images/close.png";

export default function PendingScheduledDetails() {
  return (
    <section className="user-dashboard pending-delivery specifics">
      <div className="history-wrapper">
        <div className="specific-details-section">
          <img src={Arrow} alt="" />
          <br />
          <br />
          <h3>Instant Delivery ID: 7805097 </h3>
          <div className="delivery-details-pictures specifics-images">
            <DeliveryImages />
            <DeliveryImages />
            <DeliveryImages />
          </div>
          <br />
          <h3>Delivery statistics</h3>
          <div className="delivery-details-location">
            <div className="delivery-deatail-location-pickup">
              <div>
                <img src={Selected} alt="" id="selected-img" />
              </div>
              <div id="selected-col">
                <h3>Scheduled Delivery Time and Date</h3>
                <p>Thursday March 25th at 9:30 PM</p>
              </div>
            </div>
          </div>
          <br />
          <br />

          <h3>Delivery Request Accepted by:</h3>
          <br />
          <br />

          <div className="delivery-profile">
            <div className="driver-profile-image">
              <div className="image"></div>
            </div>
            <div className="delivery-profile-details">
              <table>
                <tr>
                  <th>Delivery Agent :</th>
                  <td>Peter Robinson</td>
                </tr>
                <tr>
                  <th>Vehicle Type :</th>
                  <td>Tesla Cyber Truck</td>
                </tr>
                <tr>
                  <th>Vehicle Color :</th>
                  <td>Army Green</td>
                </tr>
                <tr>
                  <th>Agent ID :</th>
                  <td>6788</td>
                </tr>
                <tr>
                  <th>Plate Number :</th>
                  <td>LSR4KMJ</td>
                </tr>
                <tr>
                  <th>Phone Number :</th>
                  <td>09087614543</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="delivery-history-info">
            <DeliverInfo2 />
          </div>
          <br />
          <br />
          <br />

          <div className="report-user">
            <img src={Cancel} alt="" />
            <p>Cancel</p>
          </div>
          <div className="report-user">
            <img src={Flag} alt="" />
            <p>Report this Delivery</p>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
}
