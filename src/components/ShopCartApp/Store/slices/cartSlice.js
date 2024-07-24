// import createSlice
import { createSlice } from "@reduxjs/toolkit";
// create initial state
const state = [];
// create slice
const cartSlice = createSlice({
  name: "cart",
  initialState: state,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      state.filter((item) => item.id !== action.payload.id);
    },
  },
});
// export slice
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
