function NavBarDetalleC({ item }) {
  return (
    <span>
      {item.titulo && !item.link && (
        <span className="navbar-titulo-sin-link">{item.descripcion}</span>
      )}
      {item.titulo && item.link && (
        <span className="navbar-titulo">{item.descripcion}</span>
      )}
      {item.salto && <span className="navbar-salto">&nbsp</span>}
      {!item.titulo && !item.link && (
        <span
          className="navbar-link-sin-link"
          style={{ paddingLeft: `${item.offset}` }}
        >
          {item.descripcion}
        </span>
      )}
      {!item.titulo && item.link && (
        <span className="navbar-link" style={{ paddingLeft: `${item.offset}` }}>
          {item.descripcion}
        </span>
      )}
      {item.detalle1 && <p className="navbar-detalle">{item.detalle1}</p>}
      {item.detalle2 && <p className="navbar-detalle">{item.detalle2}</p>}
      {item.detalle3 && <p className="navbar-detalle">{item.detalle3}</p>}
    </span>
  );
}

export default NavBarDetalleC;
