import { useNavigate } from "react-router-dom";

export default function CockpitFinanciero() {
  const navigate = useNavigate();

  const transacciones = [
    { id:"#LT-4210", desc:"Black Angus Bull (Gen v2)", cliente:"Riverbend Farms Ltd.", fecha:"2025.10.24", estado:"Confirmado", estadoColor:"#10b981", monto:"$4,250.00" },
    { id:"#LT-4211", desc:"Hereford Heifer (x5 Units)", cliente:"Southern Grazing Co.", fecha:"2025.10.23", estado:"En Ruta",    estadoColor:"#22c55e", monto:"$12,400.00" },
    { id:"#LT-3988", desc:"Brahman Breeding Pair Elite", cliente:"Int. Cattle Group",  fecha:"2025.10.22", estado:"Verificando", estadoColor:"#84cc16", monto:"$8,100.00" },
  ];

  return (
    <div style={{ fontFamily:"'Public Sans',sans-serif", background:"#fff", minHeight:"100vh", position:"relative", overflowX:"hidden" }}>

      {/* Grid overlay */}
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", opacity:0.4, zIndex:0, backgroundImage:"radial-gradient(#22c55e 0.5px,transparent 0.5px)", backgroundSize:"40px 40px" }}></div>

      <main style={{ position:"relative", zIndex:10, maxWidth:1280, margin:"0 auto", padding:"1.5rem", display:"flex", flexDirection:"column", gap:"1.5rem" }}>

        {/* ── HERO ─────────────────────────── */}
        <section style={{ position:"relative", height:200, borderRadius:16, overflow:"hidden", border:"1px solid #e2e8f0" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtlnLmSb-CmqEfsXu_Hpf5ja59Jz_X9xvL482bGj59MVCbeuNrEkfLz6Sy-nu-todf95Yl-fE3HEm02c4pQ5LHGy4ykqXeBtWghElcZ9B3sik0Pit7RJDKl_rDKlQvRBAFi86MvZP6fW5T2CVvxl215BYh1j3HjCfebrjuxxVSFshn4tlpiEWE3dfSgB1mxf4G-Vaa5Zw4iklD_1IfXTJWQvoiSRPOFUt0k0CFkAOMRckk9UwyB1fDbb3B0_l5H6FLUhLyibMuLuA')", backgroundSize:"cover", backgroundPosition:"center" }}>
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,#fff,rgba(255,255,255,0.7),rgba(34,197,94,0.1))" }}></div>
          </div>
          <div style={{ position:"relative", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", padding:"2rem 3rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
              <span style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(34,197,94,0.1)", color:"#22c55e", padding:"0.25rem 0.75rem", borderRadius:4, border:"1px solid rgba(34,197,94,0.2)", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em" }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#22c55e", display:"inline-block" }}></span>
                Sistema Activo
              </span>
            </div>
            <h1 style={{ fontSize:"clamp(1.5rem,3vw,2.5rem)", fontWeight:900, color:"#0f172a", margin:0, textTransform:"uppercase", fontStyle:"italic", letterSpacing:"-0.05em" }}>
              Control de Ventas e Ingresos
            </h1>
            <p style={{ fontSize:"0.875rem", color:"#64748b", marginTop:8, fontWeight:300, maxWidth:500 }}>
              Monitorización de rendimiento financiero y liquidación de inventario ganadero.
            </p>
          </div>
        </section>

        {/* ── KPI CARDS ────────────────────── */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem" }}>
          {[
            { label:"Ventas Totales",      val:"$452,000", unit:"COP", trend:"+8.2%",  pct:"80%" },
            { label:"Precio Promedio",     val:"$3,531",   unit:"/u",  trend:"+12%",   pct:"60%" },
            { label:"Unidades Liquidadas", val:"128",      unit:"K",   trend:"+5%",    pct:"40%" },
            { label:"Ingresos Netos",      val:"$12,850",  unit:"NET", trend:"STABLE", pct:"90%" },
          ].map((k,i) => (
            <div key={i} style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid rgba(34,197,94,0.1)", borderRadius:12, padding:"1.25rem", boxShadow:"0 4px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                <p style={{ fontSize:"0.65rem", fontWeight:700, color:"#94a3b8", textTransform:"uppercase", letterSpacing:"0.1em", margin:0 }}>{k.label}</p>
                <span style={{ fontSize:"0.65rem", fontWeight:900, color:"#22c55e", background:"rgba(34,197,94,0.1)", padding:"0.15rem 0.4rem", borderRadius:4 }}>{k.trend}</span>
              </div>
              <h3 style={{ fontSize:"1.6rem", fontWeight:900, color:"#0f172a", margin:"0 0 12px", letterSpacing:"-0.05em" }}>
                {k.val}<span style={{ fontSize:"0.75rem", fontWeight:400, color:"#94a3b8", marginLeft:4 }}>{k.unit}</span>
              </h3>
              <div style={{ display:"flex", gap:4, height:6 }}>
                <div style={{ flex: parseFloat(k.pct)/100, background:"#22c55e", borderRadius:999 }}></div>
                <div style={{ flex: 1 - parseFloat(k.pct)/100, background:"#f1f5f9", borderRadius:999 }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* ── GRÁFICO + ESTADO LIQUIDACIÓN ─── */}
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"1.5rem" }}>

          {/* Gráfico */}
          <div style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid rgba(34,197,94,0.1)", borderRadius:16, padding:"1.5rem", position:"relative", overflow:"hidden" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"2rem" }}>
              <div>
                <h2 style={{ fontSize:"1rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"-0.05em", color:"#0f172a", margin:0 }}>
                  Análisis de Crecimiento
                </h2>
                <p style={{ fontSize:"0.65rem", color:"#94a3b8", textTransform:"uppercase", fontWeight:700, letterSpacing:"0.2em", margin:"4px 0 0" }}>Proyección Mensual</p>
              </div>
              <div style={{ display:"flex", background:"#f8fafc", borderRadius:8, border:"1px solid #e2e8f0", overflow:"hidden" }}>
                {["Semana","Mes","Año"].map((t,i) => (
                  <button key={i} style={{ padding:"0.4rem 0.75rem", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", background: t==="Mes" ? "#22c55e" : "transparent", color: t==="Mes" ? "#fff" : "#94a3b8", border:"none", cursor:"pointer" }}>{t}</button>
                ))}
              </div>
            </div>
            <div style={{ height:200, display:"flex", flexDirection:"column", justifyContent:"flex-end", gap:8 }}>
              <div style={{ display:"flex", alignItems:"flex-end", gap:10, height:160, borderBottom:"1px solid #f1f5f9", paddingBottom:8 }}>
                {[
                  { h:"40%", val:"120K" },
                  { h:"60%", val:"180K" },
                  { h:"50%", val:"150K" },
                  { h:"85%", val:"255K" },
                  { h:"100%",val:"300K", activo:true },
                  { h:"70%", val:"210K" },
                ].map((b,i) => (
                  <div key={i} style={{ flex:1, position:"relative", height:b.h, borderRadius:"4px 4px 0 0", background: b.activo ? "#22c55e" : `linear-gradient(to top,rgba(34,197,94,0.05),rgba(34,197,94,${b.activo?1:0.3}))`, boxShadow: b.activo ? "0 4px 15px rgba(34,197,94,0.3)" : "none", cursor:"pointer" }}>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", padding:"0 0.5rem" }}>
                {["ENE","FEB","MAR","ABR","MAY","JUN"].map(m => (
                  <span key={m} style={{ fontSize:"0.6rem", fontWeight:900, color:"#94a3b8", textTransform:"uppercase", letterSpacing:"0.2em" }}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Estado liquidación */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
            <h2 style={{ fontSize:"0.72rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.3em", color:"#94a3b8", margin:0 }}>Estado de Liquidación</h2>
            {[
              { ico:"🔨", label:"Listos para Subasta",    desc:"42 Angus Yearlings",    val:"$84K",   color:"#22c55e" },
              { ico:"🔒", label:"Ventas Reservadas",       desc:"12 Brahman Bulls",       val:"$156K",  color:"#10b981" },
              { ico:"🚛", label:"En Tránsito / Logística", desc:"8 Lotes Carne/Lácteos", val:"$12.5K", color:"#84cc16" },
            ].map((item,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid rgba(34,197,94,0.1)", borderRadius:12, padding:"1rem", display:"flex", alignItems:"center", gap:"1rem", cursor:"pointer" }}>
                <div style={{ width:40, height:40, borderRadius:8, background:`rgba(34,197,94,0.1)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", flexShrink:0 }}>{item.ico}</div>
                <div style={{ flex:1 }}>
                  <p style={{ fontSize:"0.65rem", fontWeight:700, color:"#94a3b8", textTransform:"uppercase", margin:0 }}>{item.label}</p>
                  <p style={{ fontSize:"0.85rem", fontWeight:900, color:"#0f172a", margin:"2px 0 0" }}>{item.desc}</p>
                </div>
                <span style={{ fontFamily:"monospace", fontSize:"0.75rem", fontWeight:700, color:item.color }}>{item.val}</span>
              </div>
            ))}
            <button onClick={() => navigate("/ventas")}
              style={{ width:"100%", padding:"1rem", borderRadius:12, background:"#22c55e", color:"#fff", fontWeight:900, fontSize:"0.65rem", textTransform:"uppercase", letterSpacing:"0.2em", border:"none", cursor:"pointer", boxShadow:"0 4px 16px rgba(34,197,94,0.2)" }}>
              Ver Todas las Ventas →
            </button>
          </div>
        </div>

        {/* ── TABLA TRANSACCIONES ──────────── */}
        <div style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid rgba(34,197,94,0.1)", borderRadius:16, overflow:"hidden" }}>
          <div style={{ padding:"1.25rem 1.5rem", borderBottom:"1px solid #f1f5f9", display:"flex", justifyContent:"space-between", alignItems:"center", background:"rgba(248,250,249,0.5)" }}>
            <div>
              <h2 style={{ fontSize:"1rem", fontWeight:900, textTransform:"uppercase", fontStyle:"italic", color:"#0f172a", margin:0 }}>Transacciones Recientes</h2>
              <p style={{ fontSize:"0.6rem", color:"#94a3b8", fontFamily:"monospace", letterSpacing:"0.1em", margin:"4px 0 0", textTransform:"uppercase" }}>Base de Datos: CENTRAL_LEDGER</p>
            </div>
            <button onClick={() => navigate("/ventas")}
              style={{ fontSize:"0.65rem", fontWeight:900, color:"#22c55e", textTransform:"uppercase", letterSpacing:"0.1em", background:"none", border:"none", cursor:"pointer" }}>
              Ver Historial →
            </button>
          </div>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", textAlign:"left" }}>
              <thead>
                <tr style={{ background:"rgba(248,250,249,0.8)" }}>
                  {["Identificador / Lote","Adquiriente","Fecha Registro","Estado Flujo","Monto Operación"].map(h => (
                    <th key={h} style={{ padding:"1rem 1.5rem", fontSize:"0.6rem", fontWeight:900, color:"#94a3b8", textTransform:"uppercase", letterSpacing:"0.2em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transacciones.map((t,i) => (
                  <tr key={i} style={{ borderTop:"1px solid #f1f5f9" }}>
                    <td style={{ padding:"1rem 1.5rem" }}>
                      <p style={{ fontSize:"0.75rem", fontWeight:900, color:"#0f172a", margin:0 }}>{t.id}</p>
                      <p style={{ fontSize:"0.65rem", color:"#94a3b8", fontFamily:"monospace", margin:"2px 0 0" }}>{t.desc}</p>
                    </td>
                    <td style={{ padding:"1rem 1.5rem", fontSize:"0.72rem", fontWeight:700, color:"#475569" }}>{t.cliente}</td>
                    <td style={{ padding:"1rem 1.5rem", fontSize:"0.65rem", color:"#94a3b8", fontFamily:"monospace" }}>{t.fecha}</td>
                    <td style={{ padding:"1rem 1.5rem" }}>
                      <span style={{ padding:"0.2rem 0.6rem", borderRadius:4, border:`1px solid ${t.estadoColor}40`, background:`${t.estadoColor}20`, color:t.estadoColor, fontSize:"0.6rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em" }}>{t.estado}</span>
                    </td>
                    <td style={{ padding:"1rem 1.5rem", textAlign:"right", fontFamily:"monospace", fontSize:"0.75rem", fontWeight:900, color:"#0f172a" }}>{t.monto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}