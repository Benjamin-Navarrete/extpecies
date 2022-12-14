import { Link } from "react-router-dom";
import logo from "../assets/img/LOGO.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} alt="logo" width="250px" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-auto m-2">
                <Link to="/">Inicio</Link>
              </li>
              <li className="nav-item ms-auto m-2">
                <Link to="/mapa">Mapa de Especies</Link>
              </li>
              <li className="nav-item ms-auto m-2">
                <Link to="/prueba">Ponte a Prueba</Link>
              </li>
              <li className="nav-item ms-auto m-2">
                <Link aria-current="page" to="/extpecies">
                  Extpecies
                </Link>
              </li>
              <li className="nav-item ms-auto m-2">
                <Link aria-current="page" to="/user">
                  Mi perfil
                </Link>
              </li>
              <div className="m-1 ms-auto">
                <Link to="/login">
                  <button className="btn btn-sm btn-primary" type="button">
                    Iniciar Sesión
                  </button>
                </Link>
              </div>
              <div className="m-1 ms-auto">
                <Link to="/registro">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    type="button"
                  >
                    Registrarse
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
