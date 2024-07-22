import React from "react";
import imgInicio from "../../img/imageninicio.jpg"; // Asegúrate de la ruta correcta
import "./inicio.css"; // Importa el archivo de estilos

function Inicio() {
  return (
    <div className="inicio-container">
      {<img src={imgInicio} alt="Imagen de Inicio" className="inicio-img" />}
    </div>
  );
}

export default Inicio;
