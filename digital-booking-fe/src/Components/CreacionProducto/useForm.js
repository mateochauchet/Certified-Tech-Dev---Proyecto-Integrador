import { useState, useEffect } from "react";

const useForm = ()=>{
    const [values, setValues] = useState({
        nombreProducto: "",
        latitudProducto: "",
        longitudProducto: "",
        descripcionProducto: "",
        normasProducto: "",
        seguridadProducto: "",
        cancelacionProducto: ""
    })
}