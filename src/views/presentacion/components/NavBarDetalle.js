import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import BotonGenerico3 from "../../../components/html/button/BotonGenerico3";
import BotonRRSS from "../../../components/html/button/BottonRRSS";

// url
import { url_navbar_opciones_vinculos } from "../../../components/routes/Urls";

function NavBarDetalle({ item }) {
  const [db, setDb] = useState(null);
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    leeOpciones(item.id_opcion);
  }, []);

  const leeOpciones = (padre) => {
    async function fetchData(padre) {
      await fetch(url_navbar_opciones_vinculos + item.id_opcion, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          // alert(JSON.stringify(result));
          setDb(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData(padre);
    // let xx = Data.NavBarMain.filter((item) => item.padre === padre);
    // setDba(xx);
  };

  const navega = (item) => {
    // alert(JSON.stringify(item));
    // navigate(item.path);
    // .map((user) => (
    //   <li key={user.id}>
    //     <Link to={user.id.toString() + location.search}>
    //       {user.name}
    //     </Link>
    //   </li>
    // ))}
  };

  const handlerBotonGenerico = () => {
    alert("aca: " + item.path);
  };
  // alert(JSON.stringify(item));
  return (
    <div className="navbardetalle">
      <p
        className={item.textos_classname}
        style={{
          paddingTop: `${item.presalto}`,
          paddingBottom: `${item.postsalto}`,
          paddingLeft: `${item.offset}`,
        }}
      >
        {item.id_opcion}-{item.textos_texto}
      </p>
      <section className="rrss">
        {db &&
          db.map((item2) => {
            // if (item2.id_tipo_vinculos === "02") {
            return (
              <>
                <span className="detalle">cvbcvbcvb</span>
              </>
            );
            // }
          })}
      </section>
    </div>
  );
}

export default NavBarDetalle;
