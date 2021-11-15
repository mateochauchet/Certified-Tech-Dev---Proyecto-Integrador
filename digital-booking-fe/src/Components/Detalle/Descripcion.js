import './Descripcion.css'

function Descripcion({titulo, line1, line2}) {
    return ( 
        <div className="containerDescripcion">
            <h1>{titulo} </h1>
            <p>{line1}</p><br />
            <p>{line2}</p>
        </div>
     );
}

export default Descripcion;