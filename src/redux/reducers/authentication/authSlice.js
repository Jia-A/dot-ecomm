import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  isUserLoggedin: false,
  status: null,
};

export const signup = createAsyncThunk("authentication/signup", async (user) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", user);
    if (status == 201) {
      const token = localStorage.setItem("token", data.encodedToken);
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});
export const login = createAsyncThunk("authentication/login", async (user) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", user);
    if (status == 200) {
      const token = localStorage.setItem("token", data.encodedToken);
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.isUserLoggedin = false;
    },
  },
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.foundUser;
    },
    [signup.rejected]: (state) => {
      state.status = "failed";
    },
    [signup.pending]: (state) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.foundUser;
      state.isUserLoggedin = true;
    },
    [login.rejected]: (state) => {
      state.status = "failed";
    },
    [login.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;