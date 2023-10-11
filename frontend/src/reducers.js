import { combineReducers } from "redux";

const initialVoterState = {
  name: null,
  vote: null,
};

function voter(state = initialVoterState, action) {
  console.log("hi")
  switch (action.type) {
    case "GREEN":
      return { ...state, name: action.voter, vote: "green" };
    case "RED":
      return { ...state, name: action.voter, vote: "red" };
    case "RESET":
      return { ...state, name: action.voter, vote: null };
    default:
      return state;
  }
}

const initialProjectorState = {
  position: null,
  isMoving: false,
  error: null
}

function projector(state = initialProjectorState, action) {
  switch (action.type) {
    case "MOVE_PROJECTOR_STARTED":
      return { ...state, isMoving: true, error: null };
    case "MOVE_PROJECTOR_SUCCEEDED":
      return { ...state, isMoving: false };
    case "MOVE_PROJECTOR_FAILED":
      return { ...state, isMoving: false, error: action.error };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  voter,
  projector
});

export default rootReducer;