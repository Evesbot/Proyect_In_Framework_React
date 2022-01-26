import React from "react";

export default function Producto(props) {
  return (
    <div className="card, contenedor2">
      <div className="card-header">
        <h2>Datos</h2>
      </div>
      <div className="card-body">
        <div className="mt-2">
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Descripción"
            className="form-control"
            onChange={(e)=>props.cambiarValor(e)}
            value={ props.producto&& props.producto.descripcion }             
          />
        </div>
        <div className="mt-2">
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            placeholder="Cantidad"
            className="form-control"
            onChange={(e)=>props.cambiarValor(e)}
            value={props.producto && props.producto.cantidad}
          />
        </div>
        <div className="mt-2">
          <input
            type="number"
            id="precio"
            name="precio"
            placeholder="Precio"
            className="form-control"
            onChange={(e)=>props.cambiarValor(e)}
            value={props.producto && props.producto.precio}
          />
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-dark" onClick={props.agregarValor}>Aceptar</button>
        <button className="btn btn-danger"> Cancelar </button>
      </div>
    </div>
  );
}
