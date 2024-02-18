import { ACTIONS } from "../actions/actionTypes";

const authReducer = (state = true, action) => {
  if (action.type === ACTIONS.TOGGLE_AUTH) {
    return (state = !state);
  }
  return state;
};
export default authReducer;
