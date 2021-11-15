import './card1.css'
import Card from './Card.js'
import categorias from './categorias.json'

function ContenedorCard(props) {
    return ( 
        <>
        <h2 className="titleCont">Buscar por tipo de Alojamiento</h2>
        <section className="contenedorCard"> 
        
          {categorias.map( (c, i) =>
          < Card
          key={i}
          tituloCategoria={c.categoria}
          img={c.img}
          cantidad={c.cantidad}
          cambiarCategoria={props.cambiarCategoria}
         />
        )}
        </section>
        </>
     );
}

export default ContenedorCard;