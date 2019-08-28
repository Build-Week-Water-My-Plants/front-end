import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export const GETTING_USER = "GETTING_USER";
export const GOT_USER = "GOT_USER";
export const ERROR_GETTING_USER = "ERROR_GETTING_USER";

export const GETTING_PLANTS = "GETTING_PLANTS";
export const GOT_PLANTS = "GOT_PLANTS";
export const ERROR_GETTING_PLANTS = "ERROR_GETTING_PLANTS";

export const GETTING_PLANT = "GETTING_PLANT";
export const GOT_PLANT = "GOT_PLANT";
export const ERROR_GETTING_PLANT = "ERROR_GETTING_PLANT";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

///login
export const loginAction = user => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    axios
      .post(
        "https://doc-watermyplants.herokuapp.com/login",
        `grant_type=password&username=${user.username}&password=${user.password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("turtle-banana:banana-turtle")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        console.dir(err);
        dispatch({ type: LOGIN_FAIL });
      });
  };
};

///plants
export const plantsAction = username => {
  return dispatch => {
    dispatch({ type: GETTING_PLANTS });
    axiosWithAuth()
      .get(
        `https://doc-watermyplants.herokuapp.com/plants/username/${username}`
      )
      .then(res => {
        console.log(res);
        dispatch({ type: GOT_PLANTS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR_GETTING_PLANTS, payload: err });
      });
  };
};

//plant
export const plantAction = dispatch => {
  dispatch({ type: GETTING_PLANT });
};

//signup
export const signupAction = user => {
  return dispatch => {
    dispatch({ type: SIGNUP_START });
    axios
      .post("https://doc-watermyplants.herokuapp.com/createnewuser", user)
      .then(res => {
        console.log("yay sign up worked", res);
      })
      .catch(err => {
        console.log("Sign up didnt work", err);
      });
  };
};

//user
export const userAction = dispatch => {
  dispatch({ type: GETTING_USER });
};
