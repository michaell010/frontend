import "../../styles/Login.css";

function RecuperarPassword() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Recuperar Contraseña</h2>
        <p className="subtitle">Ingresa tu correo y te enviaremos un enlace</p>
        <input type="email" placeholder="Correo electrónico" />
        <button>Enviar enlace</button>
      </div>
    </div>
  );
}

export default RecuperarPassword;