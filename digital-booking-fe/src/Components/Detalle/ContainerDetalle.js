import data from '../Cards_list/data.json'
import Heading from './Heading';
import Heading2 from './Heading2'
import { useState, useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom';
import Galeria from './Galeria';
import Descripcion from './Descripcion';
import Caracteristicas from './Caracteristicas';
import ContainerFechas from './Fechas/ContainerFechas';
import PoliticsContainer from '../Politicas/PoliticsContainer';

import ContainerMapa from "./Mapa/ContainerMapa"
import { getProductosById } from '../../service/cardsListService';



function ContainerDetalle() {
    const [productIdList, setProductIdList] = useState(null);

    const { id } = useParams()
    console.log(id)
    let match = data.filter(producto => producto.id === id)
    let product = match[0]


    useEffect(() => {
        let ismounted = true;
        getProductosById(id)
            .then((resJson) => {
                if (ismounted) {
                    console.log(resJson)
                    const houseData = {
                        id: resJson[0].id,
                        titulo: resJson[0].nombre,
                        categoria: resJson[0].categoria.titulo,
                        ubicacion: resJson[0].ciudad.nombre,
                        puntaje: resJson[0].puntaje,
                        imagenes: resJson[0].imagenes,
                        descripcion: resJson[0].descripcion,
                        caracteristicas: resJson[0].caracteristicas

                    }
                    setProductIdList(houseData);
                }
            })
        return () => ismounted = false;
    }, []);


    return (
        <>
            {console.log(productIdList)}

            {productIdList ? (
                <>
                    < Heading
                        titulo={productIdList.titulo}
                        categoria={productIdList.categoria}/>
                    <Heading2    
                        location={productIdList.ubicacion}
                        puntaje={productIdList.puntaje} />

                    < Galeria item={product.imagenes} />
                    {console.log(productIdList.imagenes)}
                    < Descripcion
                        titulo={product.description.titulo}
                        line1={productIdList.descripcion}
                    />

                    <Caracteristicas list={productIdList.caracteristicas} />
                    <ContainerFechas id={productIdList.id}/>

                    <ContainerMapa
                        location={product.locationFull}
                        lng={product.coordenadas.lng}
                        lat={product.coordenadas.lat}
                        loc={product.description.titulo} />

                    <PoliticsContainer
                        normas={product.politicas.normas}
                        saludSeguridad={product.politicas.saludSeguridad}
                        cancelacion={product.politicas.cancelacion} />

                      
                </>
                

            ) : <h1>Loading...</h1>
            }




        </>

    );
}

export default ContainerDetalle;