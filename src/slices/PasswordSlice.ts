import { createSlice } from "@reduxjs/toolkit";

export const passwordSlice = createSlice({
  name: "passwordStatus",
  initialState: {
    email: null,
  },
  reducers: {
    getEmail: (state: any, action: any) => {
      state.email = action.payload;
      console.log(action.payload);
    },
  },
});

export const { getEmail } = passwordSlice.actions;
export default passwordSlice.reducer;
