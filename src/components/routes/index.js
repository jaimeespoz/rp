import { Routes, Route } from "react-router-dom";

// paginas
import Home from "../../views/Home/Home";
import Login from "../../views/login/Login";
import Registrarse from "../../views/login/Registrarse";
import Explicame from "../../views/explicame/Explicame";
import NavBarExpandible from "../../views/presentacion/components/NavBarExpandible";
import Presentacion from "../../views/presentacion/components/Presentacion";
import PruebaFlex from "../../views/Home/PruebaFlex";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registrarse" element={<Registrarse />} />
        <Route path="NavBarExpandible" element={<NavBarExpandible />} />
        <Route path="presentacion" element={<Presentacion />} />
        <Route path="explicame" element={<Explicame />} />
        <Route path="pruebaflex" element={<PruebaFlex />} />
      </Routes>
    </>
  );
};
