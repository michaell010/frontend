import { useState } from "react";
import "../../../styles/Home.css";

const MOCK = [
  { id:1, codigo:"GN-001", nombre:"Cara Blanca",  sexo:"Hembra", categoria:"Vaca",    raza:"Brahman",   peso_actual:480, estado_general:"Activo",   estado_comercial:"Disponible", estado_biologico:"Vivo", potrero:"Potrero A" },
  { id:2, codigo:"GN-002", nombre:"La Negra",     sexo:"Hembra", categoria:"Vaca",    raza:"Holstein",  peso_actual:510, estado_general:"Activo",   estado_comercial:"Disponible", estado_biologico:"Vivo", potrero:"Potrero B" },
  { id:3, codigo:"GN-007", nombre:"Lucero",       sexo:"Macho",  categoria:"Novillo", raza:"Cebú",      peso_actual:320, estado_general:"Activo",   estado_comercial:"Disponible", estado_biologico:"Vivo", potrero:"Potrero A" },
  { id:4, codigo:"GN-012", nombre:"Torito Rey",   sexo:"Macho",  categoria:"Toro",    raza:"Simmental", peso_actual:780, estado_general:"Activo",   estado_comercial:"Disponible", estado_biologico:"Vivo", potrero:"Potrero C" },
  { id:5, codigo:"GN-015", nombre:"Manchada",     sexo:"Hembra", categoria:"Vaca",    raza:"Brahman",   peso_actual:460, estado_general:"Activo",   estado_comercial:"Disponible", estado_biologico:"Vivo", potrero:"Potrero B" },
  { id:6, codigo:"GN-021", nombre:"Estrella",     sexo:"Hembra", categoria:"Novillo", raza:"Holstein",  peso_actual:290, estado_general:"Activo",   estado_comercial:"Disponible", estado_biologico:"Vivo", potrero:"Potrero A" },
  { id:7, codigo:"GN-033", nombre:"Bayo Claro",   sexo:"Macho",  categoria:"Ternero", raza:"Cebú",      peso_actual:120, estado_general:"Activo",   estado_comercial:"Disponible", estado_biologico:"Vivo", potrero:"Potrero D" },
  { id:8, codigo:"GN-040", nombre:"Rosada",       sexo:"Hembra", categoria:"Vaca",    raza:"Gyr",       peso_actual:495, estado_general:"Inactivo", estado_comercial:"Descartado", estado_biologico:"Vivo", potrero:"Potrero C" },
];

