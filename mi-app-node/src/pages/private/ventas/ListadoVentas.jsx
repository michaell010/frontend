import { useState } from "react";
import "../../../styles/Home.css";

// tabla principal: venta
// campos: finca_id, cliente, numero_factura (trigger auto), fecha, total
// tabla detalle: detalle_venta_ganado — venta_id, ganado_id, precio
const MOCK = [
  { id:1, numero_factura:"FV-2025-00001", cliente:"Frigorífico El Corral S.A.",  fecha:"2025-06-08", total:2600000, ganados:[{codigo:"GN-010",precio:2600000}] },
  { id:2, numero_factura:"FV-2025-00002", cliente:"Carnes del Valle Ltda.",       fecha:"2025-06-09", total:2400000, ganados:[{codigo:"GN-018",precio:2400000}] },
  { id:3, numero_factura:"FV-2025-00003", cliente:"Distribuidora Agropec.",       fecha:"2025-06-12", total:2880000, ganados:[{codigo:"GN-023",precio:2880000}] },
  { id:4, numero_factura:"FV-2025-00004", cliente:"Hacienda La Esperanza",        fecha:"2025-06-14", total:3500000, ganados:[{codigo:"GN-031",precio:3500000}] },
  { id:5, numero_factura:"FV-2025-00005", cliente:"Agropecuaria San Juan",        fecha:"2025-06-15", total:8400000, ganados:[{codigo:"GN-002",precio:4200000},{codigo:"GN-005",precio:4200000}] },
];

