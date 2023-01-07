
import './App.css';

import ImagenInicio from '../src/Components/Componente_Presentacion/Imagenes/iconinicio.png';
import ImagenSobreMi from '../src/Components/Componente_Presentacion/Imagenes/iconsobremi.png';
import ImagenSkills from '../src/Components/Componente_Presentacion/Imagenes/iconhabilidades.png';
import ImagenProyectos from '../src/Components/Componente_Presentacion/Imagenes/iconopryectos.png';
import ImagenContacto from '../src/Components/Componente_Presentacion/Imagenes/iconocontacto.png';
import Rutas from './Components/Rutas';
import { Link } from "react-router-dom";



const CambiarColorNav = () => {
  const nav = document.querySelector('nav');
    nav.classList.remove('dark');
    nav.classList.add('light');
      
      
};
    

const CambiarColorNav_2 = () => {
  const nav = document.querySelector('nav');
    nav.classList.remove('light');
    nav.classList.add('dark');
}



function App() {
  
  
  return (
    <div className="App">
      <header>

        <nav className="navbar navbar-expand-lg">
         

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "><i class="fa fa-bars"></i></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="nav-menu">
              
              <li><Link to="/"><button onClick={ CambiarColorNav_2 }><img className="ImagenInicio" src={ImagenInicio} />Inicio</button></Link></li>
              <li><Link to="/about"><button onClick={ CambiarColorNav}><img className="ImagenInicio" src={ImagenSobreMi} />Sobre Mi</button></Link></li>
              <li><Link to="/Skills"><button onClick={ CambiarColorNav }><img className="ImagenInicio" src={ImagenSkills} />Habilidades</button></Link> </li>
              <li><Link to="/Proyectos"><button onClick={ CambiarColorNav }><img className="ImagenInicio" src={ImagenProyectos} />Proyectos</button></Link> </li>
              <li><Link to="/AnimacionContacto"><button onClick={ CambiarColorNav }><img className="ImagenInicio" src={ImagenContacto} />Contacto</button></Link> </li>


            </ul>
          </div>
        </nav>

      </header>




      <Rutas></Rutas>

    </div>
  );
}

export default App;
