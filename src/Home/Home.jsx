import React from "react";
import { useLocation } from "react-router-dom";
import MyAppBar from "./AppBar";

function Home() {
  const location = useLocation();

  const { usuario } = location.state || {}; // Obtener el estado `usuario` de la navegación
  console.log(usuario);
  return <div>{usuario && <MyAppBar usuarioHome={usuario} />}</div>;
}

export default Home;
