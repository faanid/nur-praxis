import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slice/counterSlice";
import authReducer from "./slice/authSlice";

//create a store
const store = configureStore({
  reducer: {
    counter: countReducer,
    auth: authReducer,
  },
});

export default store;
