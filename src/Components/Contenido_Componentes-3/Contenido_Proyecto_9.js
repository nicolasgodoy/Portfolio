import React from 'react'
import CrudImg from '../Imagenes/CrudImg.png';
import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoCss3 from '../Componente-2/iconcss3.png';
import IconoJs from '../Componente-2/iconjavascript.png';
import Iconoboostrap from '../Componente-2/iconboostrap.png';

const Contenido_Proyecto_9 = () => {
  return (
    <div className="Fondo_Proyecto_1 container-fluid animate__animated animate__zoomIn">

      <div className="row">

        <div className="col-md-6 Columna-PrimerContenido">
          <div className="Descripcion_Proyectos col-md-12"><h4 ><b> Crud NodeJsMySQL </b></h4></div>
          <p className="Descripcion_Proyectos col-md-12">
            Crud Para poner en practica conocimientos de Nodejs y de MySQL
            Y Tambien subir una base de datos a la nube

            <hr className="bg-white"></hr>

          </p>

          <div className="Descripcion_Proyectos col-md-12">
            <p> <b>Lenguajes Utilizados</b></p>
            <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
            <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
            <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
            <img className="m-1 Icono-Js-Proyectos" src={Iconoboostrap} />
          </div>

        </div>
        <div className="col-md-6 animate__animated animate__fadeIn">
        <a className="EnlaceProyectos" href="https://crudnodejsmysql-production.up.railway.app/" target="_blank">  <img className="ImagenSpoti" src={CrudImg} /></a>

          <div className="col-md-12">
            <a href="https://crudnodejsmysql-production.up.railway.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contenido_Proyecto_9