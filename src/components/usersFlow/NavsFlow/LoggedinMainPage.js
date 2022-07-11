import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navsignedin from "../../javascript/UserNavsignedin";
import SideBar from "../../javascript/SideBar";
import "./loggedinmainpage.css";
import PendingInstantDetails from "./PendingInstantDetails";
import FormUserDelivery from "./FormUserDelivery";
import ScheduleForm from "./ScheduleForm";
import DeliveryHistoryDetails from "./UserInstantDeliveryHistory";
import CompletedDeliveries from "./CompletedDeliveries";
import UserScheduledDeliveryHistory from "./UserScheduledDeliveryHistory";
import PendingScheduledDetails from "./PendingScheduledDetails";
import InstantDeliverySummary from "./InstantDeliverySummary";
import ScheduledDeliverySummary from "./ScheduledDeliverySummary";
import UserRequestPickup from "./UserRequestPickup";
import CancelledScheduled from "./CancelledScheduled";
import PendingDeliveryPickup from "./PendingDeliveryPickup";
import Logout from "./Logout";
import UsersProfile from "./UsersProfile";
import SelectAgent from "./SelectAgent";

const LoggedinMainPage = (props) => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <section className="user-dashboard-main">
      <div className="user-left-side-main">
        <Navsignedin />
      </div>
      <div className="user-right-side-main">
        <SideBar />
        <div className="content-wrap">
          <div id="content-pad">
            {props.file}
            {/* <Routes> */}
            {/* <Route path="/" element={<UsersProfile />} /> */}
            {/* </Routes> */}
          </div>
        </div>
      </div>
    </section>
    // </BrowserRouter>
  );
};

export default LoggedinMainPage;
