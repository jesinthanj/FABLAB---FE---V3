import { createSlice } from "@reduxjs/toolkit";

export const passwordSlice = createSlice({
  name: "passwordStatus",
  initialState: {
    email: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = passwordSlice.actions;
export default passwordSlice.reducer;
