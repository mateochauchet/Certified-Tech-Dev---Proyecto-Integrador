import './card1.css'
import Card from './Card.js'

function ContenedorCard(props) {
    return ( 
        <>
        <h2 className="titleCont">Buscar por tipo de Alojamiento</h2>
        <section className="contenedorCard"> 
        
          {props.categorias.map( (c, i) =>
          < Card
          key={i}
          tituloCategoria={c.titulo}
          img={c.imagen}
          cambiarCategoria={props.cambiarCategoria}
         />
        )}
        </section>
        </>
     );
}

export default ContenedorCard;