import React, { Component } from "react";
import imagen from '../Componente-1/undraw_terms_re_6ak4.svg';
import 'animate.css';
import { Link } from "react-router-dom";





class Componente_1 extends Component {
    
    render() {
        
       return <div className="Componente_1 container-fluid animate__animated animate__fadeIn" id="SobreMi">

            <div className="row container Contenido_Componente_1">
                <div className="col-md-3 Contenedor_Imagen_Nico animate__animated animate__fadeInLeft">
                    <img className=" Imagen_Nico" src={imagen} />
                </div>
                <div className="col-md-7">

                    <div className="text-center">
                        <h2 className="Tit_SobreMi animate__animated animate__fadeInDown"> Acerca de mi:</h2>
                        
                        <p className="card-text">
                            <ul className="Lista_Informacion animate__animated animate__fadeInUp">
                                <li>
                                    <p className="textoSobreMi">  
                                    ""¡Hola! Soy Nicolás, un desarrollador web con experiencia profesional. 
                                    Hace un año que comencé a trabajar en el campo de la programación, 
                                    y desde entonces he estado dedicado tanto a mis estudios universitarios como a mi formación autodidacta en desarrollo web. 
                                    Durante este tiempo, he tenido la oportunidad de trabajar en proyectos para Neoris, colaborando además con Control Union y Pampa Energía. 
                                    Estoy emocionado por seguir progresando y aprendiendo más en el campo del desarrollo web. 
                                    ¡Mi objetivo es mejorar continuamente y crear proyectos cada vez más interesantes y útiles!" 
                                    </p>
                                </li>
                               
                            </ul>
                        </p>
                    </div>

                    <div className="col-md-12">
                        <Link to="/Educacion"><button type="button" className="m-1 col-md-6 border-0 btn Boton_Educacion rounded p-2"> Mi Educacion </button></Link>
                    </div>

                    

                </div>

               
            </div>
        </div>;

    }


}

export default Componente_1;

