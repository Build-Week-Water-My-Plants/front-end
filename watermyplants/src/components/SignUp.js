import React, { useState } from "react";
import { connect } from "react-redux";
import { signupAction } from "../actions";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";

const SignupComponent = props => {
  const [login, setLogin] = useState({ user: "", phone: "", password: "" });

  // /   function validatePassword() {
  //     // If password.input === confirmPassword.input, then only set the finalized user
  //   }

  const changeHandler = e => {
    console.log(e.target.value);
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  };
  const submitForm = e => {
    e.preventDefault();
    // Calls validatePassword
    const newLogin = {
      ...login
    };
    props.addNewLogin(login);
    setLogin({ user: "", password: "" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.signupAction({ username: "HiDoc", password: "test" });
  };

  console.log("formik props", props);
  const { touched, errors } = props;
  return (
    <div className="signup-form">
      <section>
        <h1>Water my Plants</h1>
      </section>
      <section className="signup-display">
        <div className="form-body">
          <h3>Let's get started</h3>
          <Form>
            <Field
              type="text"
              name="phonenumber"
              placeholder="phone: xxx-xxx-xxxx"
            />
            {touched.phonenumber && errors.phonenumber && (
              <p className="form-error">{errors.phonenumber}</p>
            )}
            <Field type="text" name="username" placeholder="username" />
            {touched.username && errors.username && (
              <p className="form-error">{errors.username}</p>
            )}
            <Field type="password" name="password" placeholder="password" />
            {touched.password && errors.password && (
              <p className="form-error">{errors.password}</p>
            )}
            <Field
              type="password"
              name="verifyp"
              placeholder="please retype your password"
            />
            {touched.verifyp && errors.verifyp && (
              <p className="form-error">{errors.verifyp}</p>
            )}
            <button type="submit">Start Watering</button>
          </Form>
        </div>
        <div className="sign-img">
          <p>img</p>
        </div>
      </section>
    </div>
  );
};

const SignUp = withFormik({
  mapPropsToValues: ({ phonenumber, username, password, verifyp }) => {
    return {
      phonenumber: phonenumber || "",
      username: username || "",
      password: password || "",
      verifyp: verifyp || ""
    };
  },
  validationSchema: yup.object().shape({
    phonenumber: yup.string().required("phone number is required"),
    username: yup.string().required("username is required"),
    password: yup
      .string()
      .min(4, "Password must be at least 4 characters long")
      .required("Password is required"),
    verifyp: yup
      .string()
      .min(4, "Password must be at least 4 characters long")
      .required("Please retype your password")
  }),
  handleSubmit: (values, { resetForm, props, setErrors }) => {
    console.log("values", props);
    const { signupAction, history } = props;
    const user = {
      // phonenumber: values.phonenumber,
      username: values.username,
      password: values.password
    };
    if (values.password !== values.verifyp) {
      setErrors({ verifyp: "password does not match" });
    } else {
      console.log("submitHandled");
      signupAction(user);
      //signupAction({ username: "naruto", password: "88" });
      resetForm();
      history.push("/login");
    }
  }
})(SignupComponent);

export default connect(
  null,
  { signupAction }
)(SignUp);
