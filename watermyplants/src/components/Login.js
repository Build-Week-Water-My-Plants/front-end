import React, { useState } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import { loginAction, addPlant, plantsAction } from "../actions";
// import img from "../../public/images/login.png";

const Login = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.loginAction({ username: "admin", password: "password" });
    props.addPlant({species: 'testplant', name: 'test the plant', time: '28-08-2019 9:00:00', location: 'A house', user: {
      userid: 4,
      username: 'admin',
      
    }})
    props.plantsAction('admin')
  };
=======
import { loginAction } from "../actions";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const Login = props => {
  const handleSubmit = e => {
        e.preventDefault();
        props.loginAction({ username: "admin", password: "password" });
      };
  console.log("Formik Props: ", props);
  const { touched, errors } = props;
>>>>>>> e8732bc98b08c51752e531caea3adc1fdee88235

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
          <button onClick={(e) =>handleSubmit(e)}type="submit">Create Account</button>
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


export default connect(
  null,
<<<<<<< HEAD
  { loginAction, addPlant, plantsAction}
)(Login);
=======
  { loginAction }
)(FormikLogin);

// //Bri
>>>>>>> e8732bc98b08c51752e531caea3adc1fdee88235
