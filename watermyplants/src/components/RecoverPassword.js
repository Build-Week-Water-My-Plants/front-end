import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//This page does not need to be functional for MVP.
const RecoverPassword = props => {
  return (
    <section>
      <h1>Water My Plants</h1>
      <FontAwesomeIcon icon={faArrowLeft} />
      <form>
        <h3>Recover Password</h3>
        <p>Please enter your phone number to reset password.</p>
        <input type="tel" name="phone" placeholder="Phone Number" />
        <button type="submit">Send Link</button>
        <p>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </form>
      <img
        src="images/recoverPassword.png"
        alt="Cartoon woman in front of pink trees holding a password sign with asterisks."
      />
    </section>
  );
};

export default RecoverPassword;