export default function ListadoGanado() {
  const [busqueda,     setBusqueda]     = useState("");
  const [filtroCateg,  setFiltroCateg]  = useState("Todos");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [mostrarModal, setMostrarModal] = useState(false);

  const filtrados = MOCK.filter(a => {
    const matchB = a.nombre.toLowerCase().includes(busqueda.toLowerCase()) || a.codigo.toLowerCase().includes(busqueda.toLowerCase());
    const matchC = filtroCateg  === "Todos" || a.categoria        === filtroCateg;
    const matchE = filtroEstado === "Todos" || a.estado_general   === filtroEstado;
    return matchB && matchC && matchE;
  });

  return (
    <div className="mod-page">
      {/* Header */}
      <div className="mod-header">
        <div>
          <div className="mod-breadcrumb">Dashboard / <span>Ganado</span></div>
          <h1 className="mod-title">🐄 Gestión de Ganado</h1>
          <p className="mod-subtitle">Registro y control de animales — tabla <code>ganado</code></p>
        </div>
        <button className="mod-btn-primary" onClick={() => setMostrarModal(true)}>+ Registrar Animal</button>
      </div>

      {/* KPIs */}
      <div className="mod-kpis">
        <div className="mod-kpi"><span className="mod-kpi-ico">🐄</span><div><div className="mod-kpi-val">{MOCK.length}</div><div className="mod-kpi-lbl">Total registros</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">✅</span><div><div className="mod-kpi-val">{MOCK.filter(a=>a.estado_general==="Activo").length}</div><div className="mod-kpi-lbl">Activos</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">💰</span><div><div className="mod-kpi-val">{MOCK.filter(a=>a.estado_comercial==="Disponible").length}</div><div className="mod-kpi-lbl">Disponibles venta</div></div></div>
        <div className="mod-kpi"><span className="mod-kpi-ico">⚖️</span><div><div className="mod-kpi-val">{Math.round(MOCK.reduce((s,a)=>s+a.peso_actual,0)/MOCK.length)} kg</div><div className="mod-kpi-lbl">Peso promedio</div></div></div>
      </div>

      {/* Filtros */}
      <div className="mod-filtros">
        <input className="mod-search" placeholder="🔍  Buscar por nombre o código..." value={busqueda} onChange={e=>setBusqueda(e.target.value)} />
        <div className="mod-filtro-btns">
          {["Todos","Ternero","Novillo","Vaca","Toro","Otro"].map(c=>(
            <button key={c} className={`mod-filtro-btn ${filtroCateg===c?"active":""}`} onClick={()=>setFiltroCateg(c)}>{c}</button>
          ))}
        </div>
        <div className="mod-filtro-btns">
          {["Todos","Activo","Inactivo"].map(e=>(
            <button key={e} className={`mod-filtro-btn ${filtroEstado===e?"active":""}`} onClick={()=>setFiltroEstado(e)}>{e}</button>
          ))}
        </div>
      </div>

      {/* Tabla */}
      <div className="mod-tabla-wrap">
        <table className="mod-tabla">
          <thead>
            <tr>
              <th>Código</th><th>Nombre</th><th>Sexo</th><th>Categoría</th><th>Raza</th>
              <th>Peso (kg)</th><th>Potrero</th><th>Estado general</th><th>Est. comercial</th><th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map(a=>(
              <tr key={a.id}>
                <td><span className="mod-codigo">{a.codigo}</span></td>
                <td><strong>{a.nombre}</strong></td>
                <td>{a.sexo==="Hembra"?"♀ Hembra":"♂ Macho"}</td>
                <td><span className="mod-cat cat-green">{a.categoria}</span></td>
                <td>{a.raza}</td>
                <td><strong>{a.peso_actual}</strong></td>
                <td>{a.potrero}</td>
                <td><span className={`mod-estado ${a.estado_general==="Activo"?"est-ok":"est-gray"}`}>{a.estado_general}</span></td>
                <td><span className={`mod-estado ${a.estado_comercial==="Disponible"?"est-blue":a.estado_comercial==="Vendido"?"est-gray":"est-warn"}`}>{a.estado_comercial}</span></td>
                <td>
                  <div className="mod-acciones">
                    <button className="mod-acc-btn" title="Ver detalle">👁</button>
                    <button className="mod-acc-btn" title="Editar">✏️</button>
                    <button className="mod-acc-btn mod-acc-del" title="Eliminar">🗑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtrados.length===0 && <div className="mod-empty">No se encontraron animales.</div>}
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="mod-overlay" onClick={()=>setMostrarModal(false)}>
          <div className="mod-modal" onClick={e=>e.stopPropagation()}>
            <div className="mod-modal-header">
              <h2>Registrar Nuevo Animal</h2>
              <button className="mod-modal-close" onClick={()=>setMostrarModal(false)}>✕</button>
            </div>
            <div className="mod-modal-body">
              <div className="mod-form-grid">
                <div className="mod-field"><label>Código <span className="mod-req">*</span></label><input placeholder="Ej: GN-050" /></div>
                <div className="mod-field"><label>Nombre</label><input placeholder="Ej: La Negra" /></div>
                <div className="mod-field"><label>Sexo <span className="mod-req">*</span></label>
                  <select><option value="Hembra">Hembra</option><option value="Macho">Macho</option></select>
                </div>
                <div className="mod-field"><label>Categoría <span className="mod-req">*</span></label>
                  <select><option>Ternero</option><option>Novillo</option><option>Vaca</option><option>Toro</option><option>Otro</option></select>
                </div>
                <div className="mod-field"><label>Raza</label><input placeholder="Ej: Brahman" /></div>
                <div className="mod-field"><label>Peso actual (kg)</label><input type="number" placeholder="0" /></div>
                <div className="mod-field"><label>Fecha de nacimiento</label><input type="date" /></div>
                <div className="mod-field"><label>Potrero</label>
                  <select><option>Potrero A</option><option>Potrero B</option><option>Potrero C</option><option>Potrero D</option></select>
                </div>
                <div className="mod-field"><label>Estado general</label>
                  <select><option>Activo</option><option>Inactivo</option></select>
                </div>
                <div className="mod-field"><label>Estado comercial</label>
                  <select><option>Disponible</option><option>Vendido</option><option>Descartado</option></select>
                </div>
                <div className="mod-field mod-field-full"><label>Observaciones</label><input placeholder="Notas adicionales..." /></div>
              </div>
            </div>
            <div className="mod-modal-footer">
              <button className="mod-btn-ghost" onClick={()=>setMostrarModal(false)}>Cancelar</button>
              <button className="mod-btn-primary" onClick={()=>setMostrarModal(false)}>Guardar Animal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}