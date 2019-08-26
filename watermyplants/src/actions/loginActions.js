import {axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const login = (dispatch, user) => {
    dispatch({ type: LOGIN_START})
    axiosWithAuth()
    .post('http://doc-watermyplants.herokuapp.com/login', user)
    .then(response => {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data.message})
    })
    .catch(error => {
        dispatch({ type: LOGIN_FAIL, payload: error.message.data.message})
    })
}