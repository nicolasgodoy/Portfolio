import React from 'react'
import Lottie from 'react-lottie';
import Animacion_Presentacion from '../../Animacion/56922-code-typing-concept.json';
import Animacion_Flecha from '../../Animacion/lf20_chfwdqs9.json';



const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSetting: {
    preserveAspectRatio: 'xMidYMid slice'
  }


};


const Contenido_Proyecto_Presentacion = () => {
  return (
    <div className="container-fluid">

      <div className="Fondo_Proyecto_Presentacion">
        <div id="AnimacionFlecha">
          <Lottie options={{ animationData: Animacion_Flecha, defaultOptions }} />

        </div>

        <Lottie options={{ animationData: Animacion_Presentacion, defaultOptions }} />


      </div>


    </div>
  )
}

export default Contenido_Proyecto_Presentacion