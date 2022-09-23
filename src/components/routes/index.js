import { Routes, Route } from "react-router-dom";

// paginas
import Home from "../../views/Home/Home";
import Login from "../../views/Home/login/Login";
import Registrarse from "../../views/Home/Registrarse";
import Explicame from "../../views/explicame/Explicame";
import NavBarExpandible from "../../views/presentacion/components/NavBarExpandible";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registrarse" element={<Registrarse />} />
        <Route path="presentacion" element={<NavBarExpandible />} />
        <Route path="explicame" element={<Explicame />} />
      </Routes>
    </>
  );
};
