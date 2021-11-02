import data from '../Cards_list/data.json'
import Heading from './Heading';

function ContainerDetalle() {
    return ( 
        <>
        < Heading 
        titulo ={data[0].title}
        categoria ={data[0].categoria}
        location ={data[0].locationFull}
        puntaje ={data[0].puntaje} 
        />
    

        </>

     );
}

export default ContainerDetalle;