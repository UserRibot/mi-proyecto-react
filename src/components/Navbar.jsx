import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/lineas">Líneas</Link>
          </li>
          <li>
            <Link to="./estaciones">Estaciones</Link>
          </li>
          <li>
            <Link to="./contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
