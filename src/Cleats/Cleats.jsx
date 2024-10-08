import Home from "../Home/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Cleats.css";
import TallasTable from "../token/Tallas";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ResponsiveDrawer from "./Cajon";
import Box from "@mui/material/Box";

const imagenes1 = [
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d1b68939-f6f6-40d9-bdf8-ee9eb55ed0ac/NIKE+VAPOR+EDGE+ELITE+360+2.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b637ef0-0f61-4c04-bcf1-2d255adf8991/NIKE+VAPOR+EDGE+ELITE+360+2.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8fab0793-c661-460e-b3c1-bd3f6306c1eb/NIKE+VAPOR+EDGE+ELITE+360+2.png",
];

function Cleats() {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(0);

  const handleSize = (sizeParams) => {
    console.log(sizeParams);
    setSize(sizeParams);
  };

  const nextImage = () => {
    setIndex((prevIndex) =>
      prevIndex === imagenes1.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? imagenes1.length - 1 : prevIndex - 1
    );
  };

  // const talla = localStorage.getItem("talla");

  const comprar = async () => {
    const payload = {
      talla: size,
    };
    try {
      const req = await axios.put("http://localhost:3000/productos", payload);
    } catch (err) {}
  };

  return (
    <div className="CL-container">
      <Home />
      <div className="img-conteiner">
        <Box className="img1">
          <img className="C1" src={imagenes1[index]} />
          <button className="mas" onClick={nextImage}>
            <div className="flecha1">
              <ArrowForwardIosIcon />
            </div>
          </button>
          <button className="menos" onClick={prevImage}>
            <div className="flecha2">
              <ArrowBackIosIcon />
            </div>
          </button>
          <TallasTable className="tallasT" handleSize={handleSize} />
          <button className="comprar" onClick={comprar}>
            Comprar
          </button>
        </Box>
      </div>
    </div>
  );
}

export default Cleats;
