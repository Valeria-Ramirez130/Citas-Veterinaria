// Componente NavbarGlobal.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import iconoveterinario from "../../img/iconoveterinario.png";
import "./NavbarGlobal.css";

export default function NavbarGlobal() {
  return (
    <div className="container-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src={iconoveterinario}
            alt="Icono Veterinario"
            className="navbar-logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/citas">
                Citas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listado-de-citas">
                Listado de citas
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

/* 
  Se agrega el outlet para que se renderice el componente que corresponda a la ruta.
  Es decir, si la ruta es /citas, se renderiza el componente que se indique en la routesGlobal.
*/
