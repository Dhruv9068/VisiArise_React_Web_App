import { createSlice } from "@reduxjs/toolkit";

const storedCartList =
  localStorage.getItem("cartList") !== null
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];

const initialState = {
  cartList: storedCartList,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload.product;
      const quantity = action.payload.num;
      const productExists = state.cartList.find(
        (item) => item.id === productToAdd.id
      );
      if (productExists) {
        state.cartList = state.cartList.map((item) =>
          item.id === action.payload.product.id
            ? { ...productExists, qty: productExists.qty + action.payload.num }
            : item
        );
      } else {
        state.cartList.push({ ...productToAdd, qty: quantity });
      }
    },
    decreaseQty: (state, action) => {
      const productToDecrease = action.payload;
      const productExists = state.cartList.find(
        (item) => item.id === productToDecrease.id
      );
      if (productExists.qty === 1) {
        state.cartList = state.cartList.filter(
          (item) => item.id !== productExists.id
        );
      } else {
        state.cartList = state.cartList.map((item) =>
          item.id === productExists.id
            ? { ...productExists, qty: productExists.qty - 1 }
            : item
        );
      }
    },
    deleteProduct: (state, action) => {
      const productToDelete = action.payload;
      state.cartList = state.cartList.filter(
        (item) => item.id !== productToDelete.id
      );
    },
  },
});

export const cartMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith("cart/")) {
    const cartList = store.getState().cart.cartList;
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }
  return result;
};

export const { addToCart, decreaseQty, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
