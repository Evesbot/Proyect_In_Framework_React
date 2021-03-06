import React, { Component } from 'react';
import uuid from 'uuid';

const stateInit = { 
    appoimment:{
        nombre:'',
        dni:'',
        fecha:'',
        hora:'',
        observaciones:''
    },
    error:false
};
class NewAppoinment extends Component {
    constructor(props) {
        super(props);
        this.state = {...stateInit};
    }

    handleChange=(e)=>{
        this.setState({
            appoimment:{
                ...this.state.appoimment,
                [e.target.name]:e.target.value
            }
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {nombre,dni,fecha,hora,observaciones}=this.state.appoimment;
        let err=false;
        if(nombre===''||dni===''||fecha===''||hora===''||observaciones===''){err =true};
            
            
        this.setState({
            error:err
        },()=>{
            if(!this.state.error){
                const obj={...this.state.appoimment};
                obj.id=uuid();
                this.setState({...stateInit})
                this.props.createAppoitment(obj);    
            }        
        });   
    }
    render() {
        const {error}=this.state;
        return (
            <div className="card mt-5 py-5 bg-dark text-white">
                <div className="card-body">
                    <h2 className=" card-title tex-center mb-5 ">
                        Complete el formulario para establecer una nueva cita
                    </h2>
                    {error ? 
                        <div className="alert alert-danger mt-2 mb-5 text-center">
                                *Todos los campos son obligatorios
                        </div>
                    :null}
                    <form onSubmit={this.handleSubmit}>
                        {/*Comienzo linea de  Formulario*/}
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm4 col-lg-2 col-form-label">
                                Nombre del paciente:
                            </label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del paciente"
                                    name="nombre"
                                    onChange={this.handleChange}
                                    value={this.state.appoimment.nombre}
                                />
                            </div>
                        </div>
                        {/*Fin l??nea de  Formulario*/}

                        {/*Comienzo l??nea de  Formulario*/}
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm4 col-lg-2 col-form-label">
                                Identificaci??n del paciente:
                            </label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Registre su n??mero de identificaci??n"
                                    name="dni"
                                    onChange={this.handleChange}
                                    value={this.state.appoimment.dni}
                                />
                            </div>
                        </div>
                        {/*Fin l??nea de  Formulario*/}

                        {/*Comienzo l??nea de  Formulario*/}
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm4 col-lg-2 col-form-label">
                                Fecha de la cita:
                            </label>

                            <div className="col-sm-8 col-lg-5">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Registre la fecha"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.appoimment.fecha}
                                />
                            </div>


                            <label htmlFor="" className="col-sm4 col-lg-2 col-form-label">
                                Hora de la cita:
                            </label>

                            <div className="col-sm-8 col-lg-2">
                                <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Introduce la hora"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.appoimment.hora}
                                />
                            </div>
                        </div>
                        {/*Fin l??nea de  Formulario*/}

                        {/*Comienzo l??nea de  Formulario*/}
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm4 col-lg-2 col-form-label">
                                Observaciones del paciente:
                            </label>

                            <div className="col-sm-4 col-lg-10">
                                <textarea
                                    className="form-control"
                                    placeholder="Introduce un resumen de la cita"
                                    name="observaciones"
                                    onChange={this.handleChange}
                                    value={this.state.appoimment.observaciones}
                                >
                                </textarea>
                                
                            </div>
                        </div>
                        {/*Fin l??nea de  Formulario*/}

                        <input
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Agregar nueva cita"
                        />
                    </form>
                </div>
            </div>
            
        );
    }
}

export default NewAppoinment;