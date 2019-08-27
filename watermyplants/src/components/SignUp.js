//Bri
import React, { useState } from "react";
import axios from "axios";

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
            name="phonenumber" 
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
            onChange={changeHandler}
          />
          />
          <button type="submit" onSubmit={submitForm}>
            Start Watering
          </button>
          <p>
            Have an account? <a href="#">Sign In</a>
          </p>
        </div>
        <img
          alt="Cartoon women with long hair on a computer in front of window."
        />
      </form>
    </section>
  );
};

export default SignUp;
