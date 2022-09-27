// import "./NavBarDetalle.scss";

function NavBarDetalle({ item }) {
  return (
    <div className="navbardetalle">
      {item.titulo && !item.link && (
        <p
          className="titulo-sin-link"
          style={{
            paddingTop: `${item.presalto}`,
            paddingBottom: `${item.postsalto}`,
            paddingLeft: `${item.offset}`,
          }}
        >
          {item.descripcion}
        </p>
      )}
      {item.titulo && item.link && (
        <p
          className="titulo"
          style={{
            paddingTop: `${item.presalto}`,
            paddingBottom: `${item.postsalto}`,
            paddingLeft: `${item.offset}`,
          }}
        >
          {item.descripcion}
        </p>
      )}

      {!item.titulo && (
        <p
          className="link"
          style={{
            paddingTop: `${item.presalto}`,
            paddingBottom: `${item.postsalto}`,
            paddingLeft: `${item.offset}`,
          }}
        >
          {item.descripcion}
        </p>
      )}
      {(item.detalle1 || item.detalle2 || item.detalle3) && (
        <p
          className="detalle"
          style={{
            paddingTop: `${item.presalto}`,
            paddingBottom: `${item.postsalto}`,
            paddingLeft: `${item.offset}`,
          }}
        >
          {item.detalle1}
        </p>
      )}
    </div>
  );
}

export default NavBarDetalle;
