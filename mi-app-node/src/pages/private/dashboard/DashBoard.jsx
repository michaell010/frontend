import { useState, useEffect } from "react";
import "./DashBoard.css";

// ── Datos mock (reemplazar con llamadas reales cuando el back esté listo) ──
const mockKpis = [
  { ico: "🐄", label: "Ganado Activo",    valor: "1,247", cambio: "+12 este mes",  color: "#2e7d2e" },
  { ico: "💰", label: "Ingresos Totales", valor: "$47.8M", cambio: "+8.3% vs mes anterior", color: "#3a7a3a" },
  { ico: "📦", label: "Stock Bajo",       valor: "23",    cambio: "2 críticos",    color: "#8b4513" },
  { ico: "💉", label: "Eventos Pendientes", valor: "8",   cambio: "Próx: 12 Jun", color: "#5a8a9f" },
];

const mockGanado = [
  { codigo: "GN-001", nombre: "Cara Blanca", categoria: "Vaca adulta",   estado: "Activo",   peso: "480 kg" },
  { codigo: "GN-002", nombre: "La Negra",    categoria: "Vaca adulta",   estado: "Gestante", peso: "510 kg" },
  { codigo: "GN-007", nombre: "Lucero",      categoria: "Novillo",       estado: "Activo",   peso: "320 kg" },
  { codigo: "GN-012", nombre: "Torito",      categoria: "Toro semental", estado: "Vacunar",  peso: "650 kg" },
  { codigo: "GN-015", nombre: "Manchita",    categoria: "Ternera",       estado: "Activo",   peso: "95 kg"  },
];

const mockEventos = [
  { animal: "GN-001", tipo: "Fiebre Aftosa",   fecha: "12 Jun", estado: "pendiente" },
  { animal: "GN-007", tipo: "Desparasitación", fecha: "14 Jun", estado: "pendiente" },
  { animal: "GN-003", tipo: "Vitaminas ADE",   fecha: "10 Jun", estado: "completado" },
  { animal: "GN-012", tipo: "Brucelosis",      fecha: "18 Jun", estado: "programado" },
];

const estadoPill = {
  Activo:    { bg: "rgba(46,125,46,0.12)",    color: "#2e7d2e" },
  Gestante:  { bg: "rgba(139,69,19,0.1)",     color: "#8b4513" },
  Vacunar:   { bg: "rgba(90,138,159,0.12)",   color: "#5a8a9f" },
  pendiente: { bg: "rgba(139,69,19,0.1)",     color: "#8b4513" },
  completado:{ bg: "rgba(46,125,46,0.12)",    color: "#2e7d2e" },
  programado:{ bg: "rgba(90,138,159,0.12)",   color: "#5a8a9f" },
};

// Contador animado
function useCounter(target, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (!num) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return val;
}

function KpiCard({ ico, label, valor, cambio, color }) {
  const num = useCounter(valor);
  const hasNum = !isNaN(parseFloat(valor.replace(/[^0-9.]/g, "")));

  return (
    <div className="gc-db-kpi" style={{ borderTopColor: color }}>
      <div className="gc-db-kpi-top">
        <span className="gc-db-kpi-ico">{ico}</span>
        <span className="gc-db-kpi-cambio">{cambio}</span>
      </div>
      <div className="gc-db-kpi-val" style={{ color }}>
        {hasNum
          ? valor.replace(/[0-9,]+/, num.toLocaleString("es-CO"))
          : valor}
      </div>
      <div className="gc-db-kpi-label">{label}</div>
    </div>
  );
}

