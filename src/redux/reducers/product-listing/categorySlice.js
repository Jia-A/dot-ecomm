import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  categories: [],
  status: null,
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    try {
      const { data, status } = await axios.get("/api/categories");

      if (status == 200) {
        return data.categories;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state) => {
      state.status = "failed";
    },
    [getCategories.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default categoriesSlice.reducer;