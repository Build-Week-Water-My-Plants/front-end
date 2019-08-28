import React, { useState } from "react";
import { connect } from "react-redux";
import { signupAction } from "../actions";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";

const SignupComponent = props => {
  console.log("formik props", props);
  const { touched, errors } = props;
  return (
    <div className="signup-form">
      <h1>User Sign in</h1>
      <Form>
        {touched.phonenumber && errors.phonenumber && (
          <p className="form-error">{errors.phonenumber}</p>
        )}
        <Field type="text" name="phonenumber" placeholder="phonenumber" />
        <Field type="text" name="username" placeholder="username" />
        <Field type="password" name="password" placeholder="password" />
        <Field
          type="password"
          name="verifyp"
          placeholder="please retype your password"
        />
        <button type="submit">Submit</button>
      </Form>
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
    phonenumber: yup.number().required("phone number is required"),
    username: yup.string().required("username is required"),
    password: yup
      .string()
      .min(4, "Password must be at least 4 characters long")
      .required("Password is required"),
    verifyp: yup
      .string()
      .min(4, "Password must be at least 4 characters long")
      .required("Please retype your password")
  })
})(SignupComponent);

export default SignUp;

// const SignUp = props => {
//   const [login, setLogin] = useState({ user: "", phone: "", password: "" });

//   function validatePassword() {
//     // If password.input === confirmPassword.input, then only set the finalized user
//   }

//   const changeHandler = e => {
//     console.log(e.target.value);
//     setLogin({ ...login, [e.target.name]: e.target.value });
//     console.log(login);
//   };
//   const submitForm = e => {
//     e.preventDefault();
//     // Calls validatePassword
//     const newLogin = {
//       ...login
//     };
//     props.addNewLogin(login);
//     setLogin({ user: "", password: "" });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     props.signupAction({ username: "HiDoc", password: "test" });
//   };

//   return (
//     <section>
//       <h1>Water My Plants</h1>
//       <form onSubmit={handleSubmit}>
//         <h2>Let's Get Started!</h2>
//         <div>
//           <input type="tel" name="phonenumber" placeholder="Phone Number" />
//           <input type="password" name="password" placeholder="Password" />
//           <input
//             type="password"
//             name="password"
//             placeholder="Confirm Password"
//             onChange={changeHandler}
//           />
//           />
//           <button type="submit" onSubmit={handleSubmit}>
//             Start Watering
//           </button>
//           <p>
//             Have an account? <a href="#">Sign In</a>
//           </p>
//         </div>
//         <img alt="Cartoon women with long hair on a computer in front of window." />
//       </form>
//     </section>
//   );
// };

// export default connect(
//   null,
//   { signupAction }
// )(SignUp);
