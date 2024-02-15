import { createStore, combineReducers } from "redux";

//Reducer
const countReducer = (state = 0, action) => {
  if (action.type === "SUBTRACT") {
    return state - 1;
  }
  if (action.type === "ADD") {
    return state + 1;
  }
  if (action.type === "RESET") {
    return (state = 0);
  }
  return state;
};

const authReducer = (state = true, action) => {
  if (action.type === "TOGGLE_AUTH") {
    return (state = !state);
  }
  return state;
};

const reducers = combineReducers({
  count: countReducer,
  isLoggedIn: authReducer,
});

//create a store
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
