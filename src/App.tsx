import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import MainPage from "./pages/admin/MainPage";
import HomePage from "./pages/users/HomePage";
import AddSlots from "./pages/admin/AddSlots";
import MyBookings from "./pages/users/MyBookings";
import ViewBookings from "./pages/admin/ViewBookings";

// import bootstrap
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
        <Route path="/admin/viewbooking" element={<ViewBookings />} />
      </Routes>
    </BrowserRouter>
  );
}
