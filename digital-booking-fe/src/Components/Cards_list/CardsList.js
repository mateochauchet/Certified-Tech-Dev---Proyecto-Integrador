import Card from './Card';

function CardsList(props) {
    return (
      <>
      {props.filtro === "todos" ? 
      props.list.map((house) => <Card key={house.id} house={house} />): 
      props.list.filter(house => house.categoria.titulo === props.filtro || house.ciudad.nombre === props.filtro && house.id != props.filtro2)
      .map((house) => <Card key={house.id} house={house} />)
      }
      </>
    )
  }
  
  export default CardsList;