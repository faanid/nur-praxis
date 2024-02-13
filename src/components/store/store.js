import { createStore } from "redux";

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

//create a store

const store = createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
