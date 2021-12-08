import './SkeletonReserva.css'

function SkeletonReserva() {
    return (
        <>
            <div className="skeleton Sheading">
                <div className="Stext-heading">
                    <div className="skeleton text-categoria"></div>
                    <div className="skeleton text-titulo"></div>
                </div>
            </div>

            <div className="skeleton text-tituloR"></div>
            <div className="ScontainerReserva">

                <div className="skeleton SformularioReserva">
                    <div className="ScontenedorLabelInput">
                        <div className="skeleton text-categoriaR"></div>
                        <div className="Sinput-Reserva"></div>
                    </div>
                    <div className="ScontenedorLabelInput">
                        <div className="skeleton text-categoriaR"></div>
                        <div className="Sinput-Reserva"></div>
                    </div>
                </div>
            </div>

            <div className="Scontenedor">
                <div className="skeleton calendario"></div>
                

            </div>
            <div className="skeleton text-categoriaR2"></div>

        </>
    );
}

export default SkeletonReserva;