const DetSitDetalle = ({ item }) => {
  return (
    <div className="recuadro">
      <ul>
        {item.opciones.map((item2) => {
<<<<<<< HEAD
          return (
            <li key={item2.codigo}>
              <p>{item2.descripcion}</p>
            </li>
          );
=======
          // return (
          //   <li key={item2.codigo}>
          //     <p>{item2.descripcion}</p>
          //   </li>
          // );
>>>>>>> 251ff4831045c956de9aee7ab2079ffd8477a4a6
        })}
      </ul>
    </div>
  );
};

export default DetSitDetalle;
