import { axiosInstance } from "../utils/axiosInstance";

export const IS_SIGNING_UP = "IS_SIGNING_UP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_OVER = "SIGNUP_OVER";

/*user should be of object type 
{
    'phone': '',
    'password': '',
    'confirmation:'',
    'username': ''
}
*/

export const signUpAction = (dispatch, user) => {
  dispatch({ type: IS_SIGNING_UP });
  axiosInstance()
    .post("/createnewuser", user)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_ERROR, payload: err.response.data.message });
    });
};
