import './ContainerFechas.css'


import Fecha from './Fecha';

function ContainerFechas(props) {
    function handler() {
        console.log('hola')
    }
    return (
        
        <>
            <div className="cont-fechas">
                <h1 className="fechas">Fechas disponibles</h1>
                <div className="cont-calendar">
                    <div className="calendar">
                        <Fecha />
                    </div>
                    <div className="fechas-text">
                        <p>Agregá tus fechas de viaje para obtener precios exactos</p>
                        <button className="principal" onClick={handler} >Inicia Reserva </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContainerFechas;