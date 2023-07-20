import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
  value: 10,
  users: [],
};

const cartReducer = createReducer(initialState, {
  increment: (state) => {
    state.quantity += 1;
  },
  decrement: (state) => {
    state.quantity -= 1;
  },
  incrementByUser: (state, action) => {
    state.quantity += action.payload;
  },
  addData: (state, action) => {
    state.users = [...state.users, action.payload];
  },
});

export default cartReducer;
