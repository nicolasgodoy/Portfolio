import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import Componente_1 from '../../src/Components/Componente-1/Componente_1';
import Componente_2 from './Componente-2/Componente_2';

import Componente_Presentacion from './Componente_Presentacion/Componente_Presentacion';
import Mi_Educacion from './Componente-1/Mi_Educacion';
import Contacto from '../../src/Components/ContactoYFormulario.js/Contacto';
import Certificado from './Componente-1/Certificados/Certificado';
import Certificado_Js from './Componente-1/Certificados/Certificado_Js';
import Certificado_NET from './Componente-1/Certificados/Certificado_NET';
import Componente_3Prueba from './Componente-3/Componente3Prueba';






const Rutas = () => {
  
  return (
    
  <div>
     <Routes>
        <Route path="/"element={<Componente_Presentacion/>}></Route>
        <Route path="/about" element={<Componente_1 />}></Route>
        <Route path="/Skills" element={<Componente_2 />}></Route>
        <Route path="/Proyectos" element={<Componente_3Prueba />}></Route>
        <Route path="/Formulario" element={<Contacto/>}></Route>
        <Route path="/Educacion" element={<Mi_Educacion/>}></Route>
        <Route path="/Certificado" element={<Certificado/>}></Route>
        <Route path="/Certificado_Js" element={<Certificado_Js/>}></Route>
        <Route path="/Certificado_NET" element={<Certificado_NET/>}></Route>
        
    </Routes>
    
  </div> );
  
};

export default Rutas;
