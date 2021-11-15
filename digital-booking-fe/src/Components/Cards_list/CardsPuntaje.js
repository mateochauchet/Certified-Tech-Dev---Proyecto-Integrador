import './cardsPuntaje.css'
import { RatingView } from 'react-simple-star-rating'


function CardsPuntaje({ puntaje, style, stars }) {
    let resultado = { number: 0, puntajeTexto:""}
    
    if (puntaje >= 9) { resultado = {number:5, puntajeTexto : "Excelente"} }
    else if (puntaje >= 8) {resultado = {number:4, puntajeTexto : "Muy Bueno"} }
    else if (puntaje >= 6) {resultado = {number:3, puntajeTexto : "Bueno"} }
    else if (puntaje >= 4) {resultado = {number:2, puntajeTexto : "Regular"} }
    else if (puntaje >= 2) {resultado = {number:1, puntajeTexto : "Malo"} }
    else if (puntaje >= 0) {resultado = {number:0, puntajeTexto : "Malo"} }

    return (
        <div className={style}>
            <div className="cardsPuntajeNum">
                {puntaje}
                
            </div>
            <div>
                <p className="cardsPuntajeText">{resultado.puntajeTexto}</p>
            <div className={stars}>
                <RatingView size="15" ratingValue={resultado.number} />
            </div>
            </div>
            
        </div>

    );
}

export default CardsPuntaje;