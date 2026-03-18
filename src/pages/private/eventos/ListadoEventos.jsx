import { useNavigate } from "react-router-dom";

const HISTORIAL = [
  { id:"#CH-2490", tratamiento:"Refuerzo Aftosa",       fecha:"12 Oct, 2025", vet:"Dr. Sarah Miller", estado:"Completado", estadoColor:"#22c55e", estadoBg:"rgba(34,197,94,0.2)" },
  { id:"#CH-1182", tratamiento:"Soporte Parto",         fecha:"11 Oct, 2025", vet:"Dr. James Wilson", estado:"En Curso",   estadoColor:"#22c55e", estadoBg:"rgba(236,253,245,1)" },
  { id:"#CH-3015", tratamiento:"Protocolo Parásitos",   fecha:"10 Oct, 2025", vet:"Dr. Sarah Miller", estado:"Completado", estadoColor:"#22c55e", estadoBg:"rgba(34,197,94,0.2)" },
];

export default function ListadoEventos() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily:"'Public Sans',sans-serif", background:"linear-gradient(135deg,#fff,#ecfdf5,#fff)", minHeight:"100vh", color:"#3f6212" }}>
      <main style={{ maxWidth:1440, margin:"0 auto", padding:"2rem", display:"flex", flexDirection:"column", gap:"2rem" }}>

        {/* ── HERO ─────────────────────────── */}
        <section style={{ display:"grid", gridTemplateColumns:"1fr 1fr", borderRadius:40, overflow:"hidden", background:"rgba(255,255,255,0.85)", backdropFilter:"blur(16px)", border:"1px solid rgba(74,222,128,0.2)", boxShadow:"0 10px 30px rgba(74,222,128,0.15)" }}>
          <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:"1.5rem", padding:"4rem" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, borderRadius:999, background:"rgba(74,222,128,0.2)", padding:"0.4rem 1rem", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.2em", color:"#22c55e", width:"fit-content" }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", display:"inline-block" }}></span>
              Módulo Sanitario V7.4
            </div>
            <h1 style={{ fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:900, lineHeight:1.1, color:"#3f6212", margin:0 }}>
              Salud y Sanidad<br />
              <span style={{ color:"#22c55e", fontStyle:"italic", textShadow:"0 0 10px rgba(34,197,94,0.3)" }}>Inteligente</span>
            </h1>
            <p style={{ maxWidth:400, fontSize:"1rem", lineHeight:1.7, color:"rgba(63,98,18,0.7)", margin:0 }}>
              Monitoreo biométrico y diagnóstico preventivo para la excelencia en la gestión veterinaria.
            </p>
            <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
              <button style={{ display:"flex", alignItems:"center", gap:10, borderRadius:999, background:"#22c55e", padding:"1rem 2rem", fontSize:"0.82rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color:"#fff", border:"none", cursor:"pointer", boxShadow:"0 4px 16px rgba(34,197,94,0.3)" }}>
                ➕ Nuevo Examen
              </button>
              <button style={{ display:"flex", alignItems:"center", gap:10, borderRadius:999, border:"1px solid rgba(74,222,128,0.2)", background:"#fff", padding:"1rem 2rem", fontSize:"0.82rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color:"#3f6212", cursor:"pointer" }}>
                📊 Exportar Historial
              </button>
            </div>
          </div>
          <div style={{ position:"relative", minHeight:450, overflow:"hidden" }}>
            <img alt="Salud ganadera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqaert0Je6_m1zaN_hXwaBICvmnldiYJ6-wDJHC7dBgJAQFR2O1166rC1IRoBqqQ-wa5xwax8GA_3uG0vM_YfvoPxiRR1lgXPpqKXCfq1G6eqfhoUUsfJBFJbb7Y6yUBNIgjEF2TM4IDDf4zHhXksELJ0_mFqTn3eQjp0FMB4BtrhmjGvafSdqbakHFM22foepExFUUzPW-cVEjbeyveGxTr10w9Al3PjjzL63uYPWchdwxMa06jTiiyGWxguPog6DzgBlJPt-Ckw"
              style={{ width:"100%", height:"100%", objectFit:"cover", position:"absolute", inset:0 }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,#fff,rgba(255,255,255,0.3),transparent)" }}></div>
            <div style={{ position:"absolute", bottom:"1.5rem", right:"1.5rem", background:"rgba(255,255,255,0.85)", backdropFilter:"blur(16px)", borderRadius:16, padding:"1.25rem", maxWidth:220, border:"1px solid rgba(34,197,94,0.2)" }}>
              <p style={{ fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", color:"#22c55e", marginBottom:8, letterSpacing:"0.1em" }}>Estatus del Campo</p>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ flex:1, height:8, borderRadius:999, background:"rgba(74,222,128,0.2)", overflow:"hidden" }}>
                  <div style={{ width:"82%", height:"100%", background:"#22c55e", borderRadius:999 }}></div>
                </div>
                <span style={{ fontSize:"0.75rem", fontWeight:700, color:"#3f6212" }}>82%</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── KPI ROW ──────────────────────── */}
        <section style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.5rem" }}>
          {[
            { label:"Población Total",      val:"1,482", ico:"👥", sub:"+2.4% este mes",  color:"#22c55e" },
            { label:"Tasa Vacunación",       val:"94%",   ico:"💉", sub:"Objetivo cumplido",color:"#22c55e" },
            { label:"Alertas Médicas",       val:"12",    ico:"🚨", sub:"+3 casos críticos",color:"#22c55e", bg:"rgba(236,253,245,0.4)" },
            { label:"Tratamientos Activos",  val:"45",    ico:"🏥", sub:"12 cerrados hoy",  color:"#22c55e" },
          ].map((k,i) => (
            <div key={i} style={{ display:"flex", flexDirection:"column", gap:12, borderRadius:16, background: k.bg || "rgba(255,255,255,0.9)", backdropFilter:"blur(16px)", padding:"1.5rem", border:"1px solid rgba(74,222,128,0.2)", boxShadow:"0 10px 30px rgba(74,222,128,0.15)" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <p style={{ fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color:"rgba(63,98,18,0.5)", margin:0 }}>{k.label}</p>
                <div style={{ background:"rgba(74,222,128,0.1)", borderRadius:999, padding:"0.6rem", fontSize:"1.1rem" }}>{k.ico}</div>
              </div>
              <p style={{ fontSize:"1.8rem", fontWeight:900, color:"#3f6212", margin:0 }}>{k.val}</p>
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ fontSize:"0.65rem", fontWeight:700, color:k.color, textTransform:"uppercase", letterSpacing:"0.05em" }}>📈 {k.sub}</span>
              </div>
            </div>
          ))}
        </section>

        {/* ── CONTENIDO PRINCIPAL ─────────── */}
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"2rem" }}>

          {/* Columna izquierda */}
          <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>

            {/* Historial Clínico */}
            <div style={{ borderRadius:16, background:"#fff", boxShadow:"0 8px 32px rgba(74,222,128,0.05)", overflow:"hidden", border:"1px solid transparent" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid rgba(74,222,128,0.05)", padding:"1.5rem" }}>
                <h3 style={{ fontSize:"1rem", fontWeight:900, textTransform:"uppercase", fontStyle:"italic", color:"#3f6212", margin:0 }}>Historial Clínico</h3>
                <button style={{ fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color:"#22c55e", background:"none", border:"none", cursor:"pointer" }}>Ver Todo</button>
              </div>
              <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", textAlign:"left" }}>
                  <thead style={{ background:"rgba(236,253,245,0.3)" }}>
                    <tr>
                      {["ID Animal","Tratamiento","Fecha","Vet. Cargo","Estado"].map(h => (
                        <th key={h} style={{ padding:"1.25rem 1.5rem", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color:"rgba(63,98,18,0.4)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {HISTORIAL.map((ev,i) => (
                      <tr key={i} style={{ borderTop:"1px solid rgba(74,222,128,0.05)", cursor:"pointer" }}
                        onMouseEnter={e => e.currentTarget.style.background="rgba(74,222,128,0.05)"}
                        onMouseLeave={e => e.currentTarget.style.background="transparent"}>
                        <td style={{ padding:"1rem 1.5rem", fontWeight:700, color:"#3f6212" }}>{ev.id}</td>
                        <td style={{ padding:"1rem 1.5rem", color:"rgba(63,98,18,0.6)", fontSize:"0.875rem" }}>{ev.tratamiento}</td>
                        <td style={{ padding:"1rem 1.5rem", color:"rgba(63,98,18,0.4)", fontSize:"0.875rem" }}>{ev.fecha}</td>
                        <td style={{ padding:"1rem 1.5rem", fontWeight:500, fontStyle:"italic", color:"rgba(63,98,18,0.7)", fontSize:"0.875rem" }}>{ev.vet}</td>
                        <td style={{ padding:"1rem 1.5rem" }}>
                          <span style={{ display:"inline-flex", alignItems:"center", borderRadius:999, background:ev.estadoBg, padding:"0.25rem 0.75rem", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.05em", color:ev.estadoColor }}>
                            {ev.estado}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Monitoreo Biométrico */}
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 0.25rem" }}>
                <h3 style={{ fontSize:"1.2rem", fontWeight:900, textTransform:"uppercase", fontStyle:"italic", color:"#3f6212", margin:0 }}>Monitoreo Biométrico</h3>
                <span style={{ fontSize:"0.65rem", fontWeight:700, color:"#22c55e", textTransform:"uppercase", letterSpacing:"0.1em", display:"flex", alignItems:"center", gap:6 }}>
                  <span style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", display:"inline-block" }}></span>
                  Sistema Live
                </span>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem" }}>
                {[
                  { id:"#CH-0421", titulo:"Alerta Metabólica", desc:"Patrón de peso anómalo detectado.", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBS44WxKAs_EaeRGyanARKINjx-tN3gGII-pwmzbB81omUdhaJXauS2-ibEx5TJ-uJKU-X0s44gaWE5zfnTP4z1nAAI5pWtCVEqCGDQI-XRBPVZmr-5z7x63qMVXSUtDOGqSwvCJ2If6CDzSGbiWKEw8nOihiyYUSgFOx8tuduqqzwT95FE8a1eDmWmpjzjYD_5oQC1PT0ADQtUxw2HsYyfTBVTzfFJkIipLYT9pt2PF1uZtOORRBtWDFXOZpi2AR-8mzxCIs8x0sc" },
                  { id:"Corral 12",  titulo:"Sensor Hídrico",   desc:"Flujo 40% debajo del umbral óptimo.", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuChxfgjxbsPmKGIMosH0w1PGfC22fuB7XdBH0i9g_CjpvFJJ4dyEOc7H7WwDWBRIxtIYNMCtubua2lNSWM2OINPf_UXKVqBdZfv-ppXhTAvir-12-AyQ3S86g78BgxsAdJTE1KyA72KM8QSiLyv1lqKNIJ5ZKYENP2q5mRVV1Wc65tTPbNtG_PA_pq8AqPZo8uErzpmZKZKnWDOvHWHkLt5cHu8xM-iLuK59Qp93rFF38wNezMPzMFqIH_M2-UBEe8kxvlkulVDVWw" },
                ].map((alerta,i) => (
                  <div key={i} style={{ borderRadius:16, background:"rgba(255,255,255,0.85)", backdropFilter:"blur(16px)", border:"1px solid rgba(34,197,94,0.1)", padding:"1.25rem", boxShadow:"0 4px 16px rgba(74,222,128,0.05)", display:"flex", gap:"1.25rem" }}>
                    <div style={{ width:112, height:112, borderRadius:12, overflow:"hidden", flexShrink:0, border:"2px solid rgba(34,197,94,0.3)", position:"relative" }}>
                      <img src={alerta.img} alt={alerta.titulo} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    </div>
                    <div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between", flex:1 }}>
                      <div>
                        <p style={{ fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color:"#22c55e", margin:"0 0 4px" }}>{alerta.id}</p>
                        <h4 style={{ fontSize:"1rem", fontWeight:900, fontStyle:"italic", color:"#3f6212", margin:"0 0 4px" }}>{alerta.titulo}</h4>
                        <p style={{ fontSize:"0.7rem", color:"rgba(63,98,18,0.5)", textTransform:"uppercase", letterSpacing:"0.05em", fontWeight:700, margin:0 }}>{alerta.desc}</p>
                      </div>
                      <button onClick={() => navigate("/eventos")}
                        style={{ fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", color:"#22c55e", background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:6, padding:0 }}>
                        Asignar revisión →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>

            {/* Calendario */}
            <div style={{ borderRadius:16, background:"#fff", padding:"1.5rem", boxShadow:"0 4px 16px rgba(74,222,128,0.05)", border:"1px solid transparent" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem" }}>
                <h3 style={{ fontSize:"1rem", fontWeight:900, textTransform:"uppercase", fontStyle:"italic", color:"#3f6212", margin:0 }}>Calendario</h3>
                <div style={{ display:"flex", gap:8 }}>
                  <button style={{ background:"none", border:"none", cursor:"pointer", color:"rgba(34,197,94,0.4)", fontSize:"1.1rem" }}>‹</button>
                  <button style={{ background:"none", border:"none", cursor:"pointer", color:"rgba(34,197,94,0.4)", fontSize:"1.1rem" }}>›</button>
                </div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:4, textAlign:"center", marginBottom:"1rem" }}>
                {["L","M","M","J","V","S","D"].map((d,i) => (
                  <span key={i} style={{ fontSize:"0.6rem", fontWeight:900, color:"rgba(63,98,18,0.3)", textTransform:"uppercase", letterSpacing:"0.1em" }}>{d}</span>
                ))}
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map(d => (
                  <span key={d} style={{ padding:"0.5rem", fontSize:"0.75rem", fontWeight:700, borderRadius:8, background: d===11 ? "#22c55e" : "transparent", color: d===11 ? "#fff" : "rgba(63,98,18,0.6)", cursor:"pointer", boxShadow: d===11 ? "0 4px 12px rgba(34,197,94,0.4)" : "none" }}>{d}</span>
                ))}
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                <p style={{ fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.2em", color:"rgba(63,98,18,0.4)", margin:0 }}>Próximos Eventos</p>
                {[
                  { titulo:"Campaña Brucelosis", sub:"Sector A - 45 Cabezas", fecha:"14 OCT", color:"#22c55e" },
                  { titulo:"Control Nutricional", sub:"Añojos - 12 Cabezas",  fecha:"16 OCT", color:"rgba(74,222,128,0.4)" },
                ].map((ev,i) => (
                  <div key={i} style={{ borderLeft:`4px solid ${ev.color}`, background: i===0 ? "rgba(34,197,94,0.05)" : "rgba(236,253,245,0.3)", padding:"1rem", borderRadius:"0 16px 16px 0", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div>
                      <p style={{ fontSize:"0.75rem", fontWeight:900, textTransform:"uppercase", color:"#3f6212", margin:0 }}>{ev.titulo}</p>
                      <p style={{ fontSize:"0.65rem", color:"rgba(63,98,18,0.5)", textTransform:"uppercase", fontWeight:700, margin:"2px 0 0" }}>{ev.sub}</p>
                    </div>
                    <span style={{ fontSize:"0.65rem", fontWeight:900, color:"rgba(63,98,18,0.4)" }}>{ev.fecha}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GanaAI Diagnóstico */}
            <div style={{ borderRadius:16, background:"#fff", padding:"2rem", boxShadow:"0 10px 30px rgba(74,222,128,0.15)", border:"1px solid rgba(74,222,128,0.1)", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, right:0, width:160, height:160, background:"rgba(74,222,128,0.1)", borderRadius:"50%", filter:"blur(60px)" }}></div>
              <div style={{ position:"relative" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem" }}>
                  <span style={{ fontSize:"3rem" }}>🔬</span>
                  <span style={{ borderRadius:999, background:"#ecfdf5", padding:"0.2rem 0.75rem", fontSize:"0.6rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.1em", border:"1px solid rgba(74,222,128,0.2)", color:"#22c55e" }}>System v4.0</span>
                </div>
                <h4 style={{ fontSize:"1.5rem", fontWeight:900, fontStyle:"italic", color:"#3f6212", margin:"0 0 0.5rem" }}>GanaAI Diagnóstico</h4>
                <p style={{ fontSize:"0.7rem", fontWeight:700, color:"rgba(63,98,18,0.6)", lineHeight:1.6, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"2rem" }}>
                  Diagnóstico predictivo mediante IA para la gestión veterinaria.
                </p>
                <button onClick={() => navigate("/eventos")}
                  style={{ width:"100%", borderRadius:999, background:"#22c55e", padding:"1rem", fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", letterSpacing:"0.2em", color:"#fff", border:"none", cursor:"pointer", boxShadow:"0 8px 24px rgba(34,197,94,0.2)" }}>
                  Ver Todos los Eventos
                </button>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}