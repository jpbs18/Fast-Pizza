import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => action.payload === item.pizzaId);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => action.payload === item.pizzaId);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (!item.quantity) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);

export const getCurrentQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};

export const getCart = (state) => state.cart.cart;
