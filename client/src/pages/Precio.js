import Productos from "./components/Producto/Productos";
import Menu from "./components/Menu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function Precio() {
  return (
    <div>
      <Menu/>
      <Productos />
    </div>
  );
}

export default Precio;
