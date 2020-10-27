import React, { Fragment } from "react";
import './index.css';
import { Link, withRouter } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useForm } from "react-hook-form";
import NavBar from "../../Components/MenuUser/index";
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import axios from "axios";
import registro from '../../assets/images/q1.png'
// import ReactGa from "react-ga"

const Register= (props) => {
    const [modalTerms, setModalTerms] = React.useState(false);
    const { handleSubmit, register, errors, formState} = useForm();
    const { isSubmitted } = formState;
    const [see, setSee] = React.useState(false)
    const [error, setError] = React.useState(null)

    //mostrar Contraseña:
    const seePass = () =>
    {
        setSee(!see)        
    }
    const baseUrl="https://reqres.in/api/";
    const onSubmit = (values) => { 
        console.log(values);
        let datafield = {
            "email": values.usuario, 
            "password": values.password 
        }
        axios.post(baseUrl+'register', datafield)
        .then((response) => {
            if(response.status === 200) {
                console.log(response.data)
                console.log(response.data.token)
                localStorage.setItem('token', response.data.token);
               
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
                            props.history.push('/inicio');
        
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
            } else if(response.status === 401) {
                    alert(response.message);
            } else {
                alert("Ha ocurrido un error interno.");
                console.log(response.data);
            }
        })
        .catch(function(error) {
            console.log(error.status)
            setError('Usuario ya registrado')
            return
        })
    }
    return (
      <Fragment>
          <NavBar/>
        <div className="row justify-content-center container-padding row-no-magin">
            <div className="col-12 col-sm-8 col-md-6">
                <h1 className="h1-custom-registro">REGISTRATE EN EL MUNDO POKÉMON</h1>
                <img src= {registro} className="icon-registro" alt="..."/>
                <form onSubmit={handleSubmit(onSubmit)} className="form-container">
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
                            placeholder="mail@ejemplo.com"
                            className={`form-control placeholder
                                          ${
                                            isSubmitted
                                                ? !errors.usuario
                                                ? "input-icono"
                                                : "border-error red-input input-icoerror"
                                                : ""
                                          }
                                      `}
                            id="email"
                            name="usuario"
                            type="text"
                            autoComplete="off"
                            ref={register({
                              required: "Este campo es requerido",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Coloque un email valido",
                              },
                            })}
                        />
                    </label>
                            <span className="span-error">
                                {errors.usuario && errors.usuario.message}
                            </span>
                    <label className="label-form">
                        Contraseña
                        <div className="icon-see-container">
                            {see ? (
                                <IoIosEye className="space-icon-see" onClick={seePass} />
                            ) : (
                                <IoIosEyeOff className="space-icon-see" onClick={seePass} />
                            )}
                        </div>
                        <input
                            placeholder=".........."
                            className=  {`form-control  placeholder                                      
                                        ${
                                            isSubmitted
                                            ? !errors.password
                                            ? ""
                                            : "border-error red-input"
                                            : ""
                                        }
                                   `}
                            name="password"
                            type={!see ? "password" : "text"}
                            ref={register({
                                    required: "Este campo es requerido",
                                    minLength: {
                                    value: 6,
                                    message: "Debe contener mínimo 6 caracteres",
                                },
                                    maxLength: {
                                    value: 12,
                                    message: "Debe contener máximo 12 caracteres",
                                },
                            })}
                        />
                    </label>
                        <span className="span-error">
                            {errors.password && errors.password.message}
                        </span>
                        <span className="span-error">
                            {errors.dni && errors.dni.message}
                        </span>
                    <label className="">
                        <input
                          className="terms-checkbox "
                          name="terms"
                          type="checkbox"
                          ref={register({
                            required: "Debe aceptar los términos y condiciones",
                          })}
                        />
                        <span className="info-form-term">
                            Acepto{" "}
                            <Link href="#" onClick={(e) => setModalTerms(!modalTerms)}>
                              términos y condiciones
                            </Link>
                        </span>
                    </label>
                        <span className="span-error">
                            {errors.terms && errors.terms.message}
                        </span>
                    <section className="container-buttons">
                        <Link className="btn-cancel-register btn" to="/">
                          CANCELAR
                        </Link>
                        <button className="btn-register btn" type="submit">
                            ENVIAR
                        </button>
                    </section>
                    <div className="space-spam-login-register">
                        <span className="info-form">
                            Si ya tienes una cuenta{" "}
                            <a href="/inicio-sesion">Inicia sesión aquí</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
        <Modal isOpen={modalTerms}>
            <ModalHeader>Términos y condiciones.</ModalHeader>
            <ModalBody>
                <p className="style-modal">
               Nuestros Terminos y Condiciones.
                <br/>
                Es
                <br/>
                Divierté en GRANDE y se un gran entrenador POKÉMON.
                <br/>
                <br/>                
                Conoce más del Mundo Pokémon. 
                </p>
            </ModalBody>
                <ModalFooter>
                    <buttom
                      className="btn btn-primary"
                      onClick={(e) => setModalTerms(!modalTerms)}
                    >
                      {" "}
                      Cerrar{" "}
                    </buttom>
                </ModalFooter>
        </Modal>
      </Fragment>
    );
}
export default withRouter(Register) 