// src/services/AuthService.jsx
import api from "./api";

// Login — guarda token y usuario en localStorage
export const login = async (email, password) => {
  const data = await api("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("usuario", JSON.stringify(data.usuario || {}));
  }
  return data;
};

// Registro de nuevo usuario
export const registro = (datos) =>
  api("/auth/registro", {
    method: "POST",
    body: JSON.stringify(datos),
  });

// Cerrar sesión
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
};

// Obtener usuario actual desde localStorage
export const getUsuarioActual = () => {
  const u = localStorage.getItem("usuario");
  return u ? JSON.parse(u) : null;
};

// Verificar si hay sesión activa
export const isAuthenticated = () => !!localStorage.getItem("token");