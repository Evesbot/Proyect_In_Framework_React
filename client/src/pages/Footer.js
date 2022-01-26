import React from "react";


export default function Footer() {
  return (    
    <footer class=" bg-dark">
    <div class="container p-4 mt-3">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 text-white">
          <h5 class="mb-3">Clínica Odontológica Stema</h5>
          <p>
          En pro de una adecuada salud dental, STEMA le brinda los servicios de la 
          clínica odontológica, la mejor del pais, misma que es atendida por el los mejores profecionales.
          Ofrecemos un servicio integral al asociado y a sus familiares.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 text-white">
          <h5 class="mb-3">Links</h5>
          <ul class="list-unstyled mb-0 text-white">
            <li class="mb-1 ">
              <a href="#!">Respuestas y preguntas</a>
            </li>
            <li class="mb-1">
              <a href="#!">Entrega</a>
            </li>
            <li class="mb-1">
              <a href="#!">Precios</a>
            </li>
            <li>
              <a href="#!">Donde estamos?</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 text-white">
          <h5 class="mb-1 ">Abierto</h5>
          <table class="table text-white">
            <tbody>
              <tr>
                <td>Lun - Vie:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Sab - Dom:</td>
                <td>8am - 1pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="text-center p-3 text-white">
      © 2021 Copyright: Stema
    </div>
   
  </footer>
  );
}