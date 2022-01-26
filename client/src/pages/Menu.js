import React,{useEffect} from 'react'
import Cookies from "universal-cookie/es6";
import Footer from '../pages/Footer';

export default function Menu() {
    const cookies = new Cookies();
    const cerrarSesion=()=>{
        cookies.remove('id',{path:'/'});
        cookies.remove('nombre',{path:'/'});
        cookies.remove('apellido1',{path:'/'});
        cookies.remove('apellido2',{path:'/'});
        cookies.remove('email',{path:'/'});
        window.location.href='./';
    }

    const mostrarCredenciales=()=>{
        console.log('id',cookies.get('id'));
        console.log('nombre',cookies.get('nombre'));
        console.log('apellido1',cookies.get('apellido1'));
        console.log('apellido2',cookies.get('apellido2'));
        console.log('email',cookies.get('email'));


    }


    useEffect(()=>{
        mostrarCredenciales();
        if(!cookies.get('nombre')){
            window.location.href='./'
        }
    },[])


    return (
        <><div className='container mt-5 '>
            <h1 class="display-2">Muy Bien!</h1>
            <br />
            <h1 class="display-4">Si desea cerrar sesión presione el botón rojo</h1>
            <br />

            <button className="btn btn-danger ml-3 btn-lg" onClick={cerrarSesion}>Cerrar</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div><div className="elFooter mt-5">
                <Footer />
            </div></>

    )
}
<div className="elFooter">
<Footer />
</div>