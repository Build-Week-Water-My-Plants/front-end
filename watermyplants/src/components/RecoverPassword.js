import React from "react";
<<<<<<< HEAD
import {  Link } from "react-router-dom";
=======
import "../sass/recover.scss";
import NavLogin from "./NavLogin";
import { Link } from "react-router-dom";
>>>>>>> 2e255ceb8fad8a1a9b354810899e40dcf837c3d9

//This page does not need to be functional for MVP.
const RecoverPassword = props => {
  return (
    <>
      <NavLogin />
      <section className="recover-container">
        <h2>Water My Plants</h2>
        <div className="recover-inner">
          <form className="recover-form">
            <Link to="/login" className="go-back-recover">
              <img src="images/arrow.svg" />
              <h5>Go back</h5>
            </Link>
            <h3>Recover Password</h3>
            <p>Please enter your phone number to reset password.</p>
            <input
              className="recover-input"
              type="tel"
              name="phonenumber"
              placeholder="Phone Number"
            />
            <button type="submit">Send Link</button>
            <p>
              Don't have an account?
              <Link to="/signup">Sign Up</Link>
            </p>
          </form>
          <img
            src="images/recoverPassword.png"
            alt="Cartoon woman in front of pink trees holding a password sign with asterisks."
          />
        </div>
      </section>
    </>
  );
};

export default RecoverPassword;
