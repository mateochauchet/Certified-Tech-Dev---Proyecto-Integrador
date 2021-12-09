export default function validateInfo(values){
    let errors = {};

    if(!values.nombreProducto.trim()){
        errors.nombreProducto = "Elija un nombre para su producto"
        console.log("elija nombre")
    }

    if(!values.latitudProducto.trim()){
        errors.latitudProducto = "Debe completar este campo"
    }else if(values.latitudProducto < -90 || values.latitudProducto > 90){
        errors.latitudProducto = "La latitud debe estar entre 90 y -90"
    }

    if(!values.longitudProducto.trim()){
        errors.longitudProducto = "Debe completar este campo"
    }else if(values.longitudProducto < -90 || values.longitudProducto > 90){
        errors.longitudProducto = "La longitud debe estar entre 90 y -90"
    }

    if(!values.tituloDescripcion.trim()){
        errors.tituloDescripcion = "Debe completar este campo"
    }

    if(!values.descripcionProducto.trim()){
        errors.descripcionProducto = "Agregue una descripcion a su producto"
    }

    if(!values.normasProducto.trim()){
        errors.normasProducto = "Complete las normas de su producto"
    }

    if(!values.seguridadProducto.trim()){
        errors.seguridadProducto = "Agregue las politicas de salud y seguridad de su producto"
    }

    if(!values.cancelacionProducto.trim()){
        errors.cancelacionProducto = "Agregue una politica de cancelacion para su producto"
    }

    /*if(values.categoriaProducto.trim() == "Seleccione una categoria"){
        errors.categoriaProducto = "Es necesario seleccionar una categoria"
    }

    if(values.ciudadProducto.trim() == "Seleccione una ciudad"){
        errors.ciudadProducto = "Es necesario seleccionar una ciudad"
    }*/

    return errors;
}