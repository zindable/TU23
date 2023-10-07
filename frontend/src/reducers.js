import { combineReducers } from "redux";

const initialUserState = {
  user: null,
  isLoading: false,
  error: null,
};

function user(state = initialUserState, action) {
  switch (action.type) {
    case "FETCH_ACCOUNT_DETAILS_STARTED":
      return { ...state, isLoading: true, error: null };
    case "FETCH_ACCOUNT_DETAILS_SUCCEEDED":
      return {
        ...state,
        isLoading: false,
        balance: action.balance,
        user: action.user,
      };
    case "FETCH_TRANSACTIONS_FAILED":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}

function getInitialAuthenticationState() {
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user");
  if (token && user) {
    return {
      isAuthenticated: true,
      token,
      user: JSON.parse(user),
    };
  } else {
    return {
      isAuthenticated: false,
      token: undefined,
      user: undefined,
    };
  }
}

function authentication(state = getInitialAuthenticationState(), action) {
  switch (action.type) {
    case "AUTHENTICATION_SUCCEEDED":
      return {
        ...state, // Not necessary because we set all properties, but a
        // precaution should we later add more properties to this state slice.
        isAuthenticated: true,
        token: action.token,
        user: action.user,
      };
    case "SIGNOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: undefined,
        user: undefined,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  authentication,
});

export default rootReducer;