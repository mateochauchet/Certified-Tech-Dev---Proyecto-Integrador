import Card from './Card';

function CardsList(props) {
    return (
      props.list.map((house) => <Card key={house.id} house={house} />)

    );
  }
  
  export default CardsList;