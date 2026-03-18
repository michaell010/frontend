import { useState } from "react";
import { useNavigate } from "react-router-dom";

const POTREROS = [
  { nombre:"Potrero El Olvido",    sector:"Sector Norte", hectareas:15.5, pasto:"Estrella",   capacidad:25, ocupacion:88, estado:"Ocupado",     estadoColor:"#22c55e", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuCmvSTrY_Fz1rQ-JE18ystwY4B2DoIgeamw5BrwsY3TBzvB5bEjTOK1KjXHPzItZXNVVnLWFo-dny4ZIODnzeP8xv_rP8R5hK6l7Ez_pTwZVZzLMmY-9_JK71k8D9PRjDBWbLbIYezc4eMekLRI2nI072-ATVB5p9auPa5hDNVnQmG5uWXWRz1JPwxsxfUWuJsu6V54QMCX_Qsd06Sl3pYjAOvfSWD31zvRWdwBy6jJmoM8-3mGTXKJwKOp2YW2qIYFeo2rbEIST_U" },
  { nombre:"Potrero La Esperanza", sector:"Sector Sur",   hectareas:12.0, pasto:"Guinea",     capacidad:18, diasDescanso:14, estado:"En Descanso",estadoColor:"#38bdf8", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuA5ZXuYAYk1K-o_AryAl2FUfAp6xJLxcr18_RFxQLfDijfhjWEjeS9jjaEdsl6TtWgW4am71hzXYzfhdW4RuGWlEjMgi0e0LgajNlM7Kt7mQOC46Af-IGPpnc5BomPU4BsYIPVn6QnUZvUaAYsBxb8feGZDWaLjwRyEpjmb_CH9HB5gNNbxIbNXhfXzf5M7wtBBK6eaF8xOmwgj-AY3tu_HggTedulM_1UbgIOksB-pDTm-afwFiGFAHZc8BX3r8s_lhE7vu6hTPF8" },
  { nombre:"Lote San José",        sector:"Sector Bajo",  hectareas:22.8, pasto:"Mulato II",  capacidad:35, ocupacion:95, estado:"Ocupado",     estadoColor:"#22c55e", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDmk_1Ktz3_scFJZQ7_qUw5aTIB6fCuFn8WkVY9W0FaGX-TYE0mDBWy-3XP3DApc7hvZRVVe6ONA0zBQndTZq1uwyvqQPeTabiloYf0_Je3MO21eQc_gxVs2YdX06pkMPQGMQpYjS1P8TuqZEp9PCT5lkPOSiUNya4nRQDFc1CgBoKlezmi37BcEh9ts7J4RTxOwzKC1nx_Wv_qNbbXFWjGRZ_oYOQ8k7OUYOPrDADBDu1-kD65eiEleQ5cc" },
  { nombre:"Sector Norte 1",       sector:"Sector Norte", hectareas:18.2, pasto:"Brizantha",  capacidad:30, saludForraje:"Baja", estado:"Crítico", estadoColor:"#ef4444", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBou5kesLQsNfY-1NKexS6S6taol68GOEMVVjAGTp3LmE6TzGbgX1b1jybIHuKhU0CBLlvXPmV0a8caqURAoV38TiE6LwrI-9y4gx_SKDPIpvfnPflqBzwnVdoHXKmPfe_tFOPp0PDu1o-QTHL8rYwc-Cx22b2qyOd3AAeIdjriosFkqc8EBBPBgREVhL55az-mzaGXYi7HevURTEduTt_fi9OTvMHaRX0r4R-L-wggOFgsA_9HB9cbQfzJf9QQDj3Oaz4Lo65V3C-o" },
  { nombre:"Potrero Las Vacas",    sector:"Sector Sur",   hectareas:10.0, pasto:"Estrella",   capacidad:15, diasDescanso:22, estado:"En Descanso",estadoColor:"#38bdf8", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAuLARuBvbskNNUY-BU89xm3iqcvyKgnmNN8kPryslx8Q0lsKHMKHHW1zSZHKWxoHX-KWHC6fA-h_0oSdFxDNJDXCJ23mGpzl0eY_9jW7tSHQRsMRCL66YH_XIeT1S96BBEnOqxGt6zKhuf59yP5nCZg23bf-3xZ2e_sPT-MOX4fqnHP9t71ARcasoM4H2irUnSdDkvDoi3dUvMtlf0Q_cQIIcNdt3ZqLzpjINRaw-fzU4AaLgatoBMksyU4NIo9wQlKr7_MzZaRfo" },
  { nombre:"Lote Bajo",            sector:"Sector Bajo",  hectareas:25.0, pasto:"Natural",    capacidad:40, ocupacion:60, estado:"Ocupado",     estadoColor:"#22c55e", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBg0_2ddB6no4LgwTj6MBDNu_GjmWqXdwCUVXhaSGuI-eEYGaBP49SQ1ZBSlaDq5uBFULHrTWp5b9Yyec7sSTPNh7_2j9_wel7TiRlSOIGV5k0_5XU_Xsdiccu1yosmf1VvrKI9hPlKi5VJfUq7DHP9nvyWyB11YKGKbVro8tDDjJvWGi1n8GTrOKCUC1dtUmYVWDBEaFLh8OVFuRvRXfu6368MetmbzFXxqIj21WAlH5BkZS6LB-afwiR-BjD4hAYlS1CzmpugxCg" },
];

const STATS = [
  { label:"Disponibles",   val:12, ico:"✅", color:"#22c55e", bg:"rgba(34,197,94,0.1)" },
  { label:"Ocupados",      val:8,  ico:"🐄", color:"#3b82f6", bg:"rgba(59,130,246,0.1)" },
  { label:"Mantenimiento", val:3,  ico:"🔧", color:"#f59e0b", bg:"rgba(245,158,11,0.1)" },
  { label:"Descanso",      val:5,  ico:"🌿", color:"#64748b", bg:"rgba(100,116,139,0.1)" },
];

export default function MallaDigital() {
  const navigate  = useNavigate();
  const [vista, setVista] = useState("grid"); // "grid" | "tabla"
  const [busqueda, setBusqueda] = useState("");

  const filtrados = POTREROS.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.sector.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ fontFamily:"'Inter',sans-serif", background:"#f6f8f6", minHeight:"100vh", color:"#0f172a" }}>
      <main style={{ maxWidth:1280, margin:"0 auto", padding:"2rem" }}>

        {/* ── ENCABEZADO ───────────────────── */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:"1rem", marginBottom:"2rem", flexWrap:"wrap" }}>
          <div>
            <h1 style={{ fontSize:"clamp(1.5rem,3vw,2.2rem)", fontWeight:900, letterSpacing:"-0.05em", margin:"0 0 0.5rem" }}>Gestión de Potreros</h1>
            <p style={{ color:"#64748b", margin:0, fontSize:"0.875rem" }}>Supervise el estado actual de sus pastizales y capacidad de carga.</p>
          </div>
          <button style={{ display:"flex", alignItems:"center", gap:8, background:"#13ec37", color:"#0f172a", padding:"0.65rem 1.5rem", borderRadius:8, fontWeight:700, fontSize:"0.875rem", border:"none", cursor:"pointer", boxShadow:"0 4px 12px rgba(19,236,55,0.3)" }}>
            ➕ Nuevo Potrero
          </button>
        </div>

        {/* ── STATS BAR ────────────────────── */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem", marginBottom:"2rem" }}>
          {STATS.map((s,i) => (
            <div key={i} style={{ background:"#fff", padding:"1rem", borderRadius:12, border:"1px solid #e2e8f0", display:"flex", alignItems:"center", gap:"1rem" }}>
              <div style={{ width:48, height:48, borderRadius:8, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem" }}>{s.ico}</div>
              <div>
                <p style={{ fontSize:"0.7rem", color:"#64748b", textTransform:"uppercase", fontWeight:700, letterSpacing:"0.05em", margin:0 }}>{s.label}</p>
                <p style={{ fontSize:"1.3rem", fontWeight:700, margin:0 }}>{s.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── TOOLBAR ──────────────────────── */}
        <div style={{ background:"#fff", borderRadius:12, border:"1px solid #e2e8f0", padding:"1rem 1.5rem", display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem", flexWrap:"wrap", gap:"1rem" }}>
          <input value={busqueda} onChange={e => setBusqueda(e.target.value)}
            placeholder="🔍 Buscar potrero..."
            style={{ padding:"0.5rem 1rem", borderRadius:8, border:"1px solid #e2e8f0", fontSize:"0.875rem", outline:"none", width:250 }} />
          <div style={{ display:"flex", gap:8 }}>
            <button onClick={() => setVista("grid")}
              style={{ padding:"0.5rem 1rem", borderRadius:8, fontSize:"0.75rem", fontWeight:700, background: vista==="grid" ? "#13ec37" : "#f1f5f9", color: vista==="grid" ? "#0f172a" : "#64748b", border:"none", cursor:"pointer" }}>
              ▦ Grid
            </button>
            <button onClick={() => setVista("tabla")}
              style={{ padding:"0.5rem 1rem", borderRadius:8, fontSize:"0.75rem", fontWeight:700, background: vista==="tabla" ? "#13ec37" : "#f1f5f9", color: vista==="tabla" ? "#0f172a" : "#64748b", border:"none", cursor:"pointer" }}>
              ☰ Tabla
            </button>
          </div>
        </div>

        {/* ── VISTA GRID ───────────────────── */}
        {vista === "grid" && (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem", marginBottom:"2rem" }}>
            {filtrados.map((p,i) => (
              <div key={i} style={{ background:"#fff", borderRadius:12, border:"1px solid #e2e8f0", overflow:"hidden", cursor:"pointer", transition:"all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(19,236,55,0.5)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(19,236,55,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="#e2e8f0"; e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ height:180, overflow:"hidden", position:"relative" }}>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,0.6),transparent)", zIndex:1 }}></div>
                  <img src={p.img} alt={p.nombre} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.5s" }}
                    onMouseEnter={e => e.currentTarget.style.transform="scale(1.1)"}
                    onMouseLeave={e => e.currentTarget.style.transform="scale(1)"} />
                  <div style={{ position:"absolute", bottom:"1rem", left:"1rem", zIndex:2 }}>
                    <h3 style={{ fontSize:"1.1rem", fontWeight:700, color:"#fff", margin:0 }}>{p.nombre}</h3>
                    <div style={{ display:"flex", alignItems:"center", gap:4, color:"rgba(255,255,255,0.8)", fontSize:"0.72rem", marginTop:2 }}>
                      📍 {p.sector}
                    </div>
                  </div>
                </div>
                <div style={{ padding:"1.25rem", display:"flex", flexDirection:"column", gap:"1rem" }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                    <div>
                      <span style={{ fontSize:"0.6rem", fontWeight:700, color:"#64748b", textTransform:"uppercase", letterSpacing:"0.05em" }}>Hectáreas</span>
                      <p style={{ fontSize:"1.1rem", fontWeight:700, margin:"2px 0 0" }}>{p.hectareas} Ha</p>
                    </div>
                    <div>
                      <span style={{ fontSize:"0.6rem", fontWeight:700, color:"#64748b", textTransform:"uppercase", letterSpacing:"0.05em" }}>Tipo de Pasto</span>
                      <p style={{ fontSize:"1.1rem", fontWeight:700, margin:"2px 0 0" }}>{p.pasto}</p>
                    </div>
                    <div>
                      <span style={{ fontSize:"0.6rem", fontWeight:700, color:"#64748b", textTransform:"uppercase", letterSpacing:"0.05em" }}>Capacidad</span>
                      <p style={{ fontSize:"1.1rem", fontWeight:700, margin:"2px 0 0" }}>{p.capacidad} U.G.</p>
                    </div>
                    <div>
                      <span style={{ fontSize:"0.6rem", fontWeight:700, color:"#64748b", textTransform:"uppercase", letterSpacing:"0.05em" }}>
                        {p.ocupacion ? "Ocupación" : p.diasDescanso ? "Días Descanso" : "Salud Forraje"}
                      </span>
                      <p style={{ fontSize:"1.1rem", fontWeight:700, margin:"2px 0 0", color: p.saludForraje ? "#ef4444" : p.estadoColor }}>
                        {p.ocupacion ? `${p.ocupacion}%` : p.diasDescanso ? `${p.diasDescanso} Días` : p.saludForraje}
                      </p>
                    </div>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid #f1f5f9", paddingTop:"1rem" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <div style={{ width:10, height:10, borderRadius:"50%", background:p.estadoColor }}></div>
                      <span style={{ fontSize:"0.875rem", fontWeight:700, color:p.estadoColor, textTransform:"uppercase", letterSpacing:"-0.02em" }}>{p.estado}</span>
                    </div>
                    <button style={{ background:"none", border:"none", cursor:"pointer", color:"#94a3b8", fontSize:"1.2rem" }}>⋮</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── VISTA TABLA ──────────────────── */}
        {vista === "tabla" && (
          <div style={{ background:"#fff", borderRadius:12, border:"1px solid #e2e8f0", overflow:"hidden", marginBottom:"2rem" }}>
            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", textAlign:"left" }}>
                <thead style={{ background:"#f8fafc", borderBottom:"1px solid #e2e8f0" }}>
                  <tr>
                    {["Nombre","Hectáreas","Tipo de Pasto","Capacidad Animal","Estado","Acciones"].map(h => (
                      <th key={h} style={{ padding:"1rem 1.5rem", fontSize:"0.7rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", color:"#64748b" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtrados.map((p,i) => (
                    <tr key={i} style={{ borderTop:"1px solid #f1f5f9", cursor:"pointer" }}
                      onMouseEnter={e => e.currentTarget.style.background="#f8fafc"}
                      onMouseLeave={e => e.currentTarget.style.background="transparent"}>
                      <td style={{ padding:"1rem 1.5rem", fontWeight:600, fontSize:"0.875rem" }}>{p.nombre}</td>
                      <td style={{ padding:"1rem 1.5rem", fontSize:"0.875rem", color:"#475569" }}>{p.hectareas} ha</td>
                      <td style={{ padding:"1rem 1.5rem", fontSize:"0.875rem", color:"#475569" }}>{p.pasto}</td>
                      <td style={{ padding:"1rem 1.5rem", fontSize:"0.875rem", color:"#475569" }}>{p.capacidad} Cabezas</td>
                      <td style={{ padding:"1rem 1.5rem" }}>
                        <span style={{ display:"inline-flex", alignItems:"center", padding:"0.2rem 0.75rem", borderRadius:999, fontSize:"0.7rem", fontWeight:700, background:`${p.estadoColor}20`, color:p.estadoColor, border:`1px solid ${p.estadoColor}40` }}>
                          {p.estado}
                        </span>
                      </td>
                      <td style={{ padding:"1rem 1.5rem", textAlign:"right" }}>
                        <button style={{ background:"none", border:"none", cursor:"pointer", color:"#94a3b8", fontSize:"1.2rem" }}>⋮</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ padding:"1rem 1.5rem", borderTop:"1px solid #e2e8f0", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:"0.875rem", color:"#64748b" }}>Mostrando {filtrados.length} de {POTREROS.length} potreros</span>
              <div style={{ display:"flex", gap:8 }}>
                <button disabled style={{ padding:"0.5rem 1rem", borderRadius:8, border:"1px solid #e2e8f0", fontSize:"0.875rem", fontWeight:500, cursor:"not-allowed", color:"#94a3b8", background:"#fff" }}>Anterior</button>
                <button style={{ width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:8, background:"#13ec37", color:"#0f172a", fontWeight:700, border:"none", cursor:"pointer" }}>1</button>
                <button style={{ padding:"0.5rem 1rem", borderRadius:8, border:"1px solid #e2e8f0", fontSize:"0.875rem", fontWeight:500, cursor:"pointer", color:"#475569", background:"#fff" }}>Siguiente</button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}