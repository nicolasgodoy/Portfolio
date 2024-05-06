import React from 'react'
import PaginaSeguridad from '../Imagenes/VideoSeguridad.mp4';
import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoCss3 from '../Componente-2/iconcss3.png';
import IconoJs from '../Componente-2/iconjavascript.png';

const Contenido_Proyecto_4 = () => {
  return (
    <div className="Fondo_Proyecto_1 container-fluid animate__animated animate__zoomIn">


      <div className="row">

        <div className="col-md-6 Columna-PrimerContenido">
          <div className="Descripcion_Proyectos col-md-12"><h4 ><b>Pagina De Seguridad</b></h4></div>
          <p className="Descripcion_Proyectos col-md-12">
            Proyecto Final de Curso de HTML-5 y CSS3 de Elearning Mis primeros pasos con Css3 y lo que valoro de este Proyecto
            es que no utilize ni Flex ni Grid ni ningun Framework ya que no los conocia aun
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
          <a className="EnlaceProyectos" href="https://pagina-seguridad.vercel.app/" target="_blank"> <img className="ImagenSpoti"/> <source src={PaginaSeguridad} ></source></a>

          <div className="col-md-12">
            <a href="https://pagina-seguridad.vercel.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Contenido_Proyecto_4