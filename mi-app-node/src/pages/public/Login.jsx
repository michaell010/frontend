import "../../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Bienvenido</h2>
        <p className="subtitle">Sistema de Gestión Ganadera</p>

        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />

        <button>Iniciar Sesión</button>
      </div>
    </div>
  );
}

export default Login;