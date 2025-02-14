import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosinstance from "../../helpers/axiosinstance.js";

// Initial state
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true", // Ensure it's a boolean
  role: localStorage.getItem("role") || "",
  data: JSON.parse(localStorage.getItem("data")) || {}, // Parse JSON correctly
  loading: false,
  error: null,
};

// 🔹 Function to handle signup
export const createAccount = createAsyncThunk(
  "/auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosinstance.post("user/register", data);

      toast.success(res?.data?.message || "Account created successfully!");

      return res.data; // ✅ Returning data to Redux
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create account");
      return rejectWithValue(error?.response?.data?.message || "Signup failed");
    }
  }
);

// 🔹 Redux Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  // Handling signup request states
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.data = action.payload.user;
        state.role = action.payload.user.role;

        // Save user data to localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", action.payload.user.role);
        localStorage.setItem("data", JSON.stringify(action.payload.user));
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
