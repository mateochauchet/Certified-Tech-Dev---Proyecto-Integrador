import CardsList from './CardsList';
import data from './data.json';
import './cardsContainer.css';
import './card.css';

function CardsContainer(props) {
    return (
        <div className="Container-Recomendaciones">
            <h2 className="titleRecomendaciones">Recomendaciones</h2>
            <div className="cardsContainer">

                <CardsList list={data} filtro={props.filtro}/>
            </div>
        </div>

    )
}

export default CardsContainer;