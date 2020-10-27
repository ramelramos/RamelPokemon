import React, { Fragment } from "react";
import { Link, withRouter } from 'react-router-dom'
import { useForm } from "react-hook-form";
import NavBar from "../../Components/MenuUser/index";
import axios from "axios";
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import sesion from '../../assets/images/q.png'
// import ReactGa from "react-ga"
import './index.css';

const Login= (props) => {
    const { handleSubmit, register, errors, formState} = useForm();
    const { isSubmitted } = formState;

    const [error, setError] = React.useState(null)
    const [see, setSee] = React.useState(false)
    
    const seePass = () => {
        setSee(!see)        
    }
    
    const baseUrl="https://reqres.in/api/";
    const onSubmit = (values) => { 
        console.log(values);
        let datafield = {
            "email": values.usuario, 
            "password": values.password 
        }
        axios.post(baseUrl+'login', datafield)
        .then((response) => {
            if(response.status === 200) {
                console.log(response.data)
                console.log(response.data.token)
                localStorage.setItem('token', response.data.token);
                axios.get(baseUrl+'users/2')
                .then((response) => {   
                    console.log(response.data.data) 
                    //Guardar Email
                    localStorage.setItem('email', response.data.data.email);
                    props.history.push('/items-pokemon');
                })
                .catch(function(error) {
                    console.log()
                })             
            } else if(response.status === 401) {
                    alert(response.message);
            } else {
                alert("Ha ocurrido un error interno.");
                console.log(response.data);
            }
        })
        .catch(function(error) {
            console.log(error.status)
            setError('Usuario y contraseña Incorrecta')
            return
        })
    }
    return (
        <Fragment>
        <NavBar/>
            <div className="row justify-content-center container-padding row-no-magin">
                <div className="col-12 col-sm-8 col-md-6">
                    <h1 className='h1-custom-inicio-sesion'>INICIA SESIÓN</h1>
                    <img src= {sesion} className="icon-inicio-sesion" alt="..."/>
                    <form  className='form-container' onSubmit= { handleSubmit(onSubmit) } >
                       {
                            error ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                            ) : null
                        }
                        <label className="label-form">
                            Correo Electrónico
                            <input
                                placeholder ="mail@ejemplo.com"                    
                                className={`form-control placeholder
                                    ${
                                        isSubmitted ? 
                                        !errors.usuario ?
                                        "input-icono"
                                        : 
                                        "border-error red-input input-icoerror"       
                                        : ''
                                    }
                                `} 
                                name="usuario"
                                type="text"
                                autoComplete="off"
                                ref={register({
                                    required: "Este campo es requerido",
                                    pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Coloque un email valido"
                                    }
                                  })}
                            />
                        </label>
                        <span className="span-error">
                            {errors.usuario && errors.usuario.message}
                        </span>
                        <label className="label-form">
                            Contraseña
                            <div className="icon-see-container">
                                {see ? 
                                    <IoIosEye className="space-icon-see" onClick={seePass}/> 
                                    :
                                    <IoIosEyeOff className="space-icon-see" onClick={seePass}/>
                                }
                            </div>
                            <input
                                placeholder=".........."
                                className={`form-control placeholder
                                    ${
                                        isSubmitted ? 
                                            !errors.password ?
                                            ""
                                            : 
                                            "border-error red-input"                                            
                                        : ''
                                    }
                                `} 
                                id='password'
                                name='password'
                                type={!see ? 'password' : 'text'}
                                ref={register({
                                        required: "Este campo es requerido",
                                        minLength: { value: 6, message: "Debe contener mínimo 6 caracteres" },
                                        maxLength: { value: 12, message: "Debe contener máximo 12 caracteres" }
                                    }
                                )}
                            />
                        </label>
                            <span className="span-error">
                                {errors.password && errors.password.message}
                            </span>                       
                            <div>
                                <span className="info-form"><a href="/restablecer-contraseña">Restablecer contraseña</a></span>
                            </div>
                        <section  className="container-buttons">
                            <Link
                                className="btn-cancel-register btn" 
                                type= 'submit' 
                                to="/"
                                >
                                CANCELAR  
                            </Link> 
                            <button 
                                className="btn-login btn" 
                                type= 'submit'
                                >
                                ENVIAR
                            </button>
                        </section>
                        <div className="space-spam-login-register">
                            <span className="info-form">Si aún no tienes una cuenta <a href="/registro">Registrate aquí</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default withRouter(Login)