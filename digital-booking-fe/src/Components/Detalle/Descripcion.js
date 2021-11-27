import './Descripcion.css'

function Descripcion({titulo, line1}) {
    return ( 
        <div className="containerDescripcion">
            <h1>{titulo} </h1>
            <p>{line1}</p><br />
            
        </div>
     );
}

export default Descripcion;