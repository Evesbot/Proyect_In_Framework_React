import React from "react";

export default function ListaProducto(props) {
  const cargarTabla = () => {
    return props.listaProductos.map((p) => (
      <tr>
        <td>{p.id}</td>
        <td>{p.descripcion}</td>
        <td>{p.cantidad}</td>
        <td>{p.precio}</td>
        <td>{p.cantidad * p.precio}</td>        
        <td>          
          <button className="btn btn-secondary" onClick={()=>props.eliminarProducto(p)}>Eliminar</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="Elcuerpo">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Precio Total</th> 
            <th>Acciones</th> 
          </tr>
        </thead>
        <tbody>
          {props.listaProductos.length === 0 ? (
            <tr>
              <td colSpan={1000}>Cargando....</td>
            </tr>
          ) : (
            cargarTabla()
          )}
        </tbody>
      </table>
    </div>
  );
}
