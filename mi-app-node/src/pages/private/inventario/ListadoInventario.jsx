import { useState } from "react";
import "../../../styles/Home.css";

// tabla: producto
// campos: tipo, nombre, categoria, unidad, cantidad_actual, cantidad_min, estado, activo
const MOCK = [
  { id:1, nombre:"Concentrado Premium Bovino", tipo:"Alimento",     categoria:"Forraje",      unidad:"kg",  cantidad_actual:340, cantidad_min:100, estado:"Operativo", activo:true },
  { id:2, nombre:"Ivermectina 1% Inyectable",  tipo:"Medicamento",  categoria:"Antiparasitario",unidad:"ml", cantidad_actual:12,  cantidad_min:50,  estado:"Operativo", activo:true },
  { id:3, nombre:"Vitamina ADE Complejo",      tipo:"Medicamento",  categoria:"Vitamínico",   unidad:"ml",  cantidad_actual:45,  cantidad_min:30,  estado:"Operativo", activo:true },
  { id:4, nombre:"Sal Mineral Ganadera",       tipo:"Alimento",     categoria:"Suplemento",   unidad:"kg",  cantidad_actual:8,   cantidad_min:50,  estado:"Operativo", activo:true },
  { id:5, nombre:"Heno de Pasto Kikuyo",       tipo:"Alimento",     categoria:"Forraje",      unidad:"kg",  cantidad_actual:820, cantidad_min:200, estado:"Operativo", activo:true },
  { id:6, nombre:"Oxitetraciclina 200mg",      tipo:"Medicamento",  categoria:"Antibiótico",  unidad:"ml",  cantidad_actual:60,  cantidad_min:20,  estado:"Operativo", activo:true },
  { id:7, nombre:"Jeringa Desechable 20ml",    tipo:"Insumo",       categoria:"Descartable",  unidad:"und", cantidad_actual:200, cantidad_min:100, estado:"Operativo", activo:true },
  { id:8, nombre:"Báscula Ganadera",           tipo:"Equipo",       categoria:"Pesaje",       unidad:"und", cantidad_actual:1,   cantidad_min:1,   estado:"En_Reparacion", activo:true },
];

const TIPO_COLOR = { Alimento:"cat-green", Medicamento:"cat-blue", Insumo:"cat-earth", Herramienta:"cat-gray", Equipo:"cat-rust", Otro:"cat-gray" };
const ESTADO_EQ  = { Operativo:"est-ok", En_Reparacion:"est-warn", Dañado:"est-warn", Baja:"est-gray" };

