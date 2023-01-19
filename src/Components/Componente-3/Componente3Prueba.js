import PokeImg from '../Imagenes/videoPokemon.mp4';
import IconoHtml from '../Componente-2/iconhtml5.png';
import IconoJs from '../Componente-2/iconjavascript.png';
import IconoCss3 from '../Componente-2/iconcss3.png';
import ImagenHeroes from '../Imagenes/videoControlTiempo.gif';
import ImagenApiTiempo from '../Imagenes/videoAppClima.gif';
import PaginaSeguridad from '../Imagenes/VideoSeguridad.mp4';
import ApiJs from '../Imagenes/videoApi.gif';
import ImgLogin from '../Imagenes/videoTemplete.mp4';
import ImgTaTeTi from '../Imagenes/videoTaTeTi.gif';
import IconoBoostrap from '../Componente-2/iconboostrap.png';
import ImgPortfolio from '../Imagenes/videoPortfolio.mp4';
import CrudImg from '../Imagenes/videoCrudNode.mp4';
import spotiApp from '../Imagenes/videoSpotiapp2.gif';
import IconoAngular from '../Componente-2/iconangular.png';
import ImagenAngular from '../Imagenes/VideoAngular.mp4';



const Componente_3Prueba = () => {


    return (
        <div className="container  animate__animated animate__fadeIn" id="Proyectos">

            <h2 className="col-md-12 Tit-Proyectos ">Proyectos</h2>

            <div className="card bg-dark mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <a className="EnlaceProyectos" href="https://proyecto-10-e9305.web.app/" target="_blank"> <video autoPlay loop className="img-fluid ImagenSpotiVideo" src={PokeImg} /></a>

                    </div>
                    <div className="col-md-8 Contenedor-body ">
                        <div className="card-body">
                            <h4 className="text-white"><b> Juego Pokemon </b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Juego de Batallas Pokemon - Objetivo repasar manipulacion del dom y eventos de botones
                                </p>
                            </p>

                            <div className="text-white">
                                <p><b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoCss3} />
                            </div>

                            <div className="animate__animated animate__fadeIn">
                                <a href="https://proyecto-10-e9305.web.app/" target="_blank" className="btn Botones_Estilos_2">Ver Proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card bg-dark mb-3">
                <div className="row g-0">

                    <div className="col-md-7 Contenedor-body ">
                        <div className="card-body">
                            <h4 className="text-white"><b> Control de Actividades </b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Un reto sacado de Frontendmentor.io que consiste en maquetar lo mas parecido posible la siguiente pagina,
                                    hacerlo funcionar mediante javascript y que sea responsive.Los datos son sacados de un archivo json..
                                    Tarjetas generadas Dinamicamente..
                                </p>
                            </p>

                            <div className="text-white">
                                <p><b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
                            </div>

                            <div className="animate__animated animate__fadeIn">

                                <div className="col-md-12">
                                    <a href="https://app-control-tiempo.vercel.app/" target="_blank" className="btn Botones_Estilos_2">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <a className="EnlaceProyectos" href="https://app-control-tiempo.vercel.app/" target="_blank" > <img className="img-fluid ImagenSpotiVideo" src={ImagenHeroes} /> </a>

                    </div>
                </div>
            </div>

            <div className="card bg-dark mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <a className="EnlaceProyectos" href="https://crud-angular-one.vercel.app/" target="_blank">  <video autoPlay loop className="img-fluid ImagenSpotiVideo" src={ImagenAngular} /></a>

                    </div>

                    <div className="col-md-8 Contenedor-body ">
                        <div className="card-body">
                            <h4 className="text-white"><b> Crud Angular y Asp.Net </b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Crud realizado para poner a prueba Asp.Net donde creamos nuestra Api con webapi mediante
                                    Ado.Net y por la parte del frontend practicando un poco con angular y angular-material
                                </p>
                            </p>

                            <div className="text-white">
                                <p> <b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoAngular} />
                            </div>

                            <div className="animate__animated animate__fadeIn">



                                <div className="col-md-12">
                                    <a href="https://spoti-app-two.vercel.app/#/home" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card bg-dark mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <a className="EnlaceProyectos" href="https://proyecto-8-edb1b.web.app/index.html" target="_blank"> <img className="img-fluid ImagenSpotiVideo" href="https://proyecto-8-edb1b.web.app/index.html" src={ImgTaTeTi} /></a>

                    </div>

                    <div className="col-md-8 Contenedor-body ">
                        <div className="card-body">
                            <h4 className="text-white"><b> Juego TaTeTi </b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Realizado Como Proyecto Final Curso Elearning Programacion Web Con Javascript



                                </p>
                            </p>

                            <div className="text-white">
                                <p><b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
                            </div>

                            <div className="animate__animated animate__fadeIn">



                                <div className="col-md-12">
                                    <a href="https://proyecto-8-edb1b.web.app/index.html" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card bg-dark mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <a className="EnlaceProyectos" href="https://proyecto-6-e5863.web.app/" target="_blank">  <img className="img-fluid ImagenSpotiVideo" src={ImagenApiTiempo} /> </a>
                    </div>
                    <div className="col-md-8 Contenedor-body ">

                        <div className="card-body">
                            <h4 className="text-white"><b> Api Del Tiempo</b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Obtener Datos de la Api OpenWheaterMap y diseñarlo..


                                </p>
                            </p>

                            <div className="text-white">
                                <p><b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
                            </div>

                            <div className="animate__animated animate__fadeIn">

                                <div className="col-md-12">
                                    <a href="https://proyecto-6-e5863.web.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="card bg-dark mb-3">
                <div className="row g-0">

                    <div className="col-md-8 Contenedor-body ">
                        <div className="card-body">
                            <h4 className="text-white"><b> SpotiApp </b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Consumir Api de Spotify y poner un poco en practica Angular



                                </p>
                            </p>

                            <div className="text-white">
                                <p> <b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoBoostrap} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoAngular} />
                            </div>

                            <div className="animate__animated animate__fadeIn">



                                <div className="col-md-12">
                                    <a href="https://spoti-app-two.vercel.app/#/home" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <a className="EnlaceProyectos" href="https://spoti-app-two.vercel.app/#/home" target="_blank">  <img className="img-fluid ImagenSpotiVideo" src={spotiApp} /></a>

                    </div>
                </div>
            </div>






            <div className="card bg-dark mb-3">
                <div className="row g-0">

                    <div className="col-md-7 Contenedor-body ">
                        <div className="card-body">
                            <h4 className="text-white"><b>Pagina De Seguridad</b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Proyecto Final de Curso de HTML-5 y CSS3 de Elearning Mis primeros pasos con Css3 y lo que valoro de este Proyecto
                                    es que no utilize Flex,Grid,Framework ya que no los conocia ninguno en su momento..
                                    <hr className="bg-white"></hr>

                                </p>
                            </p>

                            <div className="text-white">
                                <p> <b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
                                <img className="m-1 Icono-Angular-Proyectos" src={IconoJs} />
                            </div>

                            <div className="animate__animated animate__fadeIn">



                                <div className="col-md-12">
                                    <a href="https://pagina-seguridad.vercel.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <a className="EnlaceProyectos" href="https://pagina-seguridad.vercel.app/" target="_blank"> <video className="img-fluid ImagenSpotiVideo" autoPlay loop > <source src={PaginaSeguridad} ></source> </video></a>

                    </div>
                </div>
            </div>

            <div className="card bg-dark mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <a className="EnlaceProyectos" href="https://crudnodejsmysql-production.up.railway.app/" target="_blank">  <video className="img-fluid ImagenSpotiVideo" autoPlay loop src={CrudImg} /></a>

                    </div>

                    <div className="col-md-7 Contenedor-body ">
                        <div className="card-body">
                            <h4 className="text-white"><b> Crud NodeJsMySQL </b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Crud Para poner en practica conocimientos de Nodejs y de MySQL
                                    Y Tambien subir una base de datos a la nube

                                </p>
                            </p>

                            <div className="text-white">
                                <p> <b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoBoostrap} />
                            </div>

                            <div className="animate__animated animate__fadeIn">



                                <div className="col-md-12">
                                    <a href="https://crudnodejsmysql-production.up.railway.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="card bg-dark mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <a className="EnlaceProyectos" href="https://proyecto-5-75fff.web.app/" target="_blank"> <img className="img-fluid ImagenSpotiVideo" href="https://proyecto-5-75fff.web.app/" src={ApiJs} /></a>

                    </div>

                    <div className="col-md-7 Contenedor-body ">

                        <div className="card-body">
                            <h4 className="text-white"><b> Conexion Api con metodo fetch </b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Obtener datos de cada usuario


                                </p>
                            </p>

                            <div className="text-white">
                                <p> <b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
                                <img className="m-1 Icono-Angular-Proyectos" src={IconoJs} />
                            </div>

                            <div className="animate__animated animate__fadeIn">



                                <div className="col-md-12">
                                    <a href="https://proyecto-5-75fff.web.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>






            <div className="card bg-dark mb-3">
                <div className="row g-0">

                    <div className="col-md-7 Contenedor-body ">
                        <div className="card-body">
                            <h4 className="text-white"><b> Templete Login </b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Realizado de manera autodidacta para practicar poner un video de fondo Responsive


                                </p>
                            </p>

                            <div className="text-white">
                                <p> <b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />

                            </div>

                            <div className="animate__animated animate__fadeIn">



                                <div className="col-md-12">
                                    <a href="https://proyecto-4-6cf1b.web.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <a className="EnlaceProyectos" href="https://proyecto-4-6cf1b.web.app/" target="_blank"> <video autoPlay loop className="img-fluid ImagenSpotiVideo" href="https://proyecto-4-6cf1b.web.app/" src={ImgLogin} /> </a>

                    </div>
                </div>
            </div>




            <div className="card bg-dark mb-3">
                <div className="row g-0">

                    <div className="col-md-8 Contenedor-body ">
                        <div className="card-body">
                            <h4 className="text-white"><b> Mi Otro Portfolio </b></h4>
                            <p className="card-text">
                                <p className="text-white">
                                    Html-5,Css3, Boostrap, Javascript y Logica de botones para realizar funcionalidades y animaciones etc..



                                </p>
                            </p>

                            <div className="text-white">
                                <p> <b>Lenguajes Utilizados</b></p>
                                <img className="m-1 Icono-html-Proyectos" src={IconoHtml} />
                                <img className="m-1 Icono-Css3-Proyectos" src={IconoCss3} />
                                <img className="m-1 Icono-Js-Proyectos" src={IconoJs} />
                                <img className="m-1 Icono-Boostrap-Proyectos" src={IconoBoostrap} />

                            </div>

                            <div className="animate__animated animate__fadeIn">



                                <div className="col-md-12">
                                    <a href="https://portfolio-4d13a.web.app/" target="_blank" className="col-md-4 btn Botones_Estilos_2">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <a className="EnlaceProyectos" href="https://portfolio-4d13a.web.app/" target="_blank"> <video autoPlay loop className="img-fluid ImagenSpotiVideo" src={ImgPortfolio} /></a>

                    </div>
                </div>
            </div>









            {/* ============================ */}











        </div >
    )
}

export default Componente_3Prueba