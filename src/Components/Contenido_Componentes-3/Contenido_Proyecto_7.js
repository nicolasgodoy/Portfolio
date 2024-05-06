import React from 'react'
import ImgTaTeTi from '../Imagenes/tateti.jpg';
import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoCss3 from '../Componente-2/iconcss3.png';
import IconoJs from '../Componente-2/iconjavascript.png';

const Contenido_Proyecto_7 = () => {
  return (
    <div className="Fondo_Proyecto_1 container-fluid animate__animated animate__zoomIn">

      <div className="row">

        <div className="col-md-6 Columna-PrimerContenido">
          <div className="Descripcion_Proyectos col-md-12"><h4 ><b> Juego TaTeTi </b></h4></div>
          <p className="Descripcion_Proyectos col-md-12">
            Realizado Como Proyecto Final Curso Elearning Programacion Web Con Javascript
            
            <hr className="bg-white"></hr>

          </p>

          <div className="Descripcion_Proyectos col-md-12">
            <p> <b>Lenguajes Utilizados</b></p>
            <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
            <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
            <img className="m-1 Icono-Angular-Proyectos" src={IconoJs} />

          </div>

        </div>
        <div className="col-md-6 animate__animated animate__fadeIn">
        <a className="EnlaceProyectos" href="https://proyecto-8-edb1b.web.app/index.html" target="_blank"> <img className="ImagenSpoti" href="https://proyecto-8-edb1b.web.app/index.html" src={ImgTaTeTi} /></a> 

          <div className="col-md-12">
            <a href="https://proyecto-8-edb1b.web.app/index.html" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contenido_Proyecto_7