import React from 'react'
import imagen from '../Certificados/certificado_Diseño.png';
import { Link } from "react-router-dom";

const Certificado = () => {
  return (
    <div className="container">


      <h1 className="text-dark">Certificado</h1>
      <div className="Contenedor_imagenCertificado m-auto">
        <img className="imagen_Certificado" src={imagen}></img>
      </div>

      <div className="col-md-12">
        <Link to="/Educacion"><button type="button" className=" m-1 border-0 btn Boton_Educacion_2 rounded p-2 "> Volver a mi formacion </button></Link>
      </div>

    </div>
  )
}

export default Certificado;