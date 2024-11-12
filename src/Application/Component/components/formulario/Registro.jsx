// src/Application/Component/components/formulario/Registro.jsx

import React, { useState } from "react";
import "./registro.css";
import MiCarreraPerfectaLogo from "./MiCarreraPerfectaLogo.jpg";
import { useNavigate } from "react-router";
const Registro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/test");
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
  };

  return (
    <div className="contenedor">
      <div className="container">
        <div className="form-container">
          <img src={MiCarreraPerfectaLogo} alt="logo" className="logo" />

          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <h1 className="absolute bottom-0 left-0 text-5xl rounded-lg text-[#F1FAEE] bg-[#457b9d] py-2 px-4 shadow-md shadow-[#f1faee] mb-4 ml-4">
        Mi Carrera Perfecta
      </h1>
    </div>
  );
};

export default Registro;
