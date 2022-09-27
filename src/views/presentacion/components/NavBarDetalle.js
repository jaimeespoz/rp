// import "./NavBarDetalle.scss";

function NavBarDetalle({ item }) {
  return (
    <div className="navbardetalle">
      {item.titulo == "1" && !item.link && (
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
      {item.titulo == "1" && item.link && (
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

      {item.titulo == "2" && !item.link && (
        <p
          className="subtitulo-sin-link"
          style={{
            paddingTop: `${item.presalto}`,
            paddingBottom: `${item.postsalto}`,
            paddingLeft: `${item.offset}`,
          }}
        >
          {item.descripcion}
        </p>
      )}
      {item.titulo == "2" && item.link && (
        <p
          className="subtitulo"
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
