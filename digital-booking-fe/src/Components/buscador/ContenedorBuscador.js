import Buscador from "./Buscador.js";

function ContenedorBuscador(props) {
    return ( 
        <>
        <div className="contenedorBusc"> 
        <h2 className="titleBusc">Busca ofertas en casas, cabañas y mucho más</h2>
        <Buscador />
        </div>
        </>
     );
}

export default ContenedorBuscador;