export default function DashBoard() {
  return (
    <div className="gc-db">

      {/* ── KPIs ── */}
      <div className="gc-db-kpis">
        {mockKpis.map((k, i) => (
          <KpiCard key={i} {...k} />
        ))}
      </div>

      {/* ── Fila principal ── */}
      <div className="gc-db-row">

        {/* Tabla ganado reciente */}
        <div className="gc-db-card gc-db-card-wide">
          <div className="gc-db-card-head">
            <span className="gc-db-card-title">🐄 Ganado Reciente</span>
            <a href="/ganado" className="gc-db-card-link">Ver todo →</a>
          </div>
          <table className="gc-db-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Peso</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {mockGanado.map((g, i) => {
                const p = estadoPill[g.estado] || {};
                return (
                  <tr key={i}>
                    <td><code className="gc-db-code">{g.codigo}</code></td>
                    <td><strong>{g.nombre}</strong></td>
                    <td>{g.categoria}</td>
                    <td>{g.peso}</td>
                    <td>
                      <span className="gc-db-pill" style={{ background: p.bg, color: p.color }}>
                        {g.estado}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Eventos próximos */}
        <div className="gc-db-card">
          <div className="gc-db-card-head">
            <span className="gc-db-card-title">💉 Próximos Eventos</span>
            <a href="/eventos" className="gc-db-card-link">Ver todo →</a>
          </div>
          <div className="gc-db-eventos">
            {mockEventos.map((ev, i) => {
              const p = estadoPill[ev.estado] || {};
              return (
                <div key={i} className="gc-db-ev-row">
                  <div className="gc-db-ev-dot" style={{ background: p.color }}></div>
                  <div className="gc-db-ev-info">
                    <span className="gc-db-ev-tipo">{ev.tipo}</span>
                    <span className="gc-db-ev-meta">{ev.animal} · {ev.fecha}</span>
                  </div>
                  <span className="gc-db-pill" style={{ background: p.bg, color: p.color }}>
                    {ev.estado}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ── Fila secundaria ── */}
      <div className="gc-db-row">

        {/* Stock */}
        <div className="gc-db-card">
          <div className="gc-db-card-head">
            <span className="gc-db-card-title">📦 Stock Crítico</span>
            <a href="/inventario" className="gc-db-card-link">Ver inventario →</a>
          </div>
          <div className="gc-db-stock">
            {[
              { nm: "Ivermectina 1%",     pct: 12, vl: "12 ml",  warn: true  },
              { nm: "Sal Mineral",        pct: 5,  vl: "8 kg",   warn: true  },
              { nm: "Vitamina ADE",       pct: 22, vl: "45 ml",  warn: false },
              { nm: "Concentrado Prem.",  pct: 68, vl: "340 kg", warn: false },
            ].map((s, i) => (
              <div key={i} className="gc-db-stock-item">
                <div className="gc-db-stock-row">
                  <span className="gc-db-stock-nm">
                    {s.warn && "⚠️ "}{s.nm}
                  </span>
                  <span className="gc-db-stock-vl" style={{ color: s.warn ? "#8b4513" : "#2e7d2e" }}>
                    {s.vl}
                  </span>
                </div>
                <div className="gc-db-stock-track">
                  <div
                    className="gc-db-stock-bar"
                    style={{
                      width: `${s.pct}%`,
                      background: s.warn
                        ? "linear-gradient(90deg,#c0392b,#e74c3c)"
                        : "linear-gradient(90deg,#2e7d2e,#4db84d)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accesos rápidos */}
        <div className="gc-db-card">
          <div className="gc-db-card-head">
            <span className="gc-db-card-title">⚡ Accesos Rápidos</span>
          </div>
          <div className="gc-db-accesos">
            {[
              { ico: "🐄", label: "Registrar Ganado",   href: "/ganado/registrar" },
              { ico: "💉", label: "Nuevo Evento",        href: "/eventos/registrar" },
              { ico: "📦", label: "Nuevo Producto",      href: "/inventario/registrar" },
              { ico: "💰", label: "Nueva Venta",         href: "/ventas/registrar" },
              { ico: "📋", label: "Ver Reportes",        href: "/reportes/ingresos" },
              { ico: "⚙️", label: "Configuración",      href: "/configuracion/finca" },
            ].map((a, i) => (
              <a key={i} href={a.href} className="gc-db-acceso">
                <span className="gc-db-acceso-ico">{a.ico}</span>
                <span className="gc-db-acceso-lbl">{a.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}