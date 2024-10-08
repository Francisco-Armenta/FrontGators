const decodeToken = (token) => {
  // Divide el JWT en sus tres partes: header, payload, y firma
  const base64Url = token.split(".")[1];

  // Decodificar el payload (está codificado en base64)
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

  // Parsear el JSON del payload y devolver el objeto
  return JSON.parse(jsonPayload);
};

// Ejemplo de uso en React
import React, { useEffect, useState } from "react";

const UserToken = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Decodificar el token manualmente
        const decodedToken = decodeToken(token);

        // Leer la información del usuario
        setUsuario(decodedToken.usuario);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }
  }, []);

  return usuario;
};

export default UserToken;
