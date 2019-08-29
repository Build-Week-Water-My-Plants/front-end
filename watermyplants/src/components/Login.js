import React, { useState } from "react";
// import { Route, Link } f rom "react-router-dom";
import { connect } from "react-redux";
import { loginAction} from "../actions";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import "../sass/Login.scss";
const Login = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.loginAction({ username: "admin", password: "password" });
  };
  console.log("Formik Props: ", props);
  const { touched, errors } = props;

  return (
    <div className="login-page">
      <h1>Water my Plants</h1>
      <div className="login-form">
        <Form className="login">
          <h2>Welcome Back!</h2>
          <div className="user-info">
            <div className="user">
              <Field
                type="text"
                name="username"
                placeholder="Username or Phone"
                className="username"
              />
              {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
              )}

              <Field type="password" name="password" placeholder="Password" className="password" />
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>
            <button onClick={e => handleSubmit(e)} type="submit">
              Sign In
            </button>
          </div>
          <div className="sign-in">
              <p>Don't have an account?</p>
            <a href="#">Sign Up</a>
          </div>
        </Form>
        <img src="images/login.png" />
      </div>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  })
})(Login);

export default connect(
  null,
  { loginAction }
)(FormikLogin);

// //Bri
