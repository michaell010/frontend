import { useNavigate } from "react-router-dom";

const HATO = [
  { id:"BELLA-0422", uid:"AI-99-422", linaje:"Angus Purebred v4",  estado:"Gestante",       estadoColor:"#10b981", estadoBg:"rgba(16,185,129,0.1)", salud:92, ultimoEvento:"Inseminación (Mar 12)", fechaEstimada:"Mañana",      img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAA_4YNs58VlFGDh61Pkl1R9zAH-0occFwxU_60ulpxrbzy9-D_by8dqNhla85NPwxRPLtjAPgLmt6kgSF0cTlRc8zt7guXMpHB80Ysh4hWkB9jgj_GAxGWeuukVUMCO3ClbGZrDEClXJBYDjNWmJZijlYTMbHbjANHWA4Xxpwi-6N1GiTU0S9gsaf4FHNeXyTPCg3rT6T2m43uYMfZiswi9AS1AzkNbcsqrG-XCcf9SAAu5B1LQjcEBP6gO5Jk3YYdHeqUSvxlmFI" },
  { id:"DAISY-0398", uid:"AI-99-398", linaje:"Hereford Mix G3",    estado:"Gestante",       estadoColor:"#10b981", estadoBg:"rgba(16,185,129,0.1)", salud:88, ultimoEvento:"Ultrasound (Jun 04)",   fechaEstimada:"Oct 14, 2025", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAYUbaSe-R6XnsintowHWu7vnXZrBp8DTaLJbe0wpFz-EYS8MAeAe8ylSRWIDjNB166Onl7zNBsuwEb6tiWDdylTmPw-QdZItwNT5saXFazTzr0y5Z9bzP7e4xoHL0B_p4_IEky_BpgWc0JDsFlrW6gpfXbs7YnPcXnOV2HH0NalxZlVg43_2Pk_orATQ_Kq5H9OfXnmQOSIDqMCm1yMbge2uTTh_s-gqdLjutzlDUzUjf_j0y7--I1VpwuwWM1gFnI" },
  { id:"RUBY-0552",  uid:"AI-99-552", linaje:"Angus Purebred v4",  estado:"Alerta de Celo", estadoColor:"#f59e0b", estadoBg:"rgba(245,158,11,0.1)",  salud:75, ultimoEvento:"Sensor Actividad (Hoy)",fechaEstimada:"PENDIENTE",    img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDnjyd3CNO5-DFoYNxJ3Zb-hNF6GYJOCnDcwLr3Wzqf6K6SBzb-3AjMskS4xp2GymIcGI_CqkKCsNgMmHrKykCwnqmjRtLvJNr8KPaRLTd3j8Q86sf_MiuO61OFskwzJzNNV5uNQSIIN-_rAE4Vc421D49R69ZzlF0U_GnO8JzCuKabSu4aNwipL9I0S6Q2OJ65UT__b_oBmxk3KnqT5Q_gC8d5bvJKOcNK2q5oJArbSv3kUWxYWQumgYdc-8syXJNsLzH_iiggM5o" },
];

const PARTOS = [
  { nombre:"BELLA #0422", raza:"Angus • 2do Parto",  fecha:"Mañana",       activo:true,  vitalidad:"98%" },
  { nombre:"DAISY #0398", raza:"Hereford • 1er Parto",fecha:"Oct 14, 2025", activo:false, vitalidad:null },
  { nombre:"LUNA #0511",  raza:"Brahman • 4to Parto", fecha:"Oct 18, 2025", activo:false, vitalidad:null },
];

export default function Reproduccion() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily:"'Public Sans',sans-serif", background:"#fff", minHeight:"100vh", color:"#1e293b" }}>
      <main style={{ maxWidth:1280, margin:"0 auto", padding:"2rem", display:"flex", flexDirection:"column", gap:"2rem" }}>

        {/* ── HERO ─────────────────────────── */}
        <section style={{ borderRadius:24, overflow:"hidden", background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid #d1fae5", boxShadow:"0 8px 32px rgba(16,185,129,0.05)", display:"grid", gridTemplateColumns:"1fr 1fr" }}>
          <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:"2rem", padding:"4rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ padding:"0.3rem 0.875rem", background:"rgba(16,185,129,0.1)", color:"#10b981", border:"1px solid rgba(16,185,129,0.2)", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.3em", borderRadius:4 }}>Protocolo v7.4</span>
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#84cc16", display:"inline-block" }}></span>
            </div>
            <h1 style={{ fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:900, lineHeight:1.1, color:"#0f172a", margin:0 }}>
              Reproducción<br />
              <span style={{ background:"linear-gradient(to right,#10b981,#84cc16)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>y Genética</span>
            </h1>
            <p style={{ fontSize:"1rem", color:"#475569", maxWidth:400, lineHeight:1.7, margin:0 }}>
              Optimización algorítmica de linajes y monitoreo gestacional con análisis biomecánico en tiempo real.
            </p>
            <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
              <button style={{ display:"flex", alignItems:"center", gap:10, background:"#10b981", color:"#fff", padding:"1rem 2rem", borderRadius:12, fontWeight:900, fontSize:"0.75rem", textTransform:"uppercase", letterSpacing:"0.1em", border:"none", cursor:"pointer", boxShadow:"0 4px 16px rgba(16,185,129,0.3)" }}>
                ➕ Nueva Inseminación
              </button>
              <button style={{ display:"flex", alignItems:"center", gap:10, background:"#fff", color:"#0f172a", padding:"1rem 2rem", borderRadius:12, fontWeight:900, fontSize:"0.75rem", textTransform:"uppercase", letterSpacing:"0.1em", border:"1px solid rgba(16,185,129,0.2)", cursor:"pointer" }}>
                🧬 Dashboard Genético
              </button>
            </div>
          </div>
          <div style={{ position:"relative", minHeight:400, overflow:"hidden" }}>
            <img alt="Reproducción ganadera"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRBZJZXbVPUkwBE3Gsi6apMlNG8LaqSHk_-8ftv9CFhLWsG57qdPywNe77mMnlumGfb2LTx7KBF4ii_ssHNicQBKYY6XUIC3G_ZpYyiRQYFaKlag-0F8Vgyk5zDVgWH0Rf4qG5w78AB26D66c160ENJK7r9v1Uj1L1wUYKl8W5STqMcpY_IO-vuynnbY7CXZ4H4dSQqJOC38lmi3UmY3jh-pXPN7JiKbtW_k38YX39CRVjWYym8Q-su9_mjwbPNnn1wL3cngR1UV4"
              style={{ width:"100%", height:"100%", objectFit:"cover", position:"absolute", inset:0 }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(255,255,255,0.95),rgba(255,255,255,0.2),transparent)" }}></div>
            <div style={{ position:"absolute", top:"2rem", left:"2rem", display:"flex", flexDirection:"column", gap:6 }}>
              <div style={{ display:"flex", gap:4 }}>
                {["#10b981","rgba(16,185,129,0.2)","#10b981","#84cc16"].map((c,i) => (
                  <div key={i} style={{ width:4, height:32, background:c, borderRadius:2 }}></div>
                ))}
              </div>
              <span style={{ fontSize:"0.6rem", fontFamily:"monospace", color:"#10b981", textTransform:"uppercase", letterSpacing:"0.2em" }}>Scanning DNA Helix...</span>
            </div>
          </div>
        </section>

        {/* ── KPI CARDS ────────────────────── */}
        <section style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.5rem" }}>
          {[
            { label:"Tasa de Preñez",    val:"78.5%", ico:"🧪", trend:"+2.4%", color:"#10b981", pct:78 },
            { label:"Partos Esperados",  val:"42",    ico:"🐄", trend:"+5",    color:"#84cc16", sub:"Próxima ventana: 72 horas" },
            { label:"Inseminaciones",    val:"56",    ico:"🔬", trend:"-8%",   color:"#f97316", sub:"Ciclo actual: Fase final" },
            { label:"Eficiencia Genética",val:"85%",  ico:"🧬", trend:"-1.2%", color:"#94a3b8", pct:85 },
          ].map((k,i) => (
            <div key={i} style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid #d1fae5", borderRadius:16, padding:"1.5rem", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, right:0, padding:"1rem", opacity:0.05, fontSize:"4rem" }}>{k.ico}</div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1.5rem" }}>
                <div style={{ fontSize:"1.4rem", padding:8, background:"rgba(16,185,129,0.1)", border:"1px solid rgba(16,185,129,0.2)", borderRadius:8 }}>{k.ico}</div>
                <span style={{ fontSize:"0.75rem", fontWeight:700, color: k.trend.startsWith("+") ? "#10b981" : "#f97316", background: k.trend.startsWith("+") ? "rgba(16,185,129,0.1)" : "rgba(249,115,22,0.1)", padding:"0.2rem 0.5rem", borderRadius:999, display:"flex", alignItems:"center", gap:2 }}>
                  {k.trend.startsWith("+") ? "▲" : "▼"} {k.trend}
                </span>
              </div>
              <p style={{ fontSize:"0.7rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color:"#64748b", margin:"0 0 4px" }}>{k.label}</p>
              <p style={{ fontSize:"2rem", fontWeight:900, color:"#0f172a", margin:"0 0 8px" }}>{k.val}</p>
              {k.pct && (
                <div style={{ height:6, background:"#f1f5f9", borderRadius:999, overflow:"hidden" }}>
                  <div style={{ width:`${k.pct}%`, height:"100%", background:`linear-gradient(to right,#10b981,#84cc16)`, borderRadius:999 }}></div>
                </div>
              )}
              {k.sub && <p style={{ fontSize:"0.65rem", color:"#94a3b8", margin:0 }}>{k.sub}</p>}
            </div>
          ))}
        </section>

        {/* ── GRÁFICO + TIMELINE ───────────── */}
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"2rem" }}>

          {/* Gráfico */}
          <div style={{ background:"#fff", borderRadius:24, padding:"2rem", border:"1px solid #d1fae5" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"2rem" }}>
              <div>
                <h2 style={{ fontSize:"1.1rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.05em", color:"#0f172a", margin:0 }}>Tendencias de Reproducción</h2>
                <p style={{ fontSize:"0.75rem", color:"#64748b", margin:"4px 0 0" }}>Análisis predictivo de fertilidad estacional</p>
              </div>
              <select style={{ background:"#ecfdf5", border:"1px solid #d1fae5", borderRadius:8, fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", padding:"0.4rem 0.75rem", color:"#10b981", outline:"none" }}>
                <option>Últimos 6 Meses</option>
                <option>Proyección 2025</option>
             </select>
           </div>
           <div style={{ height:200, display:"flex", alignItems:"flex-end", justifyContent:"space-between", gap:"1rem", padding:"0 0.5rem", position:"relative" }}>
             <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", justifyContent:"space-between", pointerEvents:"none", opacity:0.5 }}>
               {[0,1,2].map(i => <div key={i} style={{ borderTop:"1px solid #d1fae5", width:"100%" }}></div>)}
             </div>
             {[
               { h:"60%", label:"ENE", activo:false },
               { h:"75%", label:"FEB", activo:false },
               { h:"45%", label:"MAR", activo:false },
               { h:"90%", label:"ABR", activo:false },
               { h:"80%", label:"MAY", activo:true  },
               { h:"65%", label:"JUN", activo:false },
             ].map((b,i) => (
               <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:8, cursor:"pointer" }}>
                 <div style={{ width:"100%", height:b.h, borderRadius:"8px 8px 0 0", background: b.activo ? "linear-gradient(to top,rgba(16,185,129,0.1),#10b981)" : "rgba(16,185,129,0.05)", borderTop: b.activo ? "none" : "1px solid rgba(16,185,129,0.4)", boxShadow: b.activo ? "0 0 15px rgba(16,185,129,0.2)" : "none", transition:"all 0.3s" }}></div>
                 <span style={{ fontSize:"0.65rem", fontWeight:900, color: b.activo ? "#10b981" : "#94a3b8", textTransform:"uppercase" }}>{b.label}</span>
               </div>
              ))}
            </div>
          </div>

          {/* Partos próximos */}
          <div style={{ background:"#fff", borderRadius:24, padding:"2rem", border:"1px solid #d1fae5", display:"flex", flexDirection:"column" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"2rem" }}>
              <h2 style={{ fontSize:"1.1rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.05em", color:"#0f172a", margin:0 }}>Partos Próximos</h2>
              <span style={{ fontSize:"1.2rem" }}>🔔</span>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"2rem", flex:1 }}>
              {PARTOS.map((p,i) => (
                <div key={i} style={{ display:"flex", gap:"1rem", position:"relative" }}>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <div style={{ width:16, height:16, borderRadius:"50%", background: p.activo ? "#10b981" : "#e2e8f0", boxShadow: p.activo ? "0 0 0 4px rgba(16,185,129,0.1)" : "none", flexShrink:0 }}></div>
                    {i < PARTOS.length-1 && <div style={{ width:1, flex:1, background:"#ecfdf5", marginTop:4 }}></div>}
                  </div>
                  <div style={{ paddingBottom:"1rem" }}>
                    <p style={{ fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color: p.activo ? "#10b981" : "#94a3b8", margin:"0 0 2px" }}>{p.fecha}</p>
                    <h4 style={{ fontSize:"1rem", fontWeight:700, color:"#0f172a", margin:"0 0 2px" }}>{p.nombre}</h4>
                    <p style={{ fontSize:"0.75rem", color:"#64748b", margin:0 }}>{p.raza}</p>
                    {p.vitalidad && (
                      <span style={{ display:"inline-block", marginTop:6, background:"rgba(132,204,22,0.1)", color:"#4d7c0f", fontSize:"0.6rem", fontWeight:900, borderRadius:4, padding:"0.15rem 0.5rem", textTransform:"uppercase" }}>Vitalidad {p.vitalidad}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => navigate("/reproduccion")}
              style={{ marginTop:"1rem", width:"100%", padding:"0.875rem", border:"1px solid #d1fae5", background:"rgba(236,253,245,0.5)", borderRadius:12, fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.2em", color:"#475569", cursor:"pointer" }}>
              Ver Calendario Completo
            </button>
          </div>
        </div>

        {/* ── TABLA ESTATUS GENÉTICO ───────── */}
        <section style={{ background:"#fff", borderRadius:24, overflow:"hidden", border:"1px solid #d1fae5" }}>
          <div style={{ padding:"2rem", borderBottom:"1px solid #ecfdf5", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
            <div>
              <h2 style={{ fontSize:"1.1rem", fontWeight:900, textTransform:"uppercase", color:"#0f172a", margin:0 }}>Estatus Genético del Hato</h2>
              <p style={{ fontSize:"0.75rem", color:"#64748b", margin:"4px 0 0" }}>Monitoreo de 154 especímenes reproductivos</p>
            </div>
            <div style={{ display:"flex", gap:"0.75rem" }}>
              <button style={{ padding:"0.6rem 1.5rem", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:12, cursor:"pointer", color:"#475569" }}>Filtros Avanzados</button>
              <button style={{ padding:"0.6rem 1.5rem", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", background:"rgba(16,185,129,0.1)", color:"#10b981", border:"1px solid rgba(16,185,129,0.2)", borderRadius:12, cursor:"pointer" }}>Exportar Reporte</button>
            </div>
          </div>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", textAlign:"left" }}>
              <thead style={{ background:"rgba(236,253,245,0.3)" }}>
                <tr>
                  {["Identificador","Linaje Genético","Estatus","Último Evento","Fecha Estimada","Índice Salud"].map(h => (
                    <th key={h} style={{ padding:"1.25rem 2rem", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.2em", color:"#94a3b8" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {HATO.map((a,i) => (
                  <tr key={i} style={{ borderTop:"1px solid #ecfdf5", cursor:"pointer" }}
                    onMouseEnter={e => e.currentTarget.style.background="rgba(16,185,129,0.03)"}
                    onMouseLeave={e => e.currentTarget.style.background="transparent"}>
                    <td style={{ padding:"1.5rem 2rem" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
                        <div style={{ width:48, height:48, borderRadius:12, overflow:"hidden", border:"1px solid #d1fae5", flexShrink:0 }}>
                          <img src={a.img} alt={a.id} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                        </div>
                        <div>
                          <p style={{ fontSize:"0.875rem", fontWeight:900, color:"#0f172a", margin:0 }}>{a.id}</p>
                          <p style={{ fontSize:"0.6rem", color:"#94a3b8", fontFamily:"monospace", margin:"2px 0 0" }}>UID: {a.uid}</p>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding:"1.5rem 2rem", fontSize:"0.875rem", color:"#475569", fontWeight:500 }}>{a.linaje}</td>
                    <td style={{ padding:"1.5rem 2rem" }}>
                      <span style={{ padding:"0.3rem 0.875rem", background:a.estadoBg, color:a.estadoColor, fontSize:"0.65rem", fontWeight:900, borderRadius:6, textTransform:"uppercase", border:`1px solid ${a.estadoColor}40` }}>
                        {a.estado}
                      </span>
                    </td>
                    <td style={{ padding:"1.5rem 2rem", fontSize:"0.875rem", color:"#64748b" }}>{a.ultimoEvento}</td>
                    <td style={{ padding:"1.5rem 2rem", fontSize:"0.875rem", fontWeight:900, color:"#0f172a" }}>{a.fechaEstimada}</td>
                    <td style={{ padding:"1.5rem 2rem" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                        <div style={{ flex:1, height:6, background:"#f1f5f9", borderRadius:999, overflow:"hidden" }}>
                          <div style={{ width:`${a.salud}%`, height:"100%", background:"linear-gradient(to right,#10b981,#84cc16)", borderRadius:999 }}></div>
                        </div>
                        <span style={{ fontSize:"0.65rem", fontWeight:900, color:"#10b981", minWidth:32 }}>{a.salud}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding:"1.5rem 2rem", background:"rgba(236,253,245,0.2)", borderTop:"1px solid #ecfdf5", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <p style={{ fontSize:"0.65rem", color:"#94a3b8", fontWeight:900, textTransform:"uppercase", margin:0 }}>Visualizando 1-3 de 154 activos</p>
            <div style={{ display:"flex", gap:"1rem" }}>
              <button disabled style={{ width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:12, border:"1px solid #d1fae5", background:"#fff", color:"#d1fae5", cursor:"not-allowed" }}>‹</button>
              <button style={{ width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:12, border:"1px solid #d1fae5", background:"#fff", color:"#10b981", cursor:"pointer" }}>›</button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}