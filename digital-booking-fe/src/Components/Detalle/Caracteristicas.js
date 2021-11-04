import './Caracteristicas.css'


function Caracteristicas({list}) {
    return ( 
        <>
        <div className="containerCaracteristicas">
            <h1>Qué ofrece este lugar?</h1>
            <br /><hr />
            <div className="items">
                <ul type="none">
                    {list.map((c, i) => <li key={i} >{c.nombre}</li>)}
                </ul>    
            </div>
        </div>
        </>
     );
}

export default Caracteristicas;