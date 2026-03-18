import { useNavigate } from "react-router-dom";

const PRODUCTOS = [
  { ico:"🌾", nombre:"Grano Premium B1",    id:"GA-10294", fecha:"24 Oct, 2025", estado:"En Stock",   estadoColor:"#22c55e", estadoBg:"rgba(34,197,94,0.2)" },
  { ico:"💉", nombre:"Vacuna FMD (Lote 22)", id:"VC-99812", fecha:"23 Oct, 2025", estado:"Stock Bajo", estadoColor:"#f97316", estadoBg:"rgba(249,115,22,0.1)" },
  { ico:"💊", nombre:"Oxitetraciclina 20%",  id:"ME-00122", fecha:"21 Oct, 2025", estado:"Crítico",    estadoColor:"#ef4444", estadoBg:"rgba(239,68,68,0.1)"  },
];

const SUMINISTROS = [
  { nombre:"Concentrado Inicio", pct:85,  color:"#22c55e", alerta:false },
  { nombre:"Vacunas FMD",        pct:42,  color:"#f97316", alerta:true  },
  { nombre:"Fertilizantes",      pct:92,  color:"#22c55e", alerta:false },
  { nombre:"Antibióticos",       pct:12,  color:"#ef4444", alerta:true  },
];

export default function ListadoInventario() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily:"'Public Sans',sans-serif", background:"linear-gradient(135deg,#fff 0%,#f0fdf4 100%)", minHeight:"100vh", color:"#334155" }}>
      <main style={{ maxWidth:1280, margin:"0 auto", padding:"2.5rem", display:"flex", flexDirection:"column", gap:"2.5rem" }}>

        {/* ── HERO ─────────────────────────── */}
        <section style={{ display:"grid", gridTemplateColumns:"8fr 4fr", gap:"1.5rem" }}>
          <div style={{ background:"rgba(255,255,255,0.8)", backdropFilter:"blur(16px)", border:"1px solid rgba(34,197,94,0.1)", borderRadius:40, padding:"2.5rem", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, right:0, padding:"2rem", opacity:0.05 }}>
              <span style={{ fontSize:"12rem", lineHeight:1 }}>⚙️</span>
            </div>
            <div style={{ position:"relative" }}>
              <span style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"0.3rem 0.875rem", borderRadius:999, background:"rgba(134,239,172,0.2)", color:"#22c55e", fontSize:"0.7rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"1rem" }}>
                <span style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", display:"inline-block" }}></span>
                Sistema de Telemetría Activo
              </span>
              <h1 style={{ fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:900, lineHeight:1.1, color:"#1e293b", margin:"0 0 1rem", letterSpacing:"-0.05em" }}>
                Inventario<br /><span style={{ color:"#22c55e" }}>Inteligente v7</span>
              </h1>
              <p style={{ fontSize:"1rem", color:"#64748b", maxWidth:500, lineHeight:1.7, margin:"0 0 2rem" }}>
                Gestión predictiva de suministros y monitoreo de recursos en tiempo real para optimización agrícola.
              </p>
              <div style={{ display:"flex", gap:"1rem" }}>
                <button style={{ display:"flex", alignItems:"center", gap:8, background:"#22c55e", color:"#fff", fontWeight:700, padding:"1rem 2rem", borderRadius:999, border:"none", cursor:"pointer", boxShadow:"0 8px 24px rgba(34,197,94,0.25)", fontSize:"0.875rem" }}>
                  ➕ Añadir Insumo
                </button>
                <button style={{ display:"flex", alignItems:"center", gap:8, background:"#fff", color:"#22c55e", fontWeight:700, padding:"1rem 2rem", borderRadius:999, border:"1px solid rgba(134,239,172,0.3)", cursor:"pointer", fontSize:"0.875rem" }}>
                  📊 Análisis
                </button>
              </div>
            </div>
          </div>

          {/* Silos */}
          <div style={{ background:"rgba(255,255,255,0.8)", backdropFilter:"blur(16px)", border:"1px solid rgba(34,197,94,0.1)", borderRadius:40, padding:"1.5rem", display:"flex", flexDirection:"column", gap:"1rem" }}>
            <h3 style={{ fontSize:"0.75rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color:"#94a3b8", margin:0 }}>Estado de Silos (Real-Time)</h3>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem", flex:1 }}>
              {[
                { pct:85, label:"Silo A1", color:"linear-gradient(to top,#4ade80,#bbf7d0)", textColor:"#fff" },
                { pct:12, label:"Stock Bajo", color:"#fed7aa", textColor:"#475569" },
                { pct:60, label:"Silo B2", color:"rgba(74,222,128,0.4)", textColor:"#475569" },
              ].map((s,i) => (
                <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
                  <div style={{ flex:1, width:"100%", background:"#fff", borderRadius:"24px 24px 8px 8px", border:"1px solid rgba(34,197,94,0.1)", position:"relative", overflow:"hidden", minHeight:160 }}>
                    <div style={{ position:"absolute", bottom:0, width:"100%", height:`${s.pct}%`, background:s.color, transition:"height 1.5s ease" }}></div>
                    <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.75rem", fontWeight:900, color:s.textColor }}>{s.pct}%</div>
                  </div>
                  <span style={{ fontSize:"0.65rem", fontWeight:700, color: s.pct < 20 ? "#f97316" : "#94a3b8", textTransform:"uppercase" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── KPI CARDS ────────────────────── */}
        <section style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.5rem" }}>
          {[
            { label:"Valor de Inventario", val:"$42.850", ico:"💰", tag:"ACTIVO",      tagColor:"#22c55e", tagBg:"rgba(134,239,172,0.2)" },
            { label:"Alertas Críticas",    val:"04",      ico:"⚠️", tag:"STOCK BAJO",  tagColor:"#f97316", tagBg:"rgba(249,115,22,0.1)" },
            { label:"Concentrado Total",   val:"1.240 Kg",ico:"🌿", tag:"",            tagColor:"",        tagBg:"" },
            { label:"Lotes Medicina",      val:"12 Und",  ico:"💊", tag:"",            tagColor:"",        tagBg:"" },
          ].map((k,i) => (
            <div key={i} style={{ background:"rgba(255,255,255,0.8)", backdropFilter:"blur(16px)", border:"1px solid rgba(34,197,94,0.1)", borderRadius:24, padding:"1.5rem", display:"flex", flexDirection:"column", gap:12 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                <div style={{ width:48, height:48, background:"rgba(134,239,172,0.1)", borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem" }}>{k.ico}</div>
                {k.tag && <span style={{ fontSize:"0.6rem", fontWeight:900, background:k.tagBg, color:k.tagColor, padding:"0.25rem 0.6rem", borderRadius:8 }}>{k.tag}</span>}
              </div>
              <p style={{ fontSize:"0.7rem", fontWeight:700, color:"#94a3b8", textTransform:"uppercase", letterSpacing:"0.1em", margin:0 }}>{k.label}</p>
              <p style={{ fontSize:"1.6rem", fontWeight:900, color:"#1e293b", margin:0 }}>{k.val}</p>
            </div>
          ))}
        </section>

        {/* ── SUMINISTROS + TABLA ──────────── */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap:"2.5rem" }}>

          {/* Suministros por categoría */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <h2 style={{ fontSize:"1.1rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.05em", color:"#1e293b", margin:0 }}>Suministros</h2>
              <button style={{ fontSize:"0.7rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color:"#22c55e", background:"none", border:"none", cursor:"pointer" }}>Ver Todo</button>
            </div>
            <div style={{ background:"rgba(255,255,255,0.8)", backdropFilter:"blur(16px)", border:"1px solid rgba(34,197,94,0.1)", borderRadius:32, padding:"2rem", display:"flex", flexDirection:"column", gap:"1.5rem" }}>
              {SUMINISTROS.map((s,i) => (
                <div key={i} style={{ display:"flex", flexDirection:"column", gap:8 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
                    <span style={{ fontSize:"0.75rem", fontWeight:900, color: s.alerta ? "#f97316" : "#94a3b8", textTransform:"uppercase" }}>{s.nombre}</span>
                    <span style={{ fontSize:"0.875rem", fontWeight:900, color: s.alerta ? "#f97316" : "#334155" }}>{s.pct}%</span>
                  </div>
                  <div style={{ width:"100%", height:12, background:"#f0fdf4", borderRadius:999, overflow:"hidden", border:"1px solid rgba(34,197,94,0.1)" }}>
                    <div style={{ height:"100%", width:`${s.pct}%`, background:s.color, borderRadius:999, boxShadow: s.pct > 80 ? "0 0 10px rgba(34,197,94,0.3)" : "none" }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flujos de carga */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
            <h2 style={{ fontSize:"1.1rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.05em", color:"#1e293b", margin:0 }}>Flujos de Carga</h2>
            <div style={{ background:"rgba(255,255,255,0.8)", backdropFilter:"blur(16px)", borderRadius:32, overflow:"hidden", boxShadow:"0 8px 32px rgba(34,197,94,0.05)" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", textAlign:"left" }}>
                <thead style={{ background:"rgba(240,253,244,0.5)" }}>
                  <tr>
                    {["Producto","Fecha","Estado"].map(h => (
                      <th key={h} style={{ padding:"1.25rem 2rem", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.2em", color:"#94a3b8" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody style={{ background:"rgba(255,255,255,0.5)" }}>
                  {PRODUCTOS.map((p,i) => (
                    <tr key={i} style={{ borderTop:"1px solid rgba(34,197,94,0.05)", cursor:"pointer" }}
                      onMouseEnter={e => e.currentTarget.style.background="rgba(34,197,94,0.05)"}
                      onMouseLeave={e => e.currentTarget.style.background="transparent"}>
                      <td style={{ padding:"1.25rem 2rem" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
                          <div style={{ width:40, height:40, background:"#f0fdf4", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem" }}>{p.ico}</div>
                          <div>
                            <p style={{ fontSize:"0.875rem", fontWeight:800, color:"#334155", margin:0 }}>{p.nombre}</p>
                            <p style={{ fontSize:"0.65rem", fontWeight:700, color:"#94a3b8", textTransform:"uppercase", letterSpacing:"-0.03em", margin:"2px 0 0", fontFamily:"monospace" }}>ID: {p.id}</p>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding:"1.25rem 2rem", fontSize:"0.875rem", fontWeight:500, color:"#94a3b8" }}>{p.fecha}</td>
                      <td style={{ padding:"1.25rem 2rem", textAlign:"center" }}>
                        <span style={{ display:"inline-flex", alignItems:"center", padding:"0.4rem 1rem", borderRadius:999, fontSize:"0.65rem", fontWeight:900, background:p.estadoBg, color:p.estadoColor, textTransform:"uppercase", letterSpacing:"0.1em" }}>
                          {p.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ padding:"1.25rem 2rem", background:"rgba(240,253,244,0.3)", display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid rgba(34,197,94,0.05)" }}>
                <span style={{ fontSize:"0.65rem", fontWeight:900, color:"#94a3b8", textTransform:"uppercase", letterSpacing:"0.1em" }}>Mostrando 3 de 124 registros</span>
                <div style={{ display:"flex", gap:"1rem" }}>
                  <button style={{ fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.2em", color:"#94a3b8", background:"none", border:"none", cursor:"pointer" }}>Anterior</button>
                  <button onClick={() => navigate("/inventario")} style={{ fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.2em", color:"#22c55e", background:"none", border:"none", cursor:"pointer" }}>Ver Todo →</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}