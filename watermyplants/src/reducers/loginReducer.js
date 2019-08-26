import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/loginActions'

const initialState = {
    isLoggingIn: false,
    isLoggedIn: false,
    error: null,
    token: localStorage.getItem('token')
}

export const loginReducer = (state=initialState, action) => {
    switch (action.type){
        case LOGIN_FAIL:
            return{
                ...state,
                isLoggingIn: false,
                error: payload
            }
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                token: localStorage.getItem('token'),
                error: false
            }
    }
}