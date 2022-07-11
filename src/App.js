import React, { useState } from "react";
import OTP from "./components/javascript/OTP";
import UserOtp from "./components/Pages/UserOtp";
import PhoneConfirm from "./components/Pages/PhoneConfirm";
import Signup from "./components/Pages/Signup";
import SignupDelivery from "./components/Pages/SignupDelivery";
import UserForm from "./components/Pages/UserForm";
import WelcomeUser from "./components/Pages/WelcomeUser";
import ForgotNumber from "./components/Pages/ForgotNumber";
import AsIndividual from "./components/Pages/AsIndividual";
import AsFleet from "./components/Pages/AsFleet";
import DeliveryOtp from "./components/Pages/DeliveryOtp";
import Success from "./components/Pages/Success";
import FleetVehicle from "./components/Pages/FleetVehicle";
import IndividualVehicle from "./components/Pages/IndividualVehicle";
import AgentCompleted from "./components/Pages/AgentCompleted";
import DeliveryType from "./components/usersFlow/DeliveryType";
import CancelReason from "./components/usersFlow/CancelReason";
import ReportReason from "./components/usersFlow/ReportReason";
import FormUserDelivery from "./components/usersFlow/NavsFlow/FormUserDelivery";
import LoggedinMainPage from "./components/usersFlow/NavsFlow/LoggedinMainPage";
import Navsignedin from "./components/javascript/UserNavsignedin";
import UserRequestPickup from "./components/usersFlow/NavsFlow/UserRequestPickup";
import CancelBooking from "./components/usersFlow/CancelBooking";
import Logout from "./components/usersFlow/NavsFlow/Logout";
import UsersProfile from "./components/usersFlow/NavsFlow/UsersProfile";
import SelectAgent from "./components/usersFlow/NavsFlow/SelectAgent";
import SpecificAgent from "./components/usersFlow/NavsFlow/SpecificAgent";
import PendingDeliveryPickup from "./components/usersFlow/NavsFlow/PendingDeliveryPickup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Message from "./components/Pages/message";
import InstantDeliverySummary from "./components/usersFlow/NavsFlow/InstantDeliverySummary";
import PaymentSuccess from "./components/usersFlow/PaymentSuccess";
import ScheduleForm from "./components/usersFlow/NavsFlow/ScheduleForm";
import ScheduledDeliverySummary from "./components/usersFlow/NavsFlow/ScheduledDeliverySummary";
import RequestSuccess from "./components/usersFlow/RequestSuccess";
import RequestFail from "./components/usersFlow/RequestFail";

export default function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="userform" element={<UserForm />} />
          <Route path="confirm" element={<PhoneConfirm />} />
          <Route path="otp" element={<UserOtp />} />
          <Route path="welcome" element={<WelcomeUser />} />
          <Route path="forgot" element={<ForgotNumber />} />
          <Route path="sign" element={<SignupDelivery />} />
          <Route path="individual" element={<AsIndividual />} />
          <Route path="otp2" element={<DeliveryOtp />} />
          <Route path="individual-v" element={<IndividualVehicle />} />
          <Route path="account" element={<AgentCompleted />} />
          <Route path="success" element={<Success />} />
          <Route path="message" element={<Message />} />
          <Route path="userflow" element={<UserRequestPickup />} />
          <Route path="type" element={<DeliveryType />} />
          <Route path="formuser" element={<FormUserDelivery />} />
          <Route path="summary-i" element={<InstantDeliverySummary />} />
          <Route path="paysuccess" element={<PaymentSuccess />} />
          <Route path="select-a" element={<SelectAgent />} />
          <Route path="schedule-f" element={<ScheduleForm />} />
          <Route path="summary-s" element={<ScheduledDeliverySummary />} />
          <Route path="request-s" element={<RequestSuccess />} />
          <Route path="request-f" element={<RequestFail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
