import React from "react";
import NavBar from "../../Components/MenuUser/index"
import {withRouter} from 'react-router-dom'
import Ilustracion from "../../assets/images/unidos.png"
import './index.css';

const ProfileUpdate= (props) => {
    
    const onSubmit = (values) => { 
        console.log(values);
        props.history.push('/items-pokemon');
    }
    return (
        <>
            <NavBar/>
            <div className="row justify-content-center row-no-magin">
                <div className="col-12 col-sm-8 col-md-6">
                    <div className="card box-card" >
                        <div className="card-body ilustracion-welcome">
                            <h1 className='h1-title-card'>TUS DATOS SE COMPLETARON CON EXITO</h1>
                            <p className="text-one-card">Ahora aprende más del mundo Pokémon maestro.</p>
                            <img src= {Ilustracion} className="icon-ilustracion-welcome" alt="..."/>
                        <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-primary text-button-next " 
                            type= 'submit' 
                            onClick= {onSubmit}
                            >
                            <span className="btn btn-primary text-button-continue-restore-inicio">Explora el Mundo Pokémon</span>
                        </button> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>  
        )
}
export default withRouter(ProfileUpdate)
