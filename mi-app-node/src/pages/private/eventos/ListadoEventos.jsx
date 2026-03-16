import { useState } from "react";
import "../../../styles/Home.css";

// tabla: evento_sanitario
// campos: ganado_id, usuario_id, tipo, producto_id, descripcion, dosis,
//         via_administracion, fecha, costo, proxima_fecha
const MOCK = [
  { id:1, ganado:"GN-001 · Cara Blanca", tipo:"Vacunacion",      producto:"Vacuna Aftosa",        descripcion:"Fiebre Aftosa dosis anual",      dosis:"2ml", via:"Subcutánea",    fecha:"2025-06-12", costo:45000,  proxima_fecha:"2025-12-12" },
  { id:2, ganado:"GN-007 · Lucero",      tipo:"Desparasitacion", producto:"Ivermectina 1%",        descripcion:"Desparasitación ivermectina",    dosis:"5ml", via:"Subcutánea",    fecha:"2025-06-14", costo:28000,  proxima_fecha:"2025-09-14" },
  { id:3, ganado:"GN-003 · Pintada",     tipo:"Tratamiento",     producto:"Vitamina ADE",          descripcion:"Complejo vitamínico ADE",        dosis:"10ml",via:"Intramuscular",  fecha:"2025-06-10", costo:15000,  proxima_fecha:"2025-07-10" },
  { id:4, ganado:"GN-012 · Torito Rey",  tipo:"Diagnostico",     producto:null,                   descripcion:"Brucelosis prueba tuberculina",  dosis:"—",   via:"Intradérmica",   fecha:"2025-06-18", costo:60000,  proxima_fecha:null },
  { id:5, ganado:"GN-005 · Dorada",      tipo:"Vacunacion",      producto:"Vacuna Carbón",         descripcion:"Carbón sintomático refuerzo",    dosis:"3ml", via:"Subcutánea",    fecha:"2025-06-09", costo:35000,  proxima_fecha:"2025-12-09" },
  { id:6, ganado:"GN-002 · La Negra",    tipo:"Revision",        producto:null,                   descripcion:"Control gestación mes 6",        dosis:"—",   via:"—",             fecha:"2025-06-20", costo:80000,  proxima_fecha:"2025-07-20" },
  { id:7, ganado:"GN-015 · Manchada",    tipo:"Cirugia",         producto:"Oxitetraciclina 200mg", descripcion:"Curación herida post-parto",     dosis:"15ml",via:"Intramuscular",  fecha:"2025-06-22", costo:120000, proxima_fecha:"2025-06-29" },
];

const TIPO_COLOR = {
  Vacunacion:"cat-blue", Tratamiento:"cat-green", Cirugia:"cat-rust",
  Diagnostico:"cat-earth", Revision:"cat-gray", Desparasitacion:"cat-earth"
};

