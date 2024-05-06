import React from 'react'
import ImgLogin from '../Imagenes/videoTemplete.mp4';
import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoCss3 from '../Componente-2/iconcss3.png';


const Contenido_Proyecto_6 = () => {
  return (
    <div className="Fondo_Proyecto_1 container-fluid animate__animated animate__zoomIn">


      <div className="row">

        <div className="col-md-6 Columna-PrimerContenido">
          <div className="Descripcion_Proyectos col-md-12"><h4 ><b> Templete Login </b></h4></div>
          <p className="Descripcion_Proyectos col-md-12">
            Realizado de manera autodidacta para practicar poner un video de fondo Responsive
            <hr className="bg-white"></hr>

          </p>

          <div className="Descripcion_Proyectos col-md-12">
            <p> <b>Lenguajes Utilizados</b></p>
            <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
            <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />

          </div>

        </div>
        <div className="col-md-6 animate__animated animate__fadeIn">
        <a className="EnlaceProyectos" href="https://proyecto-4-6cf1b.web.app/" target="_blank"> <img className="ImagenSpoti" href="https://proyecto-4-6cf1b.web.app/" src={ImgLogin} /> </a>

          <div className="col-md-12">
            <a href="https://proyecto-4-6cf1b.web.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
          </div>
        </div>



      </div>



    </div>
  )
}

export default Contenido_Proyecto_6