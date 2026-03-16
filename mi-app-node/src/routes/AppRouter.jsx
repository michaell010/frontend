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

// Reproducción
import Reproduccion from "../pages/private/reproduccion/Reproduccion";

// Eventos sanitarios / Vacunación / Salud
import ListadoEventos  from "../pages/private/eventos/ListadoEventos";
import RegistrarEvento from "../pages/private/eventos/RegistrarEvento";
import DetalleEvento   from "../pages/private/eventos/DetalleEvento";

// Inventario
import ListadoInventario from "../pages/private/inventario/ListadoInventario";
import ListadoProductos  from "../pages/private/inventario/ListadoInventario";
import RegistrarProducto from "../pages/private/inventario/RegistrarProducto";
import Movimientos       from "../pages/private/inventario/Movimientos";

// Alimentación
import Alimentacion from "../pages/private/inventario/Alimentacion";

// Ventas
import ListadoVentas   from "../pages/private/ventas/ListadoVentas";
import RegistrarVentas from "../pages/private/ventas/RegistrarVentas";
import DetalleVenta    from "../pages/private/ventas/DetalleVenta";

// Pasturas
import MallaDigital from "../pages/private/pasturas/MallaDigital";

// Finanzas
import CockpitFinanciero from "../pages/private/finanzas/CockpitFinanciero";

// Mando Central
import MandoCentral from "../pages/private/mando/MandoCentral";

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
        <Route path="/"                   element={<Home />} />
        <Route path="/login"              element={<Login />} />
        <Route path="/registro"           element={<Registro />} />
        <Route path="/recuperar-password" element={<RecuperarPassword />} />

        {/* ── Privadas (requieren auth) ── */}
        <Route element={<PrivateLayout />}>

          {/* Dashboard */}
          <Route path="/dashboard" element={<DashBoard />} />

          {/* Ganado */}
          <Route path="/ganado"            element={<ListadoGanado />} />
          <Route path="/ganado/registrar"  element={<RegistrarGanado />} />
          <Route path="/ganado/:id"        element={<DetalleGanado />} />
          <Route path="/ganado/:id/editar" element={<EditarGanado />} />

          {/* Reproducción */}
          <Route path="/reproduccion" element={<Reproduccion />} />

          {/* Eventos / Vacunación / Salud y Sanidad */}
          <Route path="/eventos"           element={<ListadoEventos />} />
          <Route path="/eventos/registrar" element={<RegistrarEvento />} />
          <Route path="/eventos/:id"       element={<DetalleEvento />} />

          {/* Inventario */}
          <Route path="/inventario"             element={<ListadoInventario />} />
          <Route path="/inventario/productos"   element={<ListadoProductos />} />
          <Route path="/inventario/registrar"   element={<RegistrarProducto />} />
          <Route path="/inventario/movimientos" element={<Movimientos />} />

          {/* Alimentación */}
          <Route path="/alimentacion" element={<Alimentacion />} />

          {/* Ventas */}
          <Route path="/ventas"           element={<ListadoVentas />} />
          <Route path="/ventas/registrar" element={<RegistrarVentas />} />
          <Route path="/ventas/:id"       element={<DetalleVenta />} />

          {/* Pasturas / Malla Digital */}
          <Route path="/pasturas" element={<MallaDigital />} />

          {/* Cockpit Financiero */}
          <Route path="/finanzas" element={<CockpitFinanciero />} />

          {/* Mando Central */}
          <Route path="/mando" element={<MandoCentral />} />

          {/* Reportes */}
          <Route path="/reportes/ganado"   element={<ReporteGanado />} />
          <Route path="/reportes/ingresos" element={<ReporteIngresos />} />
          <Route path="/reportes/stock"    element={<ReporteStock />} />

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