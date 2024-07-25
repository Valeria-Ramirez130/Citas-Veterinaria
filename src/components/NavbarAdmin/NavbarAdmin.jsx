import React from "react";
import { Link, Outlet } from "react-router-dom";
import iconoveterinario from "../../img/iconoveterinario.png";
import "./NavbarAdmin.css"; // Importar los estilos

export default function NavbarAdmin() {
  return (
    <div className="container-navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
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
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="listado-citas">
                Listado Citas
              </Link>
            </li>
          </ul>
          <Link to="/" className="navbar-btn-salir">
            Salir
          </Link>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
