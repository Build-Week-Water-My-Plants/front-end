// import {axiosWithAuth } from '../utils/axiosWithAuth'
import { axiosInstance } from "../utils/axiosInstance";
import axios from 'axios';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOGOUT = 'LOGOUT'

export const loginAction = (dispatch, user) => {
    dispatch({ type: LOGIN_START });
    axiosInstance()
      .post("/login", user)
    .then(response => {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data.message})
        localStorage.setItem('token')
    })
    .catch(error => {
        dispatch({ type: LOGIN_FAIL, payload: error.message.data.message})
    })
}

export const logout = (dispatch) => {
  dispatch({ type: LOGOUT})
   axios.get('http://doc-watermyplants.herokuapp.com/oauth/revoke-token')
    .catch(error => {
        console.log(error.message)
    })
}