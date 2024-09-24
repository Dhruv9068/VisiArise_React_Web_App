// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { cartMiddleware } from "../src/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
