
import Contenido_Proyecto_1 from '../Contenido_Componentes-3/Contenido_Proyecto_1';
import Contenido_Proyecto_2 from '../Contenido_Componentes-3/Contenido_Proyecto_2';
import Contenido_Proyecto_3 from '../Contenido_Componentes-3/Contenido_Proyecto_3';
import Contenido_Proyecto_4 from '../Contenido_Componentes-3/Contenido_Proyecto_4';
import Contenido_Proyecto_5 from '../Contenido_Componentes-3/Contenido_Proyecto_5';
import Contenido_Proyecto_6 from '../Contenido_Componentes-3/Contenido_Proyecto_6';
import Contenido_Proyecto_7 from '../Contenido_Componentes-3/Contenido_Proyecto_7';
import Contenido_Proyecto_8 from '../Contenido_Componentes-3/Contenido_Proyecto_8';
import Contenido_Proyecto_9 from '../Contenido_Componentes-3/Contenido_Proyecto_9';
import Contenido_Proyecto_10 from '../Contenido_Componentes-3/Contenido_Proyecto_10';






import { useState } from 'react';





const Componente_3 = () => {
  const [opcion, setOpcion] = useState(0)

  return (
    <div className="container-fluid Componente_3 animate__animated animate__fadeIn" id="Proyectos">

      <h2 className="col-md-12 Tit-Proyectos ">Proyectos</h2>

      <div className="row">

        <ul className=" Lista_Botones col-md-12" >
          <li><button onClick={() => setOpcion(1)} type="button" className="col-md-12 Botones_Estilos">Proyecto 1 <i className="Flechita fa fa-solid fa-angle-right"></i></button></li>
          <li><button onClick={() => setOpcion(2)} type="button" className="col-md-12 Botones_Estilos">Proyecto 2 <i className="Flechita fa fa-solid fa-angle-right"></i></button></li>
          <li><button onClick={() => setOpcion(3)} type="button" className="col-md-12 Botones_Estilos">Proyecto 3 <i className="Flechita fa fa-solid fa-angle-right"></i></button></li>
          <li><button onClick={() => setOpcion(4)} type="button" className="col-md-12 Botones_Estilos">Proyecto 4 <i className="Flechita fa fa-solid fa-angle-right"></i></button></li>
          <li><button onClick={() => setOpcion(5)} type="button" className="col-md-12 Botones_Estilos">Proyecto 5 <i className="Flechita fa fa-solid fa-angle-right"></i></button></li>
          <li><button onClick={() => setOpcion(6)} type="button" className="col-md-12 Botones_Estilos">Proyecto 6 <i className="Flechita fa fa-solid fa-angle-right"></i></button></li>
          <li><button onClick={() => setOpcion(7)} type="button" className="col-md-12 Botones_Estilos">Proyecto 7 <i className="Flechita fa fa-solid fa-angle-right"></i></button></li>
          <li><button onClick={() => setOpcion(8)} type="button" className="col-md-12 Botones_Estilos">Proyecto 8 <i className="Flechita fa fa-solid fa-angle-right"></i></button></li>
          <li><button onClick={() => setOpcion(9)} type="button" className="col-md-12 Botones_Estilos">Proyecto 9 <i className="Flechita fa fa-solid fa-angle-right"></i></button></li>
          <li><button onClick={() => setOpcion(10)} type="button" className="col-md-12 Botones_Estilos">Proyecto 10 <i className="Flechita fa fa-solid fa-angle-right"></i></button></li>
          
          
        </ul>




        <div className="Contenido_Proyectos container col-md-10">
          {opcion === 0 && <Contenido_Proyecto_1 ></Contenido_Proyecto_1>}
          {opcion === 1 && <Contenido_Proyecto_1 ></Contenido_Proyecto_1>}
          {opcion === 2 && <Contenido_Proyecto_2></Contenido_Proyecto_2>}
          {opcion === 3 && <Contenido_Proyecto_3></Contenido_Proyecto_3>}
          {opcion === 4 && <Contenido_Proyecto_4></Contenido_Proyecto_4>}
          {opcion === 5 && <Contenido_Proyecto_5></Contenido_Proyecto_5>}
          {opcion === 6 && <Contenido_Proyecto_6></Contenido_Proyecto_6>}
          {opcion === 7 && <Contenido_Proyecto_7></Contenido_Proyecto_7>}
          {opcion === 8 && <Contenido_Proyecto_8></Contenido_Proyecto_8>}
          {opcion === 9 && <Contenido_Proyecto_9></Contenido_Proyecto_9>}
          {opcion === 10 && <Contenido_Proyecto_10></Contenido_Proyecto_10>}
          
        </div>




      </div>
    </div>
  )
}

export default Componente_3