import React from 'react'
import Endodoncia from '../routes/Img/Endodoncia.png';
import Ortodoncia from '../routes/Img/Ortodoncia.png';
import Protesis from '../routes/Img/Protesis.png';
import Implantes from '../routes/Img/Implantes.png';
import Footer from '../pages/Footer';

export default function Prueba() {
    return (
    <div class="esteEsElFondo">
  <div class="container">
          <div class="col-sm-12 col-lg-4"/>
              <fieldset/>
                  <h1 className='mt-5 display-4'><b>Registrarse</b></h1>
                  <h4 class="parrafo">Ingrese sus datos para que proceda a registarse.<noscript></noscript></h4>
                  <div action="" class="form"/>
                      <input class="input-suscribirse" type="text" id="Nombre" placeholder="Nombre"/>
                      <input class="input-suscribirse" type="text" id="Email" placeholder="Email"/>
                  <div/>
                  <button type="button" class="btn btn-danger"><a href=".">Registrarse</a></button>
              <fieldset/>
              <br/>
          <div/>
          <hr/>
          <br/>
          <h1 >Alternativas de servicios ofrecidos</h1>
          <br/><br/>
          <h2 class="parrafo2 ">
              Tenemos a su disposición los siguientes servicios:
          </h2>
          <br></br>
          <div class="container">
              <div class="row">
                  <a class="col-12 col-md-4" href="."><img class="imgcat" src={Endodoncia} alt="Endodoncia"
                          title="Endodoncia"/></a>
                  <a class="col-12 col-md-4" href="."><img class="imgcat" src={Ortodoncia} alt="Ortodoncia"
                          title="Ortodoncia"/></a>
              </div>
              <div class="row">
                  <a href="." class="col-sm-2 boton btn btn-primary">Endodoncia</a>
                  <a href="." class="col-sm-2 boton btn btn-primary">Ortodoncia</a>
              </div>
          </div>
          <div class="contenedorimg"/>
              <div class="row">
                  <a class="col-12 col-md-4" href="."><img class="imgcat" src={Protesis} alt="Protesis"
                          title="Protesis"/></a>
                  <a class="col-12 col-md-4" href="."><img class="imgcat" src={Implantes}
                          alt="Implantes" title="Implantes"/></a>
              </div>
              <div class="row">
                  <a href="." class="col-sm-2 boton btn btn-primary">Protesis</a>
                  <a href="." class="col-sm-2 boton btn btn-primary ">Implantes</a>
              </div>
          
<div className="elFooter">
  <Footer />
</div>
  </div>
  </div>
  
    );
  }
  
  