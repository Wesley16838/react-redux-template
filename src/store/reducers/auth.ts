import * as types from "../actionTypes";
const user = JSON.parse(localStorage.getItem("user") || '{}');
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function authReducer(state = initialState, action: { response: any; type: String; }) {
  let response = action.response;

  switch(action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { 
          ...state, 
          response,
          isLoggedIn: false,
        };
    case types.REGISTER_USER_ERROR:
      return { 
          ...state, 
          response,
          isLoggedIn: false,
        };
    default:
      return state;
  }
}