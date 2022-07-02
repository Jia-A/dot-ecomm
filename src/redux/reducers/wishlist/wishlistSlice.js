import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  wishlist: [],
  status: null,
};

export const getWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async () => {
    try {
      const { data, status } = await axios.get("/api/user/wishlist");

      if (status == 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (product) => {
    try {
      const { data, status } = await axios.post(
        "/api/user/wishlist",
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

export const removeFromWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (productID) => {
    try {
      const { data, status } = await axios.delete(
        "/api/user/wishlist/" + productID,
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
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers: {
    [getWishlist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.wishlist;
    },
    [getWishlist.rejected]: (state) => {
      state.status = "failed";
    },
    [getWishlist.pending]: (state) => {
      state.status = "loading";
    },
    [addToWishlist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.wishlist;
    },
    [addToWishlist.rejected]: (state) => {
      state.status = "failed";
    },
    [addToWishlist.pending]: (state) => {
      state.status = "loading";
    },
    [removeFromWishlist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.wishlist;
    },
    [removeFromWishlist.rejected]: (state) => {
      state.status = "failed";
    },
    [removeFromWishlist.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default wishlistSlice.reducer;