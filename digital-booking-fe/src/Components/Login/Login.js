import './Login.scoped.css'
import useForm from '../Hooks/useForm';
import validate from './loginFormValidationRules'
// import useAuthentication from '../Hooks/useAuthentication';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useContext, useState} from 'react';
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import ContextLoginRegistro from '../Contexts/ContextLoginRegistro';
import { parseJwt } from "./jwt";
import { useHistory } from 'react-router-dom';
import ContextUser from '../Contexts/ContextUser';



const endpointLogin = "http://localhost:8080/api/usuarios/authenticate";


const Login = () => {
    const {contextUser, setContextUser} = useContext(ContextUser);
    const history = useHistory();
    const { values, handleChange, handleSubmit, isSubmitting, selectedFields, errors } = useForm(login, validate);
    const {contextLoginRegistro, setContextLoginRegistro} = useContext(ContextLoginRegistro);
    const [validCredentials, setValidCredentials] = useState(true);

     // Funcion para setear el contexto de usuario logueado
   async function login() {
    const dataParaLogin = {
        email: values.email,
        password: values.password
    }
    
       const response = await fetch (endpointLogin, {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
                },
        "body": JSON.stringify(dataParaLogin)
         })
         if(response.status === 200){
            const jwt = await response.json();
            setContextUser(jwt.jwt);
            setContextLoginRegistro(parseJwt(jwt.jwt).usuario);
            history.push('/home')
            console.log(contextLoginRegistro);
         }else
            setValidCredentials(false);
    }

    return (

        <div className="background">


            <div className="container">
                <h1>Iniciar sesión</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <label htmlFor="email">Email</label>

                    <input type="email" id="email" name="email" value={values.email || ''} onChange={handleChange} className={errors.email && selectedFields.includes("email") ? "inputError" : undefined}></input>
                    {(errors.email && isSubmitting.current && (<div className="errorBox"><p className="errorDesc">{errors.email}</p></div>)) || (errors.email && selectedFields.includes("email") && (<div className="errorBox"><p className="errorDesc">{errors.email}</p></div>))}


                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" value={values.password || ''} onChange={handleChange} className={errors.password && selectedFields.includes("password") ? "inputError" : undefined}></input>
                    {(errors.password && isSubmitting.current && (<div className="errorBox"><p className="errorDesc">{errors.password}</p></div>)) || (errors.password && selectedFields.includes("password") && (<div className="errorBox"><p className="errorDesc">{errors.password}</p></div>))}


                    <input type="submit" value="Ingresar"></input>
                    {(validCredentials === false && (<div className="errorBox"><p className="errorDesc">Por favor, vuelva a intentarlo sus credenciales son inválidas</p></div>))}

                </form>
                <p>¿Aún no tenes cuenta? <Link className="link" to='/registro'>Registrate</Link></p>
            </div>
        </div>

    );
    }

export default Login