import React from 'react';
import ImagenFacebook from '../Componente_Presentacion/Imagenes/iconFacebook.png';
import ImagenLinkedin from '../Componente_Presentacion/Imagenes/iconLinkedin.png';
import imagenLogoNico from '../Componente_Presentacion/Imagenes/logong_png.png';
import { Link } from "react-router-dom";

const Componente_Presentacion = () => {
  return (

    <div className="Componente_Presentacion animate__animated animate__fadeIn">

      <section>
        <div className="Contenedor_1">
          <div class="Titulos">
              <h2>
                <span className="Titulo_Bienvenida animate__animated animate__fadeInUp animate__delay-1s">Hola, soy..</span>
                
              </h2>
              <h2>
                <span className="Titulo_Bienvenida_2 animate__animated animate__fadeInUp animate__delay-1s ">Emiliano Nicolas</span>
              </h2>
              <h2>
                <span className="Titulo_Bienvenida_3 animate__animated animate__fadeInUp animate__delay-1s "><span className="Titulo_Bienvenida_4">Godoy</span></span>
              </h2>
          </div>

        <ul className="Iconos animate__animated animate__fadeInUp animate__delay-1s">
          <div className="col-md-12 Lista-Iconos">
            <li><a href="https://www.facebook.com/nicoo.godoy.37" target="_blank"><span><img className="ImagenesPresentacion" src={ImagenFacebook} /></span> </a> </li>
            <li><a href="https://www.linkedin.com/in/nicolas-godoy-96914a189/" target="_blank"><span><img className="ImagenesPresentacion" src={ImagenLinkedin} /></span> </a></li>
          </div> 
        </ul>  

            <div className="Contenedor-Logo  animate__animated animate__fadeIn animate__delay-1s">
              <Link to="/"><img className="Logo" src={imagenLogoNico}></img></Link>
            </div>
        </div>
        <div className="Contenedor_Foto animate__animated animate__zoomIn animate__delay-1s">
            
        </div>  
      </section>

    </div>

  )
}

export default Componente_Presentacion;
