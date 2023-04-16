import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
  value: 10,
};

const cartReducer = createReducer(initialState, {
  increment: (state) => {
    state.quantity += 1;
  },
  decrement: (state) => {
    state.quantity -= 1;
  },
  incrementBy10: (state, action) => {
    state.quantity += action.payload;
  },
});

export default cartReducer;
