import { configureStore } from "@reduxjs/toolkit";
import toggleCartSlice from "./toggleCart";
import cart from "./cart";

const store = configureStore({
  reducer: { toggleCart: toggleCartSlice, cart: cart },
});

export default store;
