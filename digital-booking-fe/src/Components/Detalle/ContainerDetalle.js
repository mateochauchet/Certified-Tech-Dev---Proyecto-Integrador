
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
import SekeletonDetalle from '../../Skeleton/SkeletonDetalle';


function ContainerDetalle() {
    const [productIdList, setProductIdList] = useState(null);

    const { id } = useParams()
    console.log(id)


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
                        ubicacion: resJson[0].ciudad.nombre + ' - ' +resJson[0].ciudad.pais,
                        location: resJson[0].nombre + ', ' + resJson[0].ciudad.nombre + ' - ' +resJson[0].ciudad.pais,
                        puntaje: resJson[0].puntaje,
                        imagenes: resJson[0].imagenes,
                       tituloDescripcion: resJson[0].titulo_descripcion,
                        descripcion: resJson[0].descripcion,
                        longitud: resJson[0].longitud,
                        latitud: resJson[0].latitud,
                        norma: resJson[0].norma,
                        saludSeguridad: resJson[0].saludSeguridad,
                        cancelacion: resJson[0].cancelacion,
                        caracteristicas: resJson[0].caracteristicas
                    }
                    setProductIdList(houseData);
                }
            })
        return () => ismounted = false;
    }, []);


    return (
        <>

            {productIdList ? (
                <>
                    < Heading
                        titulo={productIdList.titulo}
                        categoria={productIdList.categoria} />
                    <Heading2
                        location={productIdList.ubicacion}
                        puntaje={productIdList.puntaje} />

                    < Galeria item={
                        (productIdList.imagenes).map((value) => (
                        { original: value.imagen, thumbnail: value.imagen }))
                        }
                    />

                    < Descripcion
                        titulo={productIdList.tituloDescripcion}
                        line1={productIdList.descripcion}
                    />

                    <Caracteristicas list={productIdList.caracteristicas} />
                    <ContainerFechas id={productIdList.id} />

                    <ContainerMapa
                        location={productIdList.location}
                        lng={productIdList.longitud}
                        lat={productIdList.latitud}
                         />

                    <PoliticsContainer
                        normas={productIdList.norma}
                        saludSeguridad={productIdList.saludSeguridad}
                        cancelacion={productIdList.cancelacion} />
                </>


            ) : <SekeletonDetalle />
            }




        </>

    );
}

export default ContainerDetalle;