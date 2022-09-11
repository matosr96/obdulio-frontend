import "./header.css";
import logo from "../../assets/biblioteca.png";

const Header = () => {
    const colegio = "Obdulio Mayo Scarpeta"
  return (
    <div className="header">
      <div className="logo">
        <img className="img-logo" src={logo} alt="" />
        <h2>{colegio}</h2>
      </div>
      <div className="list-header">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
