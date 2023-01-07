import React from 'react'
import ImagenHeroes from '../Imagenes/videoControlTiempo.gif';
import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoCss3 from '../Componente-2/iconcss3.png';
import IconoJs from '../Componente-2/iconjavascript.png';

const Contenido_Proyecto_2 = () => {
  return (
    <div className="Fondo_Proyecto_1 container-fluid animate__animated animate__zoomIn">


      <div className="row">

        <div className="col-md-6 Columna-PrimerContenido">
          <div className="col-md-12 Descripcion_Proyectos"><h4 ><b> Control de Actividades </b></h4></div>
          <hr className="bg-white"></hr>
          <p className="Descripcion_Proyectos"> 
            Un reto sacado de Frontendmentor.io que consiste en maquetar lo mas parecido posible la siguiente pagina,
            hacerlo funcionar mediante javascript y que sea responsive.Los datos son sacados de un archivo json..
            Tarjetas generadas Dinamicamente..
          </p>
          <div className="Descripcion_Proyectos col-md-12">
            <p><b>Lenguajes Utilizados</b></p>
            <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
            <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
            <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
          </div>

        </div>
        <div className="col-md-6 animate__animated animate__fadeIn">
        <a className="EnlaceProyectos" href="https://app-control-tiempo.vercel.app/" target="_blank" > <img className="ImagenControlAct"  src={ImagenHeroes} /> </a>

          <div className="col-md-12">
            <a href="https://app-control-tiempo.vercel.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
          </div>
        </div>



      </div>



    </div>
  )
}

export default Contenido_Proyecto_2