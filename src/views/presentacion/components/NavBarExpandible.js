//
import { useState, useEffect } from "react";

//
import NavBarPanelA from "./NavBarPanelA";
import NavBarPanelB from "./NavBarPanelB";
import NavBarPanelC from "./NavBarPanelC";

import "./style.css";

import Data from "../../presentacion/api/NavBarMain.json";

// url
import { url_opciones_get_hijos } from "./Url";

function NavBarExpandible() {
  const [panels, setPanels] = useState(null);
  const [db, setDb] = useState(null);
  const [id, setId] = useState(null);
  const [padre, setPadre] = useState(null);

  useEffect(() => {
    leeNavBar(0);
  }, []);

  const leeNavBar = (hijo) => {
    // async function fetchData(hijo) {
    //   await fetch(url_opciones_get_hijos + "02/" + hijo, {
    //     method: "get",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       setDb(result.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    // fetchData(hijo);

    let xx = Data.NavBarMain.filter((item) => item.padre === hijo);
    setDb(xx);
    // let yy = JSON.stringify(db[0].tipo_columnas);
    // alert(yy);
    // setPanels(yy);
  };

  return (
    <>
      <div className="fdo">
        <nav className="nav">
          <ul className="nav__menu">
            {db &&
              db.map((item) => {
                return (
                  <li
                    key={item.id}
                    onMouseOver={() => {
                      setId(item.id);
                      setPadre(item.id);
                      setPanels(item.tipo_columnas);
                    }}
                  >
                    <span className="navbar-link">{item.descripcion}</span>
                  </li>
                );
              })}
            {!db && <li></li>}
          </ul>
        </nav>
      </div>
      <div id="panel" className="panel">
        <div className="panel-marco">
          {panels === "A" && <NavBarPanelA padre={padre} />}
          {panels === "B" && <NavBarPanelB padre={padre} />}
          {panels === "C" && <NavBarPanelC padre={padre} />}
        </div>
      </div>
    </>
  );
}

export default NavBarExpandible;
