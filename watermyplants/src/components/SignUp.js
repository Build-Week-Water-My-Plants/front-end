//Bri

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
//^^^Icon for errors

const SignUp = props => {
  return (
    <section>
      <h1>Water My Plants</h1>
      <form>
        <h2>Let's Get Started!</h2>
        <div>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
          />
          {/* ^^^ I don't know if this should be something else like type="text" for validation */}
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            />
          <button type="submit">Start Watering</button>
          <p>
            Have an account? <a href="#">Sign In</a>
          </p>
        </div>
        <img
          src="images/signUp.png"
          alt="Cartoon women with long hair on a computer in front of window."
        />
      </form>
    </section>
  );
};

export default SignUp;
