//Bri
import React from "react";
import axios from 'axios'
import { loginAction } from '../actions/actions'
// import img from "../../public/images/login.png";


const Login = props => {

  const handleSubmit = e => {
    e.preventDefault()
    props.loginAction({
      username: 'admin',
      password: 'password',
    })
  }



  return (
    <section>
      <h1>Water My Plants</h1>
      <form onSubmit={handleSubmit}>
        <h2>Welcome Back!</h2>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username or Phone Number"
          />
          {/* ^^^ will this be for both? On the design doc it's suppose to be this way but we can just do username */}
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
