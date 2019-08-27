//Bri
import React from "react";

const Login = props => {
  return (
    <section>
      <h1>Water My Plants</h1>
      <form>
        <h2>Welcome Back!</h2>
        <div>
          <input
            type="text"
            name="text"
            placeholder="Username or Phone Number"
          />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
      </form>
    </section>
  );
};

export default Login;
