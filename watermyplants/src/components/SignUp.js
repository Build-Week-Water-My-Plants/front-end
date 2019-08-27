//Bri
import React from "react";
import { useState } from "react-scripts";
import axios from "axios";

<<<<<<< HEAD
=======
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
>>>>>>> dc10f4c69c1bb8dfd3ef74a6a4fe18d8ed7b49ae
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
  };

  return (
    <section>
      <h1>Water My Plants</h1>
      <form onSubmit={handleSubmit}>
        <h2>Let's Get Started!</h2>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={changeHandler}
          />
    
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={changeHandler}
          />
          <button type="submit" onSubmit={submitForm}>
            Start Watering
          </button>
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
