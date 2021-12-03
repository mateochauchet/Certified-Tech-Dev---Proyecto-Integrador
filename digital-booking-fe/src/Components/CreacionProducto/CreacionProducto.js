import React, { useState, useEffect, useContext} from "react";
import Heading from "../Detalle/Heading";
import "./creacionProducto.scoped.css";
import BloqueImagenes  from "./BloqueImagenes";



function CreacionProducto(props){
    //VARIABLES
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
                    <label className="labelAtributos" name={caracteristica.nombre}><input type="checkbox" value={caracteristica.nombre} className="checkboxes"></input> {caracteristica.nombre}</label><br/>
                </>
            )
        })

    const [values, setValues] = useState({});
    const [selectedFields, setSelectedFields] = useState([]);

    //FUNCIONES

    function handleChange() {
        
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
                            <input className="inputCreacionProducto" type="text" onChange={handleChange} required></input>
                        </div>

                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" name="categoriaPropiedad">Categoria</label>
                            <select className="inputCreacionProducto" required>
                                <option selected onChange={handleChange}>Seleccione una categoria</option>
                                {optionsCategorias}
                            </select>
                        </div>

                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" name="direccionProducto">Direccion</label>
                            <input className="inputCreacionProducto" type="email" required onChange={handleChange}></input>
                        </div>

                        <div className="contenedorLabelInput">
                            <label className="labelCreacionProducto" name="ciudadProducto">Ciudad</label>
                            <select className="inputCreacionProducto" required>
                                <option selected onChange={handleChange}>Seleccione una ciudad</option>
                                {optionsCiudades}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="labelCreacionProducto" namw="descripcionProducto">Descripcion</label>
                        <textarea className="inputCreacionProducto inputTextarea" placeholder="Escriba aqui" required onChange={handleChange}></textarea>
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
                                <textarea className="inputCreacionProducto inputTextarea" required onChange={handleChange}></textarea>
                            </div>
                            <div>
                                <h4 className="h4CreacionProducto">Salud y seguridad</h4>
                                <label className="labelCreacionProducto" name="seguridadProducto">Descripcion</label>
                                <textarea className="inputCreacionProducto inputTextarea" required onChange={handleChange}></textarea>
                            </div>
                            <div>
                                <h4 className="h4CreacionProducto">Politicas de cancelacion</h4>
                                <label className="labelCreacionProducto" name="politicasProducto">Descripcion</label>
                                <textarea className="inputCreacionProducto inputTextarea" required onChange={handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="h3CreacionProducto">Cargar imagenes</h3>
                        <BloqueImagenes/>
                    </div>
                    <div className="contenedorBoton">
                    <input className="cardBtn botonCreacionProducto" type="submit" value="Crear Producto"/>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default CreacionProducto;