import React from 'react'
import ImgPortfolio from '../Imagenes/videoPortfolio.mp4';
import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoCss3 from '../Componente-2/iconcss3.png';
import IconoJs from '../Componente-2/iconjavascript.png';
import IconoBoostrap from '../Componente-2/iconboostrap.png';


const Contenido_Proyecto_8 = () => {
  return (
    <div className="Fondo_Proyecto_1 container-fluid animate__animated animate__zoomIn">


      <div className="row">

        <div className="col-md-6 Columna-PrimerContenido">
          <div className="Descripcion_Proyectos col-md-12"><h4 ><b> Mi Otro Portfolio </b></h4></div>
          <p className="Descripcion_Proyectos col-md-12">
            Html-5,Css3, Boostrap, Javascript y Logica de botones para realizar funcionalidades y animaciones etc..

            <hr className="bg-white"></hr>

          </p>

          <div className="Descripcion_Proyectoscol-md-12">
            <p> <b>Lenguajes Utilizados</b></p>
            <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
            <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
            <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
            <img className="m-1 Icono-Boostrap-Proyectos" src={IconoBoostrap} />

          </div>

        </div>
        <div className="col-md-6 animate__animated animate__fadeIn">
        <a className="EnlaceProyectos" href="https://portfolio-4d13a.web.app/" target="_blank"> <video autoPlay  loop className="ImagenSpoti" src={ImgPortfolio} /></a>

          <div className="col-md-12">
            <a href="https://portfolio-4d13a.web.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
          </div>
        </div>



      </div>



    </div>
  )
}

export default Contenido_Proyecto_8