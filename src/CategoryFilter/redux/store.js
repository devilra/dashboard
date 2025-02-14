import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../CategoryFilter/redux/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
