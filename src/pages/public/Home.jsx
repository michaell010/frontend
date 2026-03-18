import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const els = document.querySelectorAll(".gc-rev, .gc-rev-l, .gc-rev-r");
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const modulos = [
    { ico: "🐄", nombre: "Control Ganadero",       desc: "Registro completo de cada animal con trazabilidad total desde nacimiento hasta venta." },
    { ico: "🧬", nombre: "Reproducción y Genética", desc: "Gestión de servicios, gestaciones y partos con cálculo automático de fechas." },
    { ico: "💉", nombre: "Salud y Sanidad",          desc: "Vacunaciones, tratamientos y eventos sanitarios con alertas de próximas fechas." },
    { ico: "📦", nombre: "Inventario Inteligente",   desc: "Control de alimentos, medicamentos e insumos con alertas de stock mínimo." },
    { ico: "🌿", nombre: "Potreros",                 desc: "Gestión de potreros, rotación de pasturas y capacidad de carga por hectárea." },
    { ico: "💰", nombre: "Cockpit Financiero",        desc: "Ventas, facturación automática e ingresos consolidados por período." },
    { ico: "🌾", nombre: "Alimentación",             desc: "Raciones diarias por animal con control de consumo y observaciones." },
    { ico: "🎛️", nombre: "Mando Central",            desc: "Vista ejecutiva con KPIs clave, alertas activas y resumen de la operación." },
  ];

  const equipo = [
    { nombre: "Área de Desarrollo", rol: "Ingeniería de Software", ico: "💻", desc: "Arquitectura backend Node.js + MySQL con triggers y vistas optimizadas." },
    { nombre: "Área Agropecuaria",  rol: "Ganadería y Zootecnia",  ico: "🐄", desc: "Validación de flujos productivos, reproductivos y sanitarios del sistema." },
    { nombre: "Área de Diseño",     rol: "UX / UI Product Design",  ico: "🎨", desc: "Interfaces funcionales centradas en el usuario ganadero colombiano." },
  ];

  return (
    <div className="home-page">

      {/* ══ NAVBAR ══════════════════════════════════════════ */}
      <nav className="gc-nav">
        <div className="gc-logo">
          <div className="gc-logo-shield">🐂</div>
          <div>
            <span className="gc-logo-name">GanaControl</span>
            <span className="gc-logo-tag">Gestión Ganadera</span>
          </div>
        </div>
        <ul className="gc-nav-links">
          <li><a href="#modulos">Módulos</a></li>
          <li><a href="#mision">Misión y Visión</a></li>
          <li><a href="#equipo">Equipo</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <div className="gc-nav-actions">
          <button className="gc-btn-solid" onClick={() => navigate("/login")}>Iniciar Sesión</button>
        </div>
      </nav>

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="gc-hero">
        <div className="gc-hero-topo"></div>
        <div className="gc-hero-diagonal"></div>
        <div className="gc-hero-circle"></div>
        <div className="gc-hero-inner">
          <div>
            <div className="gc-hero-badge">
              <span className="gc-hero-badge-dot"></span>
              Plataforma Ganadera Profesional
            </div>
            <h1 className="gc-hero-h1">
              La plataforma que su
              <span>finca necesitaba</span>
            </h1>
            <div className="gc-hero-line"></div>
            <p className="gc-hero-p">
              GanaControl integra ganado, reproducción, sanidad, inventario,
              pasturas y finanzas en un solo sistema robusto diseñado para
              ganaderos colombianos que exigen precisión y control total.
            </p>
            <div className="gc-hero-btns">
              <button className="gc-btn-hero-main" onClick={() => navigate("/login")}>
                Iniciar Sesión →
              </button>
            </div>
            <div className="gc-hero-stats">
              <div className="gc-hstat"><div className="gc-hstat-num">8</div><div className="gc-hstat-lbl">Módulos</div></div>
              <div className="gc-hstat"><div className="gc-hstat-num">100%</div><div className="gc-hstat-lbl">Colombiano</div></div>
              <div className="gc-hstat"><div className="gc-hstat-num">0</div><div className="gc-hstat-lbl">Errores factura</div></div>
            </div>
          </div>
          <div>
            <div className="gc-hero-card">
              <div className="gc-hc-bar">
                <div className="gc-hc-dots">
                  <div className="gc-hc-dot" style={{ background:"#c0392b" }}></div>
                  <div className="gc-hc-dot" style={{ background:"#e67e22" }}></div>
                  <div className="gc-hc-dot" style={{ background:"#27ae60" }}></div>
                </div>
                <span className="gc-hc-title">GanaControl — Dashboard</span>
                <span></span>
              </div>
              <div className="gc-hc-body">
                <div className="gc-hc-mini-row">
                  <div className="gc-hc-mini"><div className="gc-hc-mini-val">1,247</div><div className="gc-hc-mini-lbl">Ganado activo</div></div>
                  <div className="gc-hc-mini"><div className="gc-hc-mini-val">$47.8M</div><div className="gc-hc-mini-lbl">Ingresos</div></div>
                  <div className="gc-hc-mini"><div className="gc-hc-mini-val">94%</div><div className="gc-hc-mini-lbl">Al día</div></div>
                </div>
                <table className="gc-hc-table">
                  <thead><tr><th>Animal</th><th>Estado</th><th>Cat.</th></tr></thead>
                  <tbody>
                    <tr><td>GN-001 · Cara Blanca</td><td><span className="gc-pill gc-pill-ok">Activo</span></td><td>Vaca</td></tr>
                    <tr><td>GN-002 · La Negra</td><td><span className="gc-pill gc-pill-warn">Gestante</span></td><td>Vaca</td></tr>
                    <tr><td>GN-007 · Lucero</td><td><span className="gc-pill gc-pill-ok">Activo</span></td><td>Novillo</td></tr>
                    <tr><td>GN-012 · Torito Rey</td><td><span className="gc-pill gc-pill-blue">Vacunar</span></td><td>Toro</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BANNER ══════════════════════════════════════════ */}
      <div className="gc-corp-banner">
        <div className="gc-cb-item"><span className="gc-cb-icon">🛡️</span><span className="gc-cb-text">Integridad referencial garantizada</span></div>
        <span className="gc-cb-sep">|</span>
        <div className="gc-cb-item"><span className="gc-cb-icon">⚡</span><span className="gc-cb-text">Triggers automáticos en tiempo real</span></div>
        <span className="gc-cb-sep">|</span>
        <div className="gc-cb-item"><span className="gc-cb-icon">🔍</span><span className="gc-cb-text">Trazabilidad bovina completa</span></div>
        <span className="gc-cb-sep">|</span>
        <div className="gc-cb-item"><span className="gc-cb-icon">🏢</span><span className="gc-cb-text">Plataforma multi-finca</span></div>
      </div>

      {/* ══ MISIÓN Y VISIÓN ════════════════════════════════ */}
      <section id="mision" className="gc-sec gc-sec-white">
        <div className="gc-max">
          <div className="gc-center gc-rev">
            <span className="gc-eyebrow">Quiénes somos</span>
            <h2 className="gc-h2">Misión y Visión</h2>
          </div>
          <div className="gc-mv-grid">
            <div className="gc-mv-card gc-rev-l">
              <div className="gc-mv-icon">🎯</div>
              <h3 className="gc-mv-titulo">Misión</h3>
              <div className="gc-mv-line"></div>
              <p className="gc-mv-texto">
                Proveer a los ganaderos colombianos una plataforma tecnológica integral
                que digitalice y optimice cada proceso de la producción bovina — desde
                el nacimiento hasta la comercialización — reduciendo errores, mejorando
                la trazabilidad y aumentando la rentabilidad de cada finca.
              </p>
            </div>
            <div className="gc-mv-card gc-rev-r">
              <div className="gc-mv-icon">🔭</div>
              <h3 className="gc-mv-titulo">Visión</h3>
              <div className="gc-mv-line"></div>
              <p className="gc-mv-texto">
                Ser la plataforma de gestión ganadera líder en Colombia y Latinoamérica,
                reconocida por su robustez técnica, facilidad de uso y compromiso con
                la modernización del sector agropecuario colombiano hacia un modelo de
                agricultura de precisión sostenible y competitivo.
              </p>
            </div>
          </div>
          <div className="gc-valores gc-rev">
            {[
              { ico:"💡", v:"Innovación",    d:"Tecnología agropecuaria de vanguardia" },
              { ico:"🤝", v:"Confiabilidad", d:"Datos íntegros y siempre disponibles" },
              { ico:"🌱", v:"Sostenibilidad",d:"Apoyo al campo colombiano a largo plazo" },
              { ico:"🎯", v:"Precisión",     d:"Cero errores en facturación y trazabilidad" },
            ].map((val,i)=>(
              <div key={i} className="gc-valor-item">
                <div className="gc-valor-ico">{val.ico}</div>
                <div className="gc-valor-nombre">{val.v}</div>
                <div className="gc-valor-desc">{val.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MÓDULOS ════════════════════════════════════════ */}
      <section id="modulos" className="gc-sec gc-sec-green">
        <div className="gc-max">
          <div className="gc-center gc-rev">
            <span className="gc-eyebrow">El sistema completo</span>
            <h2 className="gc-h2">8 módulos integrados</h2>
            <p className="gc-p">Todo lo que necesita su finca en una sola plataforma</p>
          </div>
          <div className="gc-modulos-landing">
            {modulos.map((m,i)=>(
              <div key={i} className="gc-modulo-card gc-rev" style={{transitionDelay:`${i*0.07}s`}}>
                <div className="gc-modulo-card-ico">{m.ico}</div>
                <div className="gc-modulo-card-nombre">{m.nombre}</div>
                <div className="gc-modulo-card-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POR QUÉ ════════════════════════════════════════ */}
      <section className="gc-sec gc-sec-white">
        <div className="gc-max">
          <div className="gc-center gc-rev">
            <span className="gc-eyebrow">Por qué elegirnos</span>
            <h2 className="gc-h2">Lo que no tiene una libreta ni Excel</h2>
          </div>
          <div className="gc-why-6">
            {[
              { ico:"🔗", t:"Integridad Referencial", d:"FK constraints que garantizan datos consistentes. Sin registros huérfanos." },
              { ico:"⚡", t:"Triggers Automáticos",   d:"Facturas, crías, stock — todo se actualiza sin intervención manual." },
              { ico:"🔍", t:"Trazabilidad Total",     d:"Cada animal y evento con historial permanente auditable." },
              { ico:"🏢", t:"Multi-Finca",            d:"Gestione múltiples fincas desde una sola cuenta." },
              { ico:"📈", t:"Escalable",              d:"Desde 10 hasta 10.000 cabezas sin degradación." },
              { ico:"🛡️", t:"Seguridad",             d:"Roles por usuario, logs de auditoría y backups automáticos." },
            ].map((w,i)=>(
              <div key={i} className="gc-why-card gc-rev" style={{transitionDelay:`${i*0.07}s`}}>
                <div className="gc-why-ico-wrap">{w.ico}</div>
                <div><div className="gc-why-t">{w.t}</div><div className="gc-why-d">{w.d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EQUIPO ══════════════════════════════════════════ */}
      <section id="equipo" className="gc-sec gc-sec-parch">
        <div className="gc-max">
          <div className="gc-center gc-rev">
            <span className="gc-eyebrow">El equipo</span>
            <h2 className="gc-h2">Quiénes construyen GanaControl</h2>
            <p className="gc-p">Un equipo interdisciplinario unido por el campo colombiano</p>
          </div>
          <div className="gc-equipo-grid">
            {equipo.map((e,i)=>(
              <div key={i} className="gc-equipo-card gc-rev" style={{transitionDelay:`${i*0.1}s`}}>
                <div className="gc-equipo-ico">{e.ico}</div>
                <div className="gc-equipo-nombre">{e.nombre}</div>
                <div className="gc-equipo-rol">{e.rol}</div>
                <p className="gc-equipo-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACTO ════════════════════════════════════════ */}
      <section id="contacto" className="gc-sec gc-sec-dark">
        <div className="gc-max-860">
          <div className="gc-center gc-rev">
            <span className="gc-eyebrow" style={{color:"var(--green-sage)"}}>Contacto</span>
            <h2 className="gc-h2 gc-h2-white">¿Listo para modernizar su finca?</h2>
            <p className="gc-p" style={{color:"rgba(255,255,255,0.55)"}}>Contáctenos o ingrese al sistema</p>
          </div>
          <div className="gc-contacto-grid gc-rev">
            <div className="gc-contacto-info">
              {[
                { ico:"📧", lbl:"Correo",    val:"contacto@ganacontrol.co" },
                { ico:"📍", lbl:"País",      val:"Colombia" },
                { ico:"🌐", lbl:"Plataforma",val:"app.ganacontrol.co" },
              ].map((c,i)=>(
                <div key={i} className="gc-contacto-item">
                  <span className="gc-contacto-ico">{c.ico}</span>
                  <div>
                    <div className="gc-contacto-lbl">{c.lbl}</div>
                    <div className="gc-contacto-val">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="gc-contacto-form">
              <div className="gc-form-field"><label>Nombre</label><input placeholder="Su nombre completo" /></div>
              <div className="gc-form-field"><label>Correo electrónico</label><input type="email" placeholder="correo@ejemplo.com" /></div>
              <div className="gc-form-field"><label>Mensaje</label><textarea rows={4} placeholder="¿Cómo podemos ayudarle?"></textarea></div>
              <button className="gc-btn-cta" style={{width:"100%"}}>Enviar mensaje</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ═══════════════════════════════════════ */}
      <section className="gc-sec gc-sec-green">
        <div className="gc-max">
          <div className="gc-cta-box gc-rev">
            <div className="gc-cta-ico">🐂</div>
            <h2 className="gc-cta-h2">Acceda al sistema ahora</h2>
            <p className="gc-cta-p">
              Ingrese a GanaControl y gestione su finca de forma profesional.
            </p>
            <div className="gc-cta-btns">
              <button className="gc-btn-cta" onClick={() => navigate("/login")}>Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════ */}
      <footer className="gc-footer">
        <div className="gc-foot-brand">
          <div className="gc-foot-shield">🐂</div>
          <div>
            <span className="gc-foot-name">GanaControl</span>
            <span className="gc-foot-tag">Gestión Ganadera Profesional</span>
          </div>
        </div>
        <ul className="gc-foot-links">
          <li><a href="#mision">Misión</a></li>
          <li><a href="#modulos">Módulos</a></li>
          <li><a href="#equipo">Equipo</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <p className="gc-foot-copy">© 2025 GanaControl — Hecho en Colombia 🇨🇴</p>
      </footer>

    </div>
  );
}