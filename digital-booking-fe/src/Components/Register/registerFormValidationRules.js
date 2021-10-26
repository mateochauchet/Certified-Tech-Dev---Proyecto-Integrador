export default function validate(values){
 
    let errors = {};
    if(!values.email){
        errors.email="Este campo es obligatorio"

    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Dirección de correo electrónico invalida';
  }

  if(!values.nombre){
    errors.nombre="Este campo es obligatorio"
  }

  if(!values.apellido){
    errors.apellido="Este campo es obligatorio"
  }

  if(!values.password){
    errors.password="Este campo es obligatorio"
  }else if (values.password.length<=6){
    errors.password = "La contraseña debe tener una longitud de 7 caracteres o más"
  }

  if(!values.passwordConfirmation){
    errors.passwordConfirmation="Este campo es obligatorio"
  }else if (values.password!==values.passwordConfirmation){
    errors.passwordConfirmation = "Las contraseñas no coinciden"
  }


    return errors;
}