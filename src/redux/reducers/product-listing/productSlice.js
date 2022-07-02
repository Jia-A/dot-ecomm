import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  status: null,
};

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  try {
    const { data, status } = await axios.get("/api/products");

    if (status == 200) {
      return data.products;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
  },
});

export default productsSlice.reducer;