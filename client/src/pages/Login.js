import React, { useState,useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie/es6";
import Footer from '../pages/Footer';

export default function Login() {
  const cookies = new Cookies();
  const URL = "http://localhost:3001/usuarios";
  const initLogin = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initLogin);

  const contralarCambios = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  useEffect(()=>{
      if(cookies.get('nombre')){
          window.location.href='./menu'
      }
  },[])

  const iniciarSesion = async () => {
    await axios
      .get(URL, {
        params: { email: login.email, password: md5(login.password) },
      })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        if (res.length > 0) {
          var respuesta = res[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("nombre", respuesta.nombre, { path: "/" });
          cookies.set("apellido1", respuesta.apellido1, { path: "/" });
          cookies.set("apellido2", respuesta.apellido2, { path: "/" });
          cookies.set("email", respuesta.email, { path: "/" });
          alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido1}`);
          window.location.href='./menu'
        } else {
          alert("Usuario Invalido");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <><div className="container">
      <h1 class="display-2 mt-4">Bienvenido!</h1>
      <div className="col-6 mt-4 ">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h2>Logeo</h2>
          </div>
          <div className="card-body bg-secondary text-white">
            <div className="mb-3 row ">
              <label htmlFor="email" className="col-sm-2 col-form-label font-weight-bold">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={contralarCambios} />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="password" className="col-sm-2 col-form-label font-weight-bold">
                Contraseña
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={contralarCambios} />
              </div>
            </div>
          </div>
          <div className="card-footer bg-info text-white">
            <button className="btn btn-dark" onClick={iniciarSesion}>
              Aceptar
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div><div className="elFooter">
        <Footer />
      </div></>
    
  );
}