export default function ListadoInventario() {
  const [busqueda,     setBusqueda]     = useState("");
  const [filtroTipo,   setFiltroTipo]   = useState("Todos");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalTipo,    setModalTipo]    = useState("producto");

  const filtrados = MOCK.filter(p => {
    const matchB = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const matchT = filtroTipo==="Todos" || p.tipo===filtroTipo;
    return matchB && matchT;
  });

  const stockBajo = MOCK.filter(p=>p.cantidad_actual<=p.cantidad_min).length;

  const abrirModal = (tipo) => { setModalTipo(tipo); setMostrarModal(true); };

  return (
    <div className="mod-page">
      <div className="mod-header">
        <div>
          <div className="mod-breadcrumb">Dashboard / <span>Inventario</span></div>
          <h1 className="mod-title">📦 Inventario General</h1>
          <p className="mod-subtitle">Tabla <code>producto</code> — alimentos, medicamentos, insumos y equipos</p>
        </div>
        <div style={{display:"flex",gap:"0.7rem"}}>
          <button className="mod-btn-ghost" onClick={()=>abrirModal("movimiento")}>↕ Registrar Movimiento</button>
          <button className="mod-btn-primary" onClick={()=>abrirModal("producto")}>+ Nuevo Producto</button>
        </div>
      </div>

      {/* KPIs */}
      <div className="mod-kpis">
        <div className="mod-kpi"><span className="mod-kpi-ico">📦</span><div><div className="mod-kpi-val">{MOCK.length}</div><div className="mod-kpi-lbl">Productos</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">⚠️</span><div><div className="mod-kpi-val" style={{color:"var(--rust)"}}>{stockBajo}</div><div className="mod-kpi-lbl">Stock bajo (≤ mínimo)</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">✅</span><div><div className="mod-kpi-val">{MOCK.filter(p=>p.cantidad_actual>p.cantidad_min).length}</div><div className="mod-kpi-lbl">En nivel óptimo</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">🔧</span><div><div className="mod-kpi-val">{MOCK.filter(p=>p.estado!=="Operativo").length}</div><div className="mod-kpi-lbl">En reparación/baja</div></div></div>
      </div>

      {stockBajo>0 && (
        <div className="mod-alerta-stock">
          ⚠️ <strong>{stockBajo} producto{stockBajo>1?"s":""}</strong> con <code>cantidad_actual ≤ cantidad_min</code> — requieren reposición.
        </div>
      )}

      {/* Filtros */}
      <div className="mod-filtros">
        <input className="mod-search" placeholder="🔍  Buscar producto..." value={busqueda} onChange={e=>setBusqueda(e.target.value)} />
        <div className="mod-filtro-btns">
          {["Todos","Alimento","Medicamento","Insumo","Herramienta","Equipo","Otro"].map(t=>(
            <button key={t} className={`mod-filtro-btn ${filtroTipo===t?"active":""}`} onClick={()=>setFiltroTipo(t)}>{t}</button>
          ))}
        </div>
      </div>

      {/* Tabla */}
      <div className="mod-tabla-wrap">
        <table className="mod-tabla">
          <thead>
            <tr><th>Nombre</th><th>Tipo</th><th>Categoría</th><th>cantidad_actual</th><th>cantidad_min</th><th>Unidad</th><th>Estado equipo</th><th>Activo</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {filtrados.map(p=>(
              <tr key={p.id} className={p.cantidad_actual<=p.cantidad_min?"row-warn":""}>
                <td><strong>{p.nombre}</strong></td>
                <td><span className={`mod-cat ${TIPO_COLOR[p.tipo]||"cat-gray"}`}>{p.tipo}</span></td>
                <td>{p.categoria}</td>
                <td><strong style={{color:p.cantidad_actual<=p.cantidad_min?"var(--rust)":"inherit"}}>{p.cantidad_actual}</strong></td>
                <td>{p.cantidad_min}</td>
                <td>{p.unidad}</td>
                <td><span className={`mod-estado ${ESTADO_EQ[p.estado]||"est-gray"}`}>{p.estado}</span></td>
                <td><span className={`mod-estado ${p.activo?"est-ok":"est-gray"}`}>{p.activo?"Sí":"No"}</span></td>
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
        {filtrados.length===0 && <div className="mod-empty">No se encontraron productos.</div>}
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="mod-overlay" onClick={()=>setMostrarModal(false)}>
          <div className="mod-modal" onClick={e=>e.stopPropagation()}>
            <div className="mod-modal-header">
              <h2>{modalTipo==="producto"?"Nuevo Producto":"Registrar Movimiento"}</h2>
              <button className="mod-modal-close" onClick={()=>setMostrarModal(false)}>✕</button>
            </div>
            <div className="mod-modal-body">
              {modalTipo==="producto" ? (
                <div className="mod-form-grid">
                  <div className="mod-field mod-field-full"><label>Nombre <span className="mod-req">*</span></label><input placeholder="Ej: Concentrado Premium" /></div>
                  <div className="mod-field"><label>Tipo <span className="mod-req">*</span></label>
                    <select><option>Alimento</option><option>Medicamento</option><option>Insumo</option><option>Herramienta</option><option>Equipo</option><option>Otro</option></select>
                  </div>
                  <div className="mod-field"><label>Categoría</label><input placeholder="Ej: Forraje, Antibiótico..." /></div>
                  <div className="mod-field"><label>Unidad</label>
                    <select><option>kg</option><option>ml</option><option>lts</option><option>und</option><option>bulto</option></select>
                  </div>
                  <div className="mod-field"><label>cantidad_actual</label><input type="number" placeholder="0" /></div>
                  <div className="mod-field"><label>cantidad_min</label><input type="number" placeholder="0" /></div>
                  <div className="mod-field"><label>Estado</label>
                    <select><option>Operativo</option><option>En_Reparacion</option><option>Dañado</option><option>Baja</option></select>
                  </div>
                </div>
              ) : (
                // tabla: movimiento_producto — campos: producto_id, tipo, cantidad
                <div className="mod-form-grid">
                  <div className="mod-field mod-field-full"><label>Producto <span className="mod-req">*</span></label>
                    <select>{MOCK.map(p=><option key={p.id} value={p.id}>{p.nombre}</option>)}</select>
                  </div>
                  <div className="mod-field"><label>Tipo <span className="mod-req">*</span></label>
                    <select><option>ENTRADA</option><option>SALIDA</option><option>AJUSTE</option></select>
                  </div>
                  <div className="mod-field"><label>Cantidad <span className="mod-req">*</span></label><input type="number" placeholder="0" /></div>
                </div>
              )}
            </div>
            <div className="mod-modal-footer">
              <button className="mod-btn-ghost" onClick={()=>setMostrarModal(false)}>Cancelar</button>
              <button className="mod-btn-primary" onClick={()=>setMostrarModal(false)}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}