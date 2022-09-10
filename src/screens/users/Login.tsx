import { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container-login">
      <div className="card-login">
        <div className="body-card-login">
          <div className="title-card-login">
            <h3>Iniciar Sesion</h3>
          </div>
          <div className="form-login">
            <form>
              <div className="container-input-login">
                <input
                  type="text"
                  placeholder="ingresa tu usuario"
                  className="input-login"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="ingresa tu contraseña"
                  className="input-login"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="container-button-card-login">
                <input
                  className="button-card-login"
                  type="submit"
                  value="Acceder"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
