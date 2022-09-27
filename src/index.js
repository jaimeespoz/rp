// modulos
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "semantic-ui-css/semantic.min.css";

// paginas
import { Rutas } from "./components/routes";

// css
import "../src/components/styles/Styles.scss";
// import Explicame from "./views/explicame/Explicame";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Rutas />
    {/* <Explicame /> */}
  </BrowserRouter>
);
