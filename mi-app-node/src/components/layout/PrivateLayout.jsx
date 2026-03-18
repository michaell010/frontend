import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated, getUsuarioActual } from "../../services/AuthService";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./PrivateLayout.css";

// Mapa de rutas → títulos para el Navbar
const titulos = {
  "/dashboard": "Dashboard",

  "/ganado": "Ganado",
  "/ganado/registrar": "Registrar Ganado",

  "/reproduccion": "Reproducción",

  "/eventos": "Sanidad & Eventos",
  "/eventos/registrar": "Registrar Evento",

  "/inventario": "Inventario",
  "/inventario/productos": "Productos",
  "/inventario/registrar": "Registrar Producto",
  "/inventario/movimientos": "Movimientos",

  "/alimentacion": "Alimentación",

  "/ventas": "Ventas",
  "/ventas/registrar": "Registrar Venta",

  "/pasturas": "Malla Digital",

  "/finanzas": "Cockpit Financiero",

  "/mando": "Mando Central",

  "/reportes/ganado": "Reporte Ganado",
  "/reportes/ingresos": "Reporte Ingresos",
  "/reportes/stock": "Reporte Stock",

  "/configuracion/finca": "Configuración · Finca",
  "/configuracion/usuarios": "Configuración · Usuarios",
  "/configuracion/roles": "Configuración · Roles",
};

function obtenerTitulo(pathname) {
  if (titulos[pathname]) return titulos[pathname];

  if (pathname.startsWith("/ganado/") && pathname.endsWith("/editar")) {
    return "Editar Ganado";
  }

  if (pathname.startsWith("/ganado/")) {
    return "Detalle Ganado";
  }

  if (pathname.startsWith("/eventos/") && pathname !== "/eventos/registrar") {
    return "Detalle Evento";
  }

  if (pathname.startsWith("/ventas/") && pathname !== "/ventas/registrar") {
    return "Detalle Venta";
  }

  return "GanaControl";
}

export default function PrivateLayout() {
  const location = useLocation();
  const autenticado = isAuthenticated();
  const usuario = getUsuarioActual();

  if (!autenticado) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  const titulo = obtenerTitulo(location.pathname);

  return (
    <div className="gc-layout">
      <Sidebar usuario={usuario} />
      <div className="gc-layout-main">
        <Navbar titulo={titulo} usuario={usuario} />
        <main className="gc-layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}