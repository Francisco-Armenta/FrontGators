import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import "./AppBar.css";
import { useNavigate } from "react-router-dom";
import UserToken from "../token/token";

function MyAppBar() {
  const navigate = useNavigate();

  const cleats = () => {
    navigate("/cleats");
  };

  const homeButton = () => {
    navigate("/home");
  };

  return (
    <div className="root">
      <AppBar className="AppBar" position="sticky" sx={{ background: "white" }}>
        <Toolbar>
          <Box className="AB-icono">
            <IconButton onClick={homeButton}>
              <img
                className="AB-img"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png"
              />
            </IconButton>
          </Box>

          <Box className="options">
            <button onClick={cleats}>Cleats</button>
            <button>Shorts</button>
            <button>T-Shirt</button>
          </Box>

          <Box className="AB-avatar">
            <Avatar
              sx={{ marginRight: "15px", marginTop: "8px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zQLc56Xb5CRFBDe9uEeutJuqglVeUffhqQ&s"
              // src="https://www.dpciwholesale.com/images/D/_2287511.JPG"
            />
            <Typography
              className="user"
              variant="subtitle1"
              color="black"
              sx={{
                marginTop: "3px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {UserToken()}
              <Typography>Activo</Typography>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MyAppBar;
