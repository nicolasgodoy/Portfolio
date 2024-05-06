import React from 'react'
import PokeImg from '../Imagenes/videoPokemon.mp4';
import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoJs from '../Componente-2/iconjavascript.png';
import IconoCss3 from '../Componente-2/iconcss3.png';

const Contenido_Proyecto_11 = () => {
  return (
    <div className="Fondo_Proyecto_1 container-fluid animate__animated animate__zoomIn">


      <div className="row">

        <div className="col-md-6 Columna-PrimerContenido">
          <div className="Descripcion_Proyectos col-md-12"><h4 ><b> SpotiApp </b></h4></div>
          <p className="Descripcion_Proyectos col-md-12">
            Consumir Api de Spotify y poner un poco en practica Angular

            <hr className="bg-white"></hr>

          </p>

          <div className="Descripcion_Proyectos col-md-12">
            <p> <b>Lenguajes Utilizados</b></p>
            <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
            <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
            <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
            <img className="m-1 Icono-Js-Proyectos" src={Iconoboostrap} />
            <img className="m-1 Icono-Js-Proyectos" src={IconoAngular} />
          </div>

        </div>
        <div className="col-md-6 animate__animated animate__fadeIn">
        <a className="EnlaceProyectos" href="https://spoti-app-two.vercel.app/#/home" target="_blank">  <img className="ImagenSpoti" src={spotiApp} /></a>

          <div className="col-md-12">
            <a href="https://spoti-app-two.vercel.app/#/home" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contenido_Proyecto_11