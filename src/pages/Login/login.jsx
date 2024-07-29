import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Importa los estilos personalizados de login

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Por favor, complete todos los campos.");
    } else {
      // Redirige al usuario a /Admin si los campos están completos
      navigate("/listado-citas");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2 className="text-center">Iniciar Sesión</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Introduce tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-custom w-100">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
