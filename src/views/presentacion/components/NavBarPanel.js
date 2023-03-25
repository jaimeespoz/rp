//
import { useState, useEffect } from "react";

import NavBarDetalle from "./NavBarDetalle";

// url
import { url_navbar_opciones } from "../../../components/routes/Urls";
<<<<<<< HEAD

// import Data from "../../presentacion/api/NavBarMain.json";
=======
import DetSit from "./DetSit";
import DetSide from "./DetSide";
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6

function NavBarPanel({ padre }) {
  const [dba, setDba] = useState(null);
  const [dbb, setDbb] = useState(null);
  const [dbc, setDbc] = useState(null);

  useEffect(() => {
    leeOpciones(padre);
  }, [padre]);

<<<<<<< HEAD
  const leeOpciones = (padre) => {
=======
  const leeOpciones = (Id) => {
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
    async function fetchData(padre) {
      await fetch(url_navbar_opciones + padre, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
<<<<<<< HEAD
          // alert(JSON.stringify(result));
=======
          // console.log(JSON.stringify(result));
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
          setDba(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
<<<<<<< HEAD
    fetchData(padre);
    // let xx = Data.NavBarMain.filter((item) => item.padre === padre);
    // setDba(xx);
=======
    fetchData(Id);
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
  };

  const MouseOverA = (Id) => {
    async function fetchData(padre) {
<<<<<<< HEAD
      await fetch(url_navbar_opciones + Id, {
=======
      await fetch(url_navbar_opciones + padre, {
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
<<<<<<< HEAD
          //  alert(JSON.stringify(result));
=======
          // console.log(JSON.stringify(result));
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
          setDbb(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
<<<<<<< HEAD
    fetchData(padre);
    // let xx = Data.NavBarMain.filter((item) => item.padre === Id);
    // setDbb(xx);
=======
    fetchData(Id);
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
  };

  const MouseOverB = (Id) => {
    async function fetchData(padre) {
<<<<<<< HEAD
      await fetch(url_navbar_opciones + Id, {
=======
      await fetch(url_navbar_opciones + padre, {
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
<<<<<<< HEAD
=======
          // console.log(JSON.stringify(result));
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
          setDbc(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
<<<<<<< HEAD
    fetchData(padre);
    // let xx = Data.NavBarMain.filter((item) => item.padre === Id);
    // setDbc(xx);
=======
    fetchData(Id);
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
  };

  return (
    <div className="navbarpanel">
      <div className="item-left">
        <ul>
          {dba &&
            dba.map((item) => {
              return (
                <li
<<<<<<< HEAD
                  key={item.serial}
=======
                  key={item.react_key}
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
                  onMouseOver={() => {
                    MouseOverA(item.id_opcion);
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
<<<<<<< HEAD
                  key={item.serial}
                  onMouseOver={() => {
                    MouseOverB(item.id);
=======
                  key={item.react_key}
                  onMouseOver={() => {
                    MouseOverB(item.id_opcion);
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
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
<<<<<<< HEAD
          {dbc &&
            dbc.map((item) => {
              return (
                <li
                  key={item.serial}
                  onMouseOver={() => {
                    MouseOverA(item.id);
                  }}
                >
                  <NavBarDetalle item={item} />
                </li>
              );
            })}
          {!dbc && <li></li>}
=======
          <li
          // key={item.serial}
          // onMouseOver={() => {
          //   MouseOverA(item.id_opcion);
          // }}
          >
            {/* <NavBarDetalle item={item} /> */}
            {/* <DetSide /> */}
          </li>
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
        </ul>
      </div>
    </div>
  );
}

export default NavBarPanel;
