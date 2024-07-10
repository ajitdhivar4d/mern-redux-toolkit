import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api/apiSlice";
import { authReducer } from "./features/auth/authSlice";
import { cartSliceReducer } from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cart: cartSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
