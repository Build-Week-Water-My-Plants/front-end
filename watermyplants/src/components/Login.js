//Bri
import React from "react";
<<<<<<< HEAD
import axios from "axios";
import { connect } from "react";
import { loginAction } from "../actions";
=======
import axios from 'axios'
import { connect } from 'react-redux'
import {loginAction} from '../actions';
>>>>>>> 7142830eddf8bf6b304d42201492726c4b424569
// import img from "../../public/images/login.png";

const Login = props => {
  const handleSubmit = e => {
<<<<<<< HEAD
    e.preventDefault();
    props.loginAction({ username: "admin", password: "password" });
  };
=======
    e.preventDefault()
    props.loginAction({username: 'admin', password: 'password'})
  }


>>>>>>> 7142830eddf8bf6b304d42201492726c4b424569

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
          <input type="password" name="password" placeholder="Password" />
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

<<<<<<< HEAD
mapStateToProps = state => {
  return null;
};
export default connect(
  mapStateToProps,
  { loginAction }
=======

export default connect(null, {loginAction}
>>>>>>> 7142830eddf8bf6b304d42201492726c4b424569
)(Login);
