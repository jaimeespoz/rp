//
import { useState, useEffect } from "react";
// import LogoChile from "../../components/assets/images/LogoChile.png";
import "./DetSit.scss";

import Data from "../../presentacion/api/DetSitios.json";
import DetSitDetalle from "./DetSitDetalle";

const DetSit = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    leeNavBar(0);
  }, []);

  const leeNavBar = () => {
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

    let xx = Data.DetVinculos;
    setDb(xx);
  };

  //   const filtro = (value) => id_navbar === value;

  return (
    <div className="detsit">
      <section>
        {db &&
          db.map((item) => {
<<<<<<< HEAD
            return (
              <article key={item.id}>
                <p>hola</p>
                <DetSitDetalle item={item} />
              </article>
            );
=======
            // return (
            //   // <article key={item.id}>
            //   //   <p>hola</p>
            //   //   <DetSitDetalle item={item} />
            //   // </article>
            // )
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
          })}
      </section>
    </div>
  );
};

export default DetSit;
