import './SkeletonReserva.css'

function SkeletonReserva() {
    return (
        <>
            <div className="skeleton Sheading">
                <div className="Stext-heading">
                    <div class="skeleton text-categoria"></div>
                    <div class="skeleton text-titulo"></div>
                </div>
            </div>

            <div class="skeleton text-tituloR"></div>
            <div className="containerReserva">
                    
                    <div className="skeleton SformularioReserva">
                        <div className="contenedorLabelInput">
                            <div class="text-categoriaR"></div>
                            <div className="input-Reserva"></div>
                        </div>
                        <div className="contenedorLabelInput">
                            <div class="text-categoriaR"></div>
                            <div className="input-Reserva"></div>
                        </div>


                    </div>
                

            </div>



        </>
    );
}

export default SkeletonReserva;