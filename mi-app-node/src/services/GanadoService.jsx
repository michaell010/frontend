// src/services/GanadoService.jsx
import api from "./api";

// ── GANADO ────────────────────────────────────────
export const getGanado       = ()        => api("/ganado");
export const getUnGanado     = (id)      => api(`/ganado/${id}`);
export const crearGanado     = (datos)   => api("/ganado", { method: "POST",   body: JSON.stringify(datos) });
export const editarGanado    = (id, d)   => api(`/ganado/${id}`, { method: "PUT",    body: JSON.stringify(d) });
export const eliminarGanado  = (id)      => api(`/ganado/${id}`, { method: "DELETE" });

// ── REPRODUCCIÓN ──────────────────────────────────
export const getReproducciones    = ()       => api("/ganado/reproduccion");
export const getReproduccion      = (id)     => api(`/ganado/reproduccion/${id}`);
export const crearReproduccion    = (datos)  => api("/ganado/reproduccion", { method: "POST", body: JSON.stringify(datos) });
export const editarReproduccion   = (id, d)  => api(`/ganado/reproduccion/${id}`, { method: "PUT", body: JSON.stringify(d) });
export const eliminarReproduccion = (id)     => api(`/ganado/reproduccion/${id}`, { method: "DELETE" });

// ── PRODUCCIÓN ────────────────────────────────────
export const getProducciones  = ()       => api("/ganado/produccion");
export const crearProduccion  = (datos)  => api("/ganado/produccion", { method: "POST", body: JSON.stringify(datos) });

// ── EVENTOS SANITARIOS ────────────────────────────
export const getEventos       = ()       => api("/ganado/eventos");
export const getUnEvento      = (id)     => api(`/ganado/eventos/${id}`);
export const crearEvento      = (datos)  => api("/ganado/eventos", { method: "POST",   body: JSON.stringify(datos) });
export const editarEvento     = (id, d)  => api(`/ganado/eventos/${id}`, { method: "PUT",    body: JSON.stringify(d) });
export const eliminarEvento   = (id)     => api(`/ganado/eventos/${id}`, { method: "DELETE" });

// ── POTRERO ───────────────────────────────────────
export const getPotreros      = ()       => api("/ganado/potreros");
export const crearPotrero     = (datos)  => api("/ganado/potreros", { method: "POST", body: JSON.stringify(datos) });