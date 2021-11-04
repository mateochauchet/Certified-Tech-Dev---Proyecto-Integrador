import data from '../Cards_list/data.json'
import Heading from './Heading';
import { useParams } from 'react-router';
import Galeria from './Galeria';
import Descripcion from './Descripcion';
import Caracteristicas from './Caracteristicas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";



function ContainerDetalle() {
    const { idLink } = useParams()
    console.log(idLink)
    let match = data.filter(producto => producto.id === idLink)
    let product = match[0]


    return (
        <>
            < Heading
                titulo={product.title}
                categoria={product.categoria}
                location={product.locationFull}
                puntaje={product.puntaje}/>

            < Galeria item={product.imagenes} />

            < Descripcion 
            titulo={product.description.titulo} 
            line1={product.description.text1}
            line2={product.description.text2}/>

            <Caracteristicas list={product.caracteristicas}/>

        </>

    );
}

export default ContainerDetalle;