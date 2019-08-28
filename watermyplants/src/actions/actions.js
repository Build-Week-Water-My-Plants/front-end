import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

export const GETTING_USER = 'GETTING_USER';
export const GOT_USER = 'GOT_USER';
export const ERROR_GETTING_USER = 'ERROR_GETTING_USER';

export const GETTING_PLANTS = 'GETTING_PLANTS';
export const GOT_PLANTS = 'GOT_PLANTS';
export const ERROR_GETTING_PLANTS = 'ERROR_GETTING_PLANTS';

export const GETTING_PLANT = 'GETTING_PLANT';
export const GOT_PLANT = 'GOT_PLANT';
export const ERROR_GETTING_PLANT = 'ERROR_GETTING_PLANT';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';

export const DELETEPLANT_START = 'DELETEPLANT_START'
export const DELETEPLANT_SUCCESS = 'DELETEPLANT_SUCCESS'
export const DELETEPLANT_FAIL = 'DELETEPLANT_FAIL'

export const DELETEUSER_START = 'DELETEUSER_START'
export const DELETEUSER_SUCCESS = 'DELETEUSER_SUCCESS'
export const DELETEUSER_FAIL = 'DELETEUSER_FAIL'

export const UPDATE_USER_START = 'UPDATE_USER_START'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL'

///login 
export const loginAction = (user) => {
    return dispatch => {
        dispatch({type: LOGIN_START})
        axios.post('https://doc-watermyplants.herokuapp.com/login', `grant_type=password&username=${user.username}&password=${user.password}`, {
            headers: {
                Authorization: `Basic ${btoa('turtle-banana:banana-turtle')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.access_token);
                dispatch({ type: LOGIN_SUCCESS })
            })
            .catch(err => {
                console.dir(err)
                dispatch({ type: LOGIN_FAIL })
            });
    }

}

//signup
export const signupAction = (user) => {
    return dispatch => {
        dispatch({ type: SIGNUP_START })
        axios
            .post('https://doc-watermyplants.herokuapp.com/createnewuser', user)
            .then(res => {
                console.log(res)
                dispatch({ type: SIGNUP_SUCCESS})
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: SIGNUP_FAILED})
            })
    }
}

//user
export const userAction = (userid) => {
    return dispatch => {
    dispatch({ type: GETTING_USER })
    axiosWithAuth()
    .get(`https://doc-watermyplants.herokuapp.com/users/user/${userid}`)
    .then(res => {
        console.log(res)
        dispatch({type: GOT_USER})
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: ERROR_GETTING_USER })
    })
    }
}

//update user 
export const updateUser =(id) => {
    return dispatch => {
        dispatch({ type: UPDATE_USER_START})
        axiosWithAuth()
        .put(`https://doc-watermyplants.herokuapp.com/users/user/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATE_USER_SUCCESS})
        })
        .catch(err=> {
            console.log(err)
            dispatch({ type: UPDATE_USER_FAIL})
        })
    }
}



///delete user 
export const deleteUser = (userid) => {
    return dispatch => {
        dispatch ({ type: DELETEUSER_START})
        axiosWithAuth()
        .delete(`https://doc-watermyplants.herokuapp.com/users/user/${userid}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETEUSER_SUCCESS})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: DELETEUSER_FAIL})
        })
    }
}

///plants
export const plantsAction = (username) => {
    return dispatch => {
        dispatch({type: GETTING_PLANTS})
        axiosWithAuth()
        .get(`https://doc-watermyplants.herokuapp.com/plants/username/${username}`)
        .then(res => {
            console.log(res)
            dispatch({type: GOT_PLANTS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: ERROR_GETTING_PLANTS, payload: err})
        })
    }
}

///delete a plant
export const deletePlant = (id) => {
    return dispatch => {
        dispatch({ type: DELETEPLANT_START})
        axiosWithAuth()
        .delete(`https://doc-watermyplants.herokuapp.com/plants/plant/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETEPLANT_SUCCESS})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: DELETEPLANT_FAIL})
        })
    }
}


//plant
export const plantAction = (id) => {
    return dispatch => {
    dispatch({ type: GETTING_PLANT })
    axiosWithAuth()
    .get(`https://doc-watermyplants.herokuapp.com/plants/plant/${id}`)
    console.log( plantAction)
    .then(res => {
        console.log(res)
        dispatch({ type: GOT_PLANT})
    })
    .catch( err => {
        console.log(err)
        dispatch({ type: ERROR_GETTING_PLANT})
    })
    }
}