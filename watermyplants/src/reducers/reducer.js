import {
    GETTING_PLANTS,
    GOT_PLANTS,
    ERROR_GETTING_PLANTS,
    GETTING_USER,
    GOT_USER,
    ERROR_GETTING_USER,
    GETTING_PLANT, GOT_PLANT,
    ERROR_GETTING_PLANT,
    LOGIN_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGNUP_FAILED,
    SIGNUP_START,
    SIGNUP_SUCCESS
} from '../actions/actions';



const initialState = {
    login: {
        isLoggedIin: false,
        isLoggingIn: false,
        error: '',
    },

    signUp: {
        isSigningUp: false,
        isSignedUp: false,
        error: '',
    },

    user: {
        password: '',
        username: '',
        phonenumber: '',
        isLoading: false,
        error: '',
    },

    plants: {
        data: [],
        isLoading: false,
        error: '',
    },

    plant: {
        id: '',
        species: '',
        name: '',
        daysofweek: [],
        time: '',
        isLoading: false,
        error: '',
    }
}

export const plantsReducer = (state, action) => {
    switch (action.type) {
        case SIGNUP_START: 
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    isSigningUp: true,
                    error: '',
                }
            }
        case SIGNUP_SUCCESS: 
            return {
                ...state,
                signUp: {
                    isSigningUp: false,
                    isSignedUp: true,
                    error: '',
                }
            }
        case SIGNUP_FAILED: 
            return {
                ...state,
                signUp: {
                    isSigningUp: false,
                    isSignedUp: false,
                    error: action.payload
                }
            }

        case LOGIN_START: 
            return {
                ...state,
                login: {
                    isLoggingIn: true,
                    error: '',
                    isLoggedIin: false,
                }, 
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                login: {
                    isLoggingIn: false,
                    isLoggedIin: true,
                    error: '',
                },
            }
        case LOGIN_FAIL: 
            return {
                ...state,
                login : {
                    isLoggedIin: false,
                    isLoggingIn: false,
                    error: action.payload,
                }
            }
        
        case GETTING_USER: 
            return {
                ...state,
                user: {
                    isLoading: true,
                    ...state.user,
                    error: '',
                }
            }
        case GOT_USER: 
            return {
                ...state,
                user: {
                    ...action.payload,
                    isLoading: false,
                    error: '',
                }
            }
        case ERROR_GETTING_USER: 
            return {
                ...state,
                user: {
                    error: action.payload,
                    isLoading: false,
                    ...state.user,
                }
            }
        case GETTING_PLANTS: 
            return {
                ...state,
                plants: {
                    isLoading: true,
                    error: '',
                    ...state.plants,
                }
            }
        case GOT_PLANTS: 
            return {
                ...state,
                plants: {
                    ...state.plants,
                    error: '',
                    data: [...action.payload],
                    isLoading: false,
                }
            }
        
        case ERROR_GETTING_PLANTS: 
            return {
                ...state,
                plants: {
                    error: action.payload,
                    isLoading: false,
                    ...state.plants,
                }
            }
        case GETTING_PLANT: 
            return {
                ...state,
                plant: {
                    isLoading: true,
                    error: '',
                    ...state.plant,
                }
            }
        case GOT_PLANT: 
            return {
                ...state,
                plant: {
                    ...action.payload,
                    isLoading: false,
                    error: '',
                }
            }
        case ERROR_GETTING_PLANT: 
            return {
                ...state,
                plant: {
                    ...state.plant,
                    isLoading: false,
                    error: action.payload,
                }
            }
    }
}


// //export const loginReducer = (state=initialState, { type, payload}) => {
    // ERROR_GETTING_USER,
    // GETTING_PLANT, GOT_PLANT,
    // ERROR_GETTING_PLANT,
    // GETTING_PLANTS,
    // GOT_PLANTS,
    // ERROR_GETTING_PLANTS,
//     switch (type){
//         case LOGIN_FAIL:
//             return{
//                 ...state,
//                 isLoggingIn: false,
//                 error: payload
//             }
//         case LOGIN_START:
//             return {
//                 ...state,
//                 isLoggingIn: true,
//                 error: false
//             }
//         case LOGIN_SUCCESS:
//             return{
//                 ...state,
//                 isLoggingIn: false,
//                 isLoggedIn: true,
//                 token: localStorage.getItem('token'),
//                 error: false
//             }
//         default:
//             return state;
//     }
//  }