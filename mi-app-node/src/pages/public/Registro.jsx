import "../../styles/Login.css";

function Registro() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Crear Cuenta</h2>
        <p className="subtitle">Sistema de Gestión Ganadera</p>
        <input type="text"     placeholder="Nombre completo" />
        <input type="email"    placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar contraseña" />
        <button>Registrarse</button>
      </div>
    </div>
  );
}

export default Registro;