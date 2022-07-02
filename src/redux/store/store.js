import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authentication/authSlice";
import productsReducer from "../reducers/product-listing/productsSlice";
import categoryReducer from "../reducers/video-listing/categorySlice";
import cartReducer from "../reducers/cart/cartSlice";
import wishlistReducer from "../reducers/wishlist/wishlistSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoryReducer,
    product : productsReducer,
    cart : cartReducer,
    wishlist : wishlistReducer
  },
});