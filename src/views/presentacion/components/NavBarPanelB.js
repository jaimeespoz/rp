//
import { useState, useEffect } from "react";
import NavBarDetalleA from "./NavBarDetalleA";
import NavBarDetalleB from "./NavBarDetalleB";
import NavBarDetalleC from "./NavBarDetalleC";

// url
import { url_opciones_get_hijos } from "./Url";

import Data from "../../presentacion/api/NavBarMain.json";

function NavBarPanelB({ padre }) {
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
    // alert("MouseOverA: " + JSON.stringify(Id));
    // setId(id);
    let xx = Data.NavBarMain.filter((item) => item.padre === Id);
    setDbb(xx);
    setDbc(null);
  };

  const MouseOverB = (Id) => {
    // alert("MouseOverB: " + Id);
    // setId(id);
    let xx = Data.NavBarMain.filter((item) => item.padre === Id);
    setDbc(xx);
  };

  return (
    <>
      <h2>
        <span className="navbar-link">Panel B</span>
      </h2>
      <div className="d-flex flex-row justify-content-left">
        <div className="col-4">
          <div className="row">
            <div className="col-11">
              <ul className="jea">
                {dba &&
                  dba.map((item) => {
                    return (
                      <li
                        key={item.id}
                        onMouseOver={() => {
                          MouseOverA(item.id);
                        }}
                      >
                        <NavBarDetalleA item={item} />
                      </li>
                    );
                  })}
                {!dba && <li></li>}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-11">
              <ul className="jea">
                {dbb &&
                  dbb.map((item) => {
                    return (
                      <li
                        key={item.id}
                        onMouseOver={() => {
                          MouseOverB(item.id);
                        }}
                      >
                        <NavBarDetalleB item={item} />
                      </li>
                    );
                  })}
                {!dbb && <li></li>}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-11">
              <ul className="jea">
                {dbc &&
                  dbc.map((item) => {
                    return (
                      <li key={item.id}>
                        <NavBarDetalleC item={item} />
                      </li>
                    );
                  })}
                {!dbc && <li></li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarPanelB;
