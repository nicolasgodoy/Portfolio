
import './App.css';

import ImagenInicio from '../src/Components/Componente_Presentacion/Imagenes/IconoInicio.png';
import ImagenSobreMi from '../src/Components/Componente_Presentacion/Imagenes/IconSobreMii.png';
import ImagenSkills from '../src/Components/Componente_Presentacion/Imagenes/IconoHabilidades.png';
import ImagenProyectos from '../src/Components/Componente_Presentacion/Imagenes/IconoProyectos.png';
import ImagenContacto from '../src/Components/Componente_Presentacion/Imagenes/IconooContacto.png';
import Rutas from './Components/Rutas';
import { Link } from "react-router-dom";

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
              <li><Link to="/"><button><img className="ImagenInicio" src={ImagenInicio} />Inicio</button></Link></li>
              <li><Link to="/about"><button><img className="ImagenInicio" src={ImagenSobreMi} />Sobre Mi</button></Link></li>
              <li><Link to="/Skills"><button><img className="ImagenInicio" src={ImagenSkills} />Habilidades</button></Link> </li>
              <li><Link to="/Proyectos"><button><img className="ImagenInicio" src={ImagenProyectos} />Proyectos</button></Link> </li>
            </ul>
          </div>
        </nav>
      </header>
      
      <Rutas></Rutas>

    </div>
  );
}

export default App;
