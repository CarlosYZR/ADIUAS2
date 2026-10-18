import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import eyeIcon from "../assets/img/eye.svg";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="login-page">
      <div className="form-container">
        <form action="../Controllers/ValidacionLogin.php" method="post">
          <h1>INICIA SESIÓN</h1>
          <p>
            Recuerda que si pierdes tu contraseña, puedes pedir a alguien de la
            facultad de informática para que te ayude a recuperarla.
          </p>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="input_username"
              name="input_username"
              placeholder=" "
              required
            />
            <label htmlFor="input_username" className="form-label">
              Usuario
            </label>
          </div>

          <div className="form-floating password-field">
            <input
              type="password"
              className="form-control"
              id="input_password"
              name="input_password"
              placeholder=" "
              autoComplete="current-password"
              required
            />
            <label htmlFor="input_password" className="form-label">
              Contraseña
            </label>
            <button
              className="password-toggle"
              type="button"
              id="toggle_password"
              aria-label="Mostrar contraseña"
              aria-pressed="false"
              aria-controls="input_password"
            >
              <img
                src={eyeIcon}
                alt=""
              id="password_toggle_icon"
              />
            </button>
          </div>

          <input type="submit" value="Ingresar" className="btn" onClick={() => navigate('/dashboard')}/>
        </form>
      </div>
      </main>
    </>
  );
};

export default Login;
