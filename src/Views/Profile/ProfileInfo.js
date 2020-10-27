import React, { Fragment } from "react";
import NavBar from "../../Components/MenuUser/index"
import { Link, withRouter } from 'react-router-dom'
import DatePicker,{registerLocale}from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es';
import { useForm, Controller } from "react-hook-form";
import Stepper from "./Stepper";
import './index.css';

registerLocale("es", es);

const ProfileInfo = (props) => { 
    const { handleSubmit, register, errors, control, formState} = useForm();
    const { isSubmitted } = formState;

    const onSubmit = (values, e) => { 
        console.log(values);
        props.history.push('/info-direccion')
    } 
    const onlyNumbers= (e)=> {
        let key = window.event ? e.which : e.keyCode;
            if (key < 48 || key > 57) {
            e.preventDefault();
    }
  }
    return (
        <Fragment>
            <NavBar/>
            <div className="row row-no-magin padding-container">
                <div className="col-12 col-md-6 offset-md-3 container-no-padding m-nav-form">
                    <h1 className='h1-title-form'>COMPLETA TU REGISTRO</h1>
                </div>
                <div className="col-12 col-md-6 offset-md-3 container-no-padding mt-stepper">
                    <Stepper current = {0} />
                </div>
                <div className="col-12 col-md-6 offset-md-3 container-no-padding">
                    <h1 className='h1-form'>Datos Personales</h1>
                </div>
                <div className="col-12  col-md-6 offset-md-3 container-no-padding">
                    <form name="myForm" onSubmit={handleSubmit(onSubmit)}  className='form-container-info'>
                        <label htmlFor="firstName" className="label-form">
                            Nombres                       
                            <input
                                placeholder ="Ash"         
                                className= {` form-control placeholder 
                                    ${
                                        isSubmitted ? 
                                        !errors.firstName ?
                                        "input-icono"
                                        : 
                                        "border-error red-input input-icoerror"       
                                        : ''
                                    }
                                `} 
                                id='firstName'
                                name='firstName'
                                type="text"
                                autoComplete="off"
                                ref={register({
                                    required: "Este campo es requerido",
                                    pattern: {
                                        value:  /[A-Za-z]{3}/,
                                        message: "Coloque un Nombre valido",
                                      },
                                  })}  
                                                              
                            />                                                 
                        </label>                     
                        <span className="span-error">
                            { errors.firstName && errors.firstName.message}
                        </span>
                        <label htmlFor="lastName" className="label-form mt-1">
                            Apellidos
                            <input
                                placeholder="ketchum"
                                className={`form-control placeholder mb-2
                                    ${
                                        isSubmitted ? 
                                        !errors.lastName ?
                                        "input-icono"
                                        : 
                                        "border-error red-input input-icoerror"       
                                        : ''
                                    }
                                `} 
                                id='lastName'
                                name='lastName'
                                type="text"
                                autoComplete="off"
                                ref={register({
                                    required: "Este campo es requerido",
                                    pattern: {
                                        value:  /[A-Za-z]{3}/,
                                        message: "Coloque un Nombre valido",
                                      },
                                  })}
                            />
                        </label>
                        <span className="span-error">
                            { errors.lastName && errors.lastName.message}
                        </span>
                        <label htmlFor="doc" className="label-form-2 mt-1">        
                            Tipo de Documento
                            <div className="container-radios">
                                <div className="form-check my-2">
                                    <input className="form-check-input"
                                    type="radio" 
                                    name="doc" 
                                    id="dni" 
                                    value="option1"
                                    autoComplete="off"
                                    ref={register}
                                    />
                                    <label className="form-text-check mb-2">
                                        Dni
                                    </label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input"
                                    type="radio" 
                                    name="doc" 
                                    id="carnet" 
                                    value="option2"
                                    required=""
                                    autoComplete="off"
                                    ref={register}
                                    />
                                    <label className="form-text-check">
                                        Carnet de Extranjería
                                    </label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input"
                                    type="radio" 
                                    name="doc" 
                                    id="pasaporte" 
                                    value="option3"
                                    required=""
                                    autoComplete="off"
                                    ref={
                                        register({
                                            required: "Seleccione un tipo de documento",
                                        })}
                                    />
                                    <label className="form-text-check">
                                        Pasaporte
                                    </label>
                                </div>
                            </div>
                        <span className="span-error">
                            { errors.doc && errors.doc.message}
                        </span>
                        </label>
                        <label  htmlFor="document" className="label-form mt-3">
                            Número de documento
                            <input
                                placeholder="90627452"
                                className={`form-control placeholder mb-2
                                    ${
                                        isSubmitted ? 
                                        !errors.document ?
                                        "input-icono"
                                        : 
                                        "border-error red-input input-icoerror"       
                                        : ''
                                    }
                                `} 
                                id='document'
                                name='document'
                                type="text"
                                autoComplete="off"
                                onKeyPress={e =>{onlyNumbers(e)}}
                                ref={register({
                                    required: "Este campo es requerido",
                                        maxLength : {
                                            value: 12,
                                            message: 'Coloque un documento válido' 
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'Coloque un documento válido' 
                                        }
                                  })} 
                            />
                        </label>
                        <span className="span-error">
                            { errors.document && errors.document.message}
                        </span>
                         <label htmlFor="dateOfBirth" className=" label-form mt-3" >
                                Fecha de nacimiento
                                <section className="customDatePickerWidth">
                                    <Controller
                                        control={control}
                                        name="dateOfBirth"
                                        defaultValue=""
                                        render={(props) => (
                                            <DatePicker
                                            className={`form-control label-form-calen icon-calendar
                                                ${
                                                    isSubmitted ? 
                                                    !errors.dateOfBirth ?
                                                    ""
                                                    : 
                                                    "border-error red-input"       
                                                    : ''
                                                }
                                            `} 
                                                placeholderText="DD/MM/AAAA"
                                                onChange={(e) => props.onChange(e)}
                                                selected={props.value}
                                                dateFormat="dd/MM/yyyy"
                                                locale={es}
                                                showYearDropdown
                                                defaultValue=""
                                                name ="dateOfBirth"
                                                autoComplete="off"     
                                            />
                                        )}
                                                rules={{
                                                    required: 'Coloque una fecha válida'
                                                }}
                                    /> 
                                </section>
                                <span className="span-error mt-2">{ errors.dateOfBirth && errors.dateOfBirth.message}</span>
                            </label>
                        <section className="container-buttons-form">
                            <Link
                                className="btn-cancel-form btn" 
                                to='/inicio'
                                >
                                CANCELAR
                            </Link> 
                            <button
                                className="button-continue-restore btn"
                                type="submit"
                            >
                                <span className= "btn btn-primary text-button-continue-restore">CONTINUAR</span>
                            </button>
                        </section>                      
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default withRouter(ProfileInfo)

