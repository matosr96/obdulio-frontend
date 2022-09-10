import { LoginUser } from "../../actions/users";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userSingin = useSelector((state: any) => state.userSingin);
  const { userInfo, loading, error } = userSingin;

  const navigate = useNavigate();
  const submitHandler = (e: any) => {
    e.preventDefault();

    dispatch(LoginUser(username, password) as any);
  };
  return (
    <div className="container-login">
      <div className="card-login">
        <div className="body-card-login">
          <div className="title-card-login">
            <h3>Iniciar Sesion</h3>
          </div>
          <div className="form-login">
            <form onSubmit={submitHandler}>
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
