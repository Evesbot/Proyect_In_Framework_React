import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Menu from '../pages/Menu'
import Prueba from "../pages/Prueba";
import Precio from '../pages/Precio';
import AgendarCita from '../pages/AgendarCita'

import MenuPrincipal from "./MenuPrincipal";



function Root() {
  return (
    <div>
      
      <BrowserRouter>  
      <MenuPrincipal/>
    <Switch>        
      <Route exact  path="/" component= {Login} />    
      <Route exact  path="/menu" component= {Menu} />    
      <Route exact  path="/prueba" component= {Prueba} />   
      <Route exact  path="/Precio" component= {Precio} />
      <Route exact  path="/AgendarCita" component= {AgendarCita} />        
    </Switch>
    
    </BrowserRouter>
    </div>
    
  );
}

export default Root;
