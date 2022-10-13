import NavBarAcciones from "./NavBarAcciones";
import NavBarVinculos from "./NavBarVinculos";

function NavBarDetalle({ item }) {
  return (
    <>
      <div className="navbardetalle">
        <p
          className={item.textos_classname}
          style={{
            paddingTop: `${item.textos_presalto}`,
            paddingBottom: `${item.textos_postsalto}`,
            paddingLeft: `${item.textos_offset}`,
          }}
        >
          {item.id_opcion}-{item.textos_texto}
        </p>
        {item.textos_acciones && <NavBarAcciones item={item} />}
        {item.textos_vinculos && <NavBarVinculos item={item} />}
      </div>
    </>
  );
}

export default NavBarDetalle;
