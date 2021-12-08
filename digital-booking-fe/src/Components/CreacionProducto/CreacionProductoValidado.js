import React, { useState, useEffect, useContext} from "react";
import Heading from "../Detalle/Heading";
import "./creacionProducto.scoped.css";
import ContextUser from "../Contexts/ContextUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "./useForm";
import validateInfo from "./validateInfo";


function CreacionProductoValidado(props){
    //VARIABLES

    let formData = new FormData();
    const {handleChange, values, handleSubmit, errors} = useForm(validateInfo);
    console.log(values)
    const endpointPostProducto = "http://localhost:8080/api/productos/";
    //const [nombrePropiedad, setNombrePropiedad] = useState("")
    const [categoriaPropiedad, setCategoriaPropiedad] = useState("Seleccione una categoria")
    //const [latitudPropiedad, setLatitudPropiedad] = useState("")
    //const [longitudPropiedad, setLongitudPropiedad] = useState("")
    const [ciudadPropiedad, setCiudadPropiedad] = useState("")
    //const [descripcionPropiedad, setDescripcionPropiedad] = useState("")
    //const [normasPropiedad, setNormasPropiedad] = useState("")
    //const [sysPropiedad, setSySPropiedad] = useState("")
    //const [cancelacionPropiedad, setCancelacionPropiedad] = useState("")
    //const [inputUrl, setInputUrl] = useState([{ url: "" }]);
    const [grupoAtributos, setGrupoAtributos] = useState([]);
    const {contextUser} = useContext(ContextUser);
    let producto;

    let optionsCategorias =
        props.categorias.map((categoria) => {
            return(
                <>
                <option value={categoria.id}>{categoria.titulo}</option>
                </>
            )
        })

    let optionsCiudades =
    props.listaCiudades.map((ciudad) => {
          return(
              <>
              <option value={ciudad.id}>{ciudad.nombre}</option>
              </>
          )
    })


    let nombreAtributos =
        props.caracteristicas.map((caracteristica)=>{
           
            return(
                <>
                <FontAwesomeIcon icon={caracteristica.icono} />
                    <label className="labelAtributos"><input type="checkbox" name={caracteristica.nombre} value={caracteristica.nombre}
                    onChange={(e)=>{
                        if(e.target.checked && (grupoAtributos.indexOf(e.target.name)== -1)){
                            setGrupoAtributos([...grupoAtributos, {nombre: e.target.value, icono: caracteristica.icono}])
                        }else if(e.target.checked == false){
                            grupoAtributos.splice((grupoAtributos.indexOf(e.target.name)), 1)
                            console.log(grupoAtributos)
                            }
                        }} className="checkboxes"></input> {caracteristica.nombre}</label><br/>
                </>
            )
        })

    //FUNCIONES

    const onFileChange = (e) => {
        if(e.target && e.target.files){   
            for (let index = 0; index < e.target.files.length; index++){
                formData.append('imagenes', e.target.files[index])           
            }
        }                    
           
    }
    

    const fillData = () =>{
        producto = 
            {
                nombre: values.nombreProducto,
                categoria: {
                    id: categoriaPropiedad
                },
                ciudad: {
                    id: ciudadPropiedad
                },
                latitud: values.latitudProducto,
                longitud: values.longitudProducto,
                descripcion: values.descripcionProducto,
                puntaje: 7,
                caracteristicas: grupoAtributos,
                norma: values.normasProducto,
                saludSeguridad: values.seguridadProducto,
                cancelacion: values.cancelacionProducto
            }
        //formData.append("producto", JSON.stringify(producto))
    }

    async function sendData(e){
        e.preventDefault()
        await fillData()
        const response = await fetch(endpointPostProducto, {
        "method": "POST",
        "body": formData,
        "headers": {
            "Authorization": "Bearer " + contextUser,
        }
        })
        if(response.status === 200){
            console.log("Producto creado");
        }
    }

    //sendData

    return(
        <>
        <Heading titulo="Administracion"/>
        <h2 className="h2CreacionProducto">Crear propiedad</h2>
        <div className="contenedorPadreProducto">
            <div className="divContenedorFormularioProducto">
                <form /*onSubmit={sendData}*/ onSubmit={handleSubmit} noValidate className="formularioCreacionProducto" encType="multipart/form-data">
                    <div className="primerBloqueInputs">
                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" htmlFor="nombreProducto">Nombre de la propiedad</label>
                            {errors.nombreProducto && <p className="errorDesc">{errors.nombreProducto}</p>}
                            <input className="inputCreacionProducto claseEncontrada" value={values.nombreProducto} name="nombreProducto" type="text" onChange={handleChange} /*onChange={(e)=>setNombrePropiedad(e.target.value)}*/ required></input>
                        </div>

                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" htmlFor="categoriaProducto">Categoria</label>
                            <select className="inputCreacionProducto" value={values.categoriaProducto} onChange={handleChange} onChange={(e)=>setCategoriaPropiedad(e.target.value)} required>
                                <option selected>Seleccione una categoria</option>
                                {optionsCategorias}
                            </select>
                        </div>

                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" htmlFor="categoriaProducto">Ciudad</label>
                            <select className="inputCreacionProducto" onChange={(e)=>setCiudadPropiedad(e.target.value)} required>
                                <option selected>Seleccione una ciudad</option>
                                {optionsCiudades}
                            </select>
                        </div>

                        <div className="contenedorLabelInput latitudLongitud">
                            <label className="labelCreacionProducto" htmlFor="latitudProducto">Latitud</label>
                            {errors.latitudProducto && <p className="errorDesc">{errors.latitudProducto}</p>}
                            <input className="inputCreacionProducto" value={values.latitudProducto} name="latitudProducto" type="number" required onChange={handleChange} /*onChange={(e)=>setLatitudPropiedad(e.target.value)}*/></input>
                        </div>

                        <div className="contenedorLabelInput latitudLongitud">
                            <label className="labelCreacionProducto" htmlFor="longitudProducto">Longitud</label>
                            {errors.longitudProducto && <p className="errorDesc">{errors.longitudProducto}</p>}
                            <input className="inputCreacionProducto" value={values.longitudProducto} name="longitudProducto" type="number" required onChange={handleChange} /*onChange={(e)=>setLongitudPropiedad(e.target.value)}*/></input>
                        </div>
                    </div>
                    <div>
                        <label className="labelCreacionProducto" htmlFor="descripcionProducto">Descripcion</label>
                        {errors.descripcionProducto && <p className="errorDesc">{errors.descripcionProducto}</p>}
                        <textarea className="inputCreacionProducto inputTextarea" value={values.descripcionProducto} name="descripcionProducto" onChange={handleChange} /*onChange={(e)=>setDescripcionPropiedad(e.target.value)}*/ placeholder="Escriba aqui" required></textarea>
                    </div>

                    <div>
                        <h3 className="h3CreacionProducto">Agregar atributos</h3>
                        <div className="contenedorSeccionAtributos">
                            {nombreAtributos}
                        </div>
                    </div>

                    <div>
                        <h3 className="h3CreacionProducto">Politicas del producto</h3>
                        <div className="contenedorPoliticas">
                            <div>
                                <h4 className="h4CreacionProducto">Normas de la casa</h4>
                                <label className="labelCreacionProducto" htmlFor="normasProducto">Descripcion</label>
                                {errors.normasProducto && <p className="errorDesc">{errors.normasProducto}</p>}
                                <textarea className="inputCreacionProducto inputTextarea" value={values.normasProducto} name="normasProducto" onChange={handleChange} /*onChange={(e)=>setNormasPropiedad(e.target.value)}*/ required></textarea>
                            </div>
                            <div>
                                <h4 className="h4CreacionProducto">Salud y seguridad</h4>
                                <label className="labelCreacionProducto" htmlFor="seguridadProducto">Descripcion</label>
                                {errors.seguridadProducto && <p className="errorDesc">{errors.seguridadProducto}</p>}
                                <textarea className="inputCreacionProducto inputTextarea" value={values.seguridadProducto} name="seguridadProducto" onChange={handleChange} /*onChange={(e)=>setSySPropiedad(e.target.value)}*/ required></textarea>
                            </div>
                            <div>
                                <h4 className="h4CreacionProducto">Politicas de cancelacion</h4>
                                <label className="labelCreacionProducto" htmlFor="cancelacionProducto">Descripcion</label>
                                {errors.cancelacionProducto && <p className="errorDesc">{errors.cancelacionProducto}</p>}
                                <textarea className="inputCreacionProducto inputTextarea" value={values.cancelacionProducto} name="cancelacionProducto" onChange={handleChange} /*onChange={(e)=>setCancelacionPropiedad(e.target.value)}*/ required></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="h3CreacionProducto">Cargar imagenes</h3>
                        <div className="contenedorSeccionAtributos contenedorSeccionImagenes">
                            <div className="contenedorInputImagenes">
                                <input className="inputCreacionProducto custom-file-input" type="file" onChange={onFileChange} required multiple ></input>    
                            </div>
                        </div>
                    </div>
                   
                    <div className="contenedorBoton">
                        <button className="cardBtn botonCreacionProducto" >Crear Producto</button>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
}

export default CreacionProductoValidado;