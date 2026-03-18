// src/components/layout/Navbar.jsx
import { useNavigate } from "react-router-dom";
import { getUsuarioActual, logout } from "../../services/AuthService";
import "./Navbar.css";

export default function Navbar({ titulo = "Dashboard" }) {
  const navigate = useNavigate();
  const usuario  = getUsuarioActual();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="gc-navbar">
      {/* Título de página actual */}
      <div className="gc-nb-left">
        <h1 className="gc-nb-title">{titulo}</h1>
        <span className="gc-nb-date">
          {new Date().toLocaleDateString("es-CO", {
            weekday: "long", year: "numeric",
            month: "long", day: "numeric",
          })}
        </span>
      </div>

      {/* Derecha */}
      <div className="gc-nb-right">
        {/* Notificaciones placeholder */}
        <button className="gc-nb-icon-btn" title="Notificaciones">
          🔔
          <span className="gc-nb-notif-dot"></span>
        </button>

        {/* Usuario */}
        <div className="gc-nb-user" onClick={handleLogout} title="Cerrar sesión">
          <div className="gc-nb-avatar">
            {usuario?.nombre
              ? usuario.nombre.charAt(0).toUpperCase()
              : "U"}
          </div>
          <div className="gc-nb-user-info">
            <span className="gc-nb-user-name">
              {usuario?.nombre || "Usuario"}
            </span>
            <span className="gc-nb-user-role">
              {usuario?.rol || "Administrador"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}