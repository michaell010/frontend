import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import Registro from "../pages/public/Registro";
import RecuperarPassword from "../pages/public/RecuperarPassword";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal — Landing GanaControl */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar-password" element={<RecuperarPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;