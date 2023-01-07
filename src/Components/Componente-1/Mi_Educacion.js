import React from 'react';
import { Link } from "react-router-dom";
import imagen from '../Componente-1/CodigoQr.png';




const Mi_Educacion = () => {



  return (<div className="Contenedor_Estudios">



    <div className="animate__animated animate__fadeInLeft text-center" id="Estudios">

      <h3 className="col-md-12 Titulo_Educacion">Arbol Academico</h3>

      <div className="col-md-12">
        <div className="Contenedor_Fechas ">
          <div className="col-md-2">
            <p className="Fecha-Autodidacta "> <b> 2019 - 2022 </b> </p>
          </div>

          <div className="col-md-2">
            <Link to='/Certificado'><p className="enlace_Certificado "> <b> Certificado Responsive HTML5 y CSS3 </b> </p></Link>
          </div>

          <div className="col-md-2">
            <p> <b> 22/06/2021 - 23/08/2021  </b> </p>
          </div>

          <div className="col-md-2">
            <p> <b> Facultad - A.Sistemas -  A Finalizar </b> </p>
          </div>

          <div className="col-md-2">
            <Link to='/Certificado_NET'><p className="enlace_Certificado"> <b> Certificado Programacion.NET </b> </p></Link>
          </div>
        </div>


        <div className="Enunciado_Fecha  ">
          <div className="col-md-2">
            <p> <b> Formacion Autodidacta </b> </p>
          </div>

          <div className="col-md-2">
            <p> <b> 22/03/2021 - 22/5/2021 </b> </p>
          </div>


          <div className="col-md-2">
            <Link to='/Certificado_Js'> <p className="enlace_Certificado_Js "> <b> Certificado Programacion Web Con Javascript </b> </p></Link>
          </div>

          <div className="col-md-2">
            <p> <b> 2020 - 2022  </b> </p>
          </div>

         

          

          <div className="col-md-2">
            <p> <b> 02/09/2021 - 02/11/2022  </b> </p>
          </div>
        </div>



        <div className="Contenido_Elegirme col-md-12">

          <div className="row Elegirme_centrar">

            <div className="Texto_Elegirme col-md-6">
              <h4 className="tituloObjetivo">OBJETIVOS: </h4>
              <p className="textoObjetivo">
               Mi objetivo es seguir formandome tanto universitariamente, y de manera autodidacta como vengo haciendo hace casi 2 años ya,
               para en algun momento poder ponerme en busqueda de mi primera oportunidad laboral
              </p>


            </div>

            <div className="Codigo_QR col-md-2 m-4 p-1">
              <img className="imagenCodigoQR" src={imagen} />

            </div>

          </div>


        </div>


      </div>



      <div className="col-md-12">
        <Link to="/about"><button type="button" className=" m-1 border-0 btn Boton_Educacion_2 rounded p-2 "> Volver SobreMi </button></Link>
      </div>
    </div>

  </div>);
};

export default Mi_Educacion;
