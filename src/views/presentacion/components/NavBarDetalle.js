import { Link, useNavigate, useLocation } from "react-router-dom";

import BotonGenerico3 from "../../../components/html/button/BotonGenerico3";
import BotonRRSS from "../../../components/html/button/BottonRRSS";

function NavBarDetalle({ item }) {
  const location = useLocation();
  let navigate = useNavigate();

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
        {item.id}-{item.textos_texto}
      </p>
      {item.vinculos_02_tipo && (
        <section className="rrss">
          {item.vinculos_01_tipo == "02" && (
            <span>
              <BotonGenerico3
                text="hola"
                onClickHandler={handlerBotonGenerico}
              />
            </span>
          )}
          {item.vinculos_02_tipo && (
            <span>
              <BotonRRSS text="hola" onClickHandler={handlerBotonGenerico} />
            </span>
          )}{" "}
          {item.vinculos_02_tipo && (
            <span>
              <BotonRRSS text="hola" onClickHandler={handlerBotonGenerico} />
            </span>
          )}{" "}
          {item.vinculos_02_tipo && (
            <span>
              <BotonRRSS text="hola" onClickHandler={handlerBotonGenerico} />
            </span>
          )}
        </section>
      )}
    </div>
  );
}

export default NavBarDetalle;
