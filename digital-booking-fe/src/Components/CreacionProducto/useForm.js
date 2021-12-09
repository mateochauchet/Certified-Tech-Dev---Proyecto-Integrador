import { useState, useEffect } from "react";
import { AiFillDatabase } from "react-icons/ai";

const useForm = validateInfo =>{
    const [values, setValues] = useState({
        nombreProducto: "",
        latitudProducto: "",
        longitudProducto: "",
        descripcionProducto: "",
        tituloDescripcion: "",
        normasProducto: "",
        seguridadProducto: "",
        cancelacionProducto: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = e =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        console.log(values)
        e.preventDefault()
        setErrors(validateInfo(values))
    } 
    return {handleChange, values, handleSubmit, errors}
}

export default useForm;