const countReducer = (state = 0, action) => {
  if (action.type === "SUBTRACT") {
    return state - 1;
  }
  if (action.type === "ADD") {
    return state + 1;
  }
  if (action.type === "ADD_NUMBER") {
    return state + action.payload;
  }
  if (action.type === "RESET") {
    return (state = 0);
  }
  return state;
};

export default countReducer;
