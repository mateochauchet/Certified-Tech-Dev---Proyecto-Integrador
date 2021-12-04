import CardsList from './CardsList';
import './cardsContainer.css';
import './card.css';


function CardsContainer(props) {
    return (
        <div className="Container-Recomendaciones">
            <h2 className="titleRecomendaciones">Recomendaciones</h2>
            <div className="cardsContainer">

                <CardsList list={props.list} filtro={props.filtro} filtro2={props.filtro2} />
                
            </div>
        </div>

    )
}

export default CardsContainer;