import { useNavigate } from "react-router-dom";
import { getUsuarioActual } from "../../../services/AuthService";
import "./DashBoard.css";

const MODULOS = [
  { ico: "🐄", label: "Control Ganadero",        href: "/ganado",       desc: "Registro y trazabilidad del hato",      color: "mod-green" },
  { ico: "🧬", label: "Reproducción y Genética",  href: "/reproduccion", desc: "Servicios, gestaciones y partos",        color: "mod-emerald" },
  { ico: "💉", label: "Salud y Sanidad",           href: "/eventos",      desc: "Vacunaciones y eventos sanitarios",     color: "mod-teal" },
  { ico: "📦", label: "Inventario",               href: "/inventario",   desc: "Productos, stock y movimientos",        color: "mod-green" },
  { ico: "🌾", label: "Alimentación",             href: "/alimentacion", desc: "Raciones diarias por animal",           color: "mod-emerald" },
  { ico: "🌿", label: "Potreros",                 href: "/pasturas",     desc: "Gestión de pasturas y rotación",       color: "mod-teal" },
  { ico: "💰", label: "Cockpit Financiero",        href: "/finanzas",     desc: "Ventas e ingresos consolidados",        color: "mod-green" },
  { ico: "🎛️", label: "Mando Central",            href: "/mando",        desc: "Vista ejecutiva y KPIs globales",       color: "mod-emerald" },
];

const ALERTAS = [
  { tipo: "warn", ico: "⚠️", titulo: "Stock bajo",             desc: "Ivermectina 1% y Sal Mineral por debajo del mínimo", modulo: "/inventario" },
  { tipo: "info", ico: "💉", titulo: "Vacunaciones pendientes", desc: "2 animales con eventos sanitarios por completar",    modulo: "/eventos" },
  { tipo: "warn", ico: "🤰", titulo: "Parto próximo",          desc: "GN-002 · La Negra — parto estimado en 3 días",       modulo: "/reproduccion" },
  { tipo: "ok",   ico: "✅", titulo: "Inventario actualizado",  desc: "Concentrado Premium reabastecido correctamente",     modulo: "/inventario" },
];

export default function DashBoard() {
  const navigate = useNavigate();
  const usuario  = getUsuarioActual();
  const nombre   = usuario?.nombre || "Usuario";
  const rol      = usuario?.rol    || "Administrador";
  const finca    = usuario?.finca  || "La Ceiva";
  const inicial  = nombre.charAt(0).toUpperCase();

  const hora    = new Date().getHours();
  const saludo  = hora < 12 ? "Buenos días" : hora < 18 ? "Buenas tardes" : "Buenas noches";

  return (
    <div className="dash-page">

      {/* ══ HEADER ══════════════════════════════════════════ */}
      <div className="dash-header">
        <div>
          <p className="dash-saludo">{saludo},</p>
          <h1 className="dash-nombre">{nombre}</h1>
          <p className="dash-sub">
            Finca <strong>{finca}</strong> —{" "}
            {new Date().toLocaleDateString("es-CO", {
              weekday: "long", year: "numeric", month: "long", day: "numeric",
            })}
          </p>
        </div>

        {/* Tarjeta de perfil */}
        <div className="dash-perfil">
          <div className="dash-perfil-avatar">{inicial}</div>
          <div className="dash-perfil-info">
            <div className="dash-perfil-nombre">{nombre}</div>
            <div className="dash-perfil-rol">{rol}</div>
            <div className="dash-perfil-finca">🏠 {finca}</div>
          </div>
          <button
            className="dash-perfil-edit"
            title="Editar perfil"
            onClick={() => navigate("/configuracion/usuarios")}
          >✏️</button>
        </div>
      </div>

      {/* ══ ALERTAS ════════════════════════════════════════ */}
      <div className="dash-section-label">
        <span className="dash-section-ico">🔔</span> Alertas activas
        <span className="dash-badge-count">{ALERTAS.filter(a => a.tipo !== "ok").length}</span>
      </div>
      <div className="dash-alertas">
        {ALERTAS.map((a, i) => (
          <div
            key={i}
            className={`dash-alerta dash-alerta-${a.tipo}`}
            onClick={() => navigate(a.modulo)}
          >
            <span className="dash-alerta-ico">{a.ico}</span>
            <div className="dash-alerta-body">
              <div className="dash-alerta-titulo">{a.titulo}</div>
              <div className="dash-alerta-desc">{a.desc}</div>
            </div>
            <span className="dash-alerta-arrow">→</span>
          </div>
        ))}
      </div>

      {/* ══ MÓDULOS ════════════════════════════════════════ */}
      <div className="dash-section-label" style={{ marginTop: "2rem" }}>
        <span className="dash-section-ico">⚡</span> Acceso rápido a módulos
      </div>
      <div className="dash-modulos">
        {MODULOS.map((m, i) => (
          <button
            key={i}
            className={`dash-modulo ${m.color}`}
            onClick={() => navigate(m.href)}
          >
            <span className="dash-modulo-ico">{m.ico}</span>
            <span className="dash-modulo-label">{m.label}</span>
            <span className="dash-modulo-desc">{m.desc}</span>
            <span className="dash-modulo-arrow">→</span>
          </button>
        ))}
      </div>

    </div>
  );
}