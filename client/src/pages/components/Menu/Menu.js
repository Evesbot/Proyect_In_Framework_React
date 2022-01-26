import React from "react";
import Tarifas from '../Img/Tarifas.PNG';

export default function Menu() {
  return (
    <div>
      <br/>
      <div class="contenedor1">
           <div>
            <a class="col-12 col-md-4 " href=".">
              <img class="contenedorimg" src={Tarifas} alt="Tarifas" title="Tarifas" />
            </a>
          </div>
      </div>    
      <br/>
      <br/>
      <hr/>
      <h3 className="text-center">Calculadora automática para estimación de costos</h3>
      <hr/>
      <br/>
    </div>
  );
}
