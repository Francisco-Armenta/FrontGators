import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";
function CrearUsuario() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      console.log(usuario);
      console.log(password);
      const data = {
        usuario: usuario,
        email: email,
        password: password,
      };
      const user = await axios.post("http://localhost:3000/usuarios", data);
      console.log(user);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="conteiner">
      <div className="subContainer">
        <img
          class="logo"
          src="https://e0.pxfuel.com/wallpapers/515/214/desktop-wallpaper-florida-gators-college-football-florida-gators-logo.jpg"
        />
        <div className="form">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBohdBLnEUp7Sn7_-D3vlJor3F1cjpu00bQ&s" />
          <h1>Crear cuenta</h1>
          <p>Elige usuario y contraseña</p>

          <form onSubmit={handleLogin}>
            <div>
              <input
                className="naranja"
                type="Email"
                value={email}
                onChange={handleEmail}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                className="azul"
                type="text"
                value={usuario}
                onChange={handleUsuario}
                placeholder="Crear usuario"
                required
              />
            </div>
            <div>
              <input
                className="naranja"
                type="Password"
                value={password}
                onChange={handlePassword}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <button className="login" type="submit"></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrearUsuario;
