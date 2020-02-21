import * as types from "./types";

const initialState = []
export function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SMURFS_START:
      return state
      case types.POST_SMURFS_START:
        return state
    case types.FETCH_SMURFS:
      return action.payload
    case types.NEW_SMURF:
      return state.concat(action.payload)
      case types.DELETE_SMURF:
        return action.payload
    default:
      return state;
  }
}

const initialStateForm = {
  name: "",
  age: "",
  height: ""
};
export function formReducer(state = initialStateForm, action) {
  // ACTION { type: "INPUT_CHANGE", payload: { inputName: 'title', inputValue: "S" }}
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      };
    case types.RESET_INPUTS:
      return state;

    default:
      return state;
  }
}
const initialStateSpinner = false;
export function spinnerReducer(state = initialStateSpinner, action) {
  switch (action.type) {
    case types.SPINNER_START:
      return true;
    case types.SPINNER_STOP:
      return initialStateSpinner;
    default:
      return state;
  }
}
