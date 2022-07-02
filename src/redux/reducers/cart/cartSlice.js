import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cart: [],
  status: null,
};

export const getCart = createAsyncThunk(
  "cart/getcart",
  async () => {
    try {
      const { data, status } = await axios.get("/api/user/cart");

      if (status == 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product) => {
    try {
      const { data, status } = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (status == 201) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productID) => {
    try {
      const { data, status } = await axios.delete(
        "/api/user/cart/" + productID,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (status == 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.cart;
    },
    [getCart.rejected]: (state) => {
      state.status = "failed";
    },
    [getCart.pending]: (state) => {
      state.status = "loading";
    },
    [addToCart.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.cart;
    },
    [addToCart.rejected]: (state) => {
      state.status = "failed";
    },
    [addToCart.pending]: (state) => {
      state.status = "loading";
    },
    [removeFromCart.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.cart;
    },
    [removeFromCart.rejected]: (state) => {
      state.status = "failed";
    },
    [removeFromCart.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default cartSlice.reducer;