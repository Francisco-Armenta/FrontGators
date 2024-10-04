import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import "./Estilos/AppBar.css";

function MyAppBar(props) {
  const usuario = props.usuarioHome;
  console.log("user", props.usuarioHome);
  return (
    <>
      <AppBar className="AppBar" position="static" sx={{ background: "white" }}>
        <Toolbar>
          <Box className="AB-icono">
            <IconButton>
              <img
                className="AB-img"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png"
              />
            </IconButton>
          </Box>

          <Box className="AB-avatar">
            <Avatar src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/19/1463047534-james-mcavoy-charles-xavier-x-men-apocalypse.jpg?resize=640:*" />
            <Typography variant="subtitle1" color="black">
              {usuario}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MyAppBar;