export default function ListadoEventos() {
  const [busqueda,     setBusqueda]     = useState("");
  const [filtroTipo,   setFiltroTipo]   = useState("Todos");
  const [mostrarModal, setMostrarModal] = useState(false);

  const filtrados = MOCK.filter(ev => {
    const matchB = ev.ganado.toLowerCase().includes(busqueda.toLowerCase()) || ev.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const matchT = filtroTipo==="Todos" || ev.tipo===filtroTipo;
    return matchB && matchT;
  });

  const totalCosto = filtrados.reduce((s,e)=>s+e.costo,0);

  return (
    <div className="mod-page">
      <div className="mod-header">
        <div>
          <div className="mod-breadcrumb">Dashboard / <span>Eventos Sanitarios</span></div>
          <h1 className="mod-title">💉 Salud y Sanidad</h1>
          <p className="mod-subtitle">Tabla <code>evento_sanitario</code> — vacunaciones, tratamientos y controles</p>
        </div>
        <button className="mod-btn-primary" onClick={()=>setMostrarModal(true)}>+ Registrar Evento</button>
      </div>

      {/* KPIs */}
      <div className="mod-kpis">
        <div className="mod-kpi"><span className="mod-kpi-ico">📋</span><div><div className="mod-kpi-val">{MOCK.length}</div><div className="mod-kpi-lbl">Total eventos</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">💉</span><div><div className="mod-kpi-val">{MOCK.filter(e=>e.tipo==="Vacunacion").length}</div><div className="mod-kpi-lbl">Vacunaciones</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">🔬</span><div><div className="mod-kpi-val">{MOCK.filter(e=>e.proxima_fecha).length}</div><div className="mod-kpi-lbl">Con próx. fecha</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">💰</span><div><div className="mod-kpi-val">${(MOCK.reduce((s,e)=>s+e.costo,0)/1000).toFixed(0)}k</div><div className="mod-kpi-lbl">Costo total</div></div></div>
      </div>

      {/* Filtros */}
      <div className="mod-filtros">
        <input className="mod-search" placeholder="🔍  Buscar animal o descripción..." value={busqueda} onChange={e=>setBusqueda(e.target.value)} />
        <div className="mod-filtro-btns">
          {["Todos","Vacunacion","Tratamiento","Cirugia","Diagnostico","Revision","Desparasitacion"].map(t=>(
            <button key={t} className={`mod-filtro-btn ${filtroTipo===t?"active":""}`} onClick={()=>setFiltroTipo(t)}>{t}</button>
          ))}
        </div>
      </div>

      {/* Tabla */}
      <div className="mod-tabla-wrap">
        <table className="mod-tabla">
          <thead>
            <tr><th>Animal (ganado_id)</th><th>Tipo</th><th>Descripción</th><th>Producto usado</th><th>Dosis</th><th>Vía</th><th>Fecha</th><th>Costo</th><th>proxima_fecha</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {filtrados.map(ev=>(
              <tr key={ev.id}>
                <td><span className="mod-codigo">{ev.ganado}</span></td>
                <td><span className={`mod-cat ${TIPO_COLOR[ev.tipo]||"cat-gray"}`}>{ev.tipo}</span></td>
                <td>{ev.descripcion}</td>
                <td>{ev.producto || <span style={{color:"var(--text-xs)"}}>—</span>}</td>
                <td>{ev.dosis}</td>
                <td>{ev.via}</td>
                <td>{ev.fecha}</td>
                <td><strong>${ev.costo.toLocaleString()}</strong></td>
                <td>{ev.proxima_fecha || <span style={{color:"var(--text-xs)"}}>—</span>}</td>
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
          {filtrados.length>0 && (
            <tfoot>
              <tr>
                <td colSpan={7} style={{textAlign:"right",fontWeight:700,padding:"0.7rem 1rem",color:"var(--text-lt)",fontSize:"0.82rem"}}>COSTO TOTAL FILTRADO:</td>
                <td style={{fontWeight:900,padding:"0.7rem 1rem",color:"var(--green-dk)"}}>${totalCosto.toLocaleString()}</td>
                <td colSpan={2}></td>
              </tr>
            </tfoot>
          )}
        </table>
        {filtrados.length===0 && <div className="mod-empty">No se encontraron eventos.</div>}
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="mod-overlay" onClick={()=>setMostrarModal(false)}>
          <div className="mod-modal" onClick={e=>e.stopPropagation()}>
            <div className="mod-modal-header">
              <h2>Registrar Evento Sanitario</h2>
              <button className="mod-modal-close" onClick={()=>setMostrarModal(false)}>✕</button>
            </div>
            <div className="mod-modal-body">
              {/* Campos exactos de tabla evento_sanitario */}
              <div className="mod-form-grid">
                <div className="mod-field mod-field-full"><label>Animal (ganado_id) <span className="mod-req">*</span></label>
                  <select><option>GN-001 · Cara Blanca</option><option>GN-002 · La Negra</option><option>GN-007 · Lucero</option></select>
                </div>
                <div className="mod-field"><label>Tipo <span className="mod-req">*</span></label>
                  <select><option>Vacunacion</option><option>Tratamiento</option><option>Cirugia</option><option>Diagnostico</option><option>Revision</option><option>Desparasitacion</option></select>
                </div>
                <div className="mod-field"><label>Fecha <span className="mod-req">*</span></label><input type="date" /></div>
                <div className="mod-field mod-field-full"><label>Descripción</label><input placeholder="Describe el procedimiento..." /></div>
                <div className="mod-field"><label>Producto (producto_id)</label>
                  <select><option value="">— Sin producto —</option><option>Ivermectina 1%</option><option>Vitamina ADE</option><option>Oxitetraciclina</option></select>
                </div>
                <div className="mod-field"><label>Dosis</label><input placeholder="Ej: 5ml" /></div>
                <div className="mod-field"><label>Vía de administración</label><input placeholder="Ej: Subcutánea" /></div>
                <div className="mod-field"><label>Costo ($)</label><input type="number" placeholder="0" /></div>
                <div className="mod-field"><label>proxima_fecha</label><input type="date" /></div>
                <div className="mod-field"><label>Usuario (usuario_id)</label>
                  <select><option>Dr. Vargas</option><option>Dr. Mora</option></select>
                </div>
              </div>
            </div>
            <div className="mod-modal-footer">
              <button className="mod-btn-ghost" onClick={()=>setMostrarModal(false)}>Cancelar</button>
              <button className="mod-btn-primary" onClick={()=>setMostrarModal(false)}>Guardar Evento</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}