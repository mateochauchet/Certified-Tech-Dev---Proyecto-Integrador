import './ContainerFechas.css'
import Button from '../../Buscador/Button';
import Fecha from './Fecha';
function ContainerFechas() {
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
                        <Button classN="secondary" name="Iniciar Reserva" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContainerFechas;