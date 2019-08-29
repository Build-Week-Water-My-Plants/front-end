import React from "react";
import {  Link } from "react-router-dom";


//This page does not need to be functional for MVP.
const RecoverPassword = props => {
  return (
    <section>
      <h1>Water My Plants</h1>
      <form>
        <h3>Recover Password</h3>
        <p>Please enter your phone number to reset password.</p>
        <input 
          type="tel" 
          name="phonenumber" 
          placeholder="Phone Number" 
          />
        <button type="submit">Send Link</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
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
