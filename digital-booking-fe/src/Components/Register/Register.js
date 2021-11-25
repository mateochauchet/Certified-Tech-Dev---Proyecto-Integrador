import './Register.scoped.css'
import ContextLoginRegistro from '../Contexts/ContextLoginRegistro';
import ContextUser from '../Contexts/ContextUser';
import { useHistory } from 'react-router-dom';
import useForm from "../Hooks/useForm";
import validate from './registerFormValidationRules';
import {Link} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';


const Register = () => {

    //variables
    const { values, handleChange, handleSubmit, isSubmitting, selectedFields, errors } = useForm(registration, validate);
    const [status, setStatus] = useState("")
    const [avisoFalloRegistro, setAvisoFalloRegistro] = useState("avisoNoVisible")
    const {contextLoginRegistro, setContextLoginRegistro} = useContext(ContextLoginRegistro);
    const {contextUser, setContextUser} = useContext(ContextUser);
    const history = useHistory();
    const endpointRegistro = "http://localhost:8080/api/usuarios/";
    const endpointLogin = "http://localhost:8080/api/usuarios/authenticate";
    let nuevoUsuarioData;
    let dataParaLogin;


    //seteo de data para registro y login automatico
    let fillData = async () =>{
        nuevoUsuarioData = {
            nombre: values.nombre,
            apellido: values.apellido,
            email: values.email,
            password: values.password,
            rol: {
                id: 1
            }
        }

        dataParaLogin = {
            email: values.email,
            password: values.password
        }
    }
    
    // Llamado a la API con un POST, y seteo de la variable status
    async function handleClick(){
        await fillData()
        console.log(nuevoUsuarioData)
        console.log(dataParaLogin)
        fetch(endpointRegistro, {
        "method": "POST",
        "body": JSON.stringify(nuevoUsuarioData),
        "headers": {
            "content-type": "application/json"
            }
        })
        .then(response=>{
            setStatus(response.status)
        })
    }

    // Funcion para ejecutar el redireccionamiento, solo luego de que se modifico el status
    useEffect(()=>{
        async function getCondicion(){
        if(status != ""){
        console.log('estoy en el useEffect ' + status)
        console.log("soy el dataLogin " + dataParaLogin)
        await modificaContextoLoginRegistro()
        }}
        getCondicion()
    }, [status])
    
    // Funcion de modificacion del primer contexto, segun el valor del status. Llamada a la API para logueo
    async function modificaContextoLoginRegistro(){
        console.log("estoy antes del post" + dataParaLogin)
        if(status != 201){
            setAvisoFalloRegistro("avisoVisible")
        }else{
            await fetch(endpointLogin, {
            "method": "POST",
            "body": JSON.stringify(dataParaLogin),
            "headers": {
                "content-type": "application/json"
                }   
            })
            .then(response=>{
                return response.json()
            })
            .then(json =>{
                setContextLoginRegistro(json.jwt)
                console.log(nuevoUsuarioData)
                console.log(dataParaLogin)
                console.log(ContextLoginRegistro)

            })
        }
    }


    // Funcion para llamar al siguiente fetch, solo luego de que se modifico el primer contexto
    useEffect(()=>{
        if(contextLoginRegistro != ""){
        //llamadaAlFetch()
        console.log("ya me modifique, soy: " + contextLoginRegistro)
        }
    }, [contextLoginRegistro])


    // Funcion para setear el contexto de usuario logueado
    async function llamadaAlFetch(){
        if(dataParaLogin != ""){
        fetch(endpointRegistro + `${dataParaLogin.email}/` + `${dataParaLogin.password}`,{
            "method": "GET",
            "headers": {
                "authorization": 'Bearer '+ contextLoginRegistro.jwt,
                }   
            })
            .then(response=>{
                return response.json()
            })
            .then(json =>{
                setContextUser(json)
            })
        }
    }

    // Funcion redireccion al home con usuario logueado
    useEffect(()=>{
        if(contextUser != ""){
        history.push("/home")
        }
    }, [contextUser])
    
    
    
    //fin de mi codigo
    

    function registration(){
        console.log("te registraste")
    }

    return (
        <div className="background">


            <div className="container">
                <h1>Crear cuenta</h1>
                <form onSubmit={handleSubmit} noValidate>

                    <div className="fullName">

                        <div className="nameFragment">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" value={values.nombre || ''} onChange={handleChange} className={errors.nombre && selectedFields.includes("nombre") ? "inputError" : undefined}></input>
                            {(errors.nombre && isSubmitting.current && (<div className="errorBox"><p className="errorDesc">{errors.nombre}</p></div>)) || (errors.nombre && selectedFields.includes("nombre") && (<div className="errorBox"><p className="errorDesc">{errors.nombre}</p></div>))}
                        </div>

                        <div className="nameFragment">
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" id="apellido" name="apellido" value={values.apellido || ''} onChange={handleChange} className={errors.apellido && selectedFields.includes("apellido") ? "inputError" : undefined}></input>
                            {(errors.apellido && isSubmitting.current && (<div className="errorBox"><p className="errorDesc">{errors.apellido}</p></div>)) || (errors.apellido && selectedFields.includes("apellido") && (<div className="errorBox"><p className="errorDesc">{errors.apellido}</p></div>))}
                        </div>

                    </div>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={values.email || ''} onChange={handleChange} className={errors.email && selectedFields.includes("email") ? "inputError" : undefined}></input>
                    {(errors.email && isSubmitting.current && (<div className="errorBox"><p className="errorDesc">{errors.email}</p></div>)) || (errors.email && selectedFields.includes("email") && (<div className="errorBox"><p className="errorDesc">{errors.email}</p></div>))}


                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" value={values.password || ''} onChange={handleChange} className={errors.password && selectedFields.includes("password") ? "inputError" : undefined}></input>
                    {(errors.password && isSubmitting.current && (<div className="errorBox"><p className="errorDesc">{errors.password}</p></div>)) || (errors.password && selectedFields.includes("password") && (<div className="errorBox"><p className="errorDesc">{errors.password}</p></div>))}


                    <label htmlFor="passwordConfirmation">Confirmar contraseña</label>
                    <input type="password" name="passwordConfirmation" id="passwordConfirmation" value={values.passwordConfirmation || ''} onChange={handleChange} className={errors.passwordConfirmation && selectedFields.includes("passwordConfirmation") ? "inputError" : undefined}></input>
                    {(errors.passwordConfirmation && isSubmitting.current && (<div className="errorBox"><p className="errorDesc">{errors.passwordConfirmation}</p></div>)) || (errors.passwordConfirmation && selectedFields.includes("passwordConfirmation") && (<div className="errorBox"><p className="errorDesc">{errors.passwordConfirmation}</p></div>))}

                    
                    <input type="submit" value="Crear cuenta" onClick={() =>{handleClick()}}></input>
                    <div className={avisoFalloRegistro}>Lamentablemente no ha podido registrarse. Por favor intente más tarde</div>
                </form>
                <p>¿Ya tienes una cuenta? <Link className="link" to='/login'>Iniciar sesión</Link></p>
            </div>
        </div>
    );
}

export default Register
