import "./header.css";
import logo from "../../assets/biblioteca.png";
import { listBooks, signout } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { PrivateRoutes } from "../../constants";

import { Link } from "react-router-dom";

const Header = (props: any) => {
  const { openMenu, setOpenMenu } = props;
  const dispatch = useDispatch();
  const userSingin = useSelector((state: any) => state.userSingin);
  const { userInfo } = userSingin;
  const { uuid, name, username } = userInfo;

  const signoutHandler = () => {
    dispatch(signout() as any);
  };

  const [openModal, setOpenModal] = useState(false);

  const menuHandler = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    dispatch(listBooks(uuid) as any);
  }, [dispatch]);
  const colegio = "Gestion de inventarios";
  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="img-logo" src={logo} alt="" />
          <h2>{colegio}</h2>
        </div>
        <div className="user">
          <button onClick={() => setOpenMenu(!openMenu)}>
            <p>
              <span className="name-icon">{name.charAt(0).toUpperCase()}</span>
              <div className="info-name">
                <h3 className="name-text">{name}</h3>
                <span className="bname-text">{username}</span>
              </div>
            </p>
          </button>
        </div>
      </div>

      <div className={openMenu ? "openMenu" : "closeMenu"}>
        <aside className="menu-content">
          <div className="logout">
            <button
              className="close"
              onClick={() => {
                signoutHandler;
                <Link to="/login"></Link>;
              }}
            >
              <i className="bx bxs-log-in-circle"></i>
              <span>Cerrar sesion</span>
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Header;
