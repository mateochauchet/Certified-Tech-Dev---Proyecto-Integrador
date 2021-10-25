import CardsList from './CardsList';
import data from './data.json';
import './cardsContainer.css';
import './card.css';

function CardsContainer () {
    return(
        <div className="cardsContainer">
            <CardsList list={data}/>
        </div>
    )
}

export default CardsContainer;