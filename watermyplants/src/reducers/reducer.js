import {
  GETTING_PLANTS,
  GOT_PLANTS,
  ERROR_GETTING_PLANTS,
  GETTING_USER,
  GOT_USER,
  ERROR_GETTING_USER,
  GETTING_PLANT,
  GOT_PLANT,
  ERROR_GETTING_PLANT,
  LOGIN_START,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  DELETEPLANT_FAIL,
  DELETEPLANT_START,
  DELETEPLANT_SUCCESS,
  UPDATE_PLANT_FAILED,
  UPDATE_PLANT_START,
  UPDATE_PLANT_SUCCESS,
  ADD_PLANT_FAILED,
  ADD_PLANT_START,
  ADD_PLANT_SUCCESS,
  DELETEUSER_FAIL,
  DELETEUSER_START,
  DELETEUSER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS
} from "../actions/actions";

const initialState = {
  login: {
    isLoggedIin: false,
    isLoggingIn: false,
    error: ""
  },

  signUp: {
    isSigningUp: false,
    isSignedUp: false,
    error: ""
  },

  user: {
    userid: "",
    password: "",
    username: "",
    phonenumber: "",
    isLoading: false,
    error: ""
  },

  plants: {
    data: [],
    isLoading: false,
    error: ""
  },

  plant: {
    plantid: "",
    species: "",
    name: "",
    time: "",
    user: "",
    isLoading: false,
    error: ""
  }
};

export const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          isSigningUp: true,
          error: ""
        }
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUp: {
          isSigningUp: false,
          isSignedUp: true,
          error: ""
        }
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        signUp: {
          isSigningUp: false,
          isSignedUp: false,
          error: action.payload
        }
      };

    case LOGIN_START:
      return {
        ...state,
        login: {
          isLoggingIn: true,
          error: "",
          isLoggedIin: false
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          isLoggingIn: false,
          isLoggedIin: true,
          error: ""
        }
      };
    case LOGIN_FAIL:
      return {
        ...state,
        login: {
          isLoggedIin: false,
          isLoggingIn: false,
          error: action.payload
        }
      };

    case GETTING_USER:
      return {
        ...state,
        user: {
          isLoading: true,
          ...state.user,
          error: ""
        }
      };
    case GOT_USER:
      return {
        ...state,
        user: {
          ...action.payload,
          isLoading: false,
          error: ""
        }
      };
    case ERROR_GETTING_USER:
      return {
        ...state,
        user: {
          error: action.payload,
          isLoading: false,
          ...state.user
        }
      };
    case GETTING_PLANTS:
      return {
        ...state,
        plants: {
          isLoading: true,
          error: "",
          ...state.plants
        }
      };
    case GOT_PLANTS:
      return {
        ...state,
        plants: {
          ...state.plants,
          error: "",
          data: [...action.payload],
          isLoading: false
        }
      };

    case ERROR_GETTING_PLANTS:
      return {
        ...state,
        plants: {
          error: action.payload,
          isLoading: false,
          ...state.plants
        }
      };
    case GETTING_PLANT:
      return {
        ...state,
        plant: {
          isLoading: true,
          error: "",
          ...state.plant
        }
      };
    case GOT_PLANT:
      return {
        ...state,
        plant: {
          ...action.payload,
          isLoading: false,
          error: ""
        }
      };
    case ERROR_GETTING_PLANT:
      return {
        ...state,
        plant: {
          ...state.plant,
          isLoading: false,
          error: action.payload
        }
      };
    case ADD_PLANT_START:
      return {
        ...state,
        plants: {
          ...state.plants,
          isLoading: true,
          error: ""
        }
      };
    case ADD_PLANT_SUCCESS:
      return {
        ...state,
        plants: {
          ...state.plants,
          data: [...action.payload],
          isLoading: false,
          error: ""
        }
      };

    case ADD_PLANT_FAILED:
      return {
        ...state,
        plants: {
          ...state.plants,
          isLoading: false,
          error: action.payload
        }
      };
    case UPDATE_PLANT_START:
      return {
        ...state,
        plants: {
          ...state.plants,
          isLoading: true,
          error: ""
        }
      };
    case UPDATE_PLANT_SUCCESS:
      return {
        ...state,
        plants: {
          ...state.plants,
          data: [...action.payload],
          isLoading: false,
          error: ""
        }
      };
    case UPDATE_PLANT_FAILED:
      return {
        ...state,
        plants: {
          ...state.plants,
          isLoading: false,
          error: action.payload
        }
      };
    case DELETEPLANT_FAIL:
      return {
        ...state,
        plants: {
          ...state.plants,
          isLoading: false,
          error: action.payload
        }
      };
    case DELETEPLANT_START:
      return {
        ...state,
        plants: {
          ...state.plants,
          isLoading: true,
          err: ""
        }
      };
    case DELETEPLANT_SUCCESS:
      return {
        ...state,
        plants: {
          ...state.plants,
          error: "",
          data: [...action.payload],
          isLoading: false
        }
      };

    case UPDATE_USER_START:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: true,
          error: ""
        }
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...action.payload,
          isLoading: false,
          error: ""
        }
      };

    case UPDATE_USER_FAIL:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: false,
          error: action.payload
        }
      };

    ///update user, delete user needs added
  }
};

// DELETEUSER_FAIL,
// DELETEUSER_START,
// DELETEUSER_SUCCESS,
// UPDATE_USER_FAIL,
// UPDATE_USER_START,
// UPDATE_USER_SUCCESS
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
