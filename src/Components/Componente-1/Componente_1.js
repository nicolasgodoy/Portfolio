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
                                    <p className="textoSobreMi"> - Hola soy Nicolas y hace ya un tiempo 
                                     que vengo interesándome por el 
                                     ambiente de la programación por eso 
                                     opte por empezar los estudios tanto de 
                                     manera universitaria como autodidacta 
                                     en desarrollo web. </p>
                                </li>
                                <li>
                                      <p className="textoSobreMi">
                                        - Actualmente estoy en segundo año 
                                        en analista de sistemas.
                                      </p> 
                                </li>    

                                <li>
                                    <p className="textoSobreMi">
                                    - Con año y medio aprendiendo de 
                                      manera autodidacta y mediante cursos 
                                      elearning de UTN.
                                    </p>
                                </li>
                                
                                <li>
                                    <p className="textoSobreMi">
                                    - Con muchas ganas de seguir 
                                     progresando y aprendiendo 
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

