import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul className="footer-nav">
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

      <div className="footer-social">
        <a href="https://www.instagram.com/rgef">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/rgef">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.x.com/rgef">
          <i className="fa-brands fa-x-twitter fa-canvas-square"></i>
        </a>
        <a href="https://www.youtube.com/rgef">
          <i className="fa-brands fa-youtube fa-canvas-square"></i>
        </a>
        <a href="https://www.linkedin.com/rgef">
          <i className="fa-brands fa-linkedin fa-canvas-square"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
