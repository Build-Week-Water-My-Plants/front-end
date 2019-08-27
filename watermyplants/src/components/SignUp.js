//Bri
import React, { useState } from "react";
import axios from "axios";

<<<<<<< HEAD
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
=======
//^^^Icon for errors

const SignUp = props => {
  const [login, setLogin] = useState({ user: "", phone: "", password: "" });

  function validatePassword() {
    // If password.input === confirmPassword.input, then only set the finalized user
  }

  const changeHandler = e => {
    console.log(e.target.value);
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  };
  const submitForm = e => {
    e.preventDefault();
    // Calls validatePassword
    const newLogin = {
      ...login
    };
    props.addNewLogin(newLogin);
    setLogin({ user: "", password: "" });
  };

  const handleSubmit = e => {
    axios
      .post(
        "http://doc-watermyplants.herokuapp.com/createnewuser",
        `grant_type=password&username=admin&password=password`,
        {
          headers: {
            Authorization: `Basic ${btoa("turtle-banana:banana-turtle")}`,
            "Content-Type": "application/x-www-form-urlencoded",
            user: { password: "" }
          }
        }
      )
      .then(res => {
        localStorage.setItem("token", res.data.access_token);
        this.props.history.push("/login");
      })
      .catch(err => console.dir(err));
    e.preventDefault();
>>>>>>> 40b047f8afb191a7015f8f8a1b7f7872fe2920ef
  };

  return (
    <section>
      <h1>Water My Plants</h1>
      <form onSubmit={handleSubmit}>
        <h2>Let's Get Started!</h2>
        <div>
<<<<<<< HEAD
          <input type="tel" name="phone" placeholder="Phone Number" />
          <input type="password" name="password" placeholder="Password" />
=======
          <input 
            type="tel" 
            name="phonenumber" 
            placeholder="Phone Number" 
            />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            />
>>>>>>> 40b047f8afb191a7015f8f8a1b7f7872fe2920ef
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            onChange={changeHandler}
          />
<<<<<<< HEAD
          {/* ^^^ I don't know if this should be something else like type="text" for validation */}
          <input type="text" name="username" placeholder="Username" />
          <button type="submit">Start Watering</button>
=======
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={changeHandler}
          />
          <button type="submit" onSubmit={submitForm}>
            Start Watering
          </button>
>>>>>>> 40b047f8afb191a7015f8f8a1b7f7872fe2920ef
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
