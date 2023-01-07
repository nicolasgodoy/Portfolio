import React, { Component } from "react";
import imagen from '../Componente-1/fotonico_2.jpeg';
import 'animate.css';
import { Link } from "react-router-dom";





class Componente_1 extends Component {
    
    render() {
        
       return <div className="Componente_1 container-fluid animate__animated animate__fadeIn" id="SobreMi">

            <div className="row container Contenido_Componente_1">
                <div className="col-md-6 Contenedor_Imagen_Nico">
                    <img className=" Imagen_Nico animate__animated animate__fadeInLeft" src={imagen} />
                </div>
                <div className="col-md-6">

                    <div className="text-center">
                        <h2 className="Tit_SobreMi text-left   animate__animated animate__fadeInDown"> Acerca de mi </h2>
                        <div className="Contenedor_Subrayado ">
                            <span className="Subrayado_TituloBienvenida animate__animated animate__fadeInDown"></span>
                        </div>
                        <p className="card-text">
                            <ul className="Lista_Informacion text-left p-2   animate__animated animate__fadeInUp">
                                <li><b>Nombre: Emiliano Nicolass</b></li>
                                <li><b>Apellido: Godoy</b></li>
                                <li><b>Nacimiento: 18/09/1995</b></li>
                                <li><b>Ciudad: Parana</b></li>
                                <li><b>Provincia: Entre Rios</b></li>
                                <li><b>Pais: Argentina</b></li>
                            </ul>
                        </p>
                    </div>

                    <div className="col-md-12">
                        <Link to="/Educacion"><button type="button" className="m-1 col-md-6 border-0 btn Boton_Educacion rounded p-2"> Mi Formacion </button></Link>
                    </div>

                    

                </div>

               
            </div>
        </div>;

    }


}

export default Componente_1;

