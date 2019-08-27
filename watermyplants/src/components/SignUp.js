//Bri

import React from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
//^^^Icon for errors

const SignUp = props => {
  //fake data for testing-delete when actual useState from form is implemented

  const user = {
    username: "test",
    password: "test"
  };

  const handleSubmit = e => {
    e.preventDefault();
    // axios
    //   .post("https://doc-watermyplants.herokuapp.com/createnewuser", {
    //     headers: {
    //       // Authorization: `Basic ${btoa("turtle-banana:banana-turtle")}`,
    //       "Content-Type": "application/x-www-form-urlencoded",
    //       username: "pokemon",
    //       password: "password"
    //     }
    //   })
    //   .then(res => {
    //     console.log("sign up", res);
    //   })
    //   .catch(err => console.dir("sign up didn't work", err));
    axios
      .post("https://doc-watermyplants.herokuapp.com/createnewuser", user)
      .then(res => {
        console.log(res);
        // return this.props.history.push("/login");
      })
      .catch(err => {
        console.log("sign up didnt work", err);
        // return this.props.history.push("/login");
      });
  };

  return (
    <section>
      <h1>Water My Plants</h1>
      <form onSubmit={handleSubmit}>
        <h2>Let's Get Started!</h2>
        <div>
          <input type="tel" name="phone" placeholder="Phone Number" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
          />
          {/* ^^^ I don't know if this should be something else like type="text" for validation */}
          <input type="text" name="username" placeholder="Username" />
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
