import React from "react";
import NavBar from "../../Components/MenuUser/index"
import {withRouter} from 'react-router-dom'
import Ilustracion from "../../assets/images/Ash.png"
import './index.css';

const Welcome= (props) => {  
    const onSubmit = (values) => { 
        console.log(values);
        props.history.push('/info');
    }
    return (
        <>
            <NavBar/>
            <div className="row justify-content-center row-no-magin">
                <div className="col-12 col-sm-8 col-md-6">
                    <div className="card box-card " >
                        <div className="card-body ">
                            <img src= {Ilustracion} className="icon-ilustracion-welcome" alt="..."/>
                            <h1 className='h1-title-card'>BIENVENIDO AL MUNDO POKÉMON</h1>
                            <p className="text-one-card">Para poder conocer y ser un verdadero maestro Pokémon, necesitamos que completes tu perfil..</p>
                            <p className="text-one-card">Llenar tus datos como un verdadero maestro Pokémon</p>
                        <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-primary text-button-next " 
                            type= 'submit' 
                            onClick= {onSubmit}
                            >
                            <span className="text-button-continue-restore-inicio">CONTINUAR</span>
                            <span className="icon-next-button-blue"></span>
                        </button> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>  
        )
}
export default withRouter(Welcome)
