import React from "react";
import { useNavigate } from "react-router-dom";
import imgInicio from "../../img/imageninicio.jpg"; // Asegúrate de la ruta correcta
import "./inicio.css"; // Importa el archivo de estilos

function Inicio() {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleButtonClick = () => {
    navigate("/citas"); // Navega a la ruta "/citas"
  };

  return (
    <div className="inicio-container">
      <img src={imgInicio} alt="Imagen de Inicio" className="inicio-img" />
      <div className="inicio-content">
        <h1 className="inicio-title">¡Bienvenido!</h1>
        <button className="inicio-button" onClick={handleButtonClick}>
          Programar cita
        </button>
      </div>
      <footer className="inicio-footer">
        &copy; 2024 Valeria Ramirez Marin
      </footer>
    </div>
  );
}

export default Inicio;
