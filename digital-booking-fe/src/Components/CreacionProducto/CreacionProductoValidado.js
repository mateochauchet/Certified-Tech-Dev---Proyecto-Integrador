import React, { useState, useEffect, useContext} from "react";
import Heading from "../Detalle/Heading";
import "./creacionProducto.scoped.css";
import ContextUser from "../Contexts/ContextUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom';
import useForm from "./useForm";
import validateInfo from "./validateInfo";


function CreacionProductoValidado(props){
    //VARIABLES

    let formData = new FormData();
    const {handleChange, values, handleSubmit, errors} = useForm(validateInfo);
    const endpointPostProducto = "https://digitalbooking.ga/api/productos/";
    const [categoriaPropiedad, setCategoriaPropiedad] = useState("Seleccione una categoria")
    const [ciudadPropiedad, setCiudadPropiedad] = useState("")
    const [inputUrl, setInputUrl] = useState([{ url: "" }]);
    const [grupoAtributos, setGrupoAtributos] = useState([]);
    const {contextUser} = useContext(ContextUser);
    const [falloCrearProducto, setFalloCrearProducto] = useState("falloNoVisible")
    const history = useHistory();
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

    useEffect(()=>{
        if(inputUrl){
        setInputUrl(inputUrl)
        console.log(inputUrl)
        }
    }, [inputUrl])


    let nombreAtributos =
        props.caracteristicas.map((caracteristica)=>{
           
            return(
                <>
                <FontAwesomeIcon icon={caracteristica.icono} />
                    <label className="labelAtributos"><input type="checkbox" name={caracteristica.id} value={caracteristica.id}
                    onChange={(e)=>{
                        if(e.target.checked && (grupoAtributos.indexOf(e.target.name)== -1)){
                            setGrupoAtributos([...grupoAtributos, {id: caracteristica.id}])
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
                titulo_descripcion: values.tituloDescripcion,
                puntaje: 7,
                caracteristicas: grupoAtributos,
                norma: values.normasProducto,
                saludSeguridad: values.seguridadProducto,
                cancelacion: values.cancelacionProducto
            }
        formData.append("producto", JSON.stringify(producto))
    }

    

    
    async function sendData(e){
        e.preventDefault()
        handleSubmit(e)
        console.log(errors)
        if (errors === {}){
        await fillData()
        const response = await fetch(endpointPostProducto, {
        "method": "POST",
        "body": formData,
        "headers": {
            "Authorization": "Bearer " + contextUser,
        }
        }) 
        
        if(response.status === 200){
            history.push('/creacionExitosa')
            console.log("Producto creado");
        }else{
            setFalloCrearProducto("falloVisible")
            console.log("Lamentablemente el producto no ha podido crearse. Por favor intente más tarde");
        }
    }}



    return(
        <>
        <Heading titulo="Administracion"/>
        <h2 className="h2CreacionProducto">Crear propiedad</h2>
        <div className="contenedorPadreProducto">
            <div className="divContenedorFormularioProducto">
                <form onSubmit={sendData} noValidate className="formularioCreacionProducto" encType="multipart/form-data">
                    <div className="primerBloqueInputs">
                        <div className="contenedorLabelInput">
                        <label className="labelCreacionProducto" htmlFor="nombreProducto">Nombre de la propiedad</label>
                            {errors.nombreProducto && <p className="errorDesc">{errors.nombreProducto}</p>}
                            <input className="inputCreacionProducto claseEncontrada" value={values.nombreProducto} name="nombreProducto" type="text" onChange={handleChange} /*onChange={(e)=>setNombrePropiedad(e.target.value)}*/ required></input>
                        </div>
                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" >Categoria</label>
                            <select className="inputCreacionProducto" value={categoriaPropiedad} onChange={(e)=>setCategoriaPropiedad(e.target.value)} required>
                                <option selected>Seleccione una categoria</option>
                                {optionsCategorias}
                            </select>
                        </div>
                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto">Ciudad</label>
                            <select className="inputCreacionProducto" value={ciudadPropiedad} onChange={(e)=>setCiudadPropiedad(e.target.value)} required>
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
                    <div className="contenedorDescripcion">
                        <label className="labelCreacionProducto" htmlFor="tituloDescripcionProducto">Titulo de Descripcion</label>
                        {errors.tituloDescripcion && <p className="errorDesc">{errors.tituloDescripcion}</p>}
                        <input className="inputCreacionProducto" value={values.tituloDescripcion} onChange={handleChange}name="tituloDescripcion" /*onChange={(e)=>setTituloDescripcion(e.target.value)}*/ required></input>
                    </div>
                    <div className="contenedorDescripcion">
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
                    <div className={falloCrearProducto}>Lamentablemente el producto no ha podido crearse. Por favor intente más tarde</div>
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