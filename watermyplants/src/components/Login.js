import React, { useState } from "react";
// import { Route, Link } f rom "react-router-dom";
import { connect } from "react-redux";
import { loginAction} from "../actions";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const Login = props => {
  const handleSubmit = e => {
        e.preventDefault();
        props.loginAction({ username: "admin", password: "password" });
      };
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
          <button onClick={(e) =>handleSubmit(e)}type="submit">Login</button>
        </div>
        <div className="sign-in">
          <div className="no-account">
            {/* <p>Don't have an account?</p>
            <Link exact to="/">Sign Up</Link> */}
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


export default connect(
  null,
  { loginAction}
)(FormikLogin);

// //Bri