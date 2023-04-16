import React from "react";
import { useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch({ type: "increment" });
  };
  const decHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <button onClick={incHandler}>Increment</button>
      <button onClick={decHandler}>Decrement</button>
    </div>
  );
}

export default Cart;
