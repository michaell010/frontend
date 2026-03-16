import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/AuthService";
import "../../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err?.message || "Credenciales incorrectas. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  // Permitir Enter para login
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}
        <div style={{ marginBottom: "8px", fontSize: "2.5rem" }}>🐂</div>
        <h2>GanaControl</h2>
        <p className="subtitle">Sistema de Gestión Ganadera</p>

        {/* Error */}
        {error && (
          <p style={{
            color: "#c0392b", fontSize: "13px",
            background: "#fdecea", padding: "8px 12px",
            borderRadius: "6px", marginBottom: "12px"
          }}>
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="current-password"
        />

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
        </button>

        <p style={{ fontSize: "13px", color: "#777", marginTop: "16px" }}>
          <span
            style={{ color: "#2c5364", cursor: "pointer", fontWeight: "600" }}
            onClick={() => navigate("/recuperar-password")}
          >
            ¿Olvidaste tu contraseña?
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;