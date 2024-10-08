import React, { useState } from "react";
import "./Tallas.css";
import Cleats from "../Cleats/Cleats";

const TallasTable = ({ handleSize }) => {
  // Estado para almacenar la talla seleccionada
  const [selectedSize, setSelectedSize] = useState("");

  // Array con las opciones de tallas
  const sizes = [5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8, 8.5, 9];

  // Maneja el cambio en el radio button
  const handleSizeChange = (size) => {
    handleSize(size);
    setSelectedSize(size);
  };

  return (
    <div className="tabla">
      <table>
        <thead>
          <tr>
            <th>Tallas</th>
          </tr>
        </thead>
        <tbody className="Tsize">
          {sizes.map((size) => (
            <input
              className={`size ${selectedSize === size ? "active" : ""}`}
              type="button"
              name="talla"
              value={size}
              checked={selectedSize === size}
              onClick={() => handleSizeChange(size)}
            />
          ))}
        </tbody>
      </table>
      <div></div>
    </div>
  );
};

export default TallasTable;
