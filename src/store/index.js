import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./slices/cartSlice"; //cartSlice
const store = configureStore({
  reducer: {
    cart: cartreducer,
  },
});

export default store;
