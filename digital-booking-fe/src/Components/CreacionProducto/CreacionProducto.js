import React, { useState, useEffect, useContext} from "react";
import Heading from "../Detalle/Heading";
import "./creacionProducto.scoped.css";
import Axios from "axios";



function CreacionProducto(props){
    //VARIABLES

    let formData = new FormData();


    const [nombrePropiedad, setNombrePropiedad] = useState("")
    const [categoriaPropiedad, setCategoriaPropiedad] = useState("Seleccione una categoria")
    const [latitudPropiedad, setLatitudPropiedad] = useState("")
    const [longitudPropiedad, setLongitudPropiedad] = useState("")
    const [ciudadPropiedad, setCiudadPropiedad] = useState("")
    const [descripcionPropiedad, setDescripcionPropiedad] = useState("")
    const [normasPropiedad, setNormasPropiedad] = useState("")
    const [sysPropiedad, setSySPropiedad] = useState("")
    const [politicasPropiedad, setPoliticasPropiedad] = useState("")

    const [files, setFiles] = useState()
    let optionsCategorias =
        props.categorias.map((categoria) => {
            return(
                <>
                <option>{categoria.titulo}</option>
                </>
            )
        })

    let optionsCiudades =
    props.listaCiudades.map((ciudad) => {
          return(
              <>
              <option>{ciudad.nombre}</option>
              </>
          )
    })

    let nombreAtributos =
        props.caracteristicas.map((caracteristica)=>{
           
            return(
                <>
                    <label className="labelAtributos" name={caracteristica.nombre}><input type="checkbox" value={caracteristica.nombre} onChange={(e)=>e.target.checked} className="checkboxes"></input> {caracteristica.nombre}</label><br/>
                </>
            )
        })

    //FUNCIONES

    const onFileChange = (e) => {
        if(e.target && e.target.files){
            formData.append("files", e.target.files)
        }
    }

    const sendData = (e) =>{
        e.preventDefault()
        formData.append("nombre", nombrePropiedad)
        formData.append("categoria", categoriaPropiedad)
        formData.append("latitud", latitudPropiedad)
        formData.append("longitud", longitudPropiedad)
        formData.append("ciudad", ciudadPropiedad)
        formData.append("descripcion", descripcionPropiedad)
        formData.append("normas", normasPropiedad)
        formData.append("saludSeguridad", sysPropiedad)
        formData.append("politicas", politicasPropiedad)

        console.log(nombrePropiedad, categoriaPropiedad, latitudPropiedad, longitudPropiedad, ciudadPropiedad, descripcionPropiedad, normasPropiedad, sysPropiedad, politicasPropiedad)
        console.log(formData)
    }

    return(
        <>
        <Heading titulo="Administracion"/>
        <h2 className="h2CreacionProducto">Crear propiedad</h2>
        <div className="contenedor">
            <div className="divFormulario">
                <form className="formularioCreacionProducto">
                    <div className="primerBloqueInputs">
                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" name="nombreProducto">Nombre de la propiedad</label>
                            <input className="inputCreacionProducto" type="text" onChange={(e)=>setNombrePropiedad(e.target.value)} required></input>
                        </div>

                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" name="categoriaPropiedad">Categoria</label>
                            <select className="inputCreacionProducto" value={categoriaPropiedad} onChange={(e)=>setCategoriaPropiedad(e.target.value)} required>
                                <option selected>Seleccione una categoria</option>
                                {optionsCategorias}
                            </select>
                        </div>

                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" name="ciudadProducto">Ciudad</label>
                            <select className="inputCreacionProducto" value={ciudadPropiedad} onChange={(e)=>setCiudadPropiedad(e.target.value)} required>
                                <option selected>Seleccione una ciudad</option>
                                {optionsCiudades}
                            </select>
                        </div>

                        <div className="contenedorLabelInput latitudLongitud">
                            <label className="labelCreacionProducto" name="direccionProducto">Latitud</label>
                            <input className="inputCreacionProducto" type="text" required onChange={(e)=>setLatitudPropiedad(e.target.value)}></input>
                        </div>

                        <div className="contenedorLabelInput latitudLongitud">
                            <label className="labelCreacionProducto" name="direccionProducto">Longitud</label>
                            <input className="inputCreacionProducto" type="text" required onChange={(e)=>setLongitudPropiedad(e.target.value)}></input>
                        </div>
                    </div>
                    <div>
                        <label className="labelCreacionProducto" namw="descripcionProducto">Descripcion</label>
                        <textarea className="inputCreacionProducto inputTextarea" onChange={(e)=>setDescripcionPropiedad(e.target.value)} placeholder="Escriba aqui" required></textarea>
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
                                <label className="labelCreacionProducto" name="normasProducto">Descripcion</label>
                                <textarea className="inputCreacionProducto inputTextarea" onChange={(e)=>setNormasPropiedad(e.target.value)} required></textarea>
                            </div>
                            <div>
                                <h4 className="h4CreacionProducto">Salud y seguridad</h4>
                                <label className="labelCreacionProducto" name="seguridadProducto">Descripcion</label>
                                <textarea className="inputCreacionProducto inputTextarea" onChange={(e)=>setSySPropiedad(e.target.value)} required></textarea>
                            </div>
                            <div>
                                <h4 className="h4CreacionProducto">Politicas de cancelacion</h4>
                                <label className="labelCreacionProducto" name="politicasProducto">Descripcion</label>
                                <textarea className="inputCreacionProducto inputTextarea" onChange={(e)=>setPoliticasPropiedad(e.target.value)} required></textarea>
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
                        <p>
                            {files}
                        </p>
                    </div>
                    <div className="contenedorBoton">
                    <button className="cardBtn botonCreacionProducto" onClick={sendData}>Crear Producto</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default CreacionProducto;