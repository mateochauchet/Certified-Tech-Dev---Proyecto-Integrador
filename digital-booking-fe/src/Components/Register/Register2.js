import './Register.scoped.css'
import useForm from "../Hooks/useForm";
import validate from './registerFormValidationRules';
import {Link} from 'react-router-dom'
import { registrarUsuario } from '../../service/RegisterUserService';
import { useEffect, useState } from 'react';
import  {withRouter} from 'react-router-dom';
import ContextLoginRegistro from "../Contexts/ContextLoginRegistro";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
    // MI CODIGO
    const [avisoFalloRegistro, setAvisoFalloRegistro] = useState("avisoNoVisible")

    const [name, setName]= useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    
    const usuarioData = {
        nombre: name,
        apellido: lastName,
        email:email,
        password: contrasenia
        //rol: {
        //    id: 1
        //}
    }

    //let respuestaDelPost
    //async function handleClick(e){
        //e.preventDefault()
        //respuestaDelPost = await registrarUsuario(usuarioData) 
        //respuestaDelPost === 500 ? console.log("bien") : console.log("no")
    //}
        //history.push("/home")
        const handleClick  = (e) => {
            e.preventDefault()
            fetch("http://localhost:8080/api/usuarios", {
            "method": "POST",
            "body": JSON.stringify(usuarioData),
            "headers": {
                "content-type": "application/json"
            }
        })
        .then(response=>{
            const dataDevuelta = response.json()
            return dataDevuelta
        })
        .then(array=>{
            console.log(array.status)
            //respuesta = array.status
        })
           //const res = await registrarUsuario(usuarioData) 
           }
    //TERMINA MI CODIGO

    return (
        <div className="background">


            <div className="container">
                <h1>Crear cuenta</h1>
                <form>

                    <div className="fullName">

                        <div className="nameFragment">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre"  onChange={event => setName(event.target.value)} ></input>
                        </div>

                        <div className="nameFragment">
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" id="apellido" name="apellido" onChange={event => setLastName(event.target.value)}></input>
                        </div>

                    </div>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={event => setEmail(event.target.value)} ></input>
                    
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" onChange={event => setContrasenia(event.target.value)}></input>
                    
                    <label htmlFor="passwordConfirmation">Confirmar contraseña</label>
                    <input type="password" name="passwordConfirmation" id="passwordConfirmation"></input>


                    <input type="submit" value="Crear cuenta" onClick={handleClick}></input>
                    
                    <div className={avisoFalloRegistro}>Lamentablemente no ha podido registrarse. Por favor intente más tarde</div>
                </form>
                <p>¿Ya tienes una cuenta? <Link className="link" to='/login'>Iniciar sesión</Link></p>
            </div>
        </div>
    );
}

export default Register;