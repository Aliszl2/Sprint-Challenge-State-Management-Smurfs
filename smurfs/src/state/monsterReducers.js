// import * as reducers from "./reducers";
import { smurfReducer, formReducer } from "./reducers";
import { combineReducers } from "redux";

export const monsterReducer = combineReducers({
  smurfs: smurfReducer,
  formValues: formReducer,
});