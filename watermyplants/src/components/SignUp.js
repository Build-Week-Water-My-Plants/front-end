//Bri

import React from "react";
import axios from 'axios'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
//^^^Icon for errors

const SignUp = props => {

  const handleSubmit = e => {
    axios.post('http://doc-watermyplants.herokuapp.com/createnewuser', `grant_type=password&username=admin&password=password`, {
      headers: {
        Authorization: `Basic ${btoa('turtle-banana:banana-turtle')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        user: {password: '', }
      }
    })
      .then(res => {
        localStorage.setItem('token', res.data.access_token);
        this.props.history.push('/login');
      })
      .catch(err => console.dir(err));
    e.preventDefault();
  }

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
