import Card from './Card';

function CardsList(props) {
    return (
      <>
      {props.filtro === "todos" ? 
      props.list.map((house) => <Card key={house.id} house={house} />): 
      props.list.filter(house => house.categoriaTitulo === props.filtro|| house.city === props.filtro)
      .map((house) => <Card key={house.id} house={house} />)
      }
      </>
    )
  }
  
  export default CardsList;