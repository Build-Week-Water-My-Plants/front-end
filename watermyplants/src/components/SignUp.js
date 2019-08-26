//Bri

import React from "react";

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
            <input
              type="username"
              name="username"
              placeholder="Username"
            />
            <button type="submit">Start Watering</button>
            <p>Have an account? <a href="#">Sign In</a></p>
          </div>
          <img src="https://via.placeholder.com/150" alt="placeholder"/>
        </form>
      </section>
    );
  };
  
  export default SignUp;