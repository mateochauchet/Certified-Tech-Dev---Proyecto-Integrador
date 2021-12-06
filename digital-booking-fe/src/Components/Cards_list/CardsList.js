import Card from './Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import ErrorMessage from "./ErrorMessage";


function CardsList(props) {
    let listaFiltrada = props.list.filter(house => house.categoria.titulo === props.filtro || house.ciudad.nombre === props.filtro && house.id != props.filtro2)


    return (
      
      
      
      <>
      {props.filtro === "todos" ? 
      props.list.map((house) => <Card key={house.id} house={house} />) : 
      
      listaFiltrada.length === 0 ? 
      <ErrorMessage/> :
      listaFiltrada.map((house) => <Card key={house.id} house={house} />)

      }
      </>
    )
  }
  
  export default CardsList;