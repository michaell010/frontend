import { useState } from "react";
import "../../styles/Login.css";

export default function Login() {

  const [active, setActive] = useState(false);

  return (
    <div className={`container ${active ? "right-panel-active" : ""}`} id="container">

      {/* Register */}
      <div className="form-container register-container">
        <form>
          <h1>Registro</h1>
          <input type="text" placeholder="Nombre Completo" />
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button type="button">Registrar</button>

          <span>Ingresa tus datos para Registrarte</span>

          <div className="social-container">
            <a href="#" className="social">
              <i className="lni lni-google"></i>
            </a>
          </div>
        </form>
      </div>

      {/* Login */}
      <div className="form-container login-container">
        <form>
          <h1>Iniciar Sesión</h1>

          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />

          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Recordarme</label>
            </div>

            <div className="pass-link">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
          </div>

          <button type="button">Ingresar</button>

          <span>Ingresa tus datos para continuar</span>

          <div className="social-container">
            <a href="#" className="social">
              <i className="lni lni-google"></i>
            </a>
          </div>
        </form>
      </div>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">

          <div className="overlay-panel overlay-left">
            <h1>Bienvenido de nuevo!</h1>
            <p>
              Para mantenerse conectado con nosotros, por favor inicie sesión
              con su información personal
            </p>

            <button className="ghost" onClick={() => setActive(false)}>
              Iniciar Sesión
              <i className="lni lni-arrow-left login"></i>
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1 className="title">Tu finca, en tus manos</h1>
            <p>
              Ingresa tus datos personales y comienza tu viaje con nosotros
            </p>

            <button className="ghost" onClick={() => setActive(true)}>
              Registrarse
              <i className="lni lni-arrow-right register"></i>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}