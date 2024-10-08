import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const data = {
        usuario: usuario,
        password: password,
      };
      const user = await axios.post("http://localhost:3000/login", data);

      const token = user.data.body;
      localStorage.setItem("token", token);

      navigate("/home");
      setLoginStatus(true);
    } catch (err) {
      console.log(err);
      alert("Usuario y/o contraseña incorrectos");
    }
  };

  const handleUsuario = (event) => {
    console.log(event.target.value);
    setUsuario(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="conteiner">
      <div className="subContainer">
        <img
          className="logo"
          src="https://e0.pxfuel.com/wallpapers/515/214/desktop-wallpaper-florida-gators-college-football-florida-gators-logo.jpg"
        />
        <div className="form">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBohdBLnEUp7Sn7_-D3vlJor3F1cjpu00bQ&s" />
          <h1>Bienvenido</h1>
          <p>Pagina oficial de Gators</p>
          <p>Inicia sesion</p>

          <form onSubmit={handleLogin}>
            <div>
              <input
                className="azul"
                type="text"
                value={usuario}
                onChange={handleUsuario}
                placeholder="Usuario"
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
            <a href="/crear" className="link">
              ¿No tienes una cuenta?
            </a>
          </form>
          {loginStatus && <p>{loginStatus}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
