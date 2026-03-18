import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/AuthService";
import "../../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleLogin = async () => {
    if (!correo || !contrasena) {
      setError("Por favor ingresa correo y contraseña.");
      return;
    }

    setCargando(true);
    setError("");

    try {
      const res = await login(correo, contrasena);

      if (res.ok) {
        navigate("/dashboard");
      } else {
        setError(res.mensaje || "Credenciales incorrectas.");
      }
    } catch (err) {
      setError("Error al conectar con el servidor.");
    } finally {
      setCargando(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className={`container ${active ? "right-panel-active" : ""}`} id="container">
      <div className="form-container register-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Registro</h1>
          <input type="text" placeholder="Nombre Completo" />
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button type="button">Registrar</button>
          <span>Ingresa tus datos para Registrarte</span>
          <div className="social-container">
            <a href="#" className="social"><i className="lni lni-google"></i></a>
          </div>
        </form>
      </div>

      <div className="form-container login-container">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar Sesión</h1>

          <input
            type="email"
            placeholder="Correo Electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            disabled={cargando}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            disabled={cargando}
          />

          {error && (
            <p style={{ color: "#c0392b", fontSize: "0.82rem", margin: "0.5rem 0", textAlign: "center" }}>
              {error}
            </p>
          )}

          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Recordarme</label>
            </div>

            <div className="pass-link">
              <a href="/recuperar-password">¿Olvidaste tu contraseña?</a>
            </div>
          </div>

          <button type="submit" disabled={cargando}>
            {cargando ? "Ingresando..." : "Ingresar"}
          </button>

          <span>Ingresa tus datos para continuar</span>

          <div className="social-container">
            <a href="#" className="social"><i className="lni lni-google"></i></a>
          </div>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Bienvenido de nuevo!</h1>
            <p>Para mantenerse conectado con nosotros, por favor inicie sesión con su información personal</p>
            <button className="ghost" onClick={() => setActive(false)}>
              Iniciar Sesión <i className="lni lni-arrow-left login"></i>
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1 className="title">Tu finca, en tus manos</h1>
            <p>Ingresa tus datos personales y comienza tu viaje con nosotros</p>
            <button className="ghost" onClick={() => setActive(true)}>
              Registrarse <i className="lni lni-arrow-right register"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}