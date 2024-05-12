import React, { Component } from "react";

import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoCss3 from '../Componente-2/iconcss3.png';
import IconoJs from '../Componente-2/iconjavascript.png';
import IconoTelerik from '../Componente-2/568561.png';
import IconoBoostrap from '../Componente-2/iconboostrap.png';
import IconoGitHub from '../Componente-2/icongithub.png';
import IconoAngular from '../Componente-2/iconangular.png';
import IconoCSharp from '../Componente-2/Microsoft_.NET_logo.png';
import IconoAspNet from '../Componente-2/asp_net.png';
import IconoSQLServer from '../Componente-2/imagenSQl.png';
import IconoReact from '../Componente-2/iconreact.png';
import imagen from '../Componente-2/undraw_certificate_re_yadi.svg';


class Componente_2 extends Component {
    render() {
        return (
            <div className="Componente_2 container-fluid animate__animated animate__fadeIn" id="Skills">
            <h1 className="Titulo_Leng">Habilidades</h1>
            <div className="Contenido_Componente_2">
              <div className="Contenido_Leng col-md-3">
                <img className="Icono-html" src={IconoHtml} />
                <p className="card-title">HTML-5</p>
              </div>
              <div className="Contenido_Leng col-md-3">
                <img className="Icono-Css3" src={IconoCss3} />
                <p className="card-title "> CSS-3 </p>
              </div>
              <div className=" Contenido_Leng col-md-3">
                <img className="Icono-Js" src={IconoJs} />
                <p className="card-title"> Javascript </p>
              </div>
              <div className="Contenido_Leng col-md-3">
                <img className="Icono-React" src={IconoTelerik} />
                <p className="card-title "> Telerik </p>
              </div>
              <div className="Contenido_Leng col-md-3">
                <img className="Icono-React" src={IconoAngular} />
                <p className="card-title "> Angular </p>
              </div>
              <div className="Contenido_Leng col-md-3">
                <img className="Icono-React" src={IconoReact} />
                <p className="card-title "> React </p>
              </div>
            </div>
            <div className="Contenido_Componente_2">
              <div className="Contenido_Leng col-md-3">
                <img className="Icono-GitHub" src={IconoGitHub} />
                <p className="card-title "> GitHub </p>
              </div>
              <div className="Contenido_Leng col-md-3">
                <img className="Icono-Boostrap" src={IconoBoostrap} />
                <p className="card-title "> Boostrap </p>
              </div>
              <div className="Contenido_Leng col-md-3">
                <img className="Icono-NET" src={IconoCSharp} />
                <p className="card-title"> .NET </p>
              </div>
              <div className="Contenido_Leng col-md-3">
                <img className="Icono-NET" src={IconoAspNet} />
                <p className="card-title"> ASP.NET </p>
              </div>
              <div className="Contenido_Leng col-md-3">
                <img className="Icono-SqlServer" src={IconoSQLServer} />
                <p className="card-title"> SQLServer </p>
              </div>
            </div>
            <div className="col-md-12 animate__animated animate__fadeInUp">
              <img className="imagen_skills" src={imagen} />
            </div>
          </div>
        );
    }
}
export default Componente_2;