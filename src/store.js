import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducer";

const store = configureStore({
  reducer: { customReducer: cartReducer },
});

export default store;
