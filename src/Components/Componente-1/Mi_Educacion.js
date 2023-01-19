import React from 'react';
import { Link } from "react-router-dom";
import imagen from '../Componente-1/CodigoQr.png';
import imgCsharp from '../Componente-1/c-sharp.png'
import imgNET from '../Componente-1/Microsoft_.NET_logo.png'




const Mi_Educacion = () => {



  return (<div className="Contenedor_Estudios">



    <div className="animate__animated animate__fadeInLeft text-center">

      

      <div className="container" id="Estudios">
      <h3 className="col-md-12 Titulo_Educacion">Arbol Academico</h3>
        

        <p>2020 - 2023 Formacion Autodidacta <i className="Icono-html fab fa-html5"></i> <i className=" Icono-Css3 fab fa-css3-alt"></i> <i className=" Icono-Js fab fa-js-square"></i> <i className=" Icono-Code fas fa-code"></i> <i className=" Icono-git fas fa-code-branch"></i> </p>  
        <div className="contenido"></div>
      
        <div className="contenido1"></div>

        <div className="contenido2"></div>

        <p>22/03/2021 - 22/5/2021 - Certificado Responsive HTML5 y CSS3 <i className="Icono-html fab fa-html5"></i> <i className=" Icono-Css3 fab fa-css3-alt"></i>  </p> 

        <div className="contenido3"></div>

        <div className="contenido4"></div>

        <div className="contenido5"></div>
      
        <p> 22/06/2021 - 24/08/2021 - Certificado de Programacion web con Javascript <i className=" Icono-Js fab fa-js-square"></i> </p>  

        <div className="contenido6"></div>

        <div className="contenido7"></div>

        <div className="contenido8"></div>

        <p> 24/08/2022 - 04/10/2022 - Certificado de .NET <img className="Icono-Csharp" src={imgNET}></img> <img className="Icono-Csharp" src={imgCsharp}></img></p>  
     
        <div className="contenido6"></div>

        <div className="contenido7"></div>

        <div className="contenido8"></div>

        <p> 14/10/2022 - 14/12/2022 - Diplomatura de .NET <img className="Icono-Csharp" src={imgNET}></img> <img className="Icono-Csharp" src={imgCsharp}></img></p>    

        <div className="contenido6"></div>

        <div className="contenido7"></div>

        <div className="contenido8"></div>
        <p>2020 - 2023 Facultad - A.Sistemas -  A Finalizar <i className=" Icono-libro fas fa-book"></i> <i className=" Icono-taza fas fa-coffee"></i> </p>
        
    </div>



      <div className="col-md-12">
        <Link to="/about"><button type="button" className=" m-1 border-0 btn Boton_Educacion_2 rounded p-2 "> Volver SobreMi </button></Link>
      </div>
    </div>

  </div>);
};

export default Mi_Educacion;
