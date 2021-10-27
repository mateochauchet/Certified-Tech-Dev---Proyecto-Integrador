import styles from './Register.module.css'
// import './Register.css'
import useForm from "../hooks/useForm";
import validate from './registerFormValidationRules';

const Register = () => {

    const { values, handleChange, handleSubmit, isSubmitting, selectedFields, errors } = useForm(registration, validate);

    function registration() {
        console.log('You just registered')
    }

    return (

        <div className={styles.container}>
            <h1>Crear cuenta</h1>
            <form onSubmit={handleSubmit} noValidate>

            <div className={styles.fullName}>

                <div className= {styles.nameFragment}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={values.nombre || ''} onChange={handleChange} className={errors.nombre && selectedFields.includes("nombre") ? styles.inputError : undefined}></input>
                    {(errors.nombre && isSubmitting.current && (<div className={styles.errorBox}><p className={styles.errorDesc}>{errors.nombre}</p></div>)) || (errors.nombre && selectedFields.includes("nombre") && (<div className={styles.errorBox}><p className={styles.errorDesc}>{errors.nombre}</p></div>))}
                </div>

                <div className = {styles.nameFragment}>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" value={values.apellido || ''} onChange={handleChange} className={errors.apellido && selectedFields.includes("apellido") ? styles.inputError : undefined}></input>
                    {(errors.apellido && isSubmitting.current && (<div className={styles.errorBox}><p className={styles.errorDesc}>{errors.apellido}</p></div>)) || (errors.apellido && selectedFields.includes("apellido") && (<div className={styles.errorBox}><p className={styles.errorDesc}>{errors.apellido}</p></div>))}
                </div>

            </div>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={values.email || ''} onChange={handleChange} className={errors.email && selectedFields.includes("email") ? styles.inputError : undefined}></input>
                {(errors.email && isSubmitting.current && (<div className={styles.errorBox}><p className={styles.errorDesc}>{errors.email}</p></div>)) || (errors.email && selectedFields.includes("email") && (<div className={styles.errorBox}><p className={styles.errorDesc}>{errors.email}</p></div>))}


                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" value={values.password || ''} onChange={handleChange} className={errors.password && selectedFields.includes("password") ? styles.inputError : undefined}></input>
                {(errors.password && isSubmitting.current && (<div className={styles.errorBox}><p className={styles.errorDesc}>{errors.password}</p></div>)) || (errors.password && selectedFields.includes("password") && (<div className={styles.errorBox}><p className={styles.errorDesc}>{errors.password}</p></div>))}


                <label htmlFor="passwordConfirmation">Confirmar contraseña</label>
                <input type="password" name="passwordConfirmation" id="passwordConfirmation" value={values.passwordConfirmation || ''} onChange={handleChange} className={errors.passwordConfirmation && selectedFields.includes("passwordConfirmation") ? styles.inputError : undefined}></input>
                {(errors.passwordConfirmation && isSubmitting.current && (<div className={styles.errorBox}><p className={styles.errorDesc}>{errors.passwordConfirmation}</p></div>)) || (errors.passwordConfirmation && selectedFields.includes("passwordConfirmation") && (<div className={styles.errorBox}><p className={styles.errorDesc}>{errors.passwordConfirmation}</p></div>))}


                <input type="submit" value="Crear cuenta"></input>
            </form>
            <p>¿Ya tienes una cuenta? Iniciar sesión</p>
        </div>
    );
}

export default Register