import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ANIMALES = [
  { id:"BA-902", nombre:"Zeus",  raza:"Black Angus", edad:28, peso:842,  potrero:"North Valley A1",  estado:"Estable",    estadoColor:"#22c55e", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuArW-QEqRpP4naKqaMRsFuT97jCL55C5bwwyv5jsXEmAsjCUiJ7m6BHZxPJ52PwyJtxrbEUH3CIiuzStqawwDqWH-tNcBPTtYWST04ha7lCbL1LY3vbJZWgzKIbq170fO_iefE0rXany6_EGAOdhflbVOjiZbCcy7Xy3Kttji5DIeVHCqU9CMY_7C0rFNT6JMCYM230Wmo_gZywrnzbBtK2dVQXnyvbdF4p0N_gQ5K9jLav-QCaCncwMES5vLr2Ijylvu5z27WNyls" },
  { id:"BA-845", nombre:"Ares",  raza:"Black Angus", edad:24, peso:788,  potrero:"North Valley A1",  estado:"Revisión",   estadoColor:"#f97316", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBHSHS-PDLZM_cTDqHfmm6GtkYdkXiUOXmtEFURzIICsjnEj0QCIN79jMsikR7RaI-QeogK6Dec_JPfTHHQUjphKRxNziED0NFUI-7_B5h-LcxaZEq93yIlaXUxP10n-L-dRB1DaPXDJFSjX1IOuxkv6vG9GA6MU8fpMUNvwU4A3voYjMxEWIOkScd1e-85Mstbk3l0gxndWmS_625Ni8jZHyLc35e36mRS0vG4SftXKl9Wb_fbMoNftOfe4kW4_OWVKVbj0E-VCC0" },
  { id:"BA-112", nombre:"Titan", raza:"Black Angus", edad:32, peso:915,  potrero:"Hillside Range B2", estado:"Estable",    estadoColor:"#22c55e", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBt86E7HX8yiQB3ZLZwIz339DeXhGc61Y746LSbHfYchqJHHDAyN7BgH98vdyYZun59NMGRBGzs24S5SRE1Bx0teaQBd1UAOJUCoSUS9F7tbNRauE7LpPiriRE2vcsB6dahTaa4G0zxuZ9PnG795daMLOPXJa9PUEQgvlbovKWYie3ltNqSCaedifssqtVJCWY45OIKZ60uQLTDSLJOM-t0PxbLBUPGN2E2pzEgGp6K_co03zu6E4UtRZ8wRq8rXHQboRDV4GJgszE" },
  { id:"BA-451", nombre:"Hera",  raza:"Black Angus", edad:18, peso:560,  potrero:"North Valley A1",  estado:"Estable",    estadoColor:"#22c55e", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuArW-QEqRpP4naKqaMRsFuT97jCL55C5bwwyv5jsXEmAsjCUiJ7m6BHZxPJ52PwyJtxrbEUH3CIiuzStqawwDqWH-tNcBPTtYWST04ha7lCbL1LY3vbJZWgzKIbq170fO_iefE0rXany6_EGAOdhflbVOjiZbCcy7Xy3Kttji5DIeVHCqU9CMY_7C0rFNT6JMCYM230Wmo_gZywrnzbBtK2dVQXnyvbdF4p0N_gQ5K9jLav-QCaCncwMES5vLr2Ijylvu5z27WNyls" },
  { id:"BA-229", nombre:"Atlas", raza:"Black Angus", edad:40, peso:1020, potrero:"Hillside Range B2", estado:"Emergencia", estadoColor:"#ef4444", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBt86E7HX8yiQB3ZLZwIz339DeXhGc61Y746LSbHfYchqJHHDAyN7BgH98vdyYZun59NMGRBGzs24S5SRE1Bx0teaQBd1UAOJUCoSUS9F7tbNRauE7LpPiriRE2vcsB6dahTaa4G0zxuZ9PnG795daMLOPXJa9PUEQgvlbovKWYie3ltNqSCaedifssqtVJCWY45OIKZ60uQLTDSLJOM-t0PxbLBUPGN2E2pzEgGp6K_co03zu6E4UtRZ8wRq8rXHQboRDV4GJgszE" },
];

export default function ListadoGanado() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");

  const filtrados = ANIMALES.filter(a =>
    a.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    a.id.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ fontFamily:"'Public Sans',sans-serif", background:"radial-gradient(circle at top right,#f0fdf4,#fff)", minHeight:"100vh", color:"#1e293b" }}>
      <main style={{ maxWidth:1280, margin:"0 auto", padding:"2rem" }}>

        {/* ── HERO ─────────────────────────── */}
        <section style={{ marginBottom:"2.5rem" }}>
          <div style={{ position:"relative", height:450, borderRadius:16, overflow:"hidden", border:"1px solid #d1fae5", boxShadow:"0 8px 32px rgba(74,222,128,0.1)", backgroundImage:"linear-gradient(to right,rgba(255,255,255,0.95),rgba(255,255,255,0.4)),url('https://lh3.googleusercontent.com/aida-public/AB6AXuDW97n3Zr_K99UognZJP2pDE_GRKLahAOazNW1ZyWrCqIIEidUaxT9nC5LCNaWy1aqjtC5i17B9B1rYMAtZjJDLyh18tEQcvSxK8-O8RiCFGbInTpBn7VBffJThnD11CuPG_JxA0rSw3gZpAfjQpsRhiICqALIcVsx5oWeGBTvGXBBoMCs_5hVqb07ru-itx2imn3AuzCrRtkJzH2N5umRt7NuvC9CxoTV-0S5ssKBBl-Qcs-242HOFTCpISHpEwNLVhSWgPSLR-3k')", backgroundSize:"cover", backgroundPosition:"center" }}>
            <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", justifyContent:"center", padding:"3rem", zIndex:2 }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:"1rem" }}>
                <span style={{ width:32, height:2, background:"#4ade80", display:"inline-block" }}></span>
                <span style={{ fontSize:"0.72rem", fontWeight:700, color:"#16a34a", textTransform:"uppercase", letterSpacing:"0.3em" }}>Análisis de Hato Elite</span>
              </div>
              <h1 style={{ fontSize:"clamp(2.5rem,5vw,4.5rem)", fontWeight:900, color:"#0f172a", lineHeight:1.1, margin:"0 0 1rem", letterSpacing:"-0.05em" }}>
                GENÉTICA<br /><span style={{ color:"#4ade80" }}>AUMENTADA</span>
              </h1>
              <p style={{ maxWidth:400, fontSize:"1rem", color:"#475569", marginBottom:"2.5rem", fontWeight:300, lineHeight:1.7 }}>
                Telemetría de precisión y biometría avanzada para sus activos ganaderos de alto rendimiento.
              </p>
              <div style={{ display:"flex", gap:"1rem" }}>
                <button style={{ background:"#4ade80", color:"#fff", fontWeight:900, padding:"1rem 2.5rem", borderRadius:12, border:"none", cursor:"pointer", fontSize:"0.82rem", textTransform:"uppercase", boxShadow:"0 8px 24px rgba(74,222,128,0.4)" }}>
                  ➕ NUEVO REGISTRO
                </button>
                <button style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", color:"#16a34a", fontWeight:700, padding:"1rem 2.5rem", borderRadius:12, border:"1px solid #d1fae5", cursor:"pointer", fontSize:"0.82rem", textTransform:"uppercase" }}>
                  📤 EXPORTAR DATA
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── KPI CARDS ────────────────────── */}
        <section style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem", marginBottom:"2.5rem" }}>
          {[
            { label:"Total Cabezas",    val:"1,248",   ico:"🐄", sub:"+2.1% ESTE MES",   color:"#22c55e" },
            { label:"Salud Promedio",   val:"98.2%",   ico:"❤️", sub:"RANGO ÓPTIMO",     color:"#22c55e" },
            { label:"Tasa Crecimiento", val:"1.4kg/d", ico:"📈", sub:"+0.2kg VS ANT.",   color:"#22c55e" },
            { label:"Alertas Activas",  val:"03",      ico:"⚠️", sub:"ACCIÓN REQUERIDA", color:"#f97316", alert:true },
          ].map((k,i) => (
            <div key={i} style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border: k.alert ? "1px solid rgba(249,115,22,0.3)" : "1px solid rgba(74,222,128,0.2)", borderLeft: k.alert ? "4px solid #f97316" : "1px solid rgba(74,222,128,0.2)", borderRadius:16, padding:"1.5rem", boxShadow:"0 8px 32px rgba(74,222,128,0.08)" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1rem" }}>
                <p style={{ fontSize:"0.7rem", fontWeight:700, color:"#94a3b8", textTransform:"uppercase", letterSpacing:"0.1em", margin:0 }}>{k.label}</p>
                <span style={{ fontSize:"1.3rem" }}>{k.ico}</span>
              </div>
              <p style={{ fontSize:"2rem", fontWeight:900, color:"#0f172a", margin:"0 0 1rem" }}>{k.val}</p>
              <span style={{ fontSize:"0.65rem", fontWeight:700, color:k.color, textTransform:"uppercase" }}>{k.sub}</span>
            </div>
          ))}
        </section>

        {/* ── CARDS DESTACADOS ─────────────── */}
        <section style={{ marginBottom:"2.5rem" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"2rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:4, height:32, background:"#4ade80", borderRadius:2 }}></div>
              <h2 style={{ fontSize:"1.5rem", fontWeight:900, textTransform:"uppercase", color:"#0f172a", margin:0 }}>Sujetos Destacados</h2>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"2rem" }}>
            {ANIMALES.slice(0,3).map((a,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border:"1px solid rgba(74,222,128,0.2)", borderRadius:16, overflow:"hidden", cursor:"pointer" }}>
                <div style={{ height:220, overflow:"hidden", position:"relative" }}>
                  <img src={a.img} alt={a.nombre} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  <div style={{ position:"absolute", top:"1rem", left:"1rem", fontFamily:"monospace", fontSize:"0.65rem", color:"#15803d", background:"rgba(255,255,255,0.85)", padding:"0.2rem 0.5rem", borderRadius:4, border:"1px solid #d1fae5" }}>SCAN_ID: {a.id}</div>
                  <div style={{ position:"absolute", top:"1rem", right:"1rem", background:a.estadoColor, color:"#fff", fontSize:"0.6rem", padding:"0.2rem 0.75rem", borderRadius:999, fontWeight:900, textTransform:"uppercase" }}>{a.estado}</div>
                </div>
                <div style={{ padding:"1.5rem" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1rem" }}>
                    <div>
                      <h3 style={{ fontSize:"1.2rem", fontWeight:900, color:"#0f172a", margin:0 }}>{a.nombre}</h3>
                      <p style={{ fontSize:"0.65rem", color:"#94a3b8", textTransform:"uppercase", fontWeight:700, letterSpacing:"0.2em", margin:"4px 0 0" }}>Raza: {a.raza} • {a.edad} Meses</p>
                    </div>
                    <div style={{ textAlign:"right" }}>
                      <p style={{ fontSize:"1.3rem", fontWeight:900, color:"#16a34a", margin:0 }}>{a.peso} kg</p>
                      <p style={{ fontSize:"0.6rem", color:"#94a3b8", textTransform:"uppercase", fontWeight:700, margin:"2px 0 0" }}>Peso actual</p>
                    </div>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
                    {[["❤️","Salud","Óptima"],["📍","Potrero",a.potrero.split(" ").slice(0,2).join(" ")]].map(([ico,lbl,val],j) => (
                      <div key={j} style={{ padding:"0.75rem", background:"#f0fdf4", borderRadius:12, border:"1px solid #d1fae5", display:"flex", alignItems:"center", gap:8 }}>
                        <span style={{ fontSize:"1.1rem" }}>{ico}</span>
                        <div>
                          <p style={{ fontSize:"0.6rem", color:"#94a3b8", textTransform:"uppercase", margin:0 }}>{lbl}</p>
                          <p style={{ fontSize:"0.8rem", fontWeight:700, color:"#0f172a", margin:"2px 0 0" }}>{val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TABLA ────────────────────────── */}
        <section style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border:"1px solid rgba(74,222,128,0.2)", borderRadius:16, overflow:"hidden", marginBottom:"3rem" }}>
          <div style={{ padding:"1.5rem", borderBottom:"1px solid #f0fdf4", display:"flex", justifyContent:"space-between", alignItems:"center", background:"rgba(255,255,255,0.4)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ fontSize:"1.2rem" }}>📊</span>
              <h2 style={{ fontSize:"1.1rem", fontWeight:900, textTransform:"uppercase", color:"#0f172a", margin:0 }}>Inventario de Hato</h2>
            </div>
            <input value={busqueda} onChange={e => setBusqueda(e.target.value)}
              placeholder="🔍 Buscar animal..."
              style={{ padding:"0.5rem 0.875rem", borderRadius:8, border:"1px solid #d1fae5", fontSize:"0.82rem", outline:"none", width:220 }} />
          </div>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", textAlign:"left" }}>
              <thead style={{ background:"rgba(240,253,244,0.5)" }}>
                <tr>
                  {["ID","Nombre","Raza","Edad","Peso (kg)","Pastizal","Estado","Acciones"].map(h => (
                    <th key={h} style={{ padding:"1rem 1.5rem", fontSize:"0.65rem", fontWeight:900, color:"#64748b", textTransform:"uppercase", letterSpacing:"0.2em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtrados.map((a,i) => (
                  <tr key={i} style={{ borderTop:"1px solid #f0fdf4", cursor:"pointer" }}
                    onMouseEnter={e => e.currentTarget.style.background="rgba(240,253,244,0.5)"}
                    onMouseLeave={e => e.currentTarget.style.background="transparent"}>
                    <td style={{ padding:"1rem 1.5rem", fontWeight:700, color:"#16a34a" }}>{a.id}</td>
                    <td style={{ padding:"1rem 1.5rem", color:"#1e293b" }}>{a.nombre}</td>
                    <td style={{ padding:"1rem 1.5rem", color:"#64748b" }}>{a.raza}</td>
                    <td style={{ padding:"1rem 1.5rem", color:"#64748b", textAlign:"center" }}>{a.edad}</td>
                    <td style={{ padding:"1rem 1.5rem", color:"#1e293b", fontWeight:700, textAlign:"center" }}>{a.peso}</td>
                    <td style={{ padding:"1rem 1.5rem", color:"#64748b" }}>{a.potrero}</td>
                    <td style={{ padding:"1rem 1.5rem" }}>
                      <span style={{ padding:"0.2rem 0.75rem", borderRadius:999, fontSize:"0.65rem", fontWeight:900, textTransform:"uppercase", background:`${a.estadoColor}20`, color:a.estadoColor, border:`1px solid ${a.estadoColor}40` }}>
                        {a.estado}
                      </span>
                    </td>
                    <td style={{ padding:"1rem 1.5rem", textAlign:"right" }}>
                      <button onClick={() => navigate(`/ganado/${a.id}`)} style={{ background:"none", border:"none", cursor:"pointer", color:"#94a3b8", fontSize:"1.1rem" }}>👁</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding:"1.5rem", borderTop:"1px solid #f0fdf4", display:"flex", justifyContent:"space-between", alignItems:"center", background:"#fff" }}>
            <p style={{ fontSize:"0.75rem", color:"#94a3b8", margin:0 }}>Mostrando {filtrados.length} de {ANIMALES.length} registros</p>
            <div style={{ display:"flex", gap:8 }}>
              <button disabled style={{ padding:"0.5rem 1rem", borderRadius:8, border:"1px solid #d1fae5", fontSize:"0.72rem", fontWeight:900, cursor:"not-allowed", color:"#94a3b8", background:"#fff", opacity:0.5 }}>Anterior</button>
              <button style={{ padding:"0.5rem 1rem", borderRadius:8, background:"#4ade80", color:"#fff", fontSize:"0.72rem", fontWeight:900, border:"none", cursor:"pointer" }}>1</button>
              <button style={{ padding:"0.5rem 1rem", borderRadius:8, border:"1px solid #d1fae5", fontSize:"0.72rem", fontWeight:900, cursor:"pointer", color:"#475569", background:"#fff" }}>Siguiente</button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}