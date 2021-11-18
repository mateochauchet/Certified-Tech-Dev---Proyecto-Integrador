import FechaReserva from "./FechaReserva";
import './ContainerCalendario.css'

function ContainerCalendario() {
    return (
        <>
            <div className="container-calendario">
                <div className="calendario">
                    <FechaReserva />
                </div>

                
            </div>
        </>
    );
}

export default ContainerCalendario;