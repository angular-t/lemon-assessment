import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Reservation from "./pages/BookingPage";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
