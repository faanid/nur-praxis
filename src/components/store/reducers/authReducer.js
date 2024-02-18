const authReducer = (state = true, action) => {
  if (action.type === "TOGGLE_AUTH") {
    return (state = !state);
  }
  return state;
};
export default authReducer;
