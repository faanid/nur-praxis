export const handleSubtract = () => {
  return {
    type: "SUBTRACT",
  };
};
export const handleReset = () => {
  return { type: "RESET" };
};
export const handleAdd = () => {
  return { type: "ADD" };
};

export const handleAddNumber = (amount) => {
  return {
    type: "ADD_NUMBER",
    payload: amount,
  };
};
export const toggleAuth = () => {
  return {
    type: "TOGGLE_AUTH",
  };
};
