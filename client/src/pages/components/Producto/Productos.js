import React, { useEffect, useState } from "react";
import axios from "axios";
import ListaProducto from "./ListaProducto";
import Producto from "./Producto";

export default function Productos() {
  const URL = "http://localhost:3001/productos";
  const productoInitial={
      id:0,
      descripcion:'',
      cantidad:0,
      precio:0,
      completado:false
  }
  const [producto,setProducto]= useState(productoInitial)
  const [listaProductos, setListaProductos] = useState([]);
  const [total,setTotal]= useState(0.00);
  const traerProductos = async () => {
    const res = await axios.get(URL);
    let suma=0.00;
    res.data.forEach(p => {
        suma+= p.precio*p.cantidad;
    });
    setTotal(suma)
    setListaProductos(res.data);
    //console.log(res.data);
  };
  const cambiarValor=(e)=>{
      const{name,value}= e.target;
      setProducto({
          ...producto,
          [name]:value
      })
  }
  const agregarValor=async()=>{
      //console.log(producto)

      await axios.post(URL,producto).then(res =>{
          traerProductos();
      });
      
  }
  const eliminarProducto=async(objeto)=>{
    await axios.delete(URL+'/'+objeto.id).then(res =>{
        traerProductos();
    });
  }

  useEffect(() => {
    traerProductos();
  }, []);
  return (
    <div className="row mt-4 text-center">
     <p>El monto a cancelar por los procedimientos elegidos sería : {total}  colones</p>
      <div className="col-4">
          <Producto producto={producto} cambiarValor={cambiarValor} agregarValor={agregarValor}/>
      </div>
      <div className="col-8">
        <ListaProducto listaProductos={listaProductos} eliminarProducto={eliminarProducto}/>
      </div>
    </div>
  );
}
