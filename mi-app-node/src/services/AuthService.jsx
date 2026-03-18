import api from "./api";

export const login = async (correo, contrasena) => {
  try {
    const response = await api.post("/auth/login", {
      correo,
      contrasena,
    });

    const data = response.data;

    if (data?.ok && data?.data?.accessToken) {
      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken || "");
      localStorage.setItem("usuario", JSON.stringify(data.data.usuario || {}));
    }

    return data;
  } catch (error) {
    return {
      ok: false,
      mensaje:
        error.response?.data?.mensaje ||
        error.response?.data?.errores?.[0]?.mensaje ||
        error.response?.data?.error ||
        "Error al conectar con el servidor.",
    };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("usuario");
};

export const getUsuarioActual = () => {
  try {
    const u = localStorage.getItem("usuario");
    return u ? JSON.parse(u) : null;
  } catch {
    return null;
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const me = async () => {
  try {
    const response = await api.get("/auth/me");

    if (response.data?.ok && response.data?.data) {
      localStorage.setItem("usuario", JSON.stringify(response.data.data));
    }

    return response.data;
  } catch (error) {
    return {
      ok: false,
      mensaje:
        error.response?.data?.mensaje ||
        error.response?.data?.errores?.[0]?.mensaje ||
        "No se pudo obtener el usuario actual.",
    };
  }
};