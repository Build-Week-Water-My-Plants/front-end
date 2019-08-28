import React, { useState } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const Login = props => {
  console.log("Formik Props: ", props);
  const { touched, errors } = props;

  return (
    <div className="login-form">
      <h1>Welcome Back!</h1>
      <Form className="login">
        <div className="user-info">
          <div className="user">
            <Field type="text" name="username" placeholder="Username or Phone" />
            {touched.username && errors.username && (
              <p className="error">{errors.username}</p>
            )}

            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>
          <button type="submit">Create Account</button>
        </div>
        <div className="sign-in">
          <div className="no-account">
            <a href="#">Have an account?</a>
            <p>Sign In</p>
          </div>
        </div>
      </Form>
      <img src="" />
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  })
})(Login);

export default FormikLogin;

// //Bri
// import React from "react";
// import axios from "axios";
// import { connect } from "react-redux";
// import { loginAction } from "../actions";
// // import img from "../../public/images/login.png";

// const Login = props => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     props.loginAction({ username: "admin", password: "password" });
//   };

//   return (
//     <section>
//       <h1>Water My Plants</h1>
//       <form onSubmit={handleSubmit}>
//         <h2>Welcome Back!</h2>
//         <div>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username or Phone Number"
//           />
//           {/* ^^^ will this be for both? On the design doc it's suppose to be this way but we can just do username */}
//           <input type="password" name="password" placeholder="Password" />
//           <a href="#">Forgot your password?</a>
//           <button type="submit">Sign In</button>
//           <p>
//             Don't have an account? <a href="#">Sign Up</a>
//           </p>
//         </div>
//         <img
//           src="images/login.png"
//           alt="Cartoon girl with key in hand to unlock a phone."
//         />
//       </form>
//     </section>
//   );
// };

// export default connect(
//   null,
//   { loginAction }
// )(Login);