export default function ListadoVentas() {
  const [busqueda,     setBusqueda]     = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [ventaDetalle, setVentaDetalle] = useState(null);

  const filtrados = MOCK.filter(v =>
    v.cliente.toLowerCase().includes(busqueda.toLowerCase()) ||
    v.numero_factura.toLowerCase().includes(busqueda.toLowerCase())
  );

  const totalFacturado = MOCK.reduce((s,v)=>s+v.total,0);

  return (
    <div className="mod-page">
      <div className="mod-header">
        <div>
          <div className="mod-breadcrumb">Dashboard / <span>Ventas</span></div>
          <h1 className="mod-title">💰 Ventas</h1>
          <p className="mod-subtitle">Tabla <code>venta</code> + <code>detalle_venta_ganado</code> — facturación automática por trigger</p>
        </div>
        <button className="mod-btn-primary" onClick={()=>setMostrarModal(true)}>+ Nueva Venta</button>
      </div>

      {/* KPIs */}
      <div className="mod-kpis">
        <div className="mod-kpi"><span className="mod-kpi-ico">📄</span><div><div className="mod-kpi-val">{MOCK.length}</div><div className="mod-kpi-lbl">Facturas emitidas</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">💵</span><div><div className="mod-kpi-val">${(totalFacturado/1000000).toFixed(1)}M</div><div className="mod-kpi-lbl">Total facturado</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">🐄</span><div><div className="mod-kpi-val">{MOCK.reduce((s,v)=>s+v.ganados.length,0)}</div><div className="mod-kpi-lbl">Animales vendidos</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">👤</span><div><div className="mod-kpi-val">{new Set(MOCK.map(v=>v.cliente)).size}</div><div className="mod-kpi-lbl">Clientes distintos</div></div></div>
      </div>

      {/* Nota trigger */}
      <div className="mod-info-bar">
        ⚡ <strong>numero_factura</strong> se genera automáticamente con el trigger <code>trg_numero_factura</code> al insertar en <code>venta</code>
      </div>

      {/* Filtro */}
      <div className="mod-filtros">
        <input className="mod-search" placeholder="🔍  Buscar por cliente o número de factura..." value={busqueda} onChange={e=>setBusqueda(e.target.value)} />
      </div>

      {/* Tabla */}
      <div className="mod-tabla-wrap">
        <table className="mod-tabla">
          <thead>
            <tr><th>numero_factura</th><th>Cliente</th><th>Fecha</th><th>Animales vendidos</th><th>Total</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {filtrados.map(v=>(
              <tr key={v.id}>
                <td><span className="mod-codigo">{v.numero_factura}</span></td>
                <td><strong>{v.cliente}</strong></td>
                <td>{v.fecha}</td>
                <td>
                  <div style={{display:"flex",gap:"4px",flexWrap:"wrap"}}>
                    {v.ganados.map((g,i)=>(
                      <span key={i} className="mod-codigo" style={{fontSize:"0.7rem"}}>{g.codigo}</span>
                    ))}
                  </div>
                </td>
                <td><strong style={{color:"var(--green-corp)"}}>${v.total.toLocaleString()}</strong></td>
                <td>
                  <div className="mod-acciones">
                    <button className="mod-acc-btn" title="Ver detalle" onClick={()=>setVentaDetalle(v)}>👁</button>
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
                <td colSpan={4} style={{textAlign:"right",fontWeight:700,padding:"0.7rem 1rem",color:"var(--text-lt)",fontSize:"0.82rem"}}>TOTAL:</td>
                <td style={{fontWeight:900,padding:"0.7rem 1rem",color:"var(--green-dk)"}}>${filtrados.reduce((s,v)=>s+v.total,0).toLocaleString()}</td>
                <td></td>
              </tr>
            </tfoot>
          )}
        </table>
        {filtrados.length===0 && <div className="mod-empty">No se encontraron ventas.</div>}
      </div>

      {/* Modal detalle venta */}
      {ventaDetalle && (
        <div className="mod-overlay" onClick={()=>setVentaDetalle(null)}>
          <div className="mod-modal" onClick={e=>e.stopPropagation()}>
            <div className="mod-modal-header">
              <h2>Detalle — {ventaDetalle.numero_factura}</h2>
              <button className="mod-modal-close" onClick={()=>setVentaDetalle(null)}>✕</button>
            </div>
            <div className="mod-modal-body">
              <div className="mod-detalle-fila"><span>Cliente</span><strong>{ventaDetalle.cliente}</strong></div>
              <div className="mod-detalle-fila"><span>Fecha</span><strong>{ventaDetalle.fecha}</strong></div>
              <div className="mod-detalle-fila"><span>numero_factura</span><span className="mod-codigo">{ventaDetalle.numero_factura}</span></div>
              <div style={{marginTop:"1rem"}}>
                <div style={{fontWeight:700,fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"1px",color:"var(--text-lt)",marginBottom:"0.6rem"}}>detalle_venta_ganado</div>
                <table className="mod-tabla" style={{fontSize:"0.82rem"}}>
                  <thead><tr><th>ganado_id (código)</th><th>Precio</th></tr></thead>
                  <tbody>
                    {ventaDetalle.ganados.map((g,i)=>(
                      <tr key={i}>
                        <td><span className="mod-codigo">{g.codigo}</span></td>
                        <td><strong>${g.precio.toLocaleString()}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mod-detalle-total">
                <span>TOTAL</span>
                <strong>${ventaDetalle.total.toLocaleString()}</strong>
              </div>
            </div>
            <div className="mod-modal-footer">
              <button className="mod-btn-ghost" onClick={()=>setVentaDetalle(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal nueva venta */}
      {mostrarModal && (
        <div className="mod-overlay" onClick={()=>setMostrarModal(false)}>
          <div className="mod-modal" onClick={e=>e.stopPropagation()}>
            <div className="mod-modal-header">
              <h2>Nueva Venta</h2>
              <button className="mod-modal-close" onClick={()=>setMostrarModal(false)}>✕</button>
            </div>
            <div className="mod-modal-body">
              <div className="mod-info-bar" style={{marginBottom:"1rem"}}>
                ⚡ <code>numero_factura</code> se asigna automáticamente al guardar
              </div>
              <div className="mod-form-grid">
                <div className="mod-field mod-field-full"><label>Cliente <span className="mod-req">*</span></label><input placeholder="Nombre o razón social del comprador" /></div>
                <div className="mod-field"><label>Fecha <span className="mod-req">*</span></label><input type="date" /></div>
                <div className="mod-field"><label>Animal a vender (ganado_id)</label>
                  <select><option>GN-001 · Cara Blanca</option><option>GN-007 · Lucero</option><option>GN-012 · Torito Rey</option></select>
                </div>
                <div className="mod-field"><label>Precio por animal ($)</label><input type="number" placeholder="0" /></div>
              </div>
            </div>
            <div className="mod-modal-footer">
              <button className="mod-btn-ghost" onClick={()=>setMostrarModal(false)}>Cancelar</button>
              <button className="mod-btn-primary" onClick={()=>setMostrarModal(false)}>Guardar Venta</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}