import React, {Fragment} from "react";
import { Link } from 'react-router-dom'
import NavBarDesk from "../../Components/Menu-desktop/NavbarDesk";
import imagepPokemon from "../../assets/images/as.png"
import Ilustracion from "../../assets/images/ilustracion.png"
import ImgProduction from "../../assets/icons/medium1.png"
import ImgMaintenance from "../../assets/icons/medium2.png"
import ImgDistribution from "../../assets/icons/medium3.png"
import ImgCallCenter from "../../assets/icons/medium4.png"
import ImgConstruction from "../../assets/icons/medium5.png"
import ImgOperaction from "../../assets/icons/medium6.png"
import pokemon1 from "../../assets/logos/1.png"
import pokemon2 from "../../assets/logos/2.png"
import pokemon3 from "../../assets/logos/3.png"
import pokemon4 from "../../assets/logos/4.png"
import pokemon5 from "../../assets/logos/5.png"
import pokemon6 from "../../assets/logos/6.png"
import pokemon7 from "../../assets/logos/7.png"
import pokemon8 from "../../assets/logos/8.png"
import pokemon9 from "../../assets/logos/9.png"
import pokemon10 from "../../assets/logos/10.png"
import pokemon11 from "../../assets/logos/11.png"
import pokemon12 from "../../assets/logos/12.png"
import pokemon13 from "../../assets/logos/13.png"
import pokemon14 from "../../assets/logos/14.png"
import pokemon15 from "../../assets/logos/15.png"
import pokemon16 from "../../assets/logos/16.png"
import pokemon17 from "../../assets/logos/17.png"
import pokemon18 from "../../assets/logos/18.png"
import pokemon19 from "../../assets/logos/19.png"
import pokemon20 from "../../assets/logos/20.png"
import pokemon21 from "../../assets/logos/21.png"
import pokemon22 from "../../assets/logos/22.png"
import pokemon23 from "../../assets/logos/23.png"
import pokemon24 from "../../assets/logos/24.png"
import pokemon25 from "../../assets/logos/25.png"
import pokemon26 from "../../assets/logos/26.png"
import pokemon27 from "../../assets/logos/27.png"
import pokemon28 from "../../assets/logos/28.png"
import pokemon29 from "../../assets/logos/29.png"
import pokemon30 from "../../assets/logos/30.png"
import pokemon31 from "../../assets/logos/31.png"
import pokemon32 from "../../assets/logos/32.png"
import pokemon33 from "../../assets/logos/33.png"
import pokemon34 from "../../assets/logos/34.png"
import pokemon35 from "../../assets/logos/35.png"
import pokemon36 from "../../assets/logos/36.png"

import DesktopCarrusel from "../../Components/Carrusel/DesktopCarrusel"
import LogoMedio from "../../assets/logos/logo-medios.png"
import './index.css';

