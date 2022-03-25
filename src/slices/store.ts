import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../slices/RegisterSlice";

const store = configureStore({
  reducer: {
    register: registerSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
