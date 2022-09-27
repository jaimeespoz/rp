//
import { useState, useEffect } from "react";
import NavBarDetalle from "./NavBarDetalle";

// url
import { url_opciones_get_hijos } from "./Url";

// import "./NavBarPanel.scss";

import Data from "../../presentacion/api/NavBarMain.json";

function NavBarPanel({ padre }) {
  const [dba, setDba] = useState([]);
  const [dbb, setDbb] = useState([]);
  const [dbc, setDbc] = useState([]);

  useEffect(() => {
    leeOpciones(padre);
  }, [padre]);

  const leeOpciones = (padre) => {
    // async function fetchData(padre) {
    //   await fetch(url_opciones_get_hijos + "02/" + padre, {
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
    // fetchData(padre);
    let xx = Data.NavBarMain.filter((item) => item.padre === padre);
    setDba(xx);
  };

  const MouseOverA = (Id) => {
    // alert("MouseOverA: " + Id);
    // setId(id);
    let xx = Data.NavBarMain.filter((item) => item.padre === Id);
    setDbb(xx);
  };

  const MouseOverB = (Id) => {
    // alert("MouseOverB: " + Id);
    // setId(id);
    let xx = Data.NavBarMain.filter((item) => item.padre === Id);
    setDbc(xx);
  };

  return (
    <div className="navbarpanel">
      <div className="item-left">
        <ul>
          {dba &&
            dba.map((item) => {
              return (
                <li
                  key={item.id}
                  onMouseOver={() => {
                    MouseOverA(item.id);
                  }}
                >
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis ad ipsam explicabo ratione magnam recusandae nulla, soluta error, cum earum deleniti harum perspiciatis itaque sit. Laudantium veniam repellendus doloribus! */}
                  <NavBarDetalle item={item} />
                </li>
              );
            })}
          {!dba && <li></li>}
        </ul>
      </div>

      <div className="item-center">
        <ul>
          {dbb &&
            dbb.map((item) => {
              return (
                <li
                  key={item.id}
                  onMouseOver={() => {
                    MouseOverA(item.id);
                  }}
                >
                  <NavBarDetalle item={item} />
                </li>
              );
            })}
          {!dbb && <li></li>}
        </ul>
      </div>

      <div className="item-right">
        <ul>
          {dbc &&
            dbc.map((item) => {
              return (
                <li
                  key={item.id}
                  onMouseOver={() => {
                    MouseOverA(item.id);
                  }}
                >
                  <NavBarDetalle item={item} />
                </li>
              );
            })}
          {!dbc && <li></li>}
        </ul>
      </div>
    </div>
  );
}

export default NavBarPanel;
