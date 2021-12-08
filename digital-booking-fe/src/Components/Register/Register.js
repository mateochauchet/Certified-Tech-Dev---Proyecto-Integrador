import './Register.scoped.css'
import ContextLoginRegistro from '../Contexts/ContextLoginRegistro';
import ContextUser from '../Contexts/ContextUser';
import { useHistory } from 'react-router-dom';
import useForm from "../Hooks/useForm";
import validate from './registerFormValidationRules';
import {Link} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import { parseJwt } from "../Login/jwt.js";


const Register = () => {

    //variables
    const { values, handleChange, handleSubmit, isSubmitting, selectedFields, errors } = useForm(registration, validate);
    const [status, setStatus] = useState("")
    const [estadoPrueba, setEstadoPrueba] = useState("")
    const [avisoFalloRegistro, setAvisoFalloRegistro] = useState("avisoNoVisible")
    const {contextLoginRegistro, setContextLoginRegistro} = useContext(ContextLoginRegistro);
    const {contextUser, setContextUser} = useContext(ContextUser);
    const history = useHistory();
    const endpointRegistro = "http://localhost:8080/api/usuarios/";
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
                id: values.rol
            }
        }
        dataParaLogin = {
            email: values.email,
            password: values.password
        }
        setEstadoPrueba(dataParaLogin)
    }
 // Llamado a la API con un POST, y seteo de la variable status
    async function registration(){
        await fillData()
       const response= await fetch(endpointRegistro, {
        "method": "POST",
        "body": JSON.stringify(nuevoUsuarioData),
        "headers": {
            "content-type": "application/json"
            }
        })
        if(response.status === 200 || response.status === 201){
        const data = await response.json();
            setStatus(response.status)
            setContextUser(data.jwt);
            setContextLoginRegistro(parseJwt(data.jwt).usuario);
            history.push('/home');
            console.log("FUNCIONOOOOOOO")
            console.log(data);
            console.log(parseJwt(data.jwt).usuario);
        }else
        setAvisoFalloRegistro("avisoVisible")
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

                    
                    <label htmlFor="rol">Rol de usuario</label>
                    <select id="rol" name="rol" value={values.rol || ''} onChange={handleChange} className={errors.rol && selectedFields.includes("rol") ? "inputError" : undefined}>
                        <option value="1">Cliente</option>
                        <option value="2">Anfitrión</option>
                    </select>


                    <input type="submit" value="Crear cuenta"></input>
                    <div className={avisoFalloRegistro}>Lamentablemente no ha podido registrarse. Por favor intente más tarde</div>
                </form>
                <p>¿Ya tienes una cuenta? <Link className="link" to='/login'>Iniciar sesión</Link></p>
            </div>
        </div>
    );
}

export default Register
