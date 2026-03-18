import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  console.error("VITE_API_URL no está definida. Revisa el archivo .env");
}

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("API URL:", config.baseURL);
    console.log("Request:", `${config.baseURL}${config.url}`);

    return config;
  },
  (error) => {
    console.error("Error en request:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const mensaje =
      error.response?.data?.mensaje ||
      error.response?.data?.error ||
      error.message ||
      "Error desconocido";

    if (status === 401) {
      console.warn("Sesión expirada o no autorizada");

      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("usuario");

      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    } else if (status === 403) {
      console.warn("No tienes permisos para esta acción");
    } else if (status === 404) {
      console.warn("Recurso no encontrado");
    } else if (status === 500) {
      console.error("Error interno del servidor");
    } else if (!error.response) {
      console.error("Error de red, CORS o servidor no disponible");
    }

    console.error("Detalle del error:", mensaje);

    return Promise.reject(error);
  }
);

export const get = (url, config = {}) => api.get(url, config);
export const post = (url, data = {}, config = {}) => api.post(url, data, config);
export const put = (url, data = {}, config = {}) => api.put(url, data, config);
export const patch = (url, data = {}, config = {}) => api.patch(url, data, config);
export const del = (url, config = {}) => api.delete(url, config);

export default api;