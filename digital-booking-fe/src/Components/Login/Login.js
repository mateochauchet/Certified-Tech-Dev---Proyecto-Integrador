import './Login.scoped.css'
import useForm from '../Hooks/useForm';
import validate from './loginFormValidationRules'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ContextLoginRegistro from '../Contexts/ContextLoginRegistro';
import { parseJwt } from "./jwt";
import { useHistory } from 'react-router-dom';
import ContextUser from '../Contexts/ContextUser';



const endpointLogin = "https://digitalbooking.ga/api/usuarios/authenticate";


const Login = () => {
    const { contextUser, setContextUser } = useContext(ContextUser);
    const history = useHistory();
    const { values, handleChange, handleSubmit, isSubmitting, selectedFields, errors } = useForm(login, validate);
    const { contextLoginRegistro, setContextLoginRegistro } = useContext(ContextLoginRegistro);
    const [validCredentials, setValidCredentials] = useState(true);
    const MySwal = withReactContent(Swal)
    const { mensaje } = useParams();

    useEffect(() => {
        if ( contextUser === '' && mensaje !== undefined)
            MySwal.fire(`${mensaje}`)
    }, [mensaje]);
    
    useEffect(() => {
        console.log(contextLoginRegistro.id)
    }, [contextLoginRegistro]);
    
    // Funcion para setear el contexto de usuario logueado
    async function login() {
        const dataParaLogin = {
            email: values.email,
            password: values.password
        }

        const response = await fetch(endpointLogin, {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(dataParaLogin)
        })
        if (response.status === 200) {
            const jwt = await response.json();
            console.log(parseJwt(jwt.jwt).usuario);
            console.log(jwt.jwt);
            setContextUser(jwt.jwt);
            setContextLoginRegistro(parseJwt(jwt.jwt).usuario);
            console.log(contextLoginRegistro);
           
            history.push('/home')
            
        } else
            setValidCredentials(false);
    }

    


    return (
        <>
        
        <div className="background">


            <div className="container">
                <h1>Iniciar sesi??n</h1>
                <form onSubmit={handleSubmit} noValidate>
                   
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={values.email || ''} onChange={handleChange} className={errors.email && selectedFields.includes("email") ? "inputError" : undefined}></input>
                    {(errors.email && isSubmitting.current && (<div className="errorBox"><p className="errorDesc">{errors.email}</p></div>)) || (errors.email && selectedFields.includes("email") && (<div className="errorBox"><p className="errorDesc">{errors.email}</p></div>))}

                    <label htmlFor="password">Contrase??a</label>
                    <input type="password" id="password" name="password" value={values.password || ''} onChange={handleChange} className={errors.password && selectedFields.includes("password") ? "inputError" : undefined }></input>
                    {(errors.password && isSubmitting.current && (<div className="errorBox"><p className="errorDesc">{errors.password}</p></div>)) || (errors.password && selectedFields.includes("password") && (<div className="errorBox"><p className="errorDesc">{errors.password}</p></div>))}

                    <input type="submit" value="Ingresar" className="botonSubmit"></input>
                    {(validCredentials === false && (<div className="errorBox"><p className="errorDesc">Por favor, vuelva a intentarlo sus credenciales son inv??lidas</p></div>))}

                </form>
                <p>??A??n no tenes cuenta? <Link className="link" to='/registro'>Registrate</Link></p>
            </div>
        </div>
</>
    );
    
}

export default Login