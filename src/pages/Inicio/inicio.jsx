import React from "react";
import imgInicio from "../../img/imageninicio.jpg"; // Asegúrate de la ruta correcta
import "./inicio.css"; // Importa el archivo de estilos

function Inicio() {
  return (
    <div className="inicio-container">
      <img src={imgInicio} alt="Imagen de Inicio" className="inicio-img" />
      <div className="inicio-content">
        <h1 className="inicio-title">¡Bienvenido!</h1>
        <button className="inicio-button">Programar cita</button>
      </div>
    </div>
  );
}

export default Inicio;
