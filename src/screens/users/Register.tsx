import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_REGISTER_RESET } from "../../constants";
import { registerUser } from "../../actions";
import biblioteca from "../../assets/imgregister.png";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const userRegister = useSelector((state: any) => state.userRegister);
  const {
    loading: loadingRegister,
    error: errorRegister,
    success: successRegister,
  } = userRegister;

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitRegisterHandler = (e: any) => {
    e.preventDefault();
    dispatch(
      registerUser({
        name: name,
        username: username,
        password: password,
      }) as any
    );
  };

  useEffect(() => {
    if (successRegister) {
      dispatch({ type: USER_REGISTER_RESET });
    }
  }, [dispatch, successRegister]);
  return (
    <div className="container-register">
      <div className="card-register">
        <div className="stn-left">
          <div className="image-register">
            <img src={biblioteca} alt="imagebiblioteca" />
          </div>
          <div className="info-register">
            <h2>Software de gestion de inventarios en bibliotecas</h2>

            <p>Copyright © Todos los derechos reservados</p>
            <span>Dessarrollado por Edgar Matos</span>
          </div>
        </div>
        <div className="stn-right">
          <div className="title-register">
            <h1>Registrar Usuario</h1>
          </div>
          <div className="form-register">
            <form onSubmit={submitRegisterHandler}>
              <div className="container-input-login">
                <input
                  type="text"
                  placeholder="Ingresa tu Nombre"
                  className="input-login"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Ingresa tu usuario"
                  className="input-login"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
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
                  value="Registrar"
                />
              </div>
            </form>
          </div>
         <div className="footer-register">
         <span>
            Ya tienes una cuenta <Link className="login-link" to={"/login"}>Inicia Sesion</Link>
          </span>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
