import React from 'react'
import ImagenApiTiempo from '../Imagenes/videoAppClima.gif';
import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoCss3 from '../Componente-2/iconcss3.png';
import IconoJs from '../Componente-2/iconjavascript.png';

const Contenido_Proyecto_2 = () => {
  return (
    <div className="Fondo_Proyecto_1 container-fluid animate__animated animate__zoomIn">

      <div className="row">

        <div className="col-md-6 Columna-PrimerContenido">
          <div className="col-md-12 Descripcion_Proyectos"><h4 ><b> Api Del Tiempo  </b></h4></div>

          <p className="col-md-12 Descripcion_Proyectos">
          Obtener Datos de la Api OpenWheaterMap y diseñarlo
          <hr className="bg-white"></hr>

          </p>
          
          <div className="Descripcion_Proyectos col-md-12">
            <p><b>Lenguajes Utilizados</b></p>
            <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
            <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
            <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
          </div>

        </div>
        <div className="col-md-6 animate__animated animate__fadeIn">
        <a className="EnlaceProyectos" href="https://proyecto-6-e5863.web.app/" target="_blank">  <img className="ImagenSpoti"  src={ImagenApiTiempo} /> </a>

          <div className="col-md-12">
            <a href="https://proyecto-6-e5863.web.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contenido_Proyecto_2

