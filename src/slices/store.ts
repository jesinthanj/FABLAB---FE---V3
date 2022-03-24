import { configureStore } from "@reduxjs/toolkit";

import emailRed from "./PasswordSlice";

const store = configureStore({
  reducer: {
    emailReducer: emailRed,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
