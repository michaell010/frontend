import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/guest/Home";
import Dashboard from "../pages/private/Dashboard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;