import React from "react";
import "./listadocitas.css";

const ListadoCitas = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Listado de Citas Programadas</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Nombre de Mascota</th>
              <th>Especie</th>
              <th>Motivo</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Pérez</td>
              <td>1234567890</td>
              <td>juan@example.com</td>
              <td>Rex</td>
              <td>Perro</td>
              <td>✓ Consulta veterinaria</td>
              <td>2024-08-01</td>
              <td>09:00</td>
            </tr>
            <tr>
              <td>Ana García</td>
              <td>0987654321</td>
              <td>ana@example.com</td>
              <td>Misi</td>
              <td>Gato</td>
              <td>✓ Baño y peluquería gato</td>
              <td>2024-08-02</td>
              <td>10:00</td>
            </tr>
            <tr>
              <td>Pedro López</td>
              <td>2345678901</td>
              <td>pedro@example.com</td>
              <td>Fido</td>
              <td>Perro</td>
              <td>✓ Vacunación</td>
              <td>2024-08-03</td>
              <td>11:00</td>
            </tr>
            <tr>
              <td>María Fernández</td>
              <td>3456789012</td>
              <td>maria@example.com</td>
              <td>Whiskers</td>
              <td>Gato</td>
              <td>✓ Control médico</td>
              <td>2024-08-04</td>
              <td>12:00</td>
            </tr>
            <tr>
              <td>Luis Gómez</td>
              <td>4567890123</td>
              <td>luis@example.com</td>
              <td>Rexy</td>
              <td>Perro</td>
              <td>✓ Toma muestras para laboratorio</td>
              <td>2024-08-05</td>
              <td>13:00</td>
            </tr>
            <tr>
              <td>Laura Martínez</td>
              <td>5678901234</td>
              <td>laura@example.com</td>
              <td>Leo</td>
              <td>Gato</td>
              <td>✓ Baño y peluquería perro raza pequeña</td>
              <td>2024-08-06</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>Ricardo Ruiz</td>
              <td>6789012345</td>
              <td>ricardo@example.com</td>
              <td>Buddy</td>
              <td>Perro</td>
              <td>✓ Consulta veterinaria</td>
              <td>2024-08-07</td>
              <td>15:00</td>
            </tr>
            <tr>
              <td>Elena Rodríguez</td>
              <td>7890123456</td>
              <td>elena@example.com</td>
              <td>Shadow</td>
              <td>Gato</td>
              <td>✓ Baño y peluquería gato</td>
              <td>2024-08-08</td>
              <td>16:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoCitas;
