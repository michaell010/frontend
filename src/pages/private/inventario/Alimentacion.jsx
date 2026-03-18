import { useState } from "react";
import "../../../styles/Home.css";

// tabla: alimentacion
// campos: ganado_id, producto_id, fecha, cantidad, observacion
const MOCK = [
  { id:1, ganado:"GN-001 · Cara Blanca", producto:"Concentrado Premium", fecha:"2025-06-12", cantidad:8,   observacion:"Ración matutina" },
  { id:2, ganado:"GN-002 · La Negra",    producto:"Heno de Pasto Kikuyo",fecha:"2025-06-12", cantidad:15,  observacion:"Gestante — ración extra" },
  { id:3, ganado:"GN-007 · Lucero",      producto:"Sal Mineral Ganadera",fecha:"2025-06-12", cantidad:0.5, observacion:null },
  { id:4, ganado:"GN-012 · Torito Rey",  producto:"Concentrado Premium", fecha:"2025-06-11", cantidad:12,  observacion:"Semental — alta demanda" },
  { id:5, ganado:"GN-015 · Manchada",    producto:"Heno de Pasto Kikuyo",fecha:"2025-06-11", cantidad:15,  observacion:null },
  { id:6, ganado:"GN-033 · Bayo Claro",  producto:"Concentrado Terneros",fecha:"2025-06-10", cantidad:3,   observacion:"Destete en proceso" },
];

export default function Alimentacion() {
  const [busqueda,     setBusqueda]     = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const filtrados = MOCK.filter(r =>
    r.ganado.toLowerCase().includes(busqueda.toLowerCase()) ||
    r.producto.toLowerCase().includes(busqueda.toLowerCase())
  );

  const totalKg = MOCK.reduce((s,r)=>s+r.cantidad,0);

  return (
    <div className="mod-page">
      <div className="mod-header">
        <div>
          <div className="mod-breadcrumb">Dashboard / <span>Alimentación</span></div>
          <h1 className="mod-title">🌾 Alimentación</h1>
          <p className="mod-subtitle">Tabla <code>alimentacion</code> — raciones diarias por animal y producto</p>
        </div>
        <button className="mod-btn-primary" onClick={()=>setMostrarModal(true)}>+ Registrar Ración</button>
      </div>

      {/* KPIs */}
      <div className="mod-kpis">
        <div className="mod-kpi"><span className="mod-kpi-ico">🍽️</span><div><div className="mod-kpi-val">{MOCK.length}</div><div className="mod-kpi-lbl">Raciones registradas</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">⚖️</span><div><div className="mod-kpi-val">{totalKg.toFixed(1)}</div><div className="mod-kpi-lbl">Cantidad total suministrada</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">🐄</span><div><div className="mod-kpi-val">{new Set(MOCK.map(r=>r.ganado)).size}</div><div className="mod-kpi-lbl">Animales alimentados</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">📦</span><div><div className="mod-kpi-val">{new Set(MOCK.map(r=>r.producto)).size}</div><div className="mod-kpi-lbl">Productos usados</div></div></div>
      </div>

      {/* Filtro */}
      <div className="mod-filtros">
        <input className="mod-search" placeholder="🔍  Buscar animal o producto..." value={busqueda} onChange={e=>setBusqueda(e.target.value)} />
      </div>

      {/* Tabla */}
      <div className="mod-tabla-wrap">
        <table className="mod-tabla">
          <thead>
            <tr><th>Animal (ganado_id)</th><th>Producto (producto_id)</th><th>Fecha</th><th>Cantidad</th><th>Observación</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {filtrados.map(r=>(
              <tr key={r.id}>
                <td><span className="mod-codigo">{r.ganado}</span></td>
                <td><strong>{r.producto}</strong></td>
                <td>{r.fecha}</td>
                <td><strong>{r.cantidad}</strong></td>
                <td>{r.observacion || <span style={{color:"var(--text-xs)"}}>—</span>}</td>
                <td>
                  <div className="mod-acciones">
                    <button className="mod-acc-btn" title="Editar">✏️</button>
                    <button className="mod-acc-btn mod-acc-del" title="Eliminar">🗑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtrados.length===0 && <div className="mod-empty">No se encontraron raciones.</div>}
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="mod-overlay" onClick={()=>setMostrarModal(false)}>
          <div className="mod-modal" onClick={e=>e.stopPropagation()}>
            <div className="mod-modal-header">
              <h2>Registrar Ración</h2>
              <button className="mod-modal-close" onClick={()=>setMostrarModal(false)}>✕</button>
            </div>
            <div className="mod-modal-body">
              {/* Campos exactos de tabla alimentacion */}
              <div className="mod-form-grid">
                <div className="mod-field"><label>Animal (ganado_id) <span className="mod-req">*</span></label>
                  <select>
                    <option>GN-001 · Cara Blanca</option>
                    <option>GN-002 · La Negra</option>
                    <option>GN-007 · Lucero</option>
                    <option>GN-012 · Torito Rey</option>
                  </select>
                </div>
                <div className="mod-field"><label>Producto (producto_id) <span className="mod-req">*</span></label>
                  <select>
                    <option>Concentrado Premium</option>
                    <option>Heno de Pasto Kikuyo</option>
                    <option>Sal Mineral Ganadera</option>
                    <option>Concentrado Terneros</option>
                  </select>
                </div>
                <div className="mod-field"><label>Fecha <span className="mod-req">*</span></label><input type="date" /></div>
                <div className="mod-field"><label>Cantidad <span className="mod-req">*</span></label><input type="number" step="0.01" placeholder="0" /></div>
                <div className="mod-field mod-field-full"><label>Observación</label><input placeholder="Notas sobre la ración..." /></div>
              </div>
            </div>
            <div className="mod-modal-footer">
              <button className="mod-btn-ghost" onClick={()=>setMostrarModal(false)}>Cancelar</button>
              <button className="mod-btn-primary" onClick={()=>setMostrarModal(false)}>Guardar Ración</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}