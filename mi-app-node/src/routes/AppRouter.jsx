// src/routes/AppRouter.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout privado
import PrivateLayout from "../components/layout/PrivateLayout";

// Páginas públicas
import Home              from "../pages/public/Home";
import Login             from "../pages/public/Login";
import Registro          from "../pages/public/Registro";
import RecuperarPassword from "../pages/public/RecuperarPassword";

// Dashboard
import DashBoard from "../pages/private/dashboard/DashBoard";

// Ganado
import ListadoGanado   from "../pages/private/ganado/ListadoGanado";
import RegistrarGanado from "../pages/private/ganado/RegistrarGanado";
import DetalleGanado   from "../pages/private/ganado/DetalleGanado";
import EditarGanado    from "../pages/private/ganado/EditarGanado";

// Eventos sanitarios
import ListadoEventos   from "../pages/private/eventos/ListadoEventos";
import RegistrarEvento  from "../pages/private/eventos/RegistrarEvento";
import DetalleEvento    from "../pages/private/eventos/DetalleEvento";

// Inventario
import ListadoProductos  from "../pages/private/inventario/ListadoProductos";
import RegistrarProducto from "../pages/private/inventario/RegistrarProducto";
import Movimientos       from "../pages/private/inventario/Movimientos";

// Ventas
import ListadoVentas   from "../pages/private/ventas/ListadoVentas";
import RegistrarVentas from "../pages/private/ventas/RegistrarVentas";
import DetalleVenta    from "../pages/private/ventas/DetalleVenta";

// Reportes
import ReporteGanado   from "../pages/private/reportes/ReporteGanado";
import ReporteIngresos from "../pages/private/reportes/ReporteIngresos";
import ReporteStock    from "../pages/private/reportes/ReporteStock";

// Configuración
import Finca    from "../pages/private/configuracion/Finca";
import Usuarios from "../pages/private/configuracion/Usuarios";
import Roles    from "../pages/private/configuracion/Roles";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Públicas ── */}
        <Route path="/"                  element={<Home />} />
        <Route path="/login"             element={<Login />} />
        <Route path="/registro"          element={<Registro />} />
        <Route path="/recuperar-password" element={<RecuperarPassword />} />

        {/* ── Privadas (requieren auth) ── */}
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />

          {/* Ganado */}
          <Route path="/ganado"                element={<ListadoGanado />} />
          <Route path="/ganado/registrar"      element={<RegistrarGanado />} />
          <Route path="/ganado/:id"            element={<DetalleGanado />} />
          <Route path="/ganado/:id/editar"     element={<EditarGanado />} />

          {/* Eventos */}
          <Route path="/eventos"               element={<ListadoEventos />} />
          <Route path="/eventos/registrar"     element={<RegistrarEvento />} />
          <Route path="/eventos/:id"           element={<DetalleEvento />} />

          {/* Inventario */}
          <Route path="/inventario"            element={<ListadoProductos />} />
          <Route path="/inventario/registrar"  element={<RegistrarProducto />} />
          <Route path="/inventario/movimientos" element={<Movimientos />} />

          {/* Ventas */}
          <Route path="/ventas"                element={<ListadoVentas />} />
          <Route path="/ventas/registrar"      element={<RegistrarVentas />} />
          <Route path="/ventas/:id"            element={<DetalleVenta />} />

          {/* Reportes */}
          <Route path="/reportes/ganado"       element={<ReporteGanado />} />
          <Route path="/reportes/ingresos"     element={<ReporteIngresos />} />
          <Route path="/reportes/stock"        element={<ReporteStock />} />

          {/* Configuración */}
          <Route path="/configuracion/finca"    element={<Finca />} />
          <Route path="/configuracion/usuarios" element={<Usuarios />} />
          <Route path="/configuracion/roles"    element={<Roles />} />
        </Route>

        {/* Cualquier ruta desconocida → home */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;