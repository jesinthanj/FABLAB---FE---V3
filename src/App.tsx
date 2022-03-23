import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import MainPage from "./pages/admin/MainPage";
import HomePage from "./pages/users/HomePage";
import AddSlots from "./pages/admin/AddSlots";
import MyBookings from "./pages/users/MyBookings";
import ViewBookings from "./pages/admin/ViewBookings";
import ResetPwd from "./pages/auth/ResetPwd";
import ChangePwd from "./pages/auth/ChangePwd";
import RegisterPage1 from "./pages/auth/RegisterPage1";
import RegisterPage2 from "./pages/auth/RegisterPage2";
import RegisterPage3 from "./pages/auth/RegisterPage3";
import ConfirmationPage from "../src/pages/users/ConfirmationPage"
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/addSlots" element={<AddSlots />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/resetpwd" element={<ResetPwd />} />
        <Route path="/changepwd" element={<ChangePwd />} />
        <Route path="/admin/viewbookings" element={<ViewBookings />} />
        <Route path="/register1" element={<RegisterPage1 />} />
        <Route path="/register2" element={<RegisterPage2 />} />
        <Route path="/register3" element={<RegisterPage3 />} />
        <Route path="/users/confirmationpage" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
