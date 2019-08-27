//Bri
import React from "react";
<<<<<<< HEAD
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

=======
import axios from 'axios'
>>>>>>> 14635e11931bb510b2f4a7e36e31d09de75ce028
// import img from "../../public/images/login.png";

const Login = props => {
  const handleSubmit = e => {
<<<<<<< HEAD
    e.preventDefault();
    axios
      .post(
        "http://doc-watermyplants.herokuapp.com/login",
        `grant_type=password&username=admin&password=password`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("turtle-banana:banana-turtle")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        console.log("login success", res);
        localStorage.setItem("token", res.data.access_token);
        // this.props.history.push("/users");
=======
    axios.post('https://doc-watermyplants.herokuapp.com/login', `grant_type=password&username=admin&password=password`, {
      headers: {
        Authorization: `Basic ${btoa('turtle-banana:banana-turtle')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        localStorage.setItem('token', res.data.access_token);
>>>>>>> 14635e11931bb510b2f4a7e36e31d09de75ce028
      })
      .catch(err => console.dir(err));
    e.preventDefault();
  };


  return (
    <section>
      <h1>Water My Plants</h1>
      <form onSubmit={handleSubmit}>
        <h2>Welcome Back!</h2>
        <div>
          <input
            type="text"
            name="user"
            placeholder="Username or Phone Number"
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
        <img
          src="images/login.png"
          alt="Cartoon girl with key in hand to unlock a phone."
        />
      </form>
    </section>
  );
};

export default Login;
