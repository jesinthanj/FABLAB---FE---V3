import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FirstRegister {
  email: string;
  password: string;
}
interface SecondRegister {
  name: string;
  contact: string;
  designation: string;
}
// eslint-disable-next-line
interface StudentRegister {
  collegeName: string;
  department: string;
  batch: string;
  registerNumber: string;
}
// eslint-disable-next-line
interface CompanyRegister {
  companyName: string;
  department: string;
  companyAddress: string;
  companyWebsite: string;
}

export const registerSlice = createSlice({
  name: "registerStatus",
  initialState: {
    email: "",
    name: "",
    password: "",
    collegeName: "",
    companyName: "",
    companyAddress: "",
    companyWebsite: "",
    contact: "",
    department: "",
    designation: "",
    registerNumber: "",
    batch: "",
  },
  reducers: {
    registerOne: (state, action: PayloadAction<FirstRegister>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    registerTwo: (state, action: PayloadAction<SecondRegister>) => {
      state.name = action.payload.name;
      state.contact = action.payload.contact;
      state.designation = action.payload.designation;
    },
  },
});

export const { registerOne, registerTwo } = registerSlice.actions;
export default registerSlice.reducer;
