import "../App.css";
import Button from "./Button/Button";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state);
  //   console.log(count);
  const dispatch = useDispatch();

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
    });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD" });
  };

  let color = "#fff";
  if (count >= 1) {
    color = "yellow";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "white";
  }

  return (
    <section className="counter-sec --flex-center">
      <div className="container counter --card --center-all ">
        <h1 className="--text-light">React Counter App</h1>
        <p
          className="count --my2 --text-md --text-light --fw-bold"
          style={{ color: color }}
        >
          {count}
        </p>
        <div className="buttons">
          {/* <button className="--btn --btn-danger" onClick={handleSubtract}>
            - Subtract
          </button> */}
          <Button
            onClick={handleSubtract}
            btnClass={"--btn-danger"}
          >{`- Subtract`}</Button>

          {/* <button className="--btn" onClick={handleReset}>
            ! Reset
          </button> */}
          <Button onClick={handleReset} btnClass={null}>{`! Reset`}</Button>

          {/* <button className="--btn --btn-success" onClick={handleAdd}>
            + Add
          </button> */}
          <Button
            onClick={handleAdd}
            btnClass={"--btn-success"}
          >{`+ Add`}</Button>
        </div>
      </div>
    </section>
  );
};

export default Counter;