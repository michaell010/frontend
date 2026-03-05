import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  // Scroll reveal
  useEffect(() => {
    const all = document.querySelectorAll(".gc-rev, .gc-rev-l, .gc-rev-r");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    all.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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
          <li><a href="#ganado">Ganado</a></li>
          <li><a href="#reproduccion">Reproducción</a></li>
          <li><a href="#sanidad">Sanidad</a></li>
          <li><a href="#inventario">Inventario</a></li>
          <li><a href="#facturacion">Facturación</a></li>
          <li><a href="#porque">Nosotros</a></li>
        </ul>
        <div className="gc-nav-actions">
          <button className="gc-btn-out" onClick={() => navigate("/login")}>
            Iniciar Sesión
          </button>
          <button className="gc-btn-solid">▶ Ver Demo</button>
        </div>
      </nav>

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section id="hero" className="gc-hero">
        <div className="gc-hero-topo"></div>
        <div className="gc-hero-diagonal"></div>
        <div className="gc-hero-circle"></div>

        <div className="gc-hero-inner">
          {/* LEFT */}
          <div>
            <div className="gc-hero-badge">
              <span className="gc-hero-badge-dot"></span>
              Software Agropecuario Profesional
            </div>
            <h1 className="gc-hero-h1">
              Control total de tu finca,
              <span>desde el nacimiento<br />hasta la venta</span>
            </h1>
            <div className="gc-hero-line"></div>
            <p className="gc-hero-p">
              Inventario, reproducción, sanidad y facturación integrados en una
              sola plataforma robusta. Diseñado para ganaderos colombianos que
              exigen precisión.
            </p>
            <div className="gc-hero-btns">
              <button className="gc-btn-hero-main">▶ Ver Demo en Vivo</button>
              <button
                className="gc-btn-hero-out"
                onClick={() => navigate("/login")}
              >
                Iniciar Sesión →
              </button>
            </div>
            <div className="gc-hero-stats">
              <div className="gc-hstat">
                <div className="gc-hstat-num">500+</div>
                <div className="gc-hstat-lbl">Fincas activas</div>
              </div>
              <div className="gc-hstat">
                <div className="gc-hstat-num">98%</div>
                <div className="gc-hstat-lbl">Uptime</div>
              </div>
              <div className="gc-hstat">
                <div className="gc-hstat-num">0</div>
                <div className="gc-hstat-lbl">Errores factura</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Dashboard preview */}
          <div>
            <div className="gc-hero-card">
              <div className="gc-hc-bar">
                <div className="gc-hc-dots">
                  <div className="gc-hc-dot" style={{ background: "#c0392b" }}></div>
                  <div className="gc-hc-dot" style={{ background: "#e67e22" }}></div>
                  <div className="gc-hc-dot" style={{ background: "#27ae60" }}></div>
                </div>
                <span className="gc-hc-title">GanaControl — Dashboard</span>
                <span></span>
              </div>
              <div className="gc-hc-body">
                <div className="gc-hc-mini-row">
                  <div className="gc-hc-mini">
                    <div className="gc-hc-mini-val">1,247</div>
                    <div className="gc-hc-mini-lbl">Ganado activo</div>
                  </div>
                  <div className="gc-hc-mini">
                    <div className="gc-hc-mini-val">$47.8M</div>
                    <div className="gc-hc-mini-lbl">Ingresos</div>
                  </div>
                  <div className="gc-hc-mini">
                    <div className="gc-hc-mini-val">94%</div>
                    <div className="gc-hc-mini-lbl">Al día</div>
                  </div>
                </div>
                <table className="gc-hc-table">
                  <thead>
                    <tr><th>Animal</th><th>Estado</th><th>Cat.</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>GN-001 · Cara Blanca</td><td><span className="gc-pill gc-pill-ok">Activo</span></td><td>Vaca adulta</td></tr>
                    <tr><td>GN-002 · La Negra</td><td><span className="gc-pill gc-pill-warn">Gestante</span></td><td>Vaca adulta</td></tr>
                    <tr><td>GN-007 · Lucero</td><td><span className="gc-pill gc-pill-ok">Activo</span></td><td>Novillo</td></tr>
                    <tr><td>GN-012 · Torito</td><td><span className="gc-pill gc-pill-blue">Vacunar</span></td><td>Toro semental</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BANNER CORPORATIVO ══════════════════════════════ */}
      <div className="gc-corp-banner">
        <div className="gc-cb-item"><span className="gc-cb-icon">🛡️</span><span className="gc-cb-text">Integridad referencial garantizada</span></div>
        <span className="gc-cb-sep">|</span>
        <div className="gc-cb-item"><span className="gc-cb-icon">⚡</span><span className="gc-cb-text">Triggers automáticos en tiempo real</span></div>
        <span className="gc-cb-sep">|</span>
        <div className="gc-cb-item"><span className="gc-cb-icon">🔍</span><span className="gc-cb-text">Trazabilidad bovina completa</span></div>
        <span className="gc-cb-sep">|</span>
        <div className="gc-cb-item"><span className="gc-cb-icon">🏢</span><span className="gc-cb-text">Plataforma multi-finca</span></div>
      </div>

      {/* ══ GANADO ══════════════════════════════════════════ */}
      <section id="ganado" className="gc-sec gc-sec-green">
        <div className="gc-max">
          <div className="gc-center gc-rev">
            <span className="gc-eyebrow">Módulo de Ganado</span>
            <h2 className="gc-h2">Gestión completa de cada animal</h2>
            <p className="gc-p">Trazabilidad total desde el nacimiento hasta la comercialización</p>
          </div>

          <div className="gc-tl-wrap">
            {[
              { n: "1", ico: "🐄", lbl: "Nacimiento",       sub: "Código único asignado" },
              { n: "2", ico: "🧬", lbl: "Reproducción",     sub: "Genealogía automática" },
              { n: "3", ico: "⚖️", lbl: "Producción",       sub: "Peso y categoría real" },
              { n: "4", ico: "💰", lbl: "Comercialización", sub: "Factura automática" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start" }}>
                <div className="gc-tl-step">
                  <div className="gc-tl-ball">
                    <div className="gc-tl-num">{s.n}</div>
                    {s.ico}
                  </div>
                  <div className="gc-tl-lbl">{s.lbl}</div>
                  <div className="gc-tl-sub">{s.sub}</div>
                </div>
                {i < 3 && <div className="gc-tl-conn"></div>}
              </div>
            ))}
          </div>

          <div className="gc-feat-4">
            {[
              { ico: "🔖", t: "Código Único",     d: "Identificación irrepetible y rastreable para cada cabeza de ganado" },
              { ico: "🌳", t: "Árbol Genealógico", d: "Relaciones padre-madre generadas automáticamente" },
              { ico: "⚖️", t: "Peso & Categoría", d: "Actualización en tiempo real por edad y estado zootécnico" },
              { ico: "🔄", t: "Estado Biológico", d: "Gestante, lactante, seco, cría — siempre sincronizado" },
            ].map((c, i) => (
              <div key={i} className="gc-feat-card gc-rev" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="gc-feat-ico">{c.ico}</div>
                <div className="gc-feat-t">{c.t}</div>
                <div className="gc-feat-d">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REPRODUCCIÓN ════════════════════════════════════ */}
      <section id="reproduccion" className="gc-sec gc-sec-white">
        <div className="gc-max">
          <div className="gc-two-col">
            <div className="gc-rev-l">
              <span className="gc-eyebrow">Reproducción Inteligente</span>
              <h2 className="gc-h2">Automatiza la gestión reproductiva</h2>
              <p className="gc-p" style={{ margin: "1rem 0 1.8rem" }}>
                Calcula fechas de parto, registra crías automáticamente y monitorea cada gestación con precisión veterinaria.
              </p>
              <div className="gc-check-list">
                {[
                  "Trigger automático de fecha probable de parto",
                  "Creación automática de cría al registrar parto",
                  "Historial reproductivo completo por animal",
                  "Alertas de seguimiento gestacional activas",
                  "Diagnóstico vinculado al expediente del animal",
                ].map((item, i) => (
                  <div key={i} className="gc-check-row">
                    <div className="gc-chk">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="gc-rev-r">
              <div className="gc-gest-card">
                <div className="gc-gest-animal">
                  <span className="gc-gest-ico">🐄</span>
                  <div>
                    <div className="gc-gest-name">La Negra · GN-002</div>
                    <div className="gc-gest-code">Vaca adulta · Finca El Porvenir</div>
                  </div>
                  <div className="gc-gest-stat">
                    204 días
                    <div className="gc-gest-stat-sub">de 283 totales</div>
                  </div>
                </div>
                <div className="gc-gest-bar-label">
                  <span>Inicio gestación</span>
                  <span>72% completado</span>
                </div>
                <div className="gc-gest-bar-track">
                  <div className="gc-gest-bar-fill"></div>
                </div>
                <div className="gc-gest-stages">
                  <span>🐄 Monta</span>
                  <span>📋 Diagnóstico</span>
                  <span>🍼 Parto estimado</span>
                </div>
                <div className="gc-gest-result">
                  <div>
                    <div className="gc-gest-res-lbl">Fecha probable de parto</div>
                    <div className="gc-gest-res-val">15 de Octubre, 2025</div>
                  </div>
                  <div className="gc-gest-res-badge">⚡ Automático</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SANIDAD ═════════════════════════════════════════ */}
      <section id="sanidad" className="gc-sec gc-sec-green">
        <div className="gc-max">
          <div className="gc-center gc-rev">
            <span className="gc-eyebrow">Sanidad & Trazabilidad</span>
            <h2 className="gc-h2">Nunca pierdas una vacunación</h2>
            <p className="gc-p">Control por tipo de evento, fecha próxima y costo acumulado</p>
          </div>
          <div className="gc-two-col">
            <div className="gc-rev-l">
              <div className="gc-cal-card">
                <div className="gc-cal-head">
                  <span className="gc-cal-head-t">📅 Calendario Sanitario</span>
                  <span className="gc-cal-head-p">Junio 2025</span>
                </div>
                <div className="gc-cal-body">
                  {[
                    { dot: "#8b4513", name: "GN-001 — Vacuna Fiebre Aftosa",      meta: "12 Jun · $45.000", badge: "gc-b-pend", label: "pendiente" },
                    { dot: "#8b4513", name: "GN-007 — Desparasitación ivermectina", meta: "14 Jun · $28.000", badge: "gc-b-pend", label: "pendiente" },
                    { dot: "#2e7d2e", name: "GN-003 — Vitaminas ADE complejo",    meta: "10 Jun · $15.000", badge: "gc-b-done", label: "completado" },
                    { dot: "#5a8a9f", name: "GN-012 — Brucelosis diagnóstico",    meta: "18 Jun · $60.000", badge: "gc-b-next", label: "programado" },
                    { dot: "#2e7d2e", name: "GN-005 — Aftosa refuerzo anual",     meta: "09 Jun · $45.000", badge: "gc-b-done", label: "completado" },
                  ].map((ev, i) => (
                    <div key={i} className="gc-ev-row">
                      <div className="gc-ev-dot" style={{ background: ev.dot }}></div>
                      <div style={{ flex: 1 }}>
                        <span className="gc-ev-name">{ev.name}</span>
                        <span className="gc-ev-meta">{ev.meta}</span>
                      </div>
                      <span className={`gc-badge ${ev.badge}`}>{ev.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="gc-kpi-list gc-rev-r">
              {[
                { ico: "📋", lbl: "Eventos este mes",   val: "47",   color: "var(--green-dk)",  borderColor: "var(--green-corp)" },
                { ico: "💰", lbl: "Costo total sanidad", val: "$1.2M", color: "var(--green-dk)", borderColor: "var(--earth)" },
                { ico: "🔔", lbl: "Alertas pendientes",  val: "8",    color: "var(--rust)",      borderColor: "var(--rust)" },
                { ico: "✅", lbl: "Animales al día",     val: "94%",  color: "var(--green-dk)",  borderColor: "var(--green-corp)" },
              ].map((k, i) => (
                <div key={i} className="gc-kpi-card" style={{ borderLeftColor: k.borderColor }}>
                  <div className="gc-kpi-left">
                    <span className="gc-kpi-ico">{k.ico}</span>
                    <span className="gc-kpi-lbl">{k.lbl}</span>
                  </div>
                  <span className="gc-kpi-val" style={{ color: k.color }}>{k.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ INVENTARIO ══════════════════════════════════════ */}
      <section id="inventario" className="gc-sec gc-sec-white">
        <div className="gc-max">
          <div className="gc-two-col">
            <div className="gc-rev-l">
              <span className="gc-eyebrow">Inventario Inteligente</span>
              <h2 className="gc-h2">Alimentos, medicamentos e insumos en tiempo real</h2>
              <p className="gc-p" style={{ margin: "1rem 0 1.8rem" }}>
                Cada movimiento actualiza el stock automáticamente. Alertas de mínimos, trazabilidad de uso y control de vencimientos integrado.
              </p>
              <div className="gc-check-list" style={{ marginBottom: "1.5rem" }}>
                {[
                  "Trigger automático por cada movimiento registrado",
                  "Vista v_stock_bajo activa y alertas en tiempo real",
                  "Control por lote y fecha de vencimiento",
                  "Historial completo de entradas y salidas",
                ].map((item, i) => (
                  <div key={i} className="gc-check-row">
                    <div className="gc-chk">✓</div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="gc-alert-bar">
                <span style={{ fontSize: "1.1rem" }}>⚠️</span>
                <div>
                  <div className="gc-alert-t">Vista v_stock_bajo activa</div>
                  <div className="gc-alert-s">2 productos por debajo del mínimo configurado</div>
                </div>
              </div>
            </div>
            <div className="gc-rev-r">
              <div className="gc-stock-card">
                <div className="gc-stock-head">
                  <span className="gc-stock-head-t">📦 Stock en tiempo real</span>
                  <span className="gc-stock-head-tag">EN VIVO</span>
                </div>
                <div className="gc-stock-body">
                  {[
                    { nm: "Concentrado Premium",   vl: "340 kg", pct: "68%",  color: "var(--green-corp)", warn: false },
                    { nm: "Ivermectina 1%",        vl: "12 ml",  pct: "12%",  color: "var(--rust)",       warn: true  },
                    { nm: "Vitamina ADE Complejo", vl: "45 ml",  pct: "22%",  color: "var(--earth-lt)",   warn: false },
                    { nm: "Sal Mineral Ganadera",  vl: "8 kg",   pct: "5%",   color: "var(--rust)",       warn: true  },
                    { nm: "Heno de Pasto Kikuyo",  vl: "820 kg", pct: "82%",  color: "var(--sky)",        warn: false },
                  ].map((s, i) => (
                    <div key={i} className="gc-stock-item">
                      <div className="gc-stock-row">
                        <span className="gc-stock-nm">{s.warn && "⚠️"} {s.nm}</span>
                        <span className="gc-stock-vl" style={{ color: s.color }}>{s.vl}</span>
                      </div>
                      <div className="gc-stock-track">
                        <div className="gc-stock-bar" style={{ width: s.pct, background: s.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FACTURACIÓN ═════════════════════════════════════ */}
      <section id="facturacion" className="gc-sec gc-sec-parch">
        <div className="gc-max-860">
          <div className="gc-center gc-rev">
            <span className="gc-eyebrow">Facturación Automática</span>
            <h2 className="gc-h2">Facturas sin errores de numeración</h2>
            <p className="gc-p">Prefijo + consecutivo automático por finca. Trigger trg_numero_factura siempre activo.</p>
          </div>
          <div className="gc-invoice gc-rev">
            <div className="gc-inv-header">
              <div>
                <div className="gc-inv-brand-name">GanaControl</div>
                <div className="gc-inv-brand-sub">Sistema de Gestión Ganadera</div>
              </div>
              <div className="gc-inv-num-badge">
                FC-001-00247
                <div className="gc-inv-num-sub">⚡ Generado automáticamente</div>
              </div>
            </div>
            <div className="gc-inv-meta">
              <div><div className="gc-inv-meta-lbl">Fecha de emisión</div><div className="gc-inv-meta-val">12 Junio 2025</div></div>
              <div><div className="gc-inv-meta-lbl">Finca</div><div className="gc-inv-meta-val">El Porvenir</div></div>
              <div><div className="gc-inv-meta-lbl">Estado</div><div className="gc-inv-paid">✓ PAGADA</div></div>
            </div>
            <div>
              <div className="gc-inv-line gc-inv-line-main"><span>Novillo 450kg — GN-023 (Cara Blanca)</span><span>$2.800.000</span></div>
              <div className="gc-inv-line gc-inv-line-sub"><span>Transporte y logística</span><span>$80.000</span></div>
              <div className="gc-inv-line gc-inv-line-sub"><span>IVA (0% — Ganado en pie)</span><span>$0</span></div>
            </div>
            <div className="gc-inv-total">
              <span className="gc-inv-total-lbl">Total a pagar</span>
              <span className="gc-inv-total-val">$2.880.000</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MÉTRICAS ════════════════════════════════════════ */}
      <section className="gc-sec gc-sec-dark">
        <div className="gc-max">
          <div className="gc-center gc-rev">
            <span className="gc-eyebrow" style={{ color: "var(--green-sage)" }}>Métricas Globales</span>
            <h2 className="gc-h2 gc-h2-white">Tu operación en números reales</h2>
            <p className="gc-p" style={{ color: "rgba(255,255,255,0.45)" }}>Vistas materializadas actualizadas desde tu base de datos</p>
          </div>
          <div className="gc-metrics-3">
            {[
              { ico: "💵", val: "$47.8M", lbl: "Ingresos Totales",    key: "v_ingresos_totales" },
              { ico: "🐄", val: "1,247",  lbl: "Ganado Activo",       key: "v_ganado_activo" },
              { ico: "📦", val: "23",     lbl: "Alertas Stock Bajo",  key: "v_stock_bajo" },
            ].map((m, i) => (
              <div key={i} className="gc-metric-card gc-rev" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="gc-metric-ico">{m.ico}</div>
                <div className="gc-metric-val">{m.val}</div>
                <div className="gc-metric-lbl">{m.lbl}</div>
                <div className="gc-metric-key">{m.key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POR QUÉ ═════════════════════════════════════════ */}
      <section id="porque" className="gc-sec gc-sec-white">
        <div className="gc-max">
          <div className="gc-center gc-rev">
            <span className="gc-eyebrow">Por qué elegirnos</span>
            <h2 className="gc-h2">Lo que no tiene una libreta ni Excel</h2>
            <p className="gc-p">Tecnología agropecuaria real para ganaderos colombianos</p>
          </div>
          <div className="gc-why-6">
            {[
              { ico: "🔗", t: "Integridad Referencial", d: "FK constraints que garantizan datos consistentes. Sin registros huérfanos." },
              { ico: "⚡", t: "Triggers Automáticos",   d: "Facturas, crías, stock — todo se actualiza en la BD sin intervención manual." },
              { ico: "🔍", t: "Trazabilidad Total",     d: "Cada animal y evento con historial permanente auditable por entidades." },
              { ico: "🏢", t: "Multi-Finca",            d: "Gestiona múltiples fincas desde una sola plataforma con datos aislados." },
              { ico: "📈", t: "Escalable",              d: "Desde 10 hasta 10.000 cabezas sin degradación del sistema." },
              { ico: "🛡️", t: "Seguridad Empresarial", d: "Roles por usuario, logs de auditoría y backups automáticos programados." },
            ].map((w, i) => (
              <div key={i} className="gc-why-card gc-rev" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="gc-why-ico-wrap">{w.ico}</div>
                <div>
                  <div className="gc-why-t">{w.t}</div>
                  <div className="gc-why-d">{w.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════ */}
      <section className="gc-sec gc-sec-green">
        <div className="gc-max">
          <div className="gc-cta-box gc-rev">
            <div className="gc-cta-ico">🐂</div>
            <h2 className="gc-cta-h2">¿Listo para modernizar tu finca?</h2>
            <p className="gc-cta-p">
              Únete a cientos de ganaderos que ya gestionan su operación de forma
              profesional. Sin Excel, sin cuadernos, sin errores.
            </p>
            <div className="gc-cta-btns">
              <button className="gc-btn-cta">▶ Ver Demo Gratis</button>
              <button className="gc-btn-cta-ghost">Hablar con ventas</button>
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
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Términos</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Soporte</a></li>
        </ul>
        <p className="gc-foot-copy">© 2025 GanaControl — Software ganadero profesional</p>
      </footer>

    </div>
  );
}