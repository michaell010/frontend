import { useNavigate } from "react-router-dom";
import { getUsuarioActual, logout } from "../../../services/AuthService";

export default function DashBoard() {
  const navigate = useNavigate();
  const usuario  = getUsuarioActual();
  const nombre   = usuario?.nombres || "Usuario";

  const handleLogout = () => { logout(); navigate("/login"); };

  return (
    <div style={{ fontFamily:"'Public Sans',sans-serif", background:"linear-gradient(135deg,#fff 0%,#f0fdf4 100%)", color:"#166534", minHeight:"100vh" }}>

      {/* ── NAVBAR ─────────────────────────── */}
      <header style={{ position:"sticky", top:0, zIndex:50, display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid #d9f99d", background:"rgba(255,255,255,0.85)", backdropFilter:"blur(16px)", padding:"1rem 3rem" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"2rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, cursor:"pointer" }} onClick={() => navigate("/dashboard")}>
            <div style={{ width:44, height:44, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:12, background:"linear-gradient(135deg,#4ade80,#22c55e)", color:"#fff", fontSize:22, boxShadow:"0 4px 12px rgba(34,197,94,0.3)" }}>🐂</div>
            <span style={{ fontSize:"1.2rem", fontWeight:900, color:"#166534" }}>GanaControl</span>
          </div>
          <nav style={{ display:"flex", gap:"1.5rem" }}>
            {[
              { label:"Ganado",       href:"/ganado" },
              { label:"Reproducción", href:"/reproduccion" },
              { label:"Sanidad",      href:"/eventos" },
              { label:"Inventario",   href:"/inventario" },
              { label:"Finanzas",     href:"/finanzas" },
              { label:"Potreros",     href:"/pasturas" },
            ].map(l => (
              <button key={l.href} onClick={() => navigate(l.href)}
                style={{ background:"none", border:"none", cursor:"pointer", fontSize:"0.85rem", fontWeight:600, color:"#65a30d" }}>
                {l.label}
              </button>
            ))}
          </nav>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
          <span style={{ fontSize:"0.82rem", color:"#65a30d", fontWeight:600 }}>👤 {nombre}</span>
          <button onClick={handleLogout}
            style={{ padding:"0.5rem 1.2rem", borderRadius:999, background:"#22c55e", color:"#fff", border:"none", fontWeight:700, cursor:"pointer", fontSize:"0.82rem" }}>
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main style={{ flex:1 }}>

        {/* ── HERO ───────────────────────────── */}
        <section style={{ position:"relative", height:480, overflow:"hidden", padding:"3rem", display:"flex", alignItems:"center" }}>
          <div style={{ position:"absolute", inset:0 }}>
            <img alt="Granja moderna"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCECj7vNqlFD1jDO3o5vrOuL5KAf2O1fa7CeHuBqegEg2yFmIYDtNUZDge3rxxcyRHtSTq6uExfkqzXvW-nURrGlZRP-2iDIpoILpUkz7yDt0zVF2WB9wxoDoPYtS0oo8a2N2yDzvE616Dpm9wdQ1Yp4RUuOfpI5c-zsNCu0HuOh47zk-3cGW7OaGfVcVejPLVDaGbNjyf6WrZwBN2ze00XhCOXPi-xnpL6NgEloOMIbo0VkJ7zhgYDD_lRnK9o8QTy9F8wNiBQsGw"
              style={{ width:"100%", height:"100%", objectFit:"cover", transform:"scale(1.05)" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(255,255,255,0.95),rgba(255,255,255,0.4),transparent)" }}></div>
          </div>
          <div style={{ position:"relative", zIndex:10, maxWidth:700, display:"flex", flexDirection:"column", gap:"1.5rem" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, borderRadius:999, background:"rgba(74,222,128,0.2)", border:"1px solid rgba(74,222,128,0.3)", padding:"0.4rem 1rem", fontSize:"0.75rem", fontWeight:700, color:"#22c55e", textTransform:"uppercase", letterSpacing:"0.2em", width:"fit-content" }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", display:"inline-block" }}></span>
              Sistema Operativo — Bienvenido, {nombre}
            </div>
            <h1 style={{ fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:900, color:"#166534", lineHeight:1.1, margin:0 }}>
              Mando Central <span style={{ color:"#22c55e" }}>GanaControl</span>
            </h1>
            <p style={{ fontSize:"1rem", color:"#65a30d", margin:0, fontWeight:300, maxWidth:500 }}>
              Monitoreo en tiempo real y analítica para su empresa ganadera moderna.
            </p>
            <div style={{ display:"flex", gap:"1rem" }}>
              <button onClick={() => navigate("/ganado")}
                style={{ display:"flex", alignItems:"center", gap:8, borderRadius:16, background:"#4ade80", padding:"0.875rem 2rem", fontWeight:700, color:"#fff", border:"none", cursor:"pointer", boxShadow:"0 8px 24px rgba(74,222,128,0.3)" }}>
                🐄 Ver Ganado
              </button>
              <button onClick={() => navigate("/finanzas")}
                style={{ display:"flex", alignItems:"center", gap:8, borderRadius:16, background:"rgba(255,255,255,0.6)", border:"1px solid rgba(74,222,128,0.2)", padding:"0.875rem 2rem", fontWeight:700, color:"#22c55e", cursor:"pointer" }}>
                💰 Ver Finanzas
              </button>
            </div>
          </div>
        </section>

        {/* ── KPI CARDS ──────────────────────── */}
        <section style={{ padding:"0 3rem", marginTop:"-4rem", position:"relative", zIndex:20 }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.5rem" }}>
            {[
              { label:"Ganado Total",         val:"1,284",    ico:"🐄", sub:"+2.4% vs mes anterior" },
              { label:"Producción de Leche",  val:"8,450 L",  ico:"🥛", sub:"+5.1% eficiencia técnica" },
              { label:"Ingresos Proyectados", val:"$45,200",  ico:"💰", sub:"+12.8% interanual" },
              { label:"Alertas de Sistema",   val:"12",       ico:"⚠️", sub:"3 eventos críticos pendientes" },
            ].map((k,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(16px)", border:"1px solid rgba(132,204,22,0.2)", borderRadius:24, padding:"1.75rem", boxShadow:"0 8px 32px rgba(74,222,128,0.1)", display:"flex", flexDirection:"column", gap:8 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontSize:"0.7rem", fontWeight:700, color:"#65a30d", textTransform:"uppercase", letterSpacing:"0.1em" }}>{k.label}</span>
                  <span style={{ fontSize:"1.3rem" }}>{k.ico}</span>
                </div>
                <span style={{ fontSize:"2rem", fontWeight:900, color:"#166534" }}>{k.val}</span>
                <span style={{ fontSize:"0.72rem", fontWeight:700, color:"#22c55e" }}>{k.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTENIDO PRINCIPAL ─────────────── */}
        <section style={{ padding:"3rem", display:"grid", gridTemplateColumns:"2fr 1fr", gap:"2rem" }}>

          {/* Mapa de Pastizales + Gráfico */}
          <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>

            {/* Mapa */}
            <div style={{ background:"#fff", borderRadius:32, padding:"2rem", boxShadow:"0 8px 32px rgba(163,230,53,0.08)", border:"1px solid #d9f99d" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem" }}>
                <div>
                  <h2 style={{ fontSize:"1.2rem", fontWeight:900, color:"#166534", margin:0 }}>Análisis de Pastizales</h2>
                  <p style={{ fontSize:"0.8rem", color:"#65a30d", margin:"0.2rem 0 0" }}>Monitoreo satelital de sectores en tiempo real</p>
                </div>
                <button onClick={() => navigate("/pasturas")}
                  style={{ fontSize:"0.75rem", fontWeight:700, color:"#22c55e", background:"#f0fdf4", border:"1px solid #d9f99d", borderRadius:8, padding:"0.4rem 1rem", cursor:"pointer" }}>
                  Ver Potreros →
                </button>
              </div>
              <div style={{ aspectRatio:"16/9", borderRadius:20, overflow:"hidden", background:"#f0fdf4", position:"relative" }}>
                <img alt="Mapa pastizales"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK9w3ziPF-ufTLsBHhy8_ofzMb0MC7AD5kLfRrrRCjuczkQBGVsWOFn3AbARnvhQDLx1NHqIQ8lZmgU-yv7m4d0zf6-lrgelHh1zjBEmZPpVmD1zM18-lx_nL6KxFkYwM_0JRebxFMKK3o_b2rcrgdNZ0I5HOC8EUT5Sph6JiTgzSXOP-5BT5lu1msm-YoY-PIwwzZGitT6OzSYXPu2edqE-n8AeALMbrwradjE5Bg4Ge3w8Rdt8R8I72aCT3fscM6ROx26U5SnWk"
                  style={{ width:"100%", height:"100%", objectFit:"cover", opacity:0.7 }} />
                <div style={{ position:"absolute", inset:0, padding:"1rem", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gridTemplateRows:"repeat(3,1fr)", gap:"0.5rem" }}>
                  {[
                    { label:"Sector A1", span:1 },
                    { label:"Sector A2", span:1 },
                    { label:"Sector B1", span:1 },
                    { label:"Sector B2", span:1 },
                    { label:"Rango Highland", span:2 },
                    { label:"Sector C1", span:1 },
                    { label:"Sector C2", span:1 },
                  ].map((s,i) => (
                    <div key={i} style={{ gridColumn:`span ${s.span}`, border:"2px solid rgba(74,222,128,0.5)", background:"rgba(255,255,255,0.15)", backdropFilter:"blur(4px)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}
                      onClick={() => navigate("/pasturas")}>
                      <span style={{ fontSize:"0.6rem", fontWeight:900, color:"#fff", background:"rgba(34,197,94,0.8)", padding:"0.15rem 0.5rem", borderRadius:6 }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gráfico producción */}
            <div style={{ background:"#fff", borderRadius:32, padding:"2rem", boxShadow:"0 8px 32px rgba(163,230,53,0.08)", border:"1px solid #d9f99d" }}>
              <h2 style={{ fontSize:"1.2rem", fontWeight:900, color:"#166534", marginBottom:"1.5rem" }}>Tendencias de Producción</h2>
              <div style={{ height:180, display:"flex", alignItems:"flex-end", justifyContent:"space-between", gap:10, padding:"0 0.5rem" }}>
                {[
                  { h:"40%", label:"ENE" },
                  { h:"55%", label:"FEB" },
                  { h:"45%", label:"MAR" },
                  { h:"70%", label:"ABR" },
                  { h:"60%", label:"MAY" },
                  { h:"85%", label:"JUN" },
                  { h:"95%", label:"JUL", activo:true },
                ].map((b,i) => (
                  <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
                    <div style={{ width:"100%", height:b.h, borderRadius:"12px 12px 0 0", background: b.activo ? "linear-gradient(to top,#22c55e,#4ade80)" : "#f0fdf4", boxShadow: b.activo ? "0 4px 16px rgba(34,197,94,0.3)" : "none" }}></div>
                    <span style={{ fontSize:"0.65rem", fontWeight:900, color: b.activo ? "#22c55e" : "#65a30d", letterSpacing:"0.1em" }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>

            {/* Actividad Reciente */}
            <div style={{ background:"#fff", borderRadius:32, padding:"2rem", boxShadow:"0 8px 32px rgba(163,230,53,0.08)", border:"1px solid #d9f99d" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem" }}>
                <h2 style={{ fontSize:"1.1rem", fontWeight:900, color:"#166534", margin:0 }}>Actividad Reciente</h2>
                <button style={{ fontSize:"0.72rem", fontWeight:800, color:"#22c55e", background:"none", border:"none", cursor:"pointer" }}>Ver Todo</button>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:"1.2rem" }}>
                {[
                  { ico:"✅", titulo:"Vacunación Completada",  desc:"240 cabezas tratadas.",       tiempo:"Hace 2 horas" },
                  { ico:"📦", titulo:"Suministro Recibido",    desc:"15 ton. mezcla premium.",     tiempo:"Hace 5 horas" },
                  { ico:"⚠️", titulo:"Alerta de Hardware",     desc:"Sensor Sector B1 fallando.",  tiempo:"Ayer" },
                  { ico:"🐄", titulo:"Nuevo Inventario",       desc:"12 terneros registrados.",    tiempo:"Hace 2 días" },
                ].map((a,i) => (
                  <div key={i} style={{ display:"flex", gap:"0.75rem", alignItems:"flex-start" }}>
                    <div style={{ width:28, height:28, borderRadius:8, background:"#f0fdf4", border:"1px solid #d9f99d", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.85rem", flexShrink:0 }}>{a.ico}</div>
                    <div>
                      <p style={{ margin:0, fontSize:"0.82rem", fontWeight:900, color:"#166534" }}>{a.titulo}</p>
                      <p style={{ margin:"2px 0 0", fontSize:"0.72rem", color:"#65a30d" }}>{a.desc}</p>
                      <p style={{ margin:"2px 0 0", fontSize:"0.65rem", color:"#a3a3a3", fontWeight:700, textTransform:"uppercase" }}>{a.tiempo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Índice de Salud */}
            <div style={{ background:"linear-gradient(135deg,#f7fee7,#fff)", borderRadius:32, padding:"2rem", border:"1px solid #d9f99d" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1.2rem" }}>
                <div style={{ padding:10, borderRadius:14, background:"#fff", border:"1px solid #d9f99d", fontSize:"1.3rem" }}>❤️</div>
                <div>
                  <h3 style={{ margin:0, fontWeight:900, color:"#166534", fontSize:"1rem" }}>Índice Vital del Hato</h3>
                  <p style={{ margin:0, fontSize:"0.7rem", color:"#65a30d", fontWeight:700, textTransform:"uppercase" }}>Estado: Óptimo</p>
                </div>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:8 }}>
                <span style={{ fontSize:"1.8rem", fontWeight:900, color:"#166534" }}>98.2<span style={{ fontSize:"0.85rem", color:"#65a30d" }}>%</span></span>
                <span style={{ fontSize:"0.75rem", fontWeight:700, color:"#22c55e" }}>+0.5%</span>
              </div>
              <div style={{ width:"100%", height:10, background:"#d9f99d", borderRadius:999, overflow:"hidden", marginBottom:"1.2rem" }}>
                <div style={{ width:"98.2%", height:"100%", background:"linear-gradient(to right,#22c55e,#4ade80)", borderRadius:999 }}></div>
              </div>
              <button onClick={() => navigate("/eventos")}
                style={{ width:"100%", padding:"0.875rem", background:"#4ade80", color:"#fff", fontWeight:900, borderRadius:14, border:"none", cursor:"pointer", fontSize:"0.82rem" }}>
                📋 Reporte de Salud
              </button>
            </div>

            {/* Acceso rápido */}
            <div style={{ background:"#fff", borderRadius:32, padding:"2rem", border:"1px solid #d9f99d" }}>
              <h2 style={{ fontSize:"1rem", fontWeight:900, color:"#166534", marginBottom:"1rem" }}>Acceso Rápido</h2>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.6rem" }}>
                {[
                  { ico:"🐄", label:"Ganado",       href:"/ganado" },
                  { ico:"🧬", label:"Reproducción", href:"/reproduccion" },
                  { ico:"💉", label:"Sanidad",       href:"/eventos" },
                  { ico:"📦", label:"Inventario",    href:"/inventario" },
                  { ico:"🌿", label:"Potreros",      href:"/pasturas" },
                  { ico:"💰", label:"Finanzas",      href:"/finanzas" },
                ].map((m,i) => (
                  <button key={i} onClick={() => navigate(m.href)}
                    style={{ display:"flex", alignItems:"center", gap:6, padding:"0.65rem", borderRadius:10, background:"#f0fdf4", border:"1px solid #d9f99d", cursor:"pointer", fontWeight:700, color:"#166534", fontSize:"0.78rem" }}>
                    <span style={{ fontSize:"1rem" }}>{m.ico}</span> {m.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer style={{ borderTop:"1px solid #d9f99d", background:"#fff", padding:"2rem 3rem", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ fontSize:"1.2rem" }}>🐂</span>
          <span style={{ fontWeight:900, color:"#166534" }}>GanaControl <span style={{ fontWeight:400, fontSize:"0.78rem", color:"#65a30d" }}>v7.0.0-PRO</span></span>
        </div>
        <p style={{ fontSize:"0.72rem", color:"#65a30d", margin:0 }}>© 2025 GanaControl — Hecho en Colombia 🇨🇴</p>
      </footer>

    </div>
  );
}