const Home= () => {

    return (
        <Fragment>
        <NavBarDesk/>
            <div className="row row-no-magin container-no-padding">
                {/* Primer Bloque */}
                <div className="col-12 col-md-2 container-no-padding"></div>
                <div className="col-12 col-md-8 container-no-padding">
                    <div className="row m-nav row-no-magin container-no-padding">
                        <div className="col-11 col-md-9 container-no-padding hide-sm">
                            <a href="/" ><img src= {LogoMedio} className="icon-img-logo"  alt="" /></a>            
                        </div>
                    </div >
                    <div className="row box-container-title">
                        <div className="col-6 col-md-8 container-no-padding">
                            <span className="text-box-one">Encuentra Tu Pokémon</span>
                            <div className="d-flex justify-content-start">
                                <Link 
                                    className="btn btn-operativa btn-sm"
                                    to="/registro"
                                    >
                                    REGISTRATE
                                </Link> 
                            </div>
                        </div>
                        <div className="col-6 col-md-4 container-no-padding">
                            <img alt='conexion' src= {imagepPokemon} className="icon-image-conexion" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 container-no-padding"></div>
                {/* Segundo Bloque */}
                <div className="col-12 col-md-2 container-no-padding hide-sm box-container-title-two"></div>
                <div className="col-12 col-md-8 container-no-padding">
                    <div className="row box-container-title-two box-container-align-rubros row-no-magin container-no-padding">
                        <div className="col-12 col-md-6 container-no-padding">
                            <h1 className='h1-tittle-box'>Pokémon Disponibles</h1>
                            <p className='text-box-two'>
                                Toda la información necesaría.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 pt-md-4">
                            <div className="row row-no-magin container-no-padding">
                                <div className="col-4 text-center">
                                    <img alt='' src= {ImgProduction} className="icon-image-rubros" />
                                    <p className="text-icon-rubros">Habilidades</p>
                                </div>
                                <div className="col-4 text-center">
                                    <img alt='' src= {ImgMaintenance} className="icon-image-rubros" />
                                    <p className="text-icon-rubros">Poder</p>
                                    
                                </div>
                                <div className="col-4 text-center">
                                    <img alt='' src= {ImgDistribution} className="icon-image-rubros" />
<<<<<<< HEAD
                                    <p className="text-icon-rubros">Tipo de Raza</p>
=======
                                    <p className="text-icon-rubros">Tipos de Razas</p>
>>>>>>> 6efa8cf (first commit)
                                </div>
                                <div className="col-4 text-center mt-2">
                                    <img alt='' src= {ImgCallCenter} className="icon-image-rubros" />
                                    <p className="text-icon-rubros">
<<<<<<< HEAD
                                       Debilidad
=======
                                       Debilidades
>>>>>>> 6efa8cf (first commit)
                                    </p>
                                </div>
                                <div className="col-4 text-center mt-2">
                                    <img alt='' src= {ImgConstruction} className="icon-image-rubros" />
                                    <p className="text-icon-rubros">Estrategias</p>
                                </div>
                                <div className="col-4 text-center mt-2">
                                    <img alt='' src= {ImgOperaction} className="icon-image-rubros" />
<<<<<<< HEAD
                                    <p className="text-icon-rubros">Conoce mas de ellos</p>
=======
                                    <p className="text-icon-rubros">Conoce mas sobre ellos</p>
>>>>>>> 6efa8cf (first commit)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 container-no-padding hide-sm box-container-title-two"></div>
                {/* Tercer Bloque */}
                <div className="col-12 col-md-2 container-no-padding hide-sm"></div>
                <div className="col-12 col-md-8 container-no-padding">
                            <div className="row row-no-magin container-no-padding">
                                <div className="col-12 container-no-padding">
<<<<<<< HEAD
                                    <h1 className='h1-tittle-carousel'>Trabajamos con las empresas más reconocidas del país</h1>
=======
                                    <h1 className='h1-tittle-carousel'>Conoce mas sobre ellos</h1>
>>>>>>> 6efa8cf (first commit)
                                </div>
                            </div >
                            <div id="carouselExampleSlidesOnly" 
                                className="carousel slide my-0" 
                                width="100"  
<<<<<<< HEAD
                                data-interval="3500" data-ride="carousel"
=======
                                data-interval="2500" 
                                data-ride="carousel"  
>>>>>>> 6efa8cf (first commit)
                            >            
                            <div className="carousel-inner h-slide-custom mobile-car">
                                <div className="carousel-item active">
                                    <div className="row w-100 mx-auto">
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom " src={pokemon1}  alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon9} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon11}  alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon12} alt="First slide"/>
                                        </div>                                                                              
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row w-100 mx-auto">
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block img-slite-custom" src={pokemon5} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block img-slite-custom" src={pokemon6} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block img-slite-custom" src={pokemon7}  alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block img-slite-custom" src={pokemon8}   alt="First slide"/>
                                        </div>                                      
                                    </div>
                                </div>                                                                                                                                    
                                <div className="carousel-item">
                                    <div className="row w-100 mx-auto">
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon14} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon10} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon3}  alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon4} alt="First slide"/>
                                        </div>                                      
                                    </div>
                                </div>     
                                <div className="carousel-item">
                                    <div className="row w-100 mx-auto">
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon13} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon17} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon15}  alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon16} alt="First slide"/>
                                        </div>                                      
                                    </div>
                                </div>    
                                <div className="carousel-item">
                                    <div className="row w-100 mx-auto">
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon22} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon25} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon27}  alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon29} alt="First slide"/>
                                        </div>                                      
                                    </div>
                                </div>      
                                <div className="carousel-item">
                                    <div className="row w-100 mx-auto">
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon21} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon2} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon23}  alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon20} alt="First slide"/>
                                        </div>                                      
                                    </div>
                                </div>  
                                <div className="carousel-item">
                                    <div className="row w-100 mx-auto">
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon18} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon26} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon30}  alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon28} alt="First slide"/>
                                        </div>                                      
                                    </div>
                                </div>     
                                <div className="carousel-item">
                                    <div className="row w-100 mx-auto">
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon24} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon19} alt="First slide"/>
                                        </div>    
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon31} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon32} alt="First slide"/>
                                        </div>                                                                             
                                    </div>
                                </div>   
                                <div className="carousel-item">
                                    <div className="row w-100 mx-auto">
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon33} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon34} alt="First slide"/>
                                        </div>    
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon35} alt="First slide"/>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 mt-2">
                                            <img className="img-fluid d-block  img-slite-custom" src={pokemon36} alt="First slide"/>
                                        </div>                                                                             
                                    </div>
                                </div>                   
                            </div>     
                        </div>
                        <div className = "desktop-car">
                            <DesktopCarrusel/>  
                        </div> 
                    </div>
                    <div className="col-12 col-md-2 container-no-padding hide-sm"></div>
                    {/* Cuarto Bloque */}
                    <div className="col-12 col-md-2 container-no-padding hide-sm box-container-title-three"></div>
                    <div className="col-12 col-md-8 container-no-padding">   
                        <div className="row box-container-title-three row-no-magin container-no-padding">
                            <div className="col-12 container-no-padding">
                                <h1 className='h1-text-ilustracion-box'>Cómo inscribirte</h1>
                            </div>
                            <div className="col-6 col-md-5 container-no-padding">
                                    <img alt='conexion' src= {Ilustracion} className="icon-image-logo" />
                            </div>
                            <div className="col-5 col-md-7 container-no-padding">
                                <div className="ml-2">
                                <span className="text-box-three">Inscribete completando el formulario con tus datos.
                                </span>
                                </div>
                                <div className="d-flex justify-content-start ml-2">
                                    <Link 
                                        className="btn btn-ilustracion-operativa btn-sm"
                                        type='submit'
                                        to="/registro"
                                        >
                                        REGISTRATE
                                    </Link> 
                                </div>
                            </div>
                        </div>

                </div>
                <div className="col-12 col-md-2 container-no-padding hide-sm box-container-title-three"></div>
            </div>
        </Fragment>
    )
} 
export default Home;
