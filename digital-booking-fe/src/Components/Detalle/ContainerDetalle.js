import data from '../Cards_list/data.json'
import Heading from './Heading';
import { useParams } from 'react-router';

function ContainerDetalle() {
    const {idLink} = useParams()
    console.log(idLink)
    const match = data.filter(producto => producto.id === idLink)
    

    return ( 
        <>
        < Heading 
        titulo ={match[0].title}
        categoria ={match[0].categoria}
        location ={match[0].locationFull}
        puntaje ={match[0].puntaje} 
        />
    

        </>

     );
}

export default ContainerDetalle;