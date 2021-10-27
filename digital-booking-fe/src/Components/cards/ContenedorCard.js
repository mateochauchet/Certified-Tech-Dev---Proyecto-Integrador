import './card1.css'
import Card from './Card.js'
import categorias from './categorias.json'

function ContenedorCard() {
    return ( 
        <>
        <h2 className="titleCont">Buscar por tipo de Alojamiento</h2>
        <section className="contenedorCard"> 
        
          {categorias.map( (c, i) =>
          < Card
          key={i}
          titulo={c.titulo}
          img={c.img}
          cantidad={c.cantidad}
         />
        )}
        </section>
        </>
     );
}

export default ContenedorCard;