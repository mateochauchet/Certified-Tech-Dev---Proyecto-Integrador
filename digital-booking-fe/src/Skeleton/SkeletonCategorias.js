import './SkeletonCategorias.css'

function SkeletonCategorias (){
    return(
        <>
            <h2 className="skeleton sH2"></h2>
            <div className="sContenedorCard">
                <div className="skeleton sCards"></div>
                <div className="skeleton sCards"></div>
                <div className="skeleton sCards"></div>
                <div className="skeleton sCards"></div>
            </div>
        </>
    )
}

export default SkeletonCategorias;