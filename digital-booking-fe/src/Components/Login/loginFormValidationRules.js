export default function validate(values){
    let errors = {};
    if(!values.email){
        errors.email="Este campo es obligatorio"

    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Dirección de correo electrónico invalida';
  }

  if(!values.password){
    errors.password="Este campo es obligatorio"
  }
    return errors;
}