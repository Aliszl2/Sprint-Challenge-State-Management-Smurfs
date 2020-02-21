import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {monsterReducer} from "./monsterReducers"


const initialState = {};



const store = createStore(
    monsterReducer, 
      initialState, 
      applyMiddleware(thunk),
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
