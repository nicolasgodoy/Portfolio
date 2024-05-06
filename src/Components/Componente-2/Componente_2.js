import React, { Component } from "react";

import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoCss3 from '../Componente-2/iconcss3.png';
import IconoJs from '../Componente-2/iconjavascript.png';
import IconoReact from '../Componente-2/iconreact.png';
import IconoBoostrap from '../Componente-2/iconboostrap.png';
import IconoGitHub from '../Componente-2/icongithub.png';
import IconoCSharp from '../Componente-2/Microsoft_.NET_logo.png';
import IconoSQLServer from '../Componente-2/imagenSQl.png';
import IconoMySql from '../Componente-2/mysql3.png';
import IconoNodeJs from '../Componente-2/nodejs.png';
import imagen from '../Componente-2/undraw_certificate_re_yadi.svg';


class Componente_2 extends Component {

    render() {

        return <div className="Componente_2 container animate__animated animate__fadeIn" id="Skills">


            <h1 className="Titulo_Leng">Habilidades</h1>

            <div className="Contenido_Componente_2">

                <div className="Contenido_Leng col-md-2">

                    <img className="Icono-html" src={IconoHtml} />
                    <p className="card-title">HTML-5</p>

                </div>

                <div className=" Contenido_Leng col-md-2">
                    <img className="Icono-Css3" src={IconoCss3} />
                    <p className="card-title "> CSS-3 </p>

                </div>

                <div className=" Contenido_Leng col-md-2">
                    <img className="Icono-Js" src={IconoJs} />
                    <p className="card-title"> Javascript </p>

                </div>

                <div className="Contenido_Leng col-md-2">
                    <img className="Icono-React" src={IconoReact} />
                    <p className="card-title "> React </p>

                </div>

                <div className="Contenido_Leng col-md-2">
                    <img className="Icono-GitHub" src={IconoGitHub} />
                    <p className="card-title "> GitHub </p>

                </div>

                <div className="Contenido_Leng col-md-2">
                    <img className="Icono-Boostrap" src={IconoBoostrap} />
                    <p className="card-title "> Boostrap </p>

                </div>

                <div className="Contenido_Leng col-md-2">
                    <img className="Icono-NET" src={IconoCSharp} />
                    <p class="card-title"> .NET </p>

                </div>

                <div className="Contenido_Leng col-md-2">
                    <img className="Icono-SqlServer" src={IconoSQLServer} />
                    <p class="card-title"> SQLServer </p>

                </div>

            </div>

            <div className="col-md-12 animate__animated animate__fadeInUp">
                    <img className="imagen_skills" src={imagen} />
            </div>
        </div>

    }

}

export default Componente_2;