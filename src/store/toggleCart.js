import { createSlice } from "@reduxjs/toolkit";

const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState: { isCartShown: true, notification: null },
  reducers: {
    toggleCart(state) {
      state.isCartShown = !state.isCartShown;
    },
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
  },
});

export const toggleCartActions = toggleCartSlice.actions;
export default toggleCartSlice.reducer;
