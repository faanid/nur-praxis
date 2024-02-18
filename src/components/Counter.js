import "../App.css";
import Button from "./button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD,
  ADD_NUMBER,
  SUBTRACT,
  RESET,
} from "../components/store/slice/counterSlice";
import { TOGGLE_AUTH } from "../components/store/slice/authSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  //   console.log(count);
  //   console.log(isLoggedIn);
  const dispatch = useDispatch();

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
        <button
          className="--btn --btn-danger"
          onClick={() => dispatch(TOGGLE_AUTH())}
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
        {!isLoggedIn ? (
          <p>Please Log in</p>
        ) : (
          <>
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
                onClick={() => dispatch(SUBTRACT())}
                btnClass={"--btn-danger"}
              >{`- Subtract`}</Button>

              {/* <button className="--btn" onClick={handleReset}>
            ! Reset
          </button> */}
              <Button
                onClick={() => dispatch(RESET())}
                btnClass={null}
              >{`! Reset`}</Button>

              {/* <button className="--btn --btn-success" onClick={handleAdd}>
            + Add
          </button> */}
              <Button
                onClick={() => dispatch(ADD())}
                btnClass={"--btn-success"}
              >{`+ Add`}</Button>
              <Button
                onClick={() => dispatch(ADD_NUMBER(5))}
                btnClass={"--btn-success"}
              >{`+5 Add`}</Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Counter;
