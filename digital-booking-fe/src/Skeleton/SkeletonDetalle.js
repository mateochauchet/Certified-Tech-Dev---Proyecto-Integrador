import './SkeletonDetalle.css'

function SekeletonDetalle() {
    return (
        <>
            <div className="skeleton Sheading">
                <div className="Stext-heading">
                    <div class="skeleton text-categoria"></div>
                    <div class="skeleton text-titulo"></div>
                </div>
            </div>

            <div className="skeleton Sheading2 heading2">
                <div className="text-heading2">
                    <div class="skeleton text-titulo"></div>
                </div>
                <div class="contenedor">
                    <div class="contenedor-text">                       
                    </div>
                    <div class="skeleton ScardsPuntaje"></div>
                </div>
            </div>
            
            <div className="skeleton2 Simage-gallery-slide">
                <div className="skeleton simagen1"></div>
                <div className="skeleton simagen2"></div>
                <div className="skeleton simagen3"></div>
                <div className="skeleton simagen4"></div>
                <div className="skeleton simagen5"></div>
            </div>

            <div className="Scontainer">
                <div class="skeleton text-titulo2"></div>
                <div class="skeleton text-categoria2"></div>     
            </div>

            <div className="Scontainer">
                <div class="skeleton text-titulo3"></div>
                <div class="skeleton text-categoria3"></div>   
                <div className="skeleton SSimage-gallery-slide"></div>  
            </div>  
        </>
    );
}

export default SekeletonDetalle;