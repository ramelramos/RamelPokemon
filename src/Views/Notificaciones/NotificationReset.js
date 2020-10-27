import React, { Fragment } from "react";
import NavBar from "../../Components/MenuUser/index"
import { Link} from 'react-router-dom'
import correo from '../../assets/images/correo.png'

const NotificationReset= (props) => {
    
    return (
            <Fragment>
                <NavBar/>
                <div className="row justify-content-center padding-container row-no-magin">
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4 container-no-padding">
                        <h1 className='h1-custom-notification'>
                            TE HEMOS ENVIADO UN CODIGO AL CORREO ELECTRÓNICO MAESTRO.
                        </h1>
                        <img src= {correo} className="icon-registro" alt="..."/>
                        <div className="row">
                            <div className="col-12">
                                <Link
                                    className="button-continue-restore-notification btn" 
                                    to="/nueva-contraseña"
                                    >
                                    <span className= "btn btn-primary text-button-continue-restore">CONTINUAR</span>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
    )
}
export default NotificationReset