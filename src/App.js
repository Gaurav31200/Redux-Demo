import "./App.css";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { quantity, value, users } = useSelector(
    (state) => state.customReducer
  );
  const dispatch = useDispatch();

  const fetchData = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    console.log(data.products);
    dispatch({ type: "addData", payload: data.products });
  };
  return (
    <div className="App">
      <h2>Quantity:{quantity}</h2>
      <Cart />
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default App;
