import { useState } from "react";
import "../../../styles/Home.css";

// tabla: reproduccion
// campos: vaca_id, tipo_servicio, toro_id, proveedor_genetico,
//         fecha_servicio, fecha_probable_parto (trigger auto +283d),
//         fecha_parto, estado, cria_codigo
const MOCK = [
  { id:1, vaca:"GN-002 · La Negra",    tipo_servicio:"Monta_Natural",  toro:"GN-012 · Torito Rey", proveedor_genetico:null,            fecha_servicio:"2025-01-15", fecha_probable_parto:"2025-10-25", fecha_parto:null,         estado:"Gestante", cria_codigo:null },
  { id:2, vaca:"GN-005 · Dorada",      tipo_servicio:"Inseminacion",   toro:null,                  proveedor_genetico:"GenBov Colombia", fecha_servicio:"2025-02-10", fecha_probable_parto:"2025-11-20", fecha_parto:null,         estado:"Gestante", cria_codigo:null },
  { id:3, vaca:"GN-008 · Pinta",       tipo_servicio:"Monta_Natural",  toro:"GN-012 · Torito Rey", proveedor_genetico:null,            fecha_servicio:"2024-10-01", fecha_probable_parto:"2025-07-11", fecha_parto:"2025-07-09", estado:"Parto",    cria_codigo:"GN-051" },
  { id:4, vaca:"GN-015 · Manchada",    tipo_servicio:"Inseminacion",   toro:null,                  proveedor_genetico:"ABS Global",    fecha_servicio:"2025-03-05", fecha_probable_parto:"2025-12-13", fecha_parto:null,         estado:"Gestante", cria_codigo:null },
  { id:5, vaca:"GN-020 · Canela",      tipo_servicio:"Monta_Natural",  toro:"GN-012 · Torito Rey", proveedor_genetico:null,            fecha_servicio:"2025-04-20", fecha_probable_parto:"2026-01-28", fecha_parto:null,         estado:"Pendiente",cria_codigo:null },
  { id:6, vaca:"GN-025 · Blanca",      tipo_servicio:"Monta_Natural",  toro:"GN-012 · Torito Rey", proveedor_genetico:null,            fecha_servicio:"2024-12-10", fecha_probable_parto:"2025-09-19", fecha_parto:null,         estado:"Fallida",  cria_codigo:null },
];

const EST_COLOR = { Pendiente:"est-gray", Gestante:"est-warn", Parto:"est-ok", Fallida:"est-warn", Aborto:"est-warn" };
const SERV_COLOR = { Monta_Natural:"cat-green", Inseminacion:"cat-blue" };

