// createslice
// initialize initial state
// slice -> name , metion initialize , actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeTocart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTocart, removeTocart } = cartSlice.actions;

export default cartSlice.reducer;
