import styles from './Login.module.css'
import useForm from '../hooks/useForm';
import validate from './loginFormValidationRules'
import useAuthentication from '../hooks/useAuthentication';


const Login = () => {


    const { values, handleChange, handleSubmit, isSubmitting, selectedFields, errors } = useForm(login, validate);

    const {authenticate, validCredentials} = useAuthentication(values.email, values.password);

    function login(){
        authenticate();
    }

    return (

        <div className={styles.container}>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="email">Email</label>

                <input type="email" id="email" name="email" value={values.email || ''} onChange={handleChange} className={errors.email && selectedFields.includes("email") ? styles.inputError : undefined}></input>
                {(errors.email && isSubmitting.current && (<div className={styles.errorBox}><p className ={styles.errorDesc}>{errors.email}</p></div>)) || (errors.email && selectedFields.includes("email") && (<div className={styles.errorBox}><p className ={styles.errorDesc}>{errors.email}</p></div>))}


                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" value={values.password || ''} onChange={handleChange} className={errors.password && selectedFields.includes("password") ? styles.inputError : undefined}></input>
                {(errors.password && isSubmitting.current && (<div className={styles.errorBox}><p className ={styles.errorDesc}>{errors.password}</p></div>)) || (errors.password && selectedFields.includes("password") && (<div className={styles.errorBox}><p className ={styles.errorDesc}>{errors.password}</p></div>))}


                <input type="submit" value="Ingresar"></input>
                {(validCredentials===false && (<div className={styles.errorBox}><p className ={styles.errorDesc}>Por favor, vuelva a intentarlo sus credenciales son inválidas</p></div>))}

            </form>
            <p>¿Aún no tenes cuenta? Registrate</p>
        </div>

    );
}

export default Login