import "./App.css";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { quantity, value } = useSelector((state) => state.customReducer);
  const dispatch = useDispatch();
  const incrementBy10Handler = () => {
    dispatch({ type: "incrementBy10", payload: 10 });
  };
  return (
    <div className="App">
      <h2>Quantity:{value}</h2>
      <Cart />
      <button onClick={incrementBy10Handler}>Increment by 10</button>
    </div>
  );
}

export default App;
