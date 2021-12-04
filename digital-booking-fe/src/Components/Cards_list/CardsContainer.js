import CardsList from './CardsList';
import './cardsContainer.css';
import './card.css';
import Card from './Card';

function CardsContainer(props) {

    return (
        <div className="Container-Recomendaciones">
            <h2 className="titleRecomendaciones">{props.tituloComponente}</h2>
            <div className="cardsContainer">

                <CardsList list={props.list} filtro={props.filtro} filtro2={props.filtro2} />
                
            </div>
        </div>

    )
}

export default CardsContainer;