import React from 'react'
import PokeImg from '../Imagenes/Pokemon.jpg';
import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoJs from '../Componente-2/iconjavascript.png';
import IconoCss3 from '../Componente-2/iconcss3.png';

const Contenido_Proyecto_1 = () => {
  return (
    <div className="Fondo_Proyecto_1 container-fluid animate__animated animate__zoomIn">
      
      <div className="row">

        <div className="col-md-6 Columna-PrimerContenido">
          <div className="Descripcion_Proyectos col-md-12"><h4 ><b> Juego Pokemon </b></h4></div>
          <p className="Descripcion_Proyectos col-md-12">
            Juego de Batallas Pokemon - Objetivo repasar manipulacion del dom y eventos de botones

            <hr className="bg-white"></hr>

          </p>

          <div className="text-white col-md-12">
            <p> <b>Lenguajes Utilizados</b></p>
            <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
            <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
            <img className="m-1 Icono-Js-Proyectos" src={IconoCss3} />
           
            
          </div>

        </div>
        <div className="col-md-6 animate__animated animate__fadeIn">
        <a className="EnlaceProyectos" href="https://proyecto-10-e9305.web.app/" target="_blank"> <img className="ImagenSpoti" src={PokeImg}/></a>

          <div className="col-md-12">
            <a href="https://proyecto-10-e9305.web.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contenido_Proyecto_1;