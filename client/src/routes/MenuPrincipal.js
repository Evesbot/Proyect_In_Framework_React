import React from "react";
import { Link } from "react-router-dom";
import Logo from './Img/Logo.png';

export default function MenuPrincipal() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="prueba">
          <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top ms-3"/>
            STEMA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/prueba">
                Inicio
                </Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                Iniciar Sesion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/precio">
                Cotizar precios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AgendarCita">
                Agendar citas 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
