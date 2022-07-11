import React from "react";
// import { useForm } from "react-hook-form";
import Button from "./Button";
import Head from "./Head";
import ProgressM from "../Images/ProgressI.png";
import "../css/Personal.css";
import Vector from "../Images/Vector.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { CirclePlus } from "tabler-icons-react";

export default function JoinAgent(props) {
  const asterik = <span id="asterik">*</span>;
  // const { register, handleSubmit, errors } = useForm();
  return (
    <>
      <Head />
      <div id="mainsign">
        <h2>{props.delivery}</h2>
        <br />
        <img src={ProgressM} alt="Progress" />
        <br />
        <br />

        <form>
          <label className="requiredText">Full name{asterik}</label>
          <input
            type="text"
            className="form-field edit-field"
            placeholder="Enter your full name"
            name="Fullname"
            required={true}
          />
          <br />

          <label className="requiredText">Email{asterik}</label>
          <input
            type="email"
            className="form-field edit-field"
            placeholder="Enter your Email"
            name="Email"
          />
          <br />

          <label className="requiredText">Phone Number{asterik}</label>
          <input
            type="text"
            className="form-field edit-field"
            placeholder="Enter your Phone Number"
            name="PhoneNumber"
          />
          <br />

          <div className="field" id="second">
            <label htmlFor="Address">
              <span className="requiredText">Address{asterik}</span> <br />
              <input
                type="text"
                className="secondField"
                placeholder="Enter your Address"
                name="Address"
              />
            </label>

            <label htmlFor="State">
              <span className="requiredText">State{asterik}</span>
              <br />
              <input
                type="text"
                className="secondField"
                placeholder="Enter your State"
                name="State"
              />
            </label>
          </div>

          <div className="field">
            <legend className="requiredText">Gender{asterik}</legend>
            <section id="check">
              <label className="check" htmlFor="gender">
                Male
              </label>
              <input
                id="maleCheck"
                type="checkbox"
                value="male"
                name="gender"
              />

              <label className="check" htmlFor="gender">
                Female
              </label>
              <input
                id="maleCheck"
                type="checkbox"
                value="female"
                name="gender"
              />
            </section>
          </div>

          <div className="field">
            <legend className="requiredText">
              Upload your passport or selfie{asterik}{" "}
              <span className="Upload" id="uploadText">
                {" "}
                N/B: Image must clearly show your face.
              </span>
            </legend>
            <br />

            <section id="vector-sec">
              <div className="Upload" id="vector">
                <label>
                  <img src={Vector} alt="Vector" />
                  <input type="file" accept="image/*" name="selfie" />
                </label>
              </div>
            </section>
          </div>
          <Link to={props.link}>
            <Button name="Next" type="submit" />
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}
