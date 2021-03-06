import React, { useState, useEffect, useContext} from "react";
import Heading from "../Detalle/Heading";
import "./creacionProducto.scoped.css";
import ContextUser from "../Contexts/ContextUser";
import {BsFillPlusSquareFill} from "react-icons/bs";
import {RiDeleteBin5Fill} from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function CreacionProductoParalelo(props){
    //VARIABLES

    let formData = new FormData();

    const endpointPostProducto = "http://localhost:8080/api/productos/";
    const [nombrePropiedad, setNombrePropiedad] = useState("")
    const [categoriaPropiedad, setCategoriaPropiedad] = useState("Seleccione una categoria")
    const [latitudPropiedad, setLatitudPropiedad] = useState("")
    const [longitudPropiedad, setLongitudPropiedad] = useState("")
    const [ciudadPropiedad, setCiudadPropiedad] = useState("")
    const [descripcionPropiedad, setDescripcionPropiedad] = useState("")
    const [normasPropiedad, setNormasPropiedad] = useState("")
    const [sysPropiedad, setSySPropiedad] = useState("")
    const [cancelacionPropiedad, setCancelacionPropiedad] = useState("")
    const [inputUrl, setInputUrl] = useState([{ url: "" }]);
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
                    <label className="labelAtributos">
                        <input type="checkbox" name={caracteristica.nombre} value={caracteristica.nombre}
                    onChange={(e)=>{
                        if(e.target.checked && (grupoAtributos.indexOf(e.target.name)== -1)){
                            setGrupoAtributos([...grupoAtributos, {nombre: e.target.value, icono: caracteristica.icono}])
                            console.log(grupoAtributos);
                        }else if(e.target.checked == false){
                            grupoAtributos.splice((grupoAtributos.indexOf(e.target.name)), 1)
                            console.log(grupoAtributos)
                            }
                        }} className="checkboxes"></input> {caracteristica.nombre}</label><br/>
                </>
            )
        })

    
    //FUNCIONES

    /*const createObjectAtributos = grupoAtributos.map((atributo)=>
    ({nombre: atributo.nombre, icono: atributo.icono}))*/
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const url = [...inputUrl];
        url[index][name] = value;
        setInputUrl(url);
    };

    const handleRemoveClick = (index) => {
        const url = [...inputUrl];
        url.splice(index, 1);
        setInputUrl(url);
    };

    const handleAddClick = (e) => {
        e.preventDefault();
        setInputUrl([...inputUrl, { url: ""}]);
    };

    const onFileChange = (e) => {
        if(e.target && e.target.files){
            console.log(e.target.files)
            formData.append("imagenes", e.target.files[0])
            console.log("hols")
        }
    }

    const fillData = () =>{
        producto = 
            {
                nombre: nombrePropiedad,
                categoria: {
                    id: categoriaPropiedad
                },
                ciudad: {
                    id: ciudadPropiedad
                },
                latitud: latitudPropiedad,
                longitud: longitudPropiedad,
                descripcion: descripcionPropiedad,
                puntaje: 7,
                caracteristicas: grupoAtributos,
                norma: normasPropiedad,
                saludSeguridad: sysPropiedad,
                cancelacion: cancelacionPropiedad
            }
        formData.append("producto", JSON.stringify(producto))
    }

    async function sendData(e){
        e.preventDefault()
        await fillData()
        console.log(producto)
        const response = await fetch(endpointPostProducto, {
        "method": "POST",
        "body": formData,
        "headers": {
            "Authorization": "Bearer " + contextUser,
            /*"accept": "application/json",*/
            //"boundary": "ebf9f03029db4c2799ae16b5428b06bd"
        }
        })
        if(response.status === 200){
            //const data = await response.json();
            console.log("Producto creado")
        }
    }



    return(
        <>
        <Heading titulo="Administracion"/>
        <h2 className="h2CreacionProducto">Crear propiedad</h2>
        <div className="contenedorPadreProducto">
            <div className="divContenedorFormularioProducto">
                <form onSubmit={sendData} className="formularioCreacionProducto">
                    <div className="primerBloqueInputs">
                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" name="nombreProducto">Nombre de la propiedad</label>
                            <input className="inputCreacionProducto claseEncontrada" type="text" onChange={(e)=>setNombrePropiedad(e.target.value)} required></input>
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
                                <textarea className="inputCreacionProducto inputTextarea" onChange={(e)=>setCancelacionPropiedad(e.target.value)} required></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="h3CreacionProducto">Cargar imagenes</h3>
                        <div className="contenedorSeccionAtributos contenedorSeccionImagenes">
                            {inputUrl.map((x, i) => {
                                return(
                                <>
                                <div className="divInputAndButtons">
                                    <div className="contenedorInputImagenes">
                                        <input id="url" name="url" className="inputCreacionProducto" type="text" placeholder="Escriba la URL" 
                                        onChange={e => handleInputChange(e, i)} value= {x.url} required ></input>    
                                    </div>
                                    {inputUrl.length !== 1 && <div onClick={() => handleRemoveClick(i)} className="addFilesIcon">
                                        <RiDeleteBin5Fill size="2.9rem" fill="#1DBEB4"/></div>}
                                    {inputUrl.length - 1 === i && <div onClick={handleAddClick} className="addFilesIcon">
                                        <BsFillPlusSquareFill size="2.7rem" fill="#1DBEB4"/></div>}
                                </div>
                                </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="contenedorBoton">
                    <button className="cardBtn botonCreacionProducto" >Crear Producto</button>
                    </div>
                    <div style={{ marginTop: 20 }}>{JSON.stringify(inputUrl)}</div>
                </form>
            </div>
        </div>
        </>
    )
}

export default CreacionProductoParalelo;