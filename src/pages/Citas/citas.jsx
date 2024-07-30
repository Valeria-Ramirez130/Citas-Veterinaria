import React, { useState } from "react";
import "./citas.css";
import iconoagendar from "../../img/iconoagendar.png"; // Ruta correcta a la imagen

export default function Citas() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    nombreMascota: "",
    especie: "",
    motivo: "",
    fecha: "",
    hora: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    // Aquí puedes agregar la lógica para enviar los datos del formulario
  };

  // Función para desplazar la vista al formulario
  const scrollToForm = () => {
    const formElement = document.getElementById("formulario");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div id="formulario" className="contenedor-formulario">
        <h2 className="titulo-formulario">¡Agenda tu cita!</h2>
        <form onSubmit={handleSubmit} className="formulario-citas">
          {/* Campos del formulario */}
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Por favor, ingresa un número de teléfono válido de 10 dígitos"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Nombre mascota:
            <input
              type="text"
              name="nombreMascota"
              value={formData.nombreMascota}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Especie:
            <select
              name="especie"
              value={formData.especie}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una especie</option>
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
            </select>
          </label>
          <label>
            Motivo de la cita:
            <select
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un motivo</option>
              <option value="bañoGrande">
                ✓ Baño y peluquería perro raza grande
              </option>
              <option value="bañoPequeño">
                ✓ Baño y peluquería perro raza pequeña
              </option>
              <option value="consulta">✓ Consulta veterinaria</option>
              <option value="control">✓ Control médico</option>
              <option value="muestras">✓ Toma muestras para laboratorio</option>
              <option value="vacunacion">✓ Vacunación</option>
              <option value="peluqueriaGato">✓ Baño y peluquería gato</option>
            </select>
          </label>
          <label>
            Fecha:
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Hora:
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              min="08:00" // Establece la hora mínima a las 8:00 am
              max="18:00" // Establece la hora máxima a las 6:00 pm
              required
            />
          </label>
          <button
            type="submit"
            className="button btn primary request-button solicitar-cita-button"
          >
            SOLICITAR CITA
          </button>
        </form>
      </div>

      <div className="appointments-container">
        <h5 className="text-bold">Citas más frecuentes</h5>
        <div className="appointments-grid">
          <div className="appointments-row">
            <div className="appointment">
              <h5>Consulta veterinaria</h5>
              <button
                type="button"
                className="button btn primary request-button"
                onClick={scrollToForm} // Añade el evento onClick
              >
                Solicitar
                <img
                  src={iconoagendar}
                  alt="Icono Agendar"
                  className="icono-agendar"
                />
              </button>
            </div>
            <div className="appointment">
              <h5>Control médico</h5>
              <button
                type="button"
                className="button btn primary request-button"
                onClick={scrollToForm} // Añade el evento onClick
              >
                Solicitar
                <img
                  src={iconoagendar}
                  alt="Icono Agendar"
                  className="icono-agendar"
                />
              </button>
            </div>
            <div className="appointment">
              <h5>Baño y peluquería perro raza grande</h5>
              <button
                type="button"
                className="button btn primary request-button"
                onClick={scrollToForm} // Añade el evento onClick
              >
                Solicitar
                <img
                  src={iconoagendar}
                  alt="Icono Agendar"
                  className="icono-agendar"
                />
              </button>
            </div>
            <div className="appointment">
              <h5>Baño y peluquería perro raza pequeña</h5>
              <button
                type="button"
                className="button btn primary request-button"
                onClick={scrollToForm} // Añade el evento onClick
              >
                Solicitar
                <img
                  src={iconoagendar}
                  alt="Icono Agendar"
                  className="icono-agendar"
                />
              </button>
            </div>
          </div>
          <div className="appointments-row">
            <div className="appointment">
              <h5>Toma muestras para laboratorio</h5>
              <button
                type="button"
                className="button btn primary request-button"
                onClick={scrollToForm} // Añade el evento onClick
              >
                Solicitar
                <img
                  src={iconoagendar}
                  alt="Icono Agendar"
                  className="icono-agendar"
                />
              </button>
            </div>
            <div className="appointment">
              <h5>Baño y peluquería gato</h5>
              <button
                type="button"
                className="button btn primary request-button"
                onClick={scrollToForm} // Añade el evento onClick
              >
                Solicitar
                <img
                  src={iconoagendar}
                  alt="Icono Agendar"
                  className="icono-agendar"
                />
              </button>
            </div>
            <div className="appointment">
              <h5>Vacunación</h5>
              <button
                type="button"
                className="button btn primary request-button"
                onClick={scrollToForm} // Añade el evento onClick
              >
                Solicitar
                <img
                  src={iconoagendar}
                  alt="Icono Agendar"
                  className="icono-agendar"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