export default function Reproduccion() {
  const [filtroEst,    setFiltroEst]    = useState("Todos");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [busqueda,     setBusqueda]     = useState("");

  const filtrados = MOCK.filter(r => {
    const matchB = r.vaca.toLowerCase().includes(busqueda.toLowerCase());
    const matchE = filtroEst==="Todos" || r.estado===filtroEst;
    return matchB && matchE;
  });

  // Calcular días de gestación para las gestantes
  const diasGestacion = (fechaServicio) => {
    const hoy  = new Date();
    const ini  = new Date(fechaServicio);
    return Math.floor((hoy-ini)/(1000*60*60*24));
  };

  return (
    <div className="mod-page">
      <div className="mod-header">
        <div>
          <div className="mod-breadcrumb">Dashboard / <span>Reproducción</span></div>
          <h1 className="mod-title">🧬 Reproducción y Genética</h1>
          <p className="mod-subtitle">Tabla <code>reproduccion</code> — servicios, gestaciones y partos</p>
        </div>
        <button className="mod-btn-primary" onClick={()=>setMostrarModal(true)}>+ Registrar Servicio</button>
      </div>

      {/* KPIs */}
      <div className="mod-kpis">
        <div className="mod-kpi"><span className="mod-kpi-ico">📋</span><div><div className="mod-kpi-val">{MOCK.length}</div><div className="mod-kpi-lbl">Total registros</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">🤰</span><div><div className="mod-kpi-val">{MOCK.filter(r=>r.estado==="Gestante").length}</div><div className="mod-kpi-lbl">Gestantes activas</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">🍼</span><div><div className="mod-kpi-val">{MOCK.filter(r=>r.estado==="Parto").length}</div><div className="mod-kpi-lbl">Partos registrados</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">🧬</span><div><div className="mod-kpi-val">{MOCK.filter(r=>r.tipo_servicio==="Inseminacion").length}</div><div className="mod-kpi-lbl">Inseminaciones</div></div></div>
      </div>

      {/* Filtros */}
      <div className="mod-filtros">
        <input className="mod-search" placeholder="🔍  Buscar vaca..." value={busqueda} onChange={e=>setBusqueda(e.target.value)} />
        <div className="mod-filtro-btns">
          {["Todos","Pendiente","Gestante","Parto","Fallida","Aborto"].map(s=>(
            <button key={s} className={`mod-filtro-btn ${filtroEst===s?"active":""}`} onClick={()=>setFiltroEst(s)}>{s}</button>
          ))}
        </div>
      </div>

      {/* Tabla */}
      <div className="mod-tabla-wrap">
        <table className="mod-tabla">
          <thead>
            <tr>
              <th>Vaca (vaca_id)</th><th>tipo_servicio</th><th>Toro / Proveedor</th>
              <th>fecha_servicio</th><th>fecha_probable_parto ⚡</th><th>Días gest.</th>
              <th>fecha_parto</th><th>Estado</th><th>cria_codigo</th><th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map(r=>(
              <tr key={r.id}>
                <td><span className="mod-codigo">{r.vaca}</span></td>
                <td><span className={`mod-cat ${SERV_COLOR[r.tipo_servicio]}`}>{r.tipo_servicio}</span></td>
                <td>
                  {r.tipo_servicio==="Monta_Natural"
                    ? <span className="mod-codigo" style={{fontSize:"0.72rem"}}>{r.toro}</span>
                    : <span style={{color:"var(--sky)",fontSize:"0.8rem"}}>{r.proveedor_genetico}</span>
                  }
                </td>
                <td>{r.fecha_servicio}</td>
                <td>
                  <span style={{display:"flex",alignItems:"center",gap:"4px"}}>
                    <span className="mod-est-badge">⚡</span>
                    {r.fecha_probable_parto}
                  </span>
                </td>
                <td>
                  {r.estado==="Gestante"
                    ? <strong>{diasGestacion(r.fecha_servicio)} / 283</strong>
                    : <span style={{color:"var(--text-xs)"}}>—</span>}
                </td>
                <td>{r.fecha_parto || <span style={{color:"var(--text-xs)"}}>—</span>}</td>
                <td><span className={`mod-estado ${EST_COLOR[r.estado]||"est-gray"}`}>{r.estado}</span></td>
                <td>
                  {r.cria_codigo
                    ? <span className="mod-codigo" style={{background:"rgba(46,125,46,0.15)"}}>{r.cria_codigo}</span>
                    : <span style={{color:"var(--text-xs)"}}>—</span>}
                </td>
                <td>
                  <div className="mod-acciones">
                    <button className="mod-acc-btn" title="Ver">👁</button>
                    <button className="mod-acc-btn" title="Editar">✏️</button>
                    <button className="mod-acc-btn mod-acc-del" title="Eliminar">🗑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtrados.length===0 && <div className="mod-empty">No se encontraron registros.</div>}
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="mod-overlay" onClick={()=>setMostrarModal(false)}>
          <div className="mod-modal" onClick={e=>e.stopPropagation()}>
            <div className="mod-modal-header">
              <h2>Registrar Servicio Reproductivo</h2>
              <button className="mod-modal-close" onClick={()=>setMostrarModal(false)}>✕</button>
            </div>
            <div className="mod-modal-body">
              <div className="mod-info-bar" style={{marginBottom:"1rem"}}>
                ⚡ <strong>fecha_probable_parto</strong> se calcula automáticamente con trigger <code>trg_fecha_parto</code> (fecha_servicio + 283 días)
              </div>
              <div className="mod-form-grid">
                <div className="mod-field"><label>Vaca (vaca_id) <span className="mod-req">*</span></label>
                  <select><option>GN-002 · La Negra</option><option>GN-015 · Manchada</option><option>GN-020 · Canela</option></select>
                </div>
                <div className="mod-field"><label>tipo_servicio <span className="mod-req">*</span></label>
                  <select><option>Monta_Natural</option><option>Inseminacion</option></select>
                </div>
                <div className="mod-field"><label>Toro (toro_id)</label>
                  <select><option value="">— N/A (inseminación) —</option><option>GN-012 · Torito Rey</option></select>
                </div>
                <div className="mod-field"><label>Proveedor genético</label><input placeholder="Ej: ABS Global (solo inseminación)" /></div>
                <div className="mod-field"><label>fecha_servicio <span className="mod-req">*</span></label><input type="date" /></div>
                <div className="mod-field"><label>Estado</label>
                  <select><option>Pendiente</option><option>Gestante</option><option>Fallida</option><option>Parto</option><option>Aborto</option></select>
                </div>
                <div className="mod-field"><label>fecha_parto (si aplica)</label><input type="date" /></div>
                <div className="mod-field"><label>cria_codigo (si hubo parto)</label><input placeholder="Ej: GN-052" /></div>
              </div>
            </div>
            <div className="mod-modal-footer">
              <button className="mod-btn-ghost" onClick={()=>setMostrarModal(false)}>Cancelar</button>
              <button className="mod-btn-primary" onClick={()=>setMostrarModal(false)}>Guardar Servicio</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}