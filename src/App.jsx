import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import CrearUsuario from "./CrearUsuario";
import MyAppBar from "./Home/AppBar";
import Home from "./Home/Home";
import Cleats from "./Cleats/Cleats";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/crear" element={<CrearUsuario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cleats" element={<Cleats />} />
      </Routes>
    </div>
  );
}

export default App